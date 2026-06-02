"use client";

export default function BookCallCTA() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
      <button
        onClick={() => window.dispatchEvent(new CustomEvent("openContactModal"))}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#C9A84C",
          border: "1px solid #C9A84C",
          color: "#080808",
          padding: "16px 40px",
          fontFamily: "var(--font-dm-sans)",
          fontSize: "14px",
          fontWeight: 500,
          letterSpacing: "2px",
          textTransform: "uppercase",
          cursor: "pointer",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = "#E2C97E"; e.currentTarget.style.borderColor = "#E2C97E"; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = "#C9A84C"; e.currentTarget.style.borderColor = "#C9A84C"; }}
      >
        Book a Call
      </button>
    </div>
  );
}
