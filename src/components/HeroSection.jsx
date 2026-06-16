"use client";

import BookCallButton from "@/components/BookCallButton";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="home"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 5%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes heroGlowPulse {
          0%, 100% { opacity: 0.4; }
          50%       { opacity: 1; }
        }
        .hero-quote-btn:hover {
          border-color: #C9A84C !important;
          background: rgba(201,168,76,0.08) !important;
        }
        .hero-sba-seals {
          margin-top: 32px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: flex-start;
          z-index: 1;
        }
        .hero-sba-seal {
          height: 160px;
          width: auto;
          object-fit: contain;
        }
        @media (max-width: 768px) {
          .hero-sba-seals { display: none; }
        }
      `}</style>

      {/* Pulsing radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(201,168,76,0.15) 0%, transparent 70%)",
          animation: "heroGlowPulse 4s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      {/* Grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          pointerEvents: "none",
        }}
      />

      {/* Tag */}
      <div
        className="animate-fade-up-1"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          border: "1px solid rgba(201,168,76,0.25)",
          padding: "8px 18px",
          fontSize: "13px",
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: "#C9A84C",
          marginBottom: "32px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <span
          className="animate-pulse-dot"
          style={{ width: "6px", height: "6px", background: "#C9A84C", borderRadius: "50%", display: "inline-block" }}
        />
        McKinney, TX &nbsp;·&nbsp; Veteran-Owned &nbsp;·&nbsp; North Dallas
      </div>

      {/* Headline */}
      <h1
        className="animate-fade-up-2"
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "clamp(52px, 7vw, 110px)",
          fontWeight: 300,
          lineHeight: 1.0,
          letterSpacing: "-1px",
          marginBottom: "16px",
          color: "#F5F1E8",
          position: "relative",
          zIndex: 1,
        }}
      >
        While You Work,
        <br />
        <em style={{ fontStyle: "italic", color: "#C9A84C" }}>We Fill Your Calendar</em>
        <br />
        <strong style={{ fontWeight: 600 }}>Automatically.</strong>
      </h1>

      {/* Subtext */}
      <p
        className="animate-fade-up-3"
        style={{
          fontSize: "clamp(14px, 1.4vw, 17px)",
          color: "#9E9A92",
          maxWidth: "520px",
          lineHeight: 1.8,
          marginBottom: "48px",
          position: "relative",
          zIndex: 1,
        }}
      >
        Clarion Solutions gets North Dallas service businesses to the top of Google,{" "}
        <strong style={{ color: "#F5F1E8", fontWeight: 400 }}>recovers missed calls in seconds</strong>,{" "}
        and builds systems that bring in new customers while you focus on the job.
      </p>

      {/* Actions */}
      <div
        className="animate-fade-up-4"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          flexWrap: "wrap",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Link
          href="/shop"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "14px 32px",
            fontFamily: "var(--font-dm-sans)",
            fontSize: "14px",
            fontWeight: 500,
            letterSpacing: "2px",
            textTransform: "uppercase",
            background: "#C9A84C",
            color: "#080808",
            border: "1px solid #C9A84C",
            textDecoration: "none",
            transition: "background 0.2s, border-color 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#E2C97E"; e.currentTarget.style.borderColor = "#E2C97E"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "#C9A84C"; e.currentTarget.style.borderColor = "#C9A84C"; }}
        >
          Shop Services
        </Link>
        <BookCallButton
          className="hero-quote-btn"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "14px 28px",
            fontFamily: "var(--font-dm-sans)",
            fontSize: "14px",
            fontWeight: 500,
            letterSpacing: "2px",
            textTransform: "uppercase",
            background: "transparent",
            color: "#C9A84C",
            border: "1px solid rgba(201,168,76,0.4)",
            transition: "border-color 0.2s, background 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#C9A84C"; e.currentTarget.style.background = "rgba(201,168,76,0.08)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)"; e.currentTarget.style.background = "transparent"; }}
        >
          Book a Call
        </BookCallButton>
      </div>

      {/* SBA certification seals */}
      <div className="hero-sba-seals">
        <img
          className="hero-sba-seal"
          src="/IMG/sba-veteran-owned-certified.png"
          alt="SBA Certified Veteran-Owned Business"
        />
        <img
          className="hero-sba-seal"
          src="/IMG/sba-sdvosb-certified.png"
          alt="SBA Certified Service-Disabled Veteran-Owned Small Business"
        />
      </div>

      {/* Scroll indicator */}
      <div
        className="animate-fade-in-scroll"
        style={{ position: "absolute", bottom: "40px", left: "5%", display: "flex", alignItems: "center", gap: "12px" }}
      >
        <div style={{ width: "40px", height: "1px", background: "rgba(201,168,76,0.25)" }} />
        <span style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "#9E9A92" }}>
          Scroll to explore
        </span>
      </div>
    </section>
  );
}
