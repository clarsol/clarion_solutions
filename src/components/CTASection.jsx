"use client";

import { useReveal } from "@/hooks/useReveal";

export default function CTASection() {
  const eyebrowRef = useReveal();
  const titleRef = useReveal();
  const subRef = useReveal();
  const actionsRef = useReveal();
  const noteRef = useReveal();

  return (
    <section
      id="contact"
      className="section-pad"
      style={{ background: "#080808", position: "relative", overflow: "hidden", textAlign: "center" }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div ref={eyebrowRef} className="reveal" style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "20px", display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
        Get Started
      </div>

      <h2 ref={titleRef} className="reveal reveal-delay-1" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(42px, 6vw, 90px)", fontWeight: 300, lineHeight: 1.05, letterSpacing: "-1px", marginBottom: "24px", color: "#F5F1E8" }}>
        Ready to Build
        <br />
        Something <em style={{ fontStyle: "italic", color: "#C9A84C" }}>Real?</em>
      </h2>

      <p ref={subRef} className="reveal reveal-delay-2" style={{ color: "#9E9A92", fontSize: "16px", maxWidth: "480px", margin: "0 auto 48px", lineHeight: 1.8 }}>
        Book a free 30-minute strategy call. We&apos;ll take a real look at your online presence, share what we see, and talk through what&apos;s actually possible — no obligation, no pitch deck.
      </p>

      <div ref={actionsRef} className="reveal reveal-delay-3" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
        <a
          href="tel:+12147991868"
          style={{
            background: "#C9A84C",
            color: "#080808",
            padding: "16px 36px",
            fontFamily: "var(--font-dm-sans)",
            fontSize: "13px",
            fontWeight: 500,
            letterSpacing: "2px",
            textTransform: "uppercase",
            textDecoration: "none",
            display: "inline-block",
            transition: "all 0.25s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#E2C97E"; e.currentTarget.style.transform = "translateY(-1px)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "#C9A84C"; e.currentTarget.style.transform = "translateY(0)"; }}
        >
          Call (214) 799-1868
        </a>
        <a
          href="mailto:clarionsolut@gmail.com"
          style={{
            background: "transparent",
            color: "#F5F1E8",
            padding: "16px 36px",
            fontFamily: "var(--font-dm-sans)",
            fontSize: "13px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            border: "1px solid rgba(245,241,232,0.2)",
            textDecoration: "none",
            display: "inline-block",
            transition: "all 0.25s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#F5F1E8"; e.currentTarget.style.transform = "translateY(-1px)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(245,241,232,0.2)"; e.currentTarget.style.transform = "translateY(0)"; }}
        >
          Send an Email
        </a>
      </div>

      <p ref={noteRef} className="reveal reveal-delay-4" style={{ fontSize: "12px", color: "#9E9A92", marginTop: "24px", letterSpacing: "1px" }}>
        No pressure. No pitch deck. Just a real conversation about your business.
      </p>
    </section>
  );
}
