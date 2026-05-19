"use client";

import { useState, useEffect } from "react";

const GHL_URL =
  "https://api.leadconnectorhq.com/widget/booking/jAMb4oa7LVFVSyiNJ1dl";

export default function ContactModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("openContactModal", handler);
    return () => window.removeEventListener("openContactModal", handler);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onEsc = (e) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  function close() {
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(0,0,0,0.88)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        animation: "fadeIn 0.2s ease forwards",
      }}
    >
      <div
        style={{
          background: "#0e0e0e",
          border: "1px solid rgba(201,168,76,0.25)",
          width: "100%",
          maxWidth: "720px",
          maxHeight: "92vh",
          overflowY: "auto",
          position: "relative",
          animation: "slideUp 0.3s ease forwards",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "28px 32px 24px",
            borderBottom: "1px solid rgba(201,168,76,0.15)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            position: "sticky",
            top: 0,
            background: "#0e0e0e",
            zIndex: 1,
            flexShrink: 0,
          }}
        >
          <div>
            <div style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "6px" }}>
              Free Strategy Call
            </div>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(24px, 4vw, 32px)", fontWeight: 300, color: "#F5F1E8", lineHeight: 1.1, margin: 0 }}>
              Let&apos;s Talk About{" "}
              <em style={{ color: "#C9A84C", fontStyle: "italic" }}>Your Business.</em>
            </h2>
          </div>
          <button
            onClick={close}
            aria-label="Close"
            style={{ background: "none", border: "none", color: "#9E9A92", fontSize: "28px", cursor: "pointer", padding: "0 0 0 16px", lineHeight: 1, flexShrink: 0, transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F1E8")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#9E9A92")}
          >
            &times;
          </button>
        </div>

        {/* GHL Calendar */}
        <iframe
          src={GHL_URL}
          title="Book a Free Strategy Call"
          style={{
            width: "100%",
            height: "650px",
            border: "none",
            display: "block",
            flexShrink: 0,
          }}
          loading="lazy"
        />
      </div>
    </div>
  );
}
