"use client";

import { useState, useRef, useEffect } from "react";

// ── Default shop (used by homepage BookingChatDemo section) ────────────────
const DEFAULT_SHOP = {
  name: "Apex Auto Detailing",
  abbr: "APX",
  address: "123 Commerce Dr, McKinney TX",
  hours: "Mon–Sat 9AM–6PM",
};

const DEFAULT_SERVICES = [
  {
    name: "Ceramic Coating",
    price: "$499",
    keywords: ["ceramic", "coat", "coating", "nano", "hydrophobic", "glass coat", "ceramic coat"],
    explanation:
      "Ceramic coating is a liquid polymer that bonds to your paint, creating a hard, hydrophobic layer that repels water, resists UV damage, and makes cleaning effortless. Protection lasts 2–5 years.",
  },
  {
    name: "Paint Protection Film",
    price: "$399",
    keywords: ["ppf", "paint protection", "protection film", "clear bra", "clear wrap", "rock chip", "stone chip", "clear film", "paint protect", "film on"],
    explanation:
      "PPF is a clear thermoplastic film applied over your paint that absorbs rock chips, scratches, and road debris before they reach the paint. Nearly invisible and self-heals minor scratches with heat.",
  },
  {
    name: "Window Tint",
    price: "$199",
    keywords: ["tint", "window tint", "tinting", "shade", "dark windows", "window film", "darkening", "tinted"],
    explanation:
      "Window tint blocks UV radiation, reduces heat and glare, and improves privacy. We carry multiple shades all within Texas legal limits (25% VLT front side, 20% rear).",
  },
  {
    name: "Vinyl Wrap",
    price: "$799",
    keywords: ["vinyl", "wrap", "vinyl wrap", "color change", "matte", "satin", "chrome", "wrapping", "color wrap", "wrapped"],
    explanation:
      "Vinyl wrap covers your vehicle in a large-format adhesive film. Change color or finish without permanent paint modification. Fully reversible and protects the original paint underneath.",
  },
  {
    name: "Paint Correction",
    price: "$299",
    keywords: ["paint correction", "correction", "buff", "polish", "polishing", "swirl", "scratch", "buffer", "compound", "compounding", "swirl marks", "scratches"],
    explanation:
      "Paint correction is a multi-stage machine polishing process that removes swirl marks, light scratches, water spots, and oxidation from the clear coat — restoring depth and gloss before any protective coating.",
  },
  {
    name: "Ultimate Armor",
    price: "Custom quote",
    keywords: ["ultimate", "armor", "ultimate armor", "full package", "everything", "all in", "premium", "full protection", "full coverage", "all of it"],
    explanation:
      "Ultimate Armor is our flagship package: PPF on high-impact zones, full ceramic coating, and window tint — custom-quoted based on your vehicle and coverage preferences.",
  },
  {
    name: "Detailing",
    price: "$149",
    keywords: ["detail", "detailing", "full detail", "wash", "interior detail", "exterior detail", "clean my car", "car wash"],
    explanation:
      "Our detailing service includes interior vacuum and wipe-down, exterior hand wash, clay bar treatment, tire dressing, and glass cleaning. Add-ons include paint decontamination or wax.",
  },
];

// ── Slot generation (Mon–Sat, next 5 available days) ──────────────────────
function generateSlots() {
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const times = ["9:00 AM", "11:00 AM", "2:00 PM", "10:00 AM", "3:00 PM"];
  const slots = [];
  const d = new Date();
  d.setDate(d.getDate() + 1);
  while (slots.length < 5) {
    if (d.getDay() !== 0) {
      slots.push(`${dayNames[d.getDay()]}, ${monthNames[d.getMonth()]} ${d.getDate()} — ${times[slots.length]}`);
    }
    d.setDate(d.getDate() + 1);
  }
  return slots;
}

// ── NLP helpers ───────────────────────────────────────────────────────────
function isQuestion(text) {
  const l = text.toLowerCase();
  return (
    l.includes("what is") || l.includes("what's") || l.includes("whats") ||
    l.includes("what are") || l.includes("explain") || l.includes("difference") ||
    l.includes("tell me about") || l.includes("how does") || l.includes("why would") ||
    l.includes("what do you mean")
  );
}

function detectService(text, services) {
  const lower = text.toLowerCase();
  for (const svc of services) {
    if (svc.keywords.some((kw) => lower.includes(kw))) return svc;
  }
  return null;
}

// ── Component ─────────────────────────────────────────────────────────────
export default function ChatWidget({ config }) {
  const shop = config?.shop ?? DEFAULT_SHOP;
  const services = config?.services ?? DEFAULT_SERVICES;

  const SLOTS = generateSlots();

  const INITIAL = [
    {
      id: 0,
      from: "ai",
      text: `Hi! You missed a call from ${shop.name} earlier. We'd still love to help — what service were you interested in?`,
    },
  ];

  const [messages, setMessages] = useState(INITIAL);
  const [input, setInput] = useState("");
  const [phase, setPhase] = useState("waiting"); // waiting | service_detected | done
  const [detected, setDetected] = useState(null);
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  function push(msg) {
    setMessages((prev) => [...prev, { id: Date.now() + Math.random(), ...msg }]);
  }

  function aiReply(text, slots = null, delay = 900) {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      push({ from: "ai", text, slots });
    }, delay);
  }

  function processInput(val) {
    if (phase === "done") return;
    const svc = detectService(val, services);
    const question = isQuestion(val);

    if (svc && question) {
      setDetected(svc);
      aiReply(`${svc.explanation}\n\nWant to book an appointment for ${svc.name} (${svc.price})?`);
      setPhase("waiting");
    } else if (svc) {
      setDetected(svc);
      setPhase("service_detected");
      aiReply(
        `Got it — ${svc.name} starting at ${svc.price}. Here are our next available times:`,
        SLOTS
      );
    } else {
      const names = services.map((s) => s.name).join(", ");
      aiReply(`I want to make sure I get this right — are you looking for ${names}, or something else?`);
    }
  }

  function handleSend() {
    const val = input.trim();
    if (!val || phase === "done") return;
    push({ from: "customer", text: val });
    setInput("");
    processInput(val);
  }

  function selectSlot(slot) {
    if (phase === "done") return;
    push({ from: "customer", text: slot, isSlot: true });
    setPhase("done");
    const svcName = detected?.name || "your service";
    const time = slot.split("—")[1]?.trim() || slot;
    aiReply(
      `You're all set! ${svcName} on ${time} at ${shop.name}. We'll send a confirmation text and a reminder the evening before. See you then!`,
      null,
      1100
    );
  }

  function handleKey(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  function reset() {
    setMessages(INITIAL);
    setPhase("waiting");
    setDetected(null);
    setInput("");
    setTyping(false);
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      height: "520px",
      background: "#161616",
      border: "1px solid rgba(201,168,76,0.25)",
      overflow: "hidden",
    }}>
      {/* Header */}
      <div style={{
        padding: "14px 18px",
        background: "#202020",
        borderBottom: "1px solid rgba(201,168,76,0.15)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexShrink: 0,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            width: "34px", height: "34px",
            background: "rgba(201,168,76,0.12)",
            border: "1px solid rgba(201,168,76,0.35)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--font-bebas)", fontSize: "12px", color: "#C9A84C", letterSpacing: "1px",
            flexShrink: 0,
          }}>
            {shop.abbr}
          </div>
          <div>
            <div style={{ fontSize: "13px", color: "#F5F1E8", fontWeight: 500 }}>{shop.name}</div>
            <div style={{ fontSize: "11px", color: "#4CAF50", display: "flex", alignItems: "center", gap: "5px" }}>
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#4CAF50", display: "inline-block" }} />
              AI Active
            </div>
          </div>
        </div>
        {phase === "done" && (
          <button
            onClick={reset}
            style={{
              fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase",
              color: "#9E9A92", background: "transparent",
              border: "1px solid rgba(255,255,255,0.12)",
              padding: "5px 12px", cursor: "pointer",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            Restart
          </button>
        )}
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: "auto", padding: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
        {messages.map((msg) => (
          <div key={msg.id} style={{ display: "flex", flexDirection: "column", alignItems: msg.from === "ai" ? "flex-start" : "flex-end", gap: "6px" }}>
            <div style={{
              maxWidth: "82%",
              padding: "10px 14px",
              background: msg.isSlot
                ? "rgba(201,168,76,0.18)"
                : msg.from === "ai"
                ? "#202020"
                : "rgba(201,168,76,0.1)",
              border: `1px solid ${msg.from === "ai" ? "rgba(255,255,255,0.06)" : "rgba(201,168,76,0.3)"}`,
              fontSize: "13px",
              lineHeight: 1.7,
              color: msg.from === "ai" ? "#F5F1E8" : "#E2C97E",
              whiteSpace: "pre-line",
              borderRadius: msg.from === "ai" ? "2px 10px 10px 2px" : "10px 2px 2px 10px",
            }}>
              {msg.text}
            </div>

            {msg.slots && phase === "service_detected" && (
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", maxWidth: "82%", width: "100%" }}>
                {msg.slots.map((slot, i) => (
                  <button
                    key={i}
                    onClick={() => selectSlot(slot)}
                    style={{
                      padding: "9px 14px",
                      background: "transparent",
                      border: "1px solid rgba(201,168,76,0.35)",
                      color: "#C9A84C",
                      fontSize: "13px",
                      fontFamily: "var(--font-dm-sans)",
                      cursor: "pointer",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      transition: "background 0.15s, border-color 0.15s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,168,76,0.1)"; e.currentTarget.style.borderColor = "#C9A84C"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.35)"; }}
                  >
                    <span style={{ color: "rgba(201,168,76,0.5)", fontSize: "10px" }}>→</span>
                    {slot}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

        {typing && (
          <div style={{ display: "flex", alignItems: "center", gap: "5px", padding: "10px 14px", background: "#202020", border: "1px solid rgba(255,255,255,0.06)", width: "fit-content", borderRadius: "2px 10px 10px 2px" }}>
            {[0, 1, 2].map((i) => (
              <div key={i} style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#C9A84C", animation: `pulse 1.2s ${i * 0.2}s infinite`, opacity: 0.6 }} />
            ))}
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div style={{
        padding: "12px 16px",
        borderTop: "1px solid rgba(201,168,76,0.15)",
        background: "#0e0e0e",
        display: "flex",
        gap: "10px",
        alignItems: "center",
        flexShrink: 0,
      }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder={phase === "done" ? "Booking confirmed — restart to try again" : "Type your message..."}
          disabled={phase === "done"}
          style={{
            flex: 1,
            background: "#161616",
            border: "1px solid rgba(201,168,76,0.2)",
            color: phase === "done" ? "#9E9A92" : "#F5F1E8",
            padding: "10px 14px",
            fontSize: "13px",
            fontFamily: "var(--font-dm-sans)",
            outline: "none",
          }}
        />
        <button
          onClick={handleSend}
          disabled={!input.trim() || phase === "done"}
          style={{
            padding: "10px 18px",
            background: input.trim() && phase !== "done" ? "#C9A84C" : "rgba(201,168,76,0.15)",
            color: input.trim() && phase !== "done" ? "#080808" : "#9E9A92",
            border: "none",
            cursor: input.trim() && phase !== "done" ? "pointer" : "default",
            fontSize: "13px",
            fontWeight: 500,
            fontFamily: "var(--font-dm-sans)",
            letterSpacing: "1px",
            flexShrink: 0,
            transition: "background 0.2s, color 0.2s",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
