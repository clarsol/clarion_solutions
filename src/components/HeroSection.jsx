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
        .hero-demo-btn:hover {
          border-color: rgba(255,255,255,0.28) !important;
          color: #F5F1E8 !important;
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
        Local SEO &amp;
        <br />
        <em style={{ fontStyle: "italic", color: "#C9A84C" }}>AI Automation,</em>
        <br />
        <strong style={{ fontWeight: 600 }}>McKinney, TX.</strong>
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
        Clarion Solutions builds{" "}
        <strong style={{ color: "#F5F1E8", fontWeight: 400 }}>AI-powered growth systems</strong>{" "}
        for McKinney and North Dallas businesses, combining local SEO, intelligent automation, web design, and media production under one roof.
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
        <BookCallButton className="btn-primary-link">
          Book a Strategy Call
        </BookCallButton>
        <Link
          href="/get-a-quote"
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
            textDecoration: "none",
            transition: "border-color 0.2s, background 0.2s",
          }}
        >
          Get a Quote
        </Link>
        <Link
          href="/demo"
          className="hero-demo-btn"
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
            color: "#9E9A92",
            border: "1px solid rgba(255,255,255,0.12)",
            textDecoration: "none",
            transition: "border-color 0.2s, color 0.2s",
          }}
        >
          See a Live Demo
        </Link>
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
