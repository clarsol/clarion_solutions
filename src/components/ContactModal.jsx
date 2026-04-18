"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CITIES = ["McKinney", "Frisco", "Allen", "Plano", "Anna", "Other"];
const SERVICES = [
  "Local SEO",
  "AI Automation",
  "Web Design",
  "Media Production",
  "AI Workflows",
  "Not Sure Yet",
];

const INITIAL = {
  name: "", business: "", phone: "", email: "",
  city: "", services: [], description: "", smsConsent: false,
};

const inputBase = {
  width: "100%",
  background: "#161616",
  border: "1px solid rgba(201,168,76,0.2)",
  color: "#F5F1E8",
  padding: "12px 16px",
  fontSize: "14px",
  fontFamily: "var(--font-dm-sans)",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.2s",
  display: "block",
};

const labelBase = {
  fontSize: "10px",
  letterSpacing: "2px",
  textTransform: "uppercase",
  color: "#9E9A92",
  display: "block",
  marginBottom: "8px",
};

function Field({ label, error, children }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <label style={labelBase}>{label}</label>
      {children}
      {error && (
        <p style={{ fontSize: "12px", color: "#e57373", marginTop: "5px" }}>{error}</p>
      )}
    </div>
  );
}

function focusGold(e) { e.target.style.borderColor = "#C9A84C"; }
function blurGold(e) { e.target.style.borderColor = "rgba(201,168,76,0.2)"; }
function blurRed(hasErr) {
  return (e) => { e.target.style.borderColor = hasErr ? "#e57373" : "rgba(201,168,76,0.2)"; };
}

export default function ContactModal() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handler = () => { setOpen(true); setSubmitted(false); setErrors({}); };
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
    setTimeout(() => { setForm(INITIAL); setErrors({}); setSubmitted(false); }, 300);
  }

  function set(key, val) {
    setForm((p) => ({ ...p, [key]: val }));
    if (errors[key]) setErrors((p) => ({ ...p, [key]: null }));
  }

  function toggleService(s) {
    setForm((p) => ({
      ...p,
      services: p.services.includes(s)
        ? p.services.filter((x) => x !== s)
        : [...p.services, s],
    }));
  }

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.business.trim()) e.business = "Required";
    if (!form.phone.trim()) e.phone = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.smsConsent) e.smsConsent = "You must agree to continue";
    return e;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitting(true);
    try {
      const res = await fetch("/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setSubmitted(true);
    } catch { /* silent */ }
    finally { setSubmitting(false); }
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
          maxWidth: "560px",
          maxHeight: "92vh",
          overflowY: "auto",
          position: "relative",
          animation: "slideUp 0.3s ease forwards",
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
            ×
          </button>
        </div>

        {submitted ? (
          /* ── Success ── */
          <div style={{ padding: "64px 32px", textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-bebas)", fontSize: "48px", color: "#C9A84C", marginBottom: "16px", letterSpacing: "4px" }}>✦</div>
            <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "28px", fontWeight: 300, color: "#F5F1E8", marginBottom: "16px" }}>
              We&apos;ll be in touch within 24 hours.
            </h3>
            <p style={{ fontSize: "15px", color: "#9E9A92", lineHeight: 1.8, maxWidth: "360px", margin: "0 auto 32px" }}>
              Thanks for reaching out. We&apos;ll review your info and be in touch to schedule your strategy call.
            </p>
            <button
              onClick={close}
              style={{ background: "transparent", border: "1px solid rgba(201,168,76,0.4)", color: "#C9A84C", padding: "12px 28px", fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", cursor: "pointer", fontFamily: "var(--font-dm-sans)", transition: "all 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,168,76,0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
            >
              Close
            </button>
          </div>
        ) : (
          /* ── Form ── */
          <form onSubmit={handleSubmit} noValidate style={{ padding: "28px 32px 32px" }}>

            <Field label="Full Name *" error={errors.name}>
              <input
                value={form.name}
                onChange={(e) => set("name", e.target.value)}
                placeholder="Jane Smith"
                style={{ ...inputBase, borderColor: errors.name ? "#e57373" : "rgba(201,168,76,0.2)" }}
                onFocus={focusGold}
                onBlur={blurRed(errors.name)}
              />
            </Field>

            <Field label="Business Name *" error={errors.business}>
              <input
                value={form.business}
                onChange={(e) => set("business", e.target.value)}
                placeholder="Acme Plumbing Co."
                style={{ ...inputBase, borderColor: errors.business ? "#e57373" : "rgba(201,168,76,0.2)" }}
                onFocus={focusGold}
                onBlur={blurRed(errors.business)}
              />
            </Field>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <Field label="Phone *" error={errors.phone}>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  placeholder="(214) 555-0100"
                  style={{ ...inputBase, borderColor: errors.phone ? "#e57373" : "rgba(201,168,76,0.2)" }}
                  onFocus={focusGold}
                  onBlur={blurRed(errors.phone)}
                />
              </Field>
              <Field label="Email *" error={errors.email}>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  placeholder="jane@acme.com"
                  style={{ ...inputBase, borderColor: errors.email ? "#e57373" : "rgba(201,168,76,0.2)" }}
                  onFocus={focusGold}
                  onBlur={blurRed(errors.email)}
                />
              </Field>
            </div>

            <Field label="City / Area">
              <select
                value={form.city}
                onChange={(e) => set("city", e.target.value)}
                style={{ ...inputBase, cursor: "pointer" }}
                onFocus={focusGold}
                onBlur={blurGold}
              >
                <option value="" style={{ background: "#161616" }}>Select your city…</option>
                {CITIES.map((c) => (
                  <option key={c} value={c} style={{ background: "#161616" }}>{c}</option>
                ))}
              </select>
            </Field>

            <Field label="What are you looking for?">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                {SERVICES.map((s) => {
                  const checked = form.services.includes(s);
                  return (
                    <label
                      key={s}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        cursor: "pointer",
                        padding: "10px 12px",
                        border: `1px solid ${checked ? "#C9A84C" : "rgba(201,168,76,0.18)"}`,
                        background: checked ? "rgba(201,168,76,0.07)" : "transparent",
                        transition: "all 0.18s",
                        fontSize: "13px",
                        color: checked ? "#E2C97E" : "#9E9A92",
                        userSelect: "none",
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleService(s)}
                        style={{ display: "none" }}
                      />
                      <span
                        style={{
                          width: "14px",
                          height: "14px",
                          border: `1px solid ${checked ? "#C9A84C" : "rgba(201,168,76,0.3)"}`,
                          background: checked ? "#C9A84C" : "transparent",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          fontSize: "9px",
                          color: "#080808",
                          fontWeight: 700,
                          transition: "all 0.18s",
                        }}
                      >
                        {checked ? "✓" : ""}
                      </span>
                      {s}
                    </label>
                  );
                })}
              </div>
            </Field>

            <Field label="About your business (optional)">
              <textarea
                value={form.description}
                onChange={(e) => set("description", e.target.value)}
                placeholder="What does your business do, and what's the biggest challenge you're trying to solve?"
                rows={3}
                style={{ ...inputBase, resize: "vertical", minHeight: "80px" }}
                onFocus={focusGold}
                onBlur={blurGold}
              />
            </Field>

            {/* SMS Consent */}
            <div style={{ marginBottom: "24px" }}>
              <div
                style={{ display: "flex", alignItems: "flex-start", gap: "12px", cursor: "pointer" }}
                onClick={() => set("smsConsent", !form.smsConsent)}
              >
                <span
                  style={{
                    width: "16px",
                    height: "16px",
                    border: `1px solid ${errors.smsConsent ? "#e57373" : form.smsConsent ? "#C9A84C" : "rgba(201,168,76,0.3)"}`,
                    background: form.smsConsent ? "#C9A84C" : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "2px",
                    fontSize: "10px",
                    color: "#080808",
                    fontWeight: 700,
                    transition: "all 0.18s",
                    cursor: "pointer",
                  }}
                >
                  {form.smsConsent ? "✓" : ""}
                </span>
                <span style={{ fontSize: "12px", color: "#9E9A92", lineHeight: 1.7 }}>
                  By providing your phone number and checking this box, you consent to receive SMS messages from Clarion Solutions including appointment reminders, confirmations, and promotional messages. Message frequency varies. Msg &amp; data rates may apply. Reply{" "}
                  <strong style={{ color: "#F5F1E8" }}>STOP</strong> to opt out.{" "}
                  <Link href="/privacy-policy" style={{ color: "#C9A84C", textDecoration: "underline" }} onClick={(e) => e.stopPropagation()}>Privacy Policy</Link>{" "}
                  &amp;{" "}
                  <Link href="/terms-of-service" style={{ color: "#C9A84C", textDecoration: "underline" }} onClick={(e) => e.stopPropagation()}>Terms of Service</Link>.
                </span>
              </div>
              {errors.smsConsent && (
                <p style={{ fontSize: "12px", color: "#e57373", marginTop: "6px", paddingLeft: "28px" }}>
                  {errors.smsConsent}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={submitting}
              style={{
                width: "100%",
                background: submitting ? "rgba(201,168,76,0.55)" : "#C9A84C",
                color: "#080808",
                padding: "16px",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "2px",
                textTransform: "uppercase",
                border: "none",
                cursor: submitting ? "not-allowed" : "pointer",
                fontFamily: "var(--font-dm-sans)",
                transition: "background 0.25s, transform 0.2s",
              }}
              onMouseEnter={(e) => { if (!submitting) e.currentTarget.style.background = "#E2C97E"; }}
              onMouseLeave={(e) => { if (!submitting) e.currentTarget.style.background = "#C9A84C"; }}
            >
              {submitting ? "Sending…" : "Book My Free Strategy Call →"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
