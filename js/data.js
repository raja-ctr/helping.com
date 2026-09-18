/* ==========================================================================
   HELPING.COM — demo data layer
   Everything here is fictional/demo data used to power the prototype in the
   browser. In a real deployment this would come from an API + database.
   ========================================================================== */

const SERVICES = [
  { id: "electrician", name: "Electrician", icon: "bolt", desc: "Wiring, fittings, switchboards & repairs.", nearby: 18 },
  { id: "bike-mechanic", name: "Bike Mechanic", icon: "bike", desc: "Two-wheeler servicing & roadside fixes.", nearby: 12 },
  { id: "car-mechanic", name: "Car Mechanic", icon: "car", desc: "Engine, brake & general car servicing.", nearby: 9 },
  { id: "plumber", name: "Plumber", icon: "wrench", desc: "Leaks, fittings, tanks & pipeline work.", nearby: 21 },
  { id: "fuel-point", name: "Highway Fuel Point", icon: "fuel", desc: "Fuel delivery for stranded vehicles.", nearby: 6 },
  { id: "packers-movers", name: "Packers & Movers", icon: "truck", desc: "Home & office shifting, big or small.", nearby: 7 },
  { id: "grocery", name: "Grocery", icon: "cart", desc: "Local kirana & grocery delivery help.", nearby: 15 },
  { id: "cleaning", name: "Cleaning Services", icon: "sparkle", desc: "Home, kitchen & deep-cleaning crews.", nearby: 14 },
  { id: "room-rentals", name: "Room Rentals", icon: "home", desc: "Verified nearby rooms & PGs.", nearby: 10 },
  { id: "ac-repair", name: "AC Repair", icon: "snow", desc: "Servicing, gas refill & installation.", nearby: 13 },
  { id: "tv-repair", name: "TV Repair", icon: "tv", desc: "Screen, board & display issues.", nearby: 8 },
  { id: "fridge-repair", name: "Fridge Repair", icon: "fridge", desc: "Cooling issues & compressor work.", nearby: 8 },
  { id: "mobile-repair", name: "Mobile Repair", icon: "phone", desc: "Screen, battery & software fixes.", nearby: 19 },
  { id: "laptop-repair", name: "Laptop Repair", icon: "laptop", desc: "Hardware, OS & performance issues.", nearby: 11 },
];

const PROVIDERS = [
  { id:"p1", name:"Raj Electrical Services", service:"electrician", rating:4.8, reviews:126, distance:1.2, price:300, open:true, verified:true, hours:"7:00 AM – 9:00 PM", experience:"6 years", area:"2 km radius", response:"~15 min", img:"linear-gradient(155deg,#F2622E,#D6501F)", tags:["Wiring","Switchboard","Emergency"], about:"Raj Electrical Services has been fixing home and shop electrical issues in the neighbourhood for six years, from switchboard faults to full rewiring." },
  { id:"p2", name:"Kumar Electrical Works", service:"electrician", rating:4.6, reviews:88, distance:2.1, price:350, open:true, verified:true, hours:"8:00 AM – 8:00 PM", experience:"4 years", area:"3 km radius", response:"~25 min", img:"linear-gradient(155deg,#14335C,#0B2140)", tags:["Fan Repair","Wiring"], about:"Kumar Electrical Works focuses on fast-response fan, light and wiring repairs for homes and small shops." },
  { id:"p3", name:"Sharma Electrical Services", service:"electrician", rating:4.5, reviews:64, distance:3.4, price:320, open:false, verified:false, hours:"9:00 AM – 6:00 PM", experience:"3 years", area:"4 km radius", response:"~40 min", img:"linear-gradient(155deg,#8A9AB0,#5C6E86)", tags:["Switchboard","Inverter"], about:"Sharma Electrical Services handles inverter setup, switchboard and general household electrical work." },
  { id:"p4", name:"Kumar Bike Care", service:"bike-mechanic", rating:4.7, reviews:141, distance:0.8, price:150, open:true, verified:true, hours:"6:30 AM – 10:00 PM", experience:"8 years", area:"2 km radius", response:"~10 min", img:"linear-gradient(155deg,#F2622E,#D6501F)", tags:["Puncture","Servicing","Roadside"], about:"Kumar Bike Care is a full-service two-wheeler garage known for quick roadside puncture fixes." },
  { id:"p5", name:"City Bike Point", service:"bike-mechanic", rating:4.3, reviews:52, distance:2.6, price:180, open:true, verified:false, hours:"9:00 AM – 8:00 PM", experience:"5 years", area:"3 km radius", response:"~20 min", img:"linear-gradient(155deg,#14335C,#0B2140)", tags:["Servicing","Oil Change"], about:"City Bike Point offers routine servicing, oil changes and minor repairs for most two-wheeler brands." },
  { id:"p6", name:"Highway Motors", service:"car-mechanic", rating:4.4, reviews:73, distance:2.9, price:500, open:true, verified:true, hours:"8:00 AM – 9:00 PM", experience:"10 years", area:"5 km radius", response:"~30 min", img:"linear-gradient(155deg,#8A9AB0,#5C6E86)", tags:["Engine","Brakes"], about:"Highway Motors has ten years of experience with general car servicing, brakes and engine diagnostics." },
  { id:"p7", name:"Sharma Plumbing Service", service:"plumber", rating:4.6, reviews:97, distance:1.5, price:250, open:true, verified:true, hours:"7:00 AM – 9:00 PM", experience:"7 years", area:"3 km radius", response:"~15 min", img:"linear-gradient(155deg,#F2622E,#D6501F)", tags:["Leak Fix","Tank Cleaning"], about:"Sharma Plumbing Service handles everything from dripping taps to full bathroom pipeline work." },
  { id:"p8", name:"QuickFix Plumbers", service:"plumber", rating:4.2, reviews:41, distance:3.0, price:220, open:false, verified:false, hours:"9:00 AM – 6:00 PM", experience:"3 years", area:"2 km radius", response:"~35 min", img:"linear-gradient(155deg,#14335C,#0B2140)", tags:["Leak Fix"], about:"QuickFix Plumbers is a small local team specialising in fast leak repairs." },
  { id:"p9", name:"Patna Highway Fuel Point", service:"fuel-point", rating:4.5, reviews:34, distance:4.2, price:100, open:true, verified:true, hours:"24 hours", experience:"5 years", area:"Highway stretch", response:"~20 min", img:"linear-gradient(155deg,#F2622E,#D6501F)", tags:["Petrol","Diesel","Roadside"], about:"Patna Highway Fuel Point delivers emergency fuel to stranded vehicles along the highway, day or night." },
  { id:"p10", name:"LocalMove Packers", service:"packers-movers", rating:4.6, reviews:58, distance:3.8, price:1500, open:true, verified:true, hours:"7:00 AM – 8:00 PM", experience:"6 years", area:"City-wide", response:"~2 hrs", img:"linear-gradient(155deg,#14335C,#0B2140)", tags:["Home Shifting","Packing"], about:"LocalMove Packers helps with home and office shifting, from single rooms to full households." },
  { id:"p11", name:"FreshMart Grocery Help", service:"grocery", rating:4.3, reviews:112, distance:0.6, price:0, open:true, verified:true, hours:"6:00 AM – 11:00 PM", experience:"2 years", area:"1.5 km radius", response:"~30 min", img:"linear-gradient(155deg,#F2622E,#D6501F)", tags:["Delivery","Daily Needs"], about:"FreshMart Grocery Help connects you with a nearby kirana store for same-day grocery delivery." },
  { id:"p12", name:"FreshHome Cleaning", service:"cleaning", rating:4.7, reviews:203, distance:1.9, price:400, open:true, verified:true, hours:"7:00 AM – 7:00 PM", experience:"5 years", area:"4 km radius", response:"~1 hr", img:"linear-gradient(155deg,#14335C,#0B2140)", tags:["Deep Clean","Kitchen"], about:"FreshHome Cleaning sends trained crews for one-time deep cleans or regular home cleaning." },
  { id:"p13", name:"Nirmal Room Rentals", service:"room-rentals", rating:4.1, reviews:29, distance:2.4, price:5000, open:true, verified:false, hours:"9:00 AM – 8:00 PM", experience:"4 years", area:"City-wide", response:"~3 hrs", img:"linear-gradient(155deg,#8A9AB0,#5C6E86)", tags:["PG","Single Room"], about:"Nirmal Room Rentals lists verified nearby rooms and PG accommodation for students and workers." },
  { id:"p14", name:"Patna AC Solutions", service:"ac-repair", rating:4.5, reviews:81, distance:2.0, price:350, open:true, verified:true, hours:"8:00 AM – 8:00 PM", experience:"6 years", area:"3 km radius", response:"~25 min", img:"linear-gradient(155deg,#F2622E,#D6501F)", tags:["Gas Refill","Servicing"], about:"Patna AC Solutions handles installation, servicing and gas refills for split and window ACs." },
  { id:"p15", name:"City TV Care", service:"tv-repair", rating:4.2, reviews:37, distance:2.8, price:250, open:false, verified:false, hours:"10:00 AM – 6:00 PM", experience:"4 years", area:"3 km radius", response:"~40 min", img:"linear-gradient(155deg,#14335C,#0B2140)", tags:["Screen","Board Repair"], about:"City TV Care repairs screen and board issues for most major TV brands." },
  { id:"p16", name:"CoolFix Fridge Repair", service:"fridge-repair", rating:4.4, reviews:45, distance:1.7, price:300, open:true, verified:true, hours:"8:00 AM – 8:00 PM", experience:"5 years", area:"3 km radius", response:"~20 min", img:"linear-gradient(155deg,#F2622E,#D6501F)", tags:["Cooling","Compressor"], about:"CoolFix Fridge Repair specialises in cooling faults and compressor replacements." },
  { id:"p17", name:"QuickFix Mobile Repair", service:"mobile-repair", rating:4.6, reviews:164, distance:0.9, price:200, open:true, verified:true, hours:"9:00 AM – 9:00 PM", experience:"5 years", area:"2 km radius", response:"~15 min", img:"linear-gradient(155deg,#14335C,#0B2140)", tags:["Screen","Battery"], about:"QuickFix Mobile Repair fixes screens, batteries and software issues while you wait." },
  { id:"p18", name:"City Laptop Care", service:"laptop-repair", rating:4.3, reviews:52, distance:2.3, price:400, open:true, verified:true, hours:"9:00 AM – 8:00 PM", experience:"6 years", area:"4 km radius", response:"~30 min", img:"linear-gradient(155deg,#F2622E,#D6501F)", tags:["Hardware","OS Issues"], about:"City Laptop Care handles hardware faults, OS reinstalls and performance tune-ups." },
];

const REVIEWS = {
  p1: [
    { user:"Aditi S.", rating:5, text:"Fixed our switchboard fault in twenty minutes. Reasonable pricing and explained the issue clearly." },
    { user:"Manoj T.", rating:4, text:"Came slightly later than the estimate but the wiring work was neat." },
    { user:"Priya K.", rating:5, text:"Second time using them. Reliable and polite." },
  ],
  p4: [
    { user:"Rohit V.", rating:5, text:"Roadside puncture fix within ten minutes of calling. Lifesaver." },
    { user:"Sana A.", rating:4, text:"Good service, slightly busy on weekends." },
  ],
};

function getServiceById(id){ return SERVICES.find(s => s.id === id); }
function getProvidersByService(id){ return PROVIDERS.filter(p => p.service === id); }
function getProviderById(id){ return PROVIDERS.find(p => p.id === id); }
function getReviews(id){ return REVIEWS[id] || []; }
