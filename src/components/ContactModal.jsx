"use client";

import { useState, useEffect } from "react";

const GHL_URL =
  "https://api.leadconnectorhq.com/widget/bookings/scheduleanappointmentcallwithus-230ad544-8f6f-4125-9d14-f1b202f0becc-7fdb3832-39a9-4c80-a146-60233fb444a1-aaa07f1f-456b-4ccc-81e4-adb0ad437aa3-0b2d0529-cb48-461f-b8b5-712b398e91eb-fcbf65a8-70d2-4009-b786-ac4166822f0b-0f63997e-5577-46ae-9f21-00d7deb09698-e6c21248-3365-4355-9454-17fdbd70ec1e-8b95828a-650c-41a7-9b5b-453855dce734-8dda7b22-1142-4021-8dfc-111b3ef84155-f97c6afe-ae0a-48f4-a6cb-868f7ec9020c-5c4b1d30-8e32-4a3d-9142-617df2faa33d-15d6fb8b-f278-4503-98e4-f435ca7bb65e-1cb0ec42-d374-4a1a-b923-59c59dcc4791-c04f60e7-15a7-4cfc-a977-30d02f1c83fe-9e2a0269-9b69-4caa-95c7-327b47eef86a-7148a0f8-56fc-4953-a6df-77b62b6e9945-ed5e651a-2e21-4efb-8b0c-df72430b9029-c30072b0-9949-4441-8495-0365b510c5f8";

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
