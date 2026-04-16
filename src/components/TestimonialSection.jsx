"use client";

import { useReveal } from "@/hooks/useReveal";

export default function TestimonialSection() {
  const eyebrowRef = useReveal();
  const wrapRef = useReveal();

  return (
    <section className="section-pad" style={{ background: "#0e0e0e" }}>
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
          justifyContent: "center",
          gap: "16px",
        }}
      >
        What Clients Say
      </div>

      <div
        ref={wrapRef}
        className="reveal"
        style={{
          maxWidth: "800px",
          margin: "80px auto 0",
          textAlign: "center",
        }}
      >
        <div style={{ color: "#C9A84C", fontSize: "14px", letterSpacing: "4px", marginBottom: "16px" }}>
          ★★★★★
        </div>
        <p
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(22px, 3vw, 36px)",
            fontWeight: 300,
            fontStyle: "italic",
            lineHeight: 1.5,
            color: "#F5F1E8",
            marginBottom: "48px",
            position: "relative",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              fontSize: "120px",
              color: "rgba(201,168,76,0.25)",
              position: "absolute",
              top: "-40px",
              left: "-20px",
              fontFamily: "var(--font-cormorant)",
              lineHeight: 1,
              pointerEvents: "none",
            }}
          >
            &ldquo;
          </span>
          Working with Clarion was the first time I felt like someone actually
          understood my business and what I needed online. They didn&apos;t just
          run a checklist — they built a real system that&apos;s bringing in
          leads while I focus on the work.
        </p>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "14px", letterSpacing: "2px", textTransform: "uppercase", color: "#F5F1E8" }}>
            Jensen — SKM Performance
          </span>
          <span style={{ fontSize: "13px", color: "#9E9A92" }}>
            Dallas, TX · High-Performance Automotive
          </span>
        </div>
      </div>
    </section>
  );
}
