"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const reasons = [
  {
    num: "01",
    title: "We Actually Know Your Market",
    text: "We're based in McKinney and work with businesses throughout the North Dallas corridor. That means we understand the local search landscape, who's competing for your customers, and what it actually takes to stand out here.",
  },
  {
    num: "02",
    title: "One Team, One Conversation",
    text: "You shouldn't have to manage five different vendors to grow your business online. We handle SEO, AI, web design, and content together — so everything connects, nothing falls through the cracks, and you always know who to call.",
  },
  {
    num: "03",
    title: "We Follow Through",
    text: "We take real pride in doing what we say we'll do. You'll always know where your project stands, what's been done, and what's coming next. No vague reports. No disappearing acts.",
  },
  {
    num: "04",
    title: "Month to Month — Because It Should Be",
    text: "We don't lock you into long contracts. If we're not delivering results you can see, you shouldn't be paying for them. We'd rather earn your trust every month than hold you to a piece of paper.",
  },
];

const metrics = [
  { num: "$0", suffix: "/setup", label: "No setup fees on core services" },
  { num: "30", suffix: "days", label: "Average time to first visible results" },
  { num: "4", suffix: "in 1", label: "Services under one contract" },
  { num: "100", suffix: "%", label: "Transparent monthly reporting" },
];

export default function WhySection() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const eyebrowRef = useReveal();
  const titleRef = useReveal();
  const w0 = useReveal(); const w1 = useReveal(); const w2 = useReveal(); const w3 = useReveal();
  const itemRefs = [w0, w1, w2, w3];
  const delays = ["", "reveal-delay-1", "reveal-delay-2", "reveal-delay-3"];
  const boxRef = useReveal();

  return (
    <section id="why" className="section-pad" style={{ background: "#0e0e0e" }}>
      <div ref={eyebrowRef} className="reveal" style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "20px", display: "flex", alignItems: "center", gap: "16px" }}>
        <span style={{ width: "32px", height: "1px", background: "#C9A84C", display: "inline-block", flexShrink: 0 }} />
        Why Clarion
      </div>

      <div
        className="why-grid"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center", marginTop: "80px" }}
      >
        <div>
          <h2 ref={titleRef} className="reveal reveal-delay-1" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(36px, 4.5vw, 68px)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.5px", color: "#F5F1E8" }}>
            A Different Kind
            <br />
            of <em style={{ fontStyle: "italic", color: "#C9A84C" }}>Partnership.</em>
          </h2>

          <div style={{ marginTop: "48px" }}>
            {reasons.map((item, i) => (
              <div
                key={item.num}
                ref={itemRefs[i]}
                className={`reveal ${delays[i]}`}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  borderBottom: "1px solid rgba(201,168,76,0.25)",
                  borderTop: i === 0 ? "1px solid rgba(201,168,76,0.25)" : "none",
                  padding: "32px 0",
                  paddingLeft: hoveredIdx === i ? "8px" : "0",
                  display: "flex",
                  gap: "24px",
                  alignItems: "flex-start",
                  cursor: "default",
                  transition: "padding 0.2s",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "20px",
                    color: hoveredIdx === i ? "#C9A84C" : "rgba(201,168,76,0.25)",
                    lineHeight: 1,
                    flexShrink: 0,
                    paddingTop: "4px",
                    transition: "color 0.2s",
                  }}
                >
                  {item.num}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "22px",
                      fontWeight: 400,
                      marginBottom: "8px",
                      color: hoveredIdx === i ? "#E2C97E" : "#F5F1E8",
                      transition: "color 0.2s",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#9E9A92", lineHeight: 1.8 }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div ref={boxRef} className="reveal reveal-delay-2">
          <div
            style={{
              background: "#161616",
              border: "1px solid rgba(201,168,76,0.25)",
              padding: "48px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "200px",
                height: "200px",
                background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)",
              }}
            />
            <div style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "32px" }}>
              By the Numbers
            </div>
            {metrics.map((m, i) => (
              <div key={m.label}>
                <div style={{ marginBottom: i < metrics.length - 1 ? "40px" : "0" }}>
                  <div style={{ fontFamily: "var(--font-bebas)", fontSize: "64px", color: "#F5F1E8", lineHeight: 1, letterSpacing: "2px" }}>
                    {m.num}<span style={{ color: "#C9A84C" }}>{m.suffix}</span>
                  </div>
                  <div style={{ fontSize: "13px", color: "#9E9A92", marginTop: "8px", letterSpacing: "1px" }}>{m.label}</div>
                </div>
                {i < metrics.length - 1 && (
                  <div style={{ height: "1px", background: "rgba(201,168,76,0.25)", margin: "32px 0" }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
