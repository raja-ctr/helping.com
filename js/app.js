/* ==========================================================================
   HELPING.COM — shared UI behaviour used across every page
   ========================================================================== */

const ICONS = {
  bolt: '<path d="M12 2 4 14h6l-1 8 9-13h-6l1-7z"/>',
  bike: '<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17 10 8h4l3 5m-7-5-2 5h9"/>',
  car: '<path d="M4 16 5.5 9h13L20 16"/><rect x="3" y="16" width="18" height="4" rx="1"/><circle cx="7.5" cy="20" r="1.4"/><circle cx="16.5" cy="20" r="1.4"/>',
  wrench: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2 2.6-2.6z"/>',
  fuel: '<path d="M4 21V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v15M4 21h10m3-13 2 2v6a1.5 1.5 0 0 0 3 0v-4l-2-2"/><path d="M4 11h8"/>',
  truck: '<rect x="2" y="8" width="12" height="9"/><path d="M14 11h4l3 3v3h-7z"/><circle cx="6.5" cy="19" r="1.6"/><circle cx="17.5" cy="19" r="1.6"/>',
  cart: '<circle cx="9" cy="20" r="1.3"/><circle cx="18" cy="20" r="1.3"/><path d="M2 3h2l2.6 12.6a2 2 0 0 0 2 1.6h8a2 2 0 0 0 2-1.6L21 7H6"/>',
  sparkle: '<path d="M12 3 13.6 9 20 10.6 13.6 12.2 12 18.5 10.4 12.2 4 10.6 10.4 9z"/>',
  home: '<path d="M4 11 12 4l8 7v8a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z"/>',
  snow: '<path d="M12 2v20M4.9 6.3 19.1 17.7M19.1 6.3 4.9 17.7"/>',
  tv: '<rect x="3" y="5" width="18" height="12" rx="1.5"/><path d="M8 21h8M12 17v4"/>',
  fridge: '<rect x="6" y="2" width="12" height="20" rx="1.5"/><path d="M6 10h12M9 5.5v2M9 13v3"/>',
  phone: '<rect x="7" y="2" width="10" height="20" rx="1.8"/><path d="M11 18h2"/>',
  laptop: '<rect x="4" y="4" width="16" height="10" rx="1.2"/><path d="M2 18h20l-1.5-3h-17z"/>',
  pin: '<path d="M12 22s7-7.4 7-12.5A7 7 0 0 0 5 9.5C5 14.6 12 22 12 22z"/><circle cx="12" cy="9.5" r="2.4"/>',
  star: '<path d="M12 2.5l2.9 6 6.6.8-4.8 4.6 1.2 6.5-5.9-3.2-5.9 3.2 1.2-6.5-4.8-4.6 6.6-.8z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  check: '<path d="M4 12l5 5L20 6"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
};

function icon(name, size=20){
  const p = ICONS[name] || ICONS.pin;
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
}

function starLine(rating){
  const full = Math.round(rating);
  return `<span class="stars" aria-hidden="true">${"★".repeat(full)}${"☆".repeat(5-full)}</span>`;
}

function toast(message, type=""){
  let root = document.getElementById("toast-root");
  if (!root){ root = document.createElement("div"); root.id = "toast-root"; document.body.appendChild(root); }
  const el = document.createElement("div");
  el.className = "toast" + (type ? " " + type : "");
  el.textContent = message;
  root.appendChild(el);
  setTimeout(() => el.remove(), 3200);
}

function initNavState(){
  const authArea = document.querySelectorAll("[data-nav-auth]");
  const user = (typeof Session !== "undefined") ? Session.currentUser() : null;
  authArea.forEach(el => {
    el.innerHTML = user
      ? `<a href="account.html" class="icon-btn" title="${user.name}">${icon("user",18)}</a>`
      : `<a href="login.html" class="btn btn-navy btn-sm">Log in</a>`;
  });

  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links){
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("is-open");
      links.style.cssText = open
        ? "display:flex;flex-direction:column;position:absolute;top:68px;left:0;right:0;background:#fff;padding:12px 24px;border-bottom:1px solid var(--border);gap:4px;"
        : "";
      toggle.innerHTML = icon(open ? "close" : "menu", 22);
    });
  }
}

function initLocationPill(){
  document.querySelectorAll("[data-location-pill]").forEach(pill => {
    pill.addEventListener("click", () => {
      if (!navigator.geolocation){
        toast("Location isn't available in this browser — using demo location.");
        pill.querySelector("span").textContent = "Sector 4, Demo City";
        return;
      }
      pill.querySelector("span").textContent = "Locating…";
      navigator.geolocation.getCurrentPosition(
        () => { pill.querySelector("span").textContent = "Current location"; toast("Using your current location."); },
        () => { pill.querySelector("span").textContent = "Sector 4, Demo City"; toast("Location permission denied — using a demo location instead."); },
        { timeout: 5000 }
      );
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initNavState();
  initLocationPill();
});
