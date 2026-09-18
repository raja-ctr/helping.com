/* ==========================================================================
   HELPING.COM — demo session authentication
   --------------------------------------------------------------------------
   This is a static front-end prototype with no real server, so this file
   SIMULATES session-based auth entirely in the browser, using two storage
   areas to stand in for the two halves of a real session system:

     "SERVER SIDE" (would live in a database / Redis / server memory)
        localStorage["helping_server_users"]     → registered accounts
        localStorage["helping_server_sessions"]  → active session records
        localStorage["helping_server_requests"]  → submitted service requests

     "CLIENT SIDE" (would live in an httpOnly, Secure, SameSite cookie)
        sessionStorage["helping_session_id"]     → opaque session token
        (sessionStorage clears when the tab closes, which mirrors a
         non-persistent session cookie; ticking "remember me" copies the
         same token into localStorage instead, mirroring a cookie with a
         long Max-Age)

   The real flow this is emulating, on an actual backend (e.g. Node/Express):
     1. POST /login checks the password hash against the DB.
     2. On success, the server creates a session record (in Redis/DB/memory)
        keyed by a random, unguessable session id.
     3. The server sets that id in an httpOnly, Secure, SameSite=Lax cookie.
        The browser can't read or tamper with it — only the server can.
     4. Every later request automatically includes the cookie. The server
        looks up the session id in its store to find out who's logged in,
        instead of trusting anything the client claims.
     5. Logout deletes the server-side session record, so the cookie
        becomes useless even if it's replayed.

   Passwords here are NOT hashed — this is a visual/UX prototype only and
   must never be used as-is with real user data.
   ========================================================================== */

const DB_USERS = "helping_server_users";
const DB_SESSIONS = "helping_server_sessions";
const DB_REQUESTS = "helping_server_requests";
const CLIENT_SESSION_KEY = "helping_session_id";
const SESSION_TTL_MS = 1000 * 60 * 60 * 12; // 12 hour session lifetime

function readDB(key){ try{ return JSON.parse(localStorage.getItem(key)) || {}; }catch(e){ return {}; } }
function writeDB(key, val){ localStorage.setItem(key, JSON.stringify(val)); }

function readUsers(){ const d = readDB(DB_USERS); return Array.isArray(d) ? d : (d.list || []); }
function writeUsers(list){ localStorage.setItem(DB_USERS, JSON.stringify(list)); }

function randomId(len=32){
  const bytes = new Uint8Array(len);
  (window.crypto || window.msCrypto).getRandomValues(bytes);
  return Array.from(bytes, b => b.toString(16).padStart(2,"0")).join("");
}

/* ---- "server" user table ---- */
function findUserByEmail(email){
  return readUsers().find(u => u.email.toLowerCase() === String(email).toLowerCase());
}

function registerUser({ name, email, phone, password, role }){
  const users = readUsers();
  if (findUserByEmail(email)) throw new Error("An account with this email already exists.");
  const user = {
    id: "u_" + randomId(8),
    name, email, phone,
    passwordDemo: password, // demo only — a real backend stores a salted hash, never plaintext
    role: role || "customer",
    createdAt: Date.now(),
  };
  users.push(user);
  writeUsers(users);
  return user;
}

/* ---- "server" session store ---- */
function createServerSession(userId){
  const sessions = readDB(DB_SESSIONS);
  const sid = randomId(32);
  sessions[sid] = { userId, createdAt: Date.now(), expiresAt: Date.now() + SESSION_TTL_MS };
  writeDB(DB_SESSIONS, sessions);
  return sid;
}

function destroyServerSession(sid){
  const sessions = readDB(DB_SESSIONS);
  delete sessions[sid];
  writeDB(DB_SESSIONS, sessions);
}

function validateServerSession(sid){
  if (!sid) return null;
  const sessions = readDB(DB_SESSIONS);
  const record = sessions[sid];
  if (!record) return null; // no such session — equivalent to an invalid/expired cookie
  if (Date.now() > record.expiresAt){ destroyServerSession(sid); return null; }
  return record;
}

/* ---- public API used by pages ---- */
const Session = {
  login({ email, password, remember }){
    const user = findUserByEmail(email);
    if (!user || user.passwordDemo !== password){
      throw new Error("Incorrect email or password.");
    }
    const sid = createServerSession(user.id);
    // stand-in for the browser storing the Set-Cookie session id
    sessionStorage.setItem(CLIENT_SESSION_KEY, sid);
    if (remember) localStorage.setItem(CLIENT_SESSION_KEY, sid);
    return user;
  },

  register(fields){
    const user = registerUser(fields);
    const sid = createServerSession(user.id);
    sessionStorage.setItem(CLIENT_SESSION_KEY, sid);
    return user;
  },

  logout(){
    const sid = sessionStorage.getItem(CLIENT_SESSION_KEY) || localStorage.getItem(CLIENT_SESSION_KEY);
    if (sid) destroyServerSession(sid);
    sessionStorage.removeItem(CLIENT_SESSION_KEY);
    localStorage.removeItem(CLIENT_SESSION_KEY);
  },

  currentUser(){
    const sid = sessionStorage.getItem(CLIENT_SESSION_KEY) || localStorage.getItem(CLIENT_SESSION_KEY);
    const record = validateServerSession(sid);
    if (!record) return null;
    return readUsers().find(u => u.id === record.userId) || null;
  },

  isAuthed(){ return !!Session.currentUser(); },

  requireAuth(redirectTo){
    if (!Session.isAuthed()){
      window.location.href = redirectTo || "login.html";
      return null;
    }
    return Session.currentUser();
  },

  updateUser(userId, patch){
    const users = readUsers();
    const idx = users.findIndex(u => u.id === userId);
    if (idx === -1) return null;
    users[idx] = { ...users[idx], ...patch };
    writeUsers(users);
    return users[idx];
  },

  /* demo service-request records, scoped by logged-in user */
  addRequest(userId, request){
    const all = readDB(DB_REQUESTS);
    const list = all[userId] || [];
    list.unshift({ id: "r_" + randomId(6), createdAt: Date.now(), status: "Requested", ...request });
    all[userId] = list;
    writeDB(DB_REQUESTS, all);
  },

  getRequests(userId){
    const all = readDB(DB_REQUESTS);
    return all[userId] || [];
  },
};
