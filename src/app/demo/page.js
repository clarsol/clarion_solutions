"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

// ── Vertical definitions ──────────────────────────────────────────────────
const VERTICALS = [
  {
    id: "auto-shop",
    icon: "🔧",
    name: "Auto Shop / Mechanic",
    desc: "General repair, oil changes, diagnostics & maintenance",
    shop: {
      name: "Precision Auto Service",
      abbr: "PAS",
      address: "847 Industrial Blvd, McKinney TX",
      hours: "Mon–Fri 7:30AM–6PM · Sat 8AM–3PM",
    },
    services: [
      {
        name: "Oil Change",
        price: "$49",
        keywords: ["oil", "oil change", "synthetic", "lube", "full synthetic", "conventional"],
        explanation: "We offer conventional, synthetic blend, and full synthetic oil changes with a multi-point inspection included. Most vehicles take 20–30 minutes.",
      },
      {
        name: "Brake Service",
        price: "$149",
        keywords: ["brake", "brakes", "rotors", "pads", "braking", "stopping", "squeaking", "grinding"],
        explanation: "Brake service includes inspection, pad replacement, rotor resurfacing or replacement, and brake fluid check. We carry OEM-spec parts for all major makes.",
      },
      {
        name: "Engine Diagnostic",
        price: "$89",
        keywords: ["diagnostic", "check engine", "engine light", "engine", "code", "cel", "warning light", "scan"],
        explanation: "Our diagnostic scan reads your vehicle's fault codes and helps us pinpoint the root cause. The $89 fee is credited toward any repairs performed same day.",
      },
      {
        name: "Tire Rotation",
        price: "$29",
        keywords: ["tire", "tires", "rotation", "rotate", "alignment", "balance", "wheel"],
        explanation: "Tire rotation extends tire life by evening out wear patterns. We rotate all four tires and check pressure and tread depth at no extra charge.",
      },
      {
        name: "AC Service",
        price: "$129",
        keywords: ["ac", "air conditioning", "cooling", "cool", "freon", "refrigerant", "not cooling", "hot inside"],
        explanation: "AC service includes refrigerant recharge, leak inspection, and compressor check. If your system needs a component replaced, we'll quote it before touching anything.",
      },
      {
        name: "Transmission Service",
        price: "$249",
        keywords: ["transmission", "trans", "gearbox", "shifting", "slipping", "won't shift", "gear"],
        explanation: "Transmission service includes fluid drain and refill, filter replacement where applicable, and a full shift inspection. Recommended every 30,000–60,000 miles.",
      },
      {
        name: "Battery Replacement",
        price: "$139",
        keywords: ["battery", "dead battery", "won't start", "starting", "electrical", "slow start", "jump start"],
        explanation: "We test your battery, charging system, and starter before replacing. Price includes a new battery with 2-year warranty and proper disposal of the old one.",
      },
    ],
  },
  {
    id: "performance",
    icon: "⚡",
    name: "Performance Shop",
    desc: "Tuning, suspension, exhaust & power upgrades",
    shop: {
      name: "Apex Motorsports",
      abbr: "APX",
      address: "2211 Commerce Dr, Frisco TX",
      hours: "Mon–Fri 8AM–6PM · Sat 9AM–4PM",
    },
    services: [
      {
        name: "ECU Tune",
        price: "from $499",
        keywords: ["tune", "ecu", "tuning", "remap", "flash", "performance tune", "stage 1", "stage 2"],
        explanation: "Our ECU tunes are custom-mapped on our in-house dyno — not off-the-shelf files. We tune for your specific mods, fuel, and goals. Stage 1 and Stage 2 available.",
      },
      {
        name: "Suspension Setup",
        price: "from $349",
        keywords: ["suspension", "coilovers", "springs", "shock", "lowering", "stance", "height", "ride height"],
        explanation: "We install and corner-balance coilovers, lowering springs, and adjustable arms. All suspension work ends with a 4-wheel alignment on our Hunter rack.",
      },
      {
        name: "Exhaust Install",
        price: "from $299",
        keywords: ["exhaust", "muffler", "downpipe", "catback", "cat back", "headers", "exhaust note", "loud"],
        explanation: "We install cat-back systems, downpipes, and headers. We have lift space for same-day installs on most vehicles and can source parts or work with what you bring.",
      },
      {
        name: "Intercooler Upgrade",
        price: "from $799",
        keywords: ["intercooler", "boost", "charge pipe", "intercool", "charge cooling", "heat soak"],
        explanation: "Front-mount or top-mount intercooler upgrades drop charge temps and allow for more aggressive tunes. Includes all piping and couplers. Dyno session recommended after.",
      },
      {
        name: "Dyno Tune",
        price: "$399",
        keywords: ["dyno", "dyno tune", "horsepower", "hp", "power", "torque", "pull"],
        explanation: "Full custom tune on our Mustang all-wheel dyno. Includes multiple pulls, AFR tuning, and a power sheet. Bring your car — leave with more.",
      },
      {
        name: "Cold Air Intake",
        price: "from $249",
        keywords: ["intake", "cold air", "air intake", "cai", "filter", "induction"],
        explanation: "Cold air intakes improve airflow and throttle response. We carry top brands and can install same-day. Pairs well with an ECU tune for real gains.",
      },
      {
        name: "Boost Controller Install",
        price: "from $399",
        keywords: ["boost controller", "wastegate", "bov", "blow off", "boost level", "overboost", "boost solenoid"],
        explanation: "Electronic boost controllers allow precise boost management and can unlock more power from your turbo setup. We set target boost levels and verify on the dyno.",
      },
    ],
  },
  {
    id: "detail",
    icon: "🎨",
    name: "Wrap / Tint / Detail",
    desc: "Ceramic coating, PPF, window tint & vinyl wrap",
    shop: {
      name: "ProWrap Studios",
      abbr: "PWS",
      address: "3410 N Central Expy, Plano TX",
      hours: "Mon–Sat 9AM–6PM",
    },
    services: [
      {
        name: "Ceramic Coating",
        price: "from $499",
        keywords: ["ceramic", "coat", "coating", "nano", "hydrophobic", "glass coat", "ceramic coat"],
        explanation: "Ceramic coating bonds to your paint, creating a hard, hydrophobic layer that repels water, resists UV damage, and makes cleaning effortless. Protection lasts 2–5 years.",
      },
      {
        name: "Paint Protection Film",
        price: "from $399",
        keywords: ["ppf", "paint protection", "protection film", "clear bra", "clear wrap", "rock chip", "stone chip", "clear film", "paint protect", "film on", "front end"],
        explanation: "PPF is a clear thermoplastic film that absorbs rock chips and scratches before they reach the paint. Nearly invisible, self-healing, and ideal for hoods, bumpers, and mirrors.",
      },
      {
        name: "Window Tint",
        price: "from $199",
        keywords: ["tint", "window tint", "tinting", "shade", "dark windows", "window film", "darkening", "tinted"],
        explanation: "Window tint blocks UV radiation, reduces heat and glare, and improves privacy. We carry carbon and ceramic film options within Texas legal limits.",
      },
      {
        name: "Vinyl Wrap",
        price: "from $799",
        keywords: ["vinyl", "wrap", "vinyl wrap", "color change", "matte", "satin", "chrome", "wrapping", "color wrap", "wrapped"],
        explanation: "Full or partial vinyl wrap changes your vehicle's color or finish (matte, gloss, satin, chrome) without permanent paint modification. Fully reversible.",
      },
      {
        name: "Paint Correction",
        price: "from $299",
        keywords: ["paint correction", "correction", "buff", "polish", "polishing", "swirl", "scratch", "buffer", "compound", "swirl marks", "scratches"],
        explanation: "Multi-stage machine polishing removes swirl marks, light scratches, water spots, and oxidation from the clear coat — restoring depth and gloss before any coating.",
      },
      {
        name: "Ultimate Armor Package",
        price: "Custom quote",
        keywords: ["ultimate", "armor", "full package", "everything", "all in", "premium", "full protection", "full coverage", "all of it", "combo"],
        explanation: "Ultimate Armor combines PPF on high-impact zones, full ceramic coating, and window tint — custom-quoted based on your vehicle and coverage preferences.",
      },
      {
        name: "Detailing",
        price: "from $149",
        keywords: ["detail", "detailing", "full detail", "wash", "interior detail", "exterior detail", "clean", "car wash"],
        explanation: "Detailing includes interior vacuum and wipe-down, exterior hand wash, clay bar, tire dressing, and glass cleaning. Add-ons: decontamination, wax, or odor elimination.",
      },
    ],
  },
  {
    id: "hvac",
    icon: "❄️",
    name: "HVAC",
    desc: "AC, heating, system installs & maintenance plans",
    shop: {
      name: "CoolAir HVAC",
      abbr: "CAH",
      address: "511 Trade Center Dr, McKinney TX",
      hours: "Mon–Fri 7AM–7PM · Sat 8AM–2PM · 24/7 Emergency",
    },
    services: [
      {
        name: "AC Tune-Up",
        price: "$149",
        keywords: ["tune up", "service", "maintenance", "annual", "check up", "ac service", "seasonal", "spring"],
        explanation: "Annual AC tune-up includes refrigerant level check, coil cleaning, drain flush, thermostat calibration, and a full system inspection. Best done in early spring.",
      },
      {
        name: "Heater Inspection",
        price: "$99",
        keywords: ["heat", "heater", "furnace", "heating", "warm", "not heating", "cold air from heat", "no heat"],
        explanation: "Heater inspection covers heat exchanger, ignitor, gas valve, blower motor, and safety controls. We'll identify the problem and give you a repair quote on the spot.",
      },
      {
        name: "AC Repair",
        price: "from $199",
        keywords: ["repair", "broken", "not cooling", "not working", "fix", "warm air", "ac broke", "stopped working", "emergency"],
        explanation: "Same-day AC repair available. We diagnose first, then give you a clear quote before any work begins. Common repairs: refrigerant leak, capacitor, contactor, or fan motor.",
      },
      {
        name: "New System Installation",
        price: "from $3,500",
        keywords: ["new system", "replace", "installation", "install", "new unit", "hvac system", "new ac", "new heat", "full replacement"],
        explanation: "We install Carrier, Trane, and Lennox systems with proper load calculation for your home. All installs include permit, 10-year parts warranty, and a 1-year labor guarantee.",
      },
      {
        name: "Duct Cleaning",
        price: "$299",
        keywords: ["duct", "ducts", "cleaning", "air quality", "filter", "vents", "dusty", "dirty air", "allergen"],
        explanation: "Professional duct cleaning removes dust, debris, and allergens from your duct system with commercial-grade negative air equipment. Improves air quality and system efficiency.",
      },
      {
        name: "Mini-Split Install",
        price: "from $1,200",
        keywords: ["mini split", "minisplit", "ductless", "split system", "garage ac", "room ac", "zone"],
        explanation: "Ductless mini-splits are perfect for garages, additions, or rooms that won't cool evenly. We handle all electrical and refrigerant work — turnkey installation.",
      },
      {
        name: "Maintenance Plan",
        price: "$199/year",
        keywords: ["plan", "maintenance plan", "annual plan", "service plan", "membership", "contract", "recurring"],
        explanation: "Our maintenance plan covers two tune-ups per year (AC + heating), priority scheduling, 15% off repairs, and no emergency service fees. Covers up to two systems.",
      },
    ],
  },
  {
    id: "barber",
    icon: "✂️",
    name: "Barber / Salon",
    desc: "Haircuts, fades, color, beard work & styling",
    shop: {
      name: "The Line Barbershop",
      abbr: "TLB",
      address: "220 N Tennessee St, McKinney TX",
      hours: "Mon–Sat 9AM–7PM · Sun 10AM–4PM",
    },
    services: [
      {
        name: "Haircut",
        price: "$35",
        keywords: ["haircut", "cut", "trim", "hair", "style", "get a cut", "need a cut"],
        explanation: "Classic haircut includes consultation, shampoo, cut, and style. We take our time — no rushed cuts here. Walk-ins welcome, appointments recommended on weekends.",
      },
      {
        name: "Fade",
        price: "$40",
        keywords: ["fade", "taper", "skin fade", "high fade", "low fade", "mid fade", "bald fade", "drop fade"],
        explanation: "We cut every type of fade — skin, low, mid, high, and drop. Tell us your guard lengths and we'll execute it clean. A line-up is always included.",
      },
      {
        name: "Beard Trim",
        price: "$20",
        keywords: ["beard", "trim", "shape up", "line up", "goatee", "beard line", "mustache", "facial hair"],
        explanation: "Beard trim includes shaping, edging, and hot towel finish. We can match your beard to your haircut length or handle it as a standalone service.",
      },
      {
        name: "Hot Towel Shave",
        price: "$55",
        keywords: ["shave", "hot towel", "straight razor", "full shave", "clean shave", "razor shave"],
        explanation: "Our hot towel shave uses a straight razor for an incredibly close shave. Includes pre-shave oil, hot towel open, blade work, cold towel close, and aftershave balm.",
      },
      {
        name: "Color Service",
        price: "from $65",
        keywords: ["color", "dye", "highlight", "bleach", "toner", "gray coverage", "grey", "coloring"],
        explanation: "We do men's color, gray coverage, highlights, and toners. Book a consultation for custom color work — pricing depends on length and complexity.",
      },
      {
        name: "Kid's Cut",
        price: "$25",
        keywords: ["kid", "child", "children", "boy cut", "young", "son", "little one", "toddler"],
        explanation: "Kid's cuts for ages 2–12. We're patient and fast — we know how to work with wiggly kids. Price includes a clean line-up and lollipop on the way out.",
      },
      {
        name: "Cut & Beard Combo",
        price: "$55",
        keywords: ["combo", "package", "cut and beard", "everything", "full service", "cut and shave", "both"],
        explanation: "Haircut plus beard trim at a bundled price. Best value for regulars who want the full look in one visit. Add a hot towel finish for $10 more.",
      },
    ],
  },
  {
    id: "contractor",
    icon: "🏗️",
    name: "Contractor / Home Services",
    desc: "Fencing, decks, gutters, painting & power washing",
    shop: {
      name: "Summit Home Services",
      abbr: "SHS",
      address: "McKinney, TX · Mobile Service",
      hours: "Mon–Fri 7AM–6PM · Sat 8AM–2PM",
    },
    services: [
      {
        name: "Fence Installation",
        price: "from $8/linear ft",
        keywords: ["fence", "fencing", "gate", "privacy fence", "wood fence", "chain link", "cedar", "iron fence"],
        explanation: "We build wood, cedar, chain link, and ornamental iron fences. Price includes materials, post holes, and installation. Free estimate — we measure same week.",
      },
      {
        name: "Deck Build",
        price: "from $5,000",
        keywords: ["deck", "patio", "outdoor", "pergola", "porch", "composite", "trex", "deck build"],
        explanation: "Custom decks in pressure-treated lumber, composite, or hardwood. We handle permits, framing, decking, and railing. Pergola and cover add-ons available.",
      },
      {
        name: "Gutter Installation",
        price: "from $400",
        keywords: ["gutter", "gutters", "drain", "downspout", "fascia", "gutter guard", "leaf guard", "rain"],
        explanation: "Seamless gutters custom-formed on-site in aluminum or copper. Includes downspouts, end caps, and proper pitch. Gutter guards available as an add-on.",
      },
      {
        name: "Window Replacement",
        price: "from $300/window",
        keywords: ["window", "windows", "replacement", "glass", "new windows", "broken window", "drafty", "foggy glass"],
        explanation: "We install vinyl, fiberglass, and wood replacement windows. All windows are energy-star rated. We handle permits and disposal of old units.",
      },
      {
        name: "Interior / Exterior Paint",
        price: "from $2/sq ft",
        keywords: ["paint", "painting", "interior", "exterior paint", "walls", "repaint", "color", "house paint", "rooms"],
        explanation: "Full interior and exterior painting with premium paints. We handle prep, patching, primer, and two finish coats. Color consultations available at no charge.",
      },
      {
        name: "Landscaping",
        price: "Custom quote",
        keywords: ["landscape", "landscaping", "yard", "lawn", "garden", "sod", "mulch", "plants", "flower beds"],
        explanation: "We design and install landscape beds, lay sod, plant trees and shrubs, and install edging and mulch. Free design consultation and estimate.",
      },
      {
        name: "Power Washing",
        price: "from $199",
        keywords: ["power wash", "pressure wash", "cleaning", "wash house", "driveway clean", "soft wash", "patio clean"],
        explanation: "Soft wash and pressure washing for driveways, siding, fences, decks, and patios. We match pressure to surface — no damage, just clean.",
      },
    ],
  },
];

// ── Vertical selector card ────────────────────────────────────────────────
function VerticalCard({ vertical, onSelect }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={() => onSelect(vertical)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#1a1a1a" : "#161616",
        border: `1px solid ${hovered ? "#C9A84C" : "rgba(201,168,76,0.2)"}`,
        padding: "32px 28px",
        textAlign: "left",
        cursor: "pointer",
        transition: "border-color 0.2s, background 0.2s",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "#C9A84C",
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.25s",
        }}
      />
      <span style={{ fontSize: "28px", lineHeight: 1 }}>{vertical.icon}</span>
      <div style={{
        fontFamily: "var(--font-cormorant)",
        fontSize: "20px",
        fontWeight: 600,
        color: hovered ? "#E2C97E" : "#F5F1E8",
        lineHeight: 1.2,
        transition: "color 0.2s",
      }}>
        {vertical.name}
      </div>
      <div style={{
        fontSize: "13px",
        color: "#9E9A92",
        lineHeight: 1.6,
      }}>
        {vertical.desc}
      </div>
      <div style={{
        marginTop: "6px",
        fontSize: "11px",
        letterSpacing: "1.5px",
        textTransform: "uppercase",
        color: hovered ? "#C9A84C" : "rgba(201,168,76,0.4)",
        transition: "color 0.2s",
      }}>
        Select →
      </div>
    </button>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────
export default function DemoPage() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <Nav />
      <main style={{ background: "#080808", minHeight: "100vh" }}>

        {/* ── Selector screen ── */}
        {!selected && (
          <div style={{ padding: "clamp(100px, 12vw, 160px) 5% clamp(80px, 8vw, 120px)" }}>
            {/* Header */}
            <div style={{ fontSize: "13px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "20px", display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ width: "32px", height: "1px", background: "#C9A84C", display: "inline-block", flexShrink: 0 }} />
              Interactive Demo
            </div>
            <h1 style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(40px, 5.5vw, 80px)",
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.5px",
              color: "#F5F1E8",
              marginBottom: "16px",
            }}>
              Pick Your Industry.
              <br />
              <em style={{ fontStyle: "italic", color: "#C9A84C" }}>See It in Action.</em>
            </h1>
            <p style={{ maxWidth: "520px", fontSize: "17px", color: "#9E9A92", lineHeight: 1.8, marginBottom: "clamp(40px, 6vw, 72px)" }}>
              Select a business type below. We&apos;ll load a fictional shop and drop you straight into a missed call recovery conversation — as the customer.
            </p>

            {/* Grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px",
            }} className="verticals-grid">
              {VERTICALS.map((v) => (
                <VerticalCard key={v.id} vertical={v} onSelect={setSelected} />
              ))}
            </div>
          </div>
        )}

        {/* ── Chat screen ── */}
        {selected && (
          <div style={{ padding: "clamp(100px, 12vw, 140px) 5% clamp(80px, 8vw, 120px)" }}>
            {/* Back link */}
            <button
              onClick={() => setSelected(null)}
              style={{
                background: "none",
                border: "none",
                color: "#9E9A92",
                fontSize: "13px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "48px",
                fontFamily: "var(--font-dm-sans)",
                padding: 0,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#C9A84C"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#9E9A92"; }}
            >
              ← Back to verticals
            </button>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px, 6vw, 80px)", alignItems: "start" }} className="customer-demo-grid">
              {/* Left: context */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                  <span style={{ fontSize: "32px", lineHeight: 1 }}>{selected.icon}</span>
                  <div style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "#C9A84C" }}>
                    {selected.name}
                  </div>
                </div>

                <h2 style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(28px, 3.5vw, 48px)",
                  fontWeight: 300,
                  color: "#F5F1E8",
                  lineHeight: 1.1,
                  marginBottom: "20px",
                }}>
                  Missed Call
                  <br />
                  <em style={{ fontStyle: "italic", color: "#C9A84C" }}>Recovery Demo</em>
                </h2>

                <p style={{ fontSize: "16px", color: "#9E9A92", lineHeight: 1.8, marginBottom: "32px" }}>
                  A customer called {selected.shop.name} — no one picked up. The AI texted back within seconds. You are that customer. Type naturally.
                </p>

                {/* Shop card */}
                <div style={{ padding: "20px 24px", border: "1px solid rgba(201,168,76,0.2)", background: "#161616", marginBottom: "32px" }}>
                  <div style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "12px" }}>
                    Loaded shop
                  </div>
                  <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "18px", color: "#F5F1E8", fontWeight: 600, marginBottom: "4px" }}>
                    {selected.shop.name}
                  </div>
                  <div style={{ fontSize: "13px", color: "#9E9A92", lineHeight: 1.8 }}>
                    {selected.shop.address}<br />
                    {selected.shop.hours}
                  </div>
                </div>

                {/* Try saying */}
                <div style={{ padding: "18px 24px", border: "1px solid rgba(201,168,76,0.12)", background: "rgba(201,168,76,0.03)" }}>
                  <div style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "#9E9A92", marginBottom: "12px" }}>
                    Try saying
                  </div>
                  {selected.services.slice(0, 3).map((svc) => (
                    <div key={svc.name} style={{ fontSize: "13px", color: "#C9A84C", padding: "5px 0", borderBottom: "1px solid rgba(201,168,76,0.08)", fontStyle: "italic" }}>
                      &ldquo;I need {svc.name.toLowerCase()}&rdquo;
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: chat */}
              <div style={{ position: "sticky", top: "24px" }}>
                <ChatWidget key={selected.id} config={{ shop: selected.shop, services: selected.services }} />
                <p style={{ marginTop: "12px", fontSize: "11px", color: "#9E9A92", letterSpacing: "0.5px", textAlign: "center" }}>
                  Scripted demo · no live backend · restart anytime after booking
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
