"use client";

import { useReveal } from "@/hooks/useReveal";

const steps = [
  {
    num: "01",
    title: "Discovery Call",
    desc: "We learn your business, your market, and your goals. 30 minutes, no fluff — just a real conversation about what's possible.",
  },
  {
    num: "02",
    title: "Strategy & Audit",
    desc: "We audit your online presence, map your competitors, and build a clear plan showing exactly where you're losing revenue and how to fix it.",
  },
  {
    num: "03",
    title: "Build & Deploy",
    desc: "We build your system and deploy it fast. Most clients see their first results within 30 days.",
  },
];

export default function ProcessSection() {
  const eyebrowRef = useReveal();
  const titleRef = useReveal();
  const s0 = useReveal();
  const s1 = useReveal();
  const s2 = useReveal();
  const stepRefs = [s0, s1, s2];
  const delays = ["", "reveal-delay-1", "reveal-delay-2"];
  const btnRef = useReveal();

  return (
    <section id="process" className="section-pad">
      <div
        ref={eyebrowRef}
        className="reveal"
        style={{
          fontSize: "11px",
          letterSpacing: "4px",
          textTransform: "uppercase",
          color: "#C9A84C",
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <span style={{ width: "32px", height: "1px", background: "#C9A84C", display: "inline-block", flexShrink: 0 }} />
        How It Works
      </div>

      <h2
        ref={titleRef}
        className="reveal reveal-delay-1"
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "clamp(36px, 4.5vw, 68px)",
          fontWeight: 300,
          lineHeight: 1.1,
          letterSpacing: "-0.5px",
          color: "#F5F1E8",
        }}
      >
        Simple Process.
        <br />
        <em style={{ fontStyle: "italic", color: "#C9A84C" }}>Real Results.</em>
      </h2>

      <div
        className="process-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 0,
          marginTop: "80px",
          position: "relative",
        }}
      >
        {/* Connecting line — desktop only */}
        <div
          className="process-line"
          style={{
            position: "absolute",
            top: "32px",
            left: "10%",
            right: "10%",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.25) 20%, rgba(201,168,76,0.25) 80%, transparent)",
          }}
        />

        {steps.map((step, i) => (
          <div
            key={step.num}
            ref={stepRefs[i]}
            className={`reveal ${delays[i]}`}
            style={{ padding: "0 32px", paddingTop: "80px", textAlign: "center", position: "relative" }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "64px",
                height: "64px",
                border: "1px solid rgba(201,168,76,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-bebas)",
                fontSize: "24px",
                color: "#C9A84C",
                background: "#080808",
                letterSpacing: "2px",
              }}
            >
              {step.num}
            </div>
            <h3
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "20px",
                fontWeight: 400,
                marginBottom: "12px",
                color: "#F5F1E8",
              }}
            >
              {step.title}
            </h3>
            <p style={{ fontSize: "13px", color: "#9E9A92", lineHeight: 1.8 }}>
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      {/* See How It Works button */}
      <div
        ref={btnRef}
        className="reveal reveal-delay-3"
        style={{ display: "flex", justifyContent: "center", marginTop: "64px" }}
      >
        <a
          href="#"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            padding: "16px 40px",
            fontFamily: "var(--font-dm-sans)",
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#F5F1E8",
            border: "1px solid rgba(245,241,232,0.2)",
            background: "transparent",
            textDecoration: "none",
            transition: "border-color 0.25s, color 0.25s",
            minHeight: "44px",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = "#C9A84C";
            e.currentTarget.style.color = "#C9A84C";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = "rgba(245,241,232,0.2)";
            e.currentTarget.style.color = "#F5F1E8";
          }}
        >
          See How It Works <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
