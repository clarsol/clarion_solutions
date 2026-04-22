"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "Discovery Call",
    desc: "We start with a free 30-minute call — no pitch, no pressure. We want to understand your business, your market, your goals, and where you're currently losing ground. Most clients leave the call with a clearer picture of their situation than they had going in.",
    detail: "30 minutes · Free · No commitment required",
  },
  {
    num: "02",
    title: "Strategy & Audit",
    desc: "After the call, we dig in. We audit your Google Business Profile, your rankings, your website, your lead flow, and your top competitors. We map every gap between where you are and where you should be — and we build a clear plan to close it.",
    detail: "Delivered within 3–5 business days",
  },
  {
    num: "03",
    title: "Build & Deploy",
    desc: "Once you're ready to move, we build fast. AI systems are typically live within two weeks. SEO foundations and website builds follow a clear timeline we set and stick to. You don't have to manage the process — we do.",
    detail: "AI live in ~2 weeks · SEO foundation in 30 days",
  },
  {
    num: "04",
    title: "Grow & Report",
    desc: "Every month you get a plain-English report that shows exactly what happened — rankings moved, leads captured, content published, AI performance. No vanity metrics, no confusion. Just the numbers that matter and what we're doing next.",
    detail: "Monthly reporting · Ongoing optimization",
  },
];

export default function HowItWorksContent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main style={{ background: "#080808", paddingTop: "72px" }}>

      {/* Hero */}
      <section style={{ padding: "80px 5% 100px", borderBottom: "1px solid rgba(201,168,76,0.15)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 60% at 70% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "800px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", letterSpacing: "1px", color: "#9E9A92", marginBottom: "48px" }}>
            <Link href="/" style={{ color: "#9E9A92", textDecoration: "none" }} className="hover-gold">Home</Link>
            <span style={{ color: "rgba(201,168,76,0.4)" }}>→</span>
            <span style={{ color: "#C9A84C" }}>How It Works</span>
          </div>
          <div style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "24px", display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ width: "32px", height: "1px", background: "#C9A84C", display: "inline-block", flexShrink: 0 }} />
            The Process
          </div>
          <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(48px, 6vw, 88px)", fontWeight: 300, lineHeight: 1.05, color: "#F5F1E8", marginBottom: "24px", letterSpacing: "-0.5px" }}>
            Simple Process.
            <br />
            <em style={{ fontStyle: "italic", color: "#C9A84C" }}>Real Results.</em>
          </h1>
          <p style={{ fontSize: "17px", color: "#9E9A92", lineHeight: 1.7, maxWidth: "560px" }}>
            From first call to measurable results — here&apos;s exactly how we work and what you can expect at every stage.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section style={{ padding: "100px 5%" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr",
                gap: "40px",
                paddingBottom: i < steps.length - 1 ? "64px" : "0",
                borderBottom: i < steps.length - 1 ? "1px solid rgba(201,168,76,0.15)" : "none",
                marginBottom: i < steps.length - 1 ? "64px" : "0",
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(16px)",
                transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
              }}
              className="how-it-works-step"
            >
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "64px", height: "64px", border: "1px solid rgba(201,168,76,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-bebas)", fontSize: "22px", color: "#C9A84C", letterSpacing: "2px", flexShrink: 0 }}>
                  {step.num}
                </div>
                {i < steps.length - 1 && (
                  <div style={{ width: "1px", flex: 1, background: "linear-gradient(180deg, rgba(201,168,76,0.3), transparent)" }} />
                )}
              </div>
              <div style={{ paddingTop: "12px" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 400, color: "#F5F1E8", marginBottom: "16px", lineHeight: 1.15 }}>
                  {step.title}
                </h2>
                <p style={{ fontSize: "15px", color: "#9E9A92", lineHeight: 1.8, marginBottom: "16px" }}>
                  {step.desc}
                </p>
                <div style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(201,168,76,0.6)" }}>
                  {step.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 5%", background: "#0e0e0e", borderTop: "1px solid rgba(201,168,76,0.15)", textAlign: "center" }}>
        <div style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "24px" }}>
          Ready to Start?
        </div>
        <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 300, color: "#F5F1E8", lineHeight: 1.1, marginBottom: "24px" }}>
          Step One Is a
          <br />
          <em style={{ color: "#C9A84C", fontStyle: "italic" }}>Free Call.</em>
        </h2>
        <p style={{ fontSize: "16px", color: "#9E9A92", lineHeight: 1.8, maxWidth: "480px", margin: "0 auto 40px" }}>
          30 minutes. No pitch. We&apos;ll tell you honestly what we see and whether we can help.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("openContactModal"))}
            className="btn-primary-link"
          >
            Book a Free Call
          </button>
          <Link href="/services" className="btn-ghost-link">
            View Services
          </Link>
        </div>
      </section>
    </main>
  );
}
