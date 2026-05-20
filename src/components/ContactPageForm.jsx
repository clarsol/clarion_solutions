"use client";

import { useState } from "react";
import Link from "next/link";

const SERVICES = [
  "Local SEO & AEO",
  "AI Automation",
  "Web Design",
  "Media Production",
  "CRM & AI Workflows",
  "Clarion Complete Stack",
  "Not Sure Yet",
];

const INITIAL = {
  name: "", business: "", phone: "", email: "",
  service: "", message: "", smsConsent: false,
};

const inputBase = {
  width: "100%",
  background: "#161616",
  border: "1px solid rgba(201,168,76,0.2)",
  color: "#F5F1E8",
  padding: "12px 16px",
  fontSize: "16px",
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

function focusGold(e) { e.target.style.borderColor = "#C9A84C"; }
function blurGold(e) { e.target.style.borderColor = "rgba(201,168,76,0.2)"; }
function blurRed(hasErr) {
  return (e) => { e.target.style.borderColor = hasErr ? "#e57373" : "rgba(201,168,76,0.2)"; };
}

function Field({ label, error, children }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <label style={labelBase}>{label}</label>
      {children}
      {error && <p style={{ fontSize: "14px", color: "#e57373", marginTop: "5px" }}>{error}</p>}
    </div>
  );
}

export default function ContactPageForm() {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function set(key, val) {
    setForm((p) => ({ ...p, [key]: val }));
    if (errors[key]) setErrors((p) => ({ ...p, [key]: null }));
  }

  function validate() {
    const e = {};
    if (!form.name.trim())     e.name     = "Required";
    if (!form.business.trim()) e.business = "Required";
    if (!form.phone.trim())    e.phone    = "Required";
    if (!form.email.trim())    e.email    = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.smsConsent)      e.smsConsent = "You must agree to continue";
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
        body: JSON.stringify({
          name:     form.name,
          business: form.business,
          phone:    form.phone,
          email:    form.email,
          services: form.service ? [form.service] : [],
          message:  form.message,
        }),
      });
      if (res.ok) setSubmitted(true);
    } catch { /* silent */ }
    finally { setSubmitting(false); }
  }

  if (submitted) {
    return (
      <div style={{ background: "#0e0e0e", border: "1px solid rgba(201,168,76,0.25)", padding: "80px 40px", textAlign: "center" }}>
        <div style={{ fontFamily: "var(--font-bebas)", fontSize: "48px", color: "#C9A84C", marginBottom: "16px", letterSpacing: "4px" }}>
          ✦
        </div>
        <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "28px", fontWeight: 300, color: "#F5F1E8", marginBottom: "16px" }}>
          Message received.
        </h3>
        <p style={{ fontSize: "17px", color: "#9E9A92", lineHeight: 1.8, maxWidth: "320px", margin: "0 auto" }}>
          We will get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      style={{ background: "#0e0e0e", border: "1px solid rgba(201,168,76,0.15)", padding: "40px 36px" }}
    >
      <div style={{ fontSize: "13px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "32px" }}>
        Send a Message
      </div>

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
        <Field label="Phone Number *" error={errors.phone}>
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

      <Field label="Service Interest">
        <select
          value={form.service}
          onChange={(e) => set("service", e.target.value)}
          style={{ ...inputBase, cursor: "pointer" }}
          onFocus={focusGold}
          onBlur={blurGold}
        >
          <option value="" style={{ background: "#161616" }}>Select a service...</option>
          {SERVICES.map((s) => (
            <option key={s} value={s} style={{ background: "#161616" }}>{s}</option>
          ))}
        </select>
      </Field>

      <Field label="Message (optional)">
        <textarea
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
          placeholder="What can we help you with?"
          rows={4}
          style={{ ...inputBase, resize: "vertical", minHeight: "100px" }}
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
          <span style={{ fontSize: "14px", color: "#9E9A92", lineHeight: 1.7 }}>
            By providing your phone number and checking this box, you consent to receive SMS messages from Clarion Solutions including appointment reminders, confirmations, and promotional messages. Message frequency varies. Msg &amp; data rates may apply. Reply{" "}
            <strong style={{ color: "#F5F1E8" }}>STOP</strong> to opt out.{" "}
            <Link href="/privacy-policy" style={{ color: "#C9A84C", textDecoration: "underline" }} onClick={(e) => e.stopPropagation()}>Privacy Policy</Link>
            {" "}&amp;{" "}
            <Link href="/terms-of-service" style={{ color: "#C9A84C", textDecoration: "underline" }} onClick={(e) => e.stopPropagation()}>Terms of Service</Link>.
          </span>
        </div>
        {errors.smsConsent && (
          <p style={{ fontSize: "14px", color: "#e57373", marginTop: "6px", paddingLeft: "28px" }}>
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
          fontSize: "14px",
          fontWeight: 500,
          letterSpacing: "2px",
          textTransform: "uppercase",
          border: "none",
          cursor: submitting ? "not-allowed" : "pointer",
          fontFamily: "var(--font-dm-sans)",
          transition: "background 0.25s",
        }}
        onMouseEnter={(e) => { if (!submitting) e.currentTarget.style.background = "#E2C97E"; }}
        onMouseLeave={(e) => { if (!submitting) e.currentTarget.style.background = submitting ? "rgba(201,168,76,0.55)" : "#C9A84C"; }}
      >
        {submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
