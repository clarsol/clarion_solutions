"use client";

import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";
import ChatWidget from "@/components/ChatWidget";

const SERVICES_PREVIEW = [
  "Ceramic Coating",
  "Paint Protection Film",
  "Window Tint",
  "Vinyl Wrap",
  "Paint Correction",
  "Detailing",
];

export default function BookingChatDemo() {
  const eyebrowRef = useReveal();
  const titleRef = useReveal();
  const subRef = useReveal();
  const chipsRef = useReveal();
  const chatRef = useReveal();

  return (
    <section className="section-pad" style={{ background: "#080808" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px, 6vw, 100px)", alignItems: "start" }} className="demo-grid">
        {/* Left column */}
        <div>
          <div
            ref={eyebrowRef}
            className="reveal"
            style={{ fontSize: "13px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "20px", display: "flex", alignItems: "center", gap: "16px" }}
          >
            <span style={{ width: "32px", height: "1px", background: "#C9A84C", display: "inline-block", flexShrink: 0 }} />
            Try It Live
          </div>

          <h2
            ref={titleRef}
            className="reveal reveal-delay-1"
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(34px, 4vw, 60px)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.5px", color: "#F5F1E8", marginBottom: "24px" }}
          >
            See the AI Work
            <br />
            <em style={{ fontStyle: "italic", color: "#C9A84C" }}>In Real Time.</em>
          </h2>

          <p
            ref={subRef}
            className="reveal reveal-delay-2"
            style={{ fontSize: "17px", color: "#9E9A92", lineHeight: 1.8, marginBottom: "36px", maxWidth: "440px" }}
          >
            This is a live simulation of the missed call recovery system loaded with a real auto shop's data. Type naturally — the AI detects what service you want and books an appointment.
          </p>

          <div ref={chipsRef} className="reveal reveal-delay-3">
            <div style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "#9E9A92", marginBottom: "14px" }}>
              Services the AI handles
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {SERVICES_PREVIEW.map((s) => (
                <span
                  key={s}
                  style={{
                    padding: "6px 14px",
                    border: "1px solid rgba(201,168,76,0.25)",
                    color: "#9E9A92",
                    fontSize: "13px",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>

            <div style={{ marginTop: "40px", padding: "20px 24px", border: "1px solid rgba(201,168,76,0.15)", background: "rgba(201,168,76,0.03)" }}>
              <div style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "14px" }}>
                Loaded shop
              </div>
              <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "20px", color: "#F5F1E8", fontWeight: 600, marginBottom: "6px" }}>
                Apex Auto Detailing
              </div>
              <div style={{ fontSize: "13px", color: "#9E9A92", lineHeight: 1.8 }}>
                123 Commerce Dr, McKinney TX<br />
                Mon–Sat · 9AM–6PM
              </div>
            </div>
          </div>
        </div>

        {/* Right column — Chat */}
        <div ref={chatRef} className="reveal reveal-delay-2" style={{ position: "sticky", top: "24px" }}>
          <ChatWidget />
          <p style={{ marginTop: "14px", fontSize: "12px", color: "#9E9A92", letterSpacing: "0.5px", textAlign: "center" }}>
            Scripted demo — no live backend · Try: "I need PPF on my front end"
          </p>
          <div style={{ marginTop: "16px", textAlign: "center" }}>
            <Link
              href="/demo"
              style={{
                fontSize: "13px",
                color: "#9E9A92",
                textDecoration: "none",
                letterSpacing: "0.5px",
                borderBottom: "1px solid rgba(255,255,255,0.12)",
                paddingBottom: "1px",
                transition: "color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#C9A84C"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#9E9A92"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
            >
              Try it with your own business →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
