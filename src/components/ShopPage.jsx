"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { SERVICES, STACK_UPGRADE_MESSAGE } from "@/lib/shopData";
import { useCart } from "@/hooks/useCart";

// ── Shared style tokens ────────────────────────────────────────────────────
const GOLD = "#C9A84C";
const GOLD_DIM = "rgba(201,168,76,0.2)";
const GOLD_MED = "rgba(201,168,76,0.5)";
const BG_MAIN = "#080808";
const BG_CARD = "#0e0e0e";
const BG_SIDEBAR = "#161616";
const TEXT_PRIMARY = "#F5F1E8";
const TEXT_MUTED = "#9E9A92";

const inputBase = {
  width: "100%",
  background: "#161616",
  border: `1px solid ${GOLD_DIM}`,
  color: TEXT_PRIMARY,
  padding: "12px 16px",
  fontSize: "16px",
  fontFamily: "var(--font-dm-sans)",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.2s",
  display: "block",
};

const selectBase = {
  ...inputBase,
  cursor: "pointer",
  appearance: "none",
  WebkitAppearance: "none",
  backgroundImage:
    "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%23C9A84C'/%3E%3C/svg%3E\")",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 14px center",
  paddingRight: "40px",
};

const labelBase = {
  fontSize: "10px",
  letterSpacing: "2px",
  textTransform: "uppercase",
  color: TEXT_MUTED,
  display: "block",
  marginBottom: "8px",
};

function fg(e) { e.target.style.borderColor = GOLD; }
function bg(e) { e.target.style.borderColor = GOLD_DIM; }

function fmt(n) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 });
}

// ── Service Card ──────────────────────────────────────────────────────────
function ServiceCard({ service, selected, onToggle }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      style={{
        background: selected ? "rgba(201,168,76,0.04)" : BG_CARD,
        border: `1px solid ${selected ? GOLD_MED : GOLD_DIM}`,
        padding: "32px 28px",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        transition: "border-color 0.25s, background 0.25s",
        position: "relative",
      }}
      onClick={() => onToggle(service.id)}
      onMouseEnter={(e) => {
        if (!selected) e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)";
      }}
      onMouseLeave={(e) => {
        if (!selected) e.currentTarget.style.borderColor = GOLD_DIM;
      }}
    >
      {/* Badge */}
      {service.badge && (
        <div
          style={{
            display: "inline-block",
            fontSize: "9px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#080808",
            background: GOLD,
            padding: "3px 10px",
            marginBottom: "16px",
            alignSelf: "flex-start",
          }}
        >
          {service.badge}
        </div>
      )}

      {/* Selected check */}
      {selected && (
        <div
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            width: "22px",
            height: "22px",
            borderRadius: "50%",
            background: GOLD,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "11px",
            color: "#080808",
            fontWeight: 700,
          }}
        >
          ✓
        </div>
      )}

      {/* Name */}
      <div
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "22px",
          fontWeight: 300,
          color: TEXT_PRIMARY,
          marginBottom: "4px",
          lineHeight: 1.2,
        }}
      >
        {service.name}
      </div>

      {/* Price */}
      <div
        style={{
          fontSize: "15px",
          color: GOLD,
          fontWeight: 500,
          marginBottom: "14px",
          letterSpacing: "0.5px",
          fontFamily: "var(--font-dm-sans)",
        }}
      >
        {service.priceLabel}
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: "15px",
          color: TEXT_MUTED,
          lineHeight: 1.7,
          marginBottom: "16px",
          flex: 1,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {service.description}
      </p>

      {/* Includes toggle */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setExpanded((v) => !v);
        }}
        style={{
          background: "none",
          border: "none",
          padding: 0,
          color: GOLD,
          fontSize: "13px",
          letterSpacing: "1px",
          textTransform: "uppercase",
          cursor: "pointer",
          fontFamily: "var(--font-dm-sans)",
          textAlign: "left",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <span>{expanded ? "Hide" : "What's included"}</span>
        <span
          style={{
            transition: "transform 0.2s",
            transform: expanded ? "rotate(180deg)" : "none",
            display: "inline-block",
            fontSize: "8px",
          }}
        >
          ▼
        </span>
      </button>

      {expanded && (
        <div
          style={{ marginBottom: "16px" }}
          onClick={(e) => e.stopPropagation()}
        >
          {service.includes.map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                fontSize: "14px",
                color: TEXT_MUTED,
                lineHeight: 1.5,
                marginBottom: "6px",
              }}
            >
              <span
                style={{
                  width: "14px",
                  height: "1px",
                  background: GOLD,
                  flexShrink: 0,
                  display: "inline-block",
                  marginTop: "9px",
                }}
              />
              {item}
            </div>
          ))}
        </div>
      )}

      {/* CTA */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggle(service.id);
        }}
        style={{
          display: "block",
          width: "100%",
          textAlign: "center",
          padding: "11px 20px",
          fontSize: "12px",
          letterSpacing: "2px",
          textTransform: "uppercase",
          cursor: "pointer",
          fontFamily: "var(--font-dm-sans)",
          transition: "all 0.2s",
          background: selected ? GOLD : "transparent",
          color: selected ? "#080808" : GOLD,
          border: `1px solid ${selected ? GOLD : GOLD_DIM}`,
        }}
      >
        {selected ? "✓ Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
}

// ── Cart Line Item ────────────────────────────────────────────────────────
function CartItem({ service, onRemove }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: "12px",
        padding: "12px 0",
        borderBottom: `1px solid ${GOLD_DIM}`,
      }}
    >
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: "14px", color: TEXT_PRIMARY, lineHeight: 1.3 }}>
          {service.name}
        </div>
        <div style={{ fontSize: "13px", color: GOLD, marginTop: "2px" }}>
          {service.priceLabel}
        </div>
      </div>
      <button
        onClick={() => onRemove(service.id)}
        style={{
          background: "none",
          border: "none",
          color: TEXT_MUTED,
          cursor: "pointer",
          fontSize: "16px",
          padding: "0 4px",
          lineHeight: 1,
          flexShrink: 0,
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = TEXT_PRIMARY)}
        onMouseLeave={(e) => (e.currentTarget.style.color = TEXT_MUTED)}
        aria-label={`Remove ${service.name}`}
      >
        ×
      </button>
    </div>
  );
}

// ── Intake Form ───────────────────────────────────────────────────────────
function IntakeForm({ cartServices, monthlyTotal, onetimeTotal, onSuccess }) {
  const [form, setForm] = useState({
    name: "",
    businessName: "",
    website: "",
    phone: "",
    email: "",
    city: "",
    referralSource: "",
    challenge: "",
    currentTools: [],
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function set(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  }

  function toggleTool(tool) {
    setForm((prev) => ({
      ...prev,
      currentTools: prev.currentTools.includes(tool)
        ? prev.currentTools.filter((t) => t !== tool)
        : [...prev.currentTools, tool],
    }));
  }

  function validate() {
    const errs = {};
    if (!form.name.trim()) errs.name = "Required";
    if (!form.businessName.trim()) errs.businessName = "Required";
    if (!form.phone.trim()) errs.phone = "Required";
    if (!form.email.trim()) errs.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.city.trim()) errs.city = "Required";
    return errs;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setSubmitting(true);
    setSubmitError("");

    const serviceIds = cartServices.map((s) => s.id);
    const cartSummary = cartServices.map((s) => `${s.name} (${s.priceLabel})`).join(", ");

    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceIds,
          formData: { ...form, cartSummary, monthlyTotal, onetimeTotal },
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong");

      if (data.url) {
        window.location.href = data.url;
        return; // Stripe takes over; no further state updates needed
      }

      throw new Error("No checkout URL returned from server.");
    } catch (err) {
      setSubmitError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const TOOLS = [
    "CRM Platform",
    "Google Ads",
    "Any marketing agency",
    "None of the above",
  ];

  const REFERRAL_OPTIONS = [
    "Google Search",
    "Referral",
    "Social Media",
    "LinkedIn",
    "Federal/Government Search",
    "Other",
  ];

  const fieldStyle = (field) => ({
    ...inputBase,
    borderColor: errors[field] ? "#e57373" : GOLD_DIM,
  });

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }} className="shop-form-grid">
        <div>
          <label style={labelBase}>Full Name *</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            style={fieldStyle("name")}
            onFocus={fg}
            onBlur={bg}
            placeholder="Jane Smith"
          />
          {errors.name && <p style={{ fontSize: "13px", color: "#e57373", marginTop: "4px" }}>{errors.name}</p>}
        </div>

        <div>
          <label style={labelBase}>Business Name *</label>
          <input
            type="text"
            value={form.businessName}
            onChange={(e) => set("businessName", e.target.value)}
            style={fieldStyle("businessName")}
            onFocus={fg}
            onBlur={bg}
            placeholder="Acme Plumbing LLC"
          />
          {errors.businessName && <p style={{ fontSize: "13px", color: "#e57373", marginTop: "4px" }}>{errors.businessName}</p>}
        </div>

        <div>
          <label style={labelBase}>Business Website</label>
          <input
            type="url"
            value={form.website}
            onChange={(e) => set("website", e.target.value)}
            style={inputBase}
            onFocus={fg}
            onBlur={bg}
            placeholder="https://yoursite.com"
          />
        </div>

        <div>
          <label style={labelBase}>Phone Number *</label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            style={fieldStyle("phone")}
            onFocus={fg}
            onBlur={bg}
            placeholder="(972) 555-0100"
          />
          {errors.phone && <p style={{ fontSize: "13px", color: "#e57373", marginTop: "4px" }}>{errors.phone}</p>}
        </div>

        <div>
          <label style={labelBase}>Email Address *</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            style={fieldStyle("email")}
            onFocus={fg}
            onBlur={bg}
            placeholder="you@yourco.com"
          />
          {errors.email && <p style={{ fontSize: "13px", color: "#e57373", marginTop: "4px" }}>{errors.email}</p>}
        </div>

        <div>
          <label style={labelBase}>City / Location *</label>
          <input
            type="text"
            value={form.city}
            onChange={(e) => set("city", e.target.value)}
            style={fieldStyle("city")}
            onFocus={fg}
            onBlur={bg}
            placeholder="McKinney, TX"
          />
          {errors.city && <p style={{ fontSize: "13px", color: "#e57373", marginTop: "4px" }}>{errors.city}</p>}
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <label style={labelBase}>How did you hear about Clarion?</label>
        <select
          value={form.referralSource}
          onChange={(e) => set("referralSource", e.target.value)}
          style={selectBase}
          onFocus={fg}
          onBlur={bg}
        >
          <option value="">Select one...</option>
          {REFERRAL_OPTIONS.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>

      <div style={{ marginTop: "20px" }}>
        <label style={labelBase}>Tell us about your biggest challenge right now</label>
        <textarea
          value={form.challenge}
          onChange={(e) => set("challenge", e.target.value)}
          rows={4}
          style={{
            ...inputBase,
            resize: "vertical",
            minHeight: "100px",
          }}
          onFocus={fg}
          onBlur={bg}
          placeholder="e.g. We're losing leads after hours, our follow-up is inconsistent, we need more visibility on Google..."
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <label style={labelBase}>Are you currently using any of these tools?</label>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "4px" }}>
          {TOOLS.map((tool) => (
            <label
              key={tool}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                cursor: "pointer",
                fontSize: "15px",
                color: TEXT_MUTED,
              }}
            >
              <div
                onClick={() => toggleTool(tool)}
                style={{
                  width: "18px",
                  height: "18px",
                  border: `1px solid ${form.currentTools.includes(tool) ? GOLD : GOLD_DIM}`,
                  background: form.currentTools.includes(tool) ? GOLD : "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {form.currentTools.includes(tool) && (
                  <span style={{ fontSize: "10px", color: "#080808", fontWeight: 700 }}>✓</span>
                )}
              </div>
              {tool}
            </label>
          ))}
        </div>
      </div>

      {/* Cart summary (read-only) */}
      <div
        style={{
          marginTop: "28px",
          background: BG_SIDEBAR,
          border: `1px solid ${GOLD_DIM}`,
          padding: "20px 24px",
        }}
      >
        <div style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: TEXT_MUTED, marginBottom: "12px" }}>
          Order Summary
        </div>
        {cartServices.map((s) => (
          <div
            key={s.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "14px",
              color: TEXT_PRIMARY,
              marginBottom: "6px",
            }}
          >
            <span>{s.name}</span>
            <span style={{ color: GOLD }}>{s.priceLabel}</span>
          </div>
        ))}
      </div>

      {submitError && (
        <div
          style={{
            marginTop: "16px",
            padding: "12px 16px",
            background: "rgba(229,115,115,0.1)",
            border: "1px solid rgba(229,115,115,0.3)",
            color: "#e57373",
            fontSize: "14px",
          }}
        >
          {submitError}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        style={{
          marginTop: "28px",
          width: "100%",
          padding: "16px 32px",
          background: submitting ? "rgba(201,168,76,0.5)" : GOLD,
          color: "#080808",
          border: "none",
          fontSize: "14px",
          letterSpacing: "2px",
          textTransform: "uppercase",
          cursor: submitting ? "not-allowed" : "pointer",
          fontFamily: "var(--font-dm-sans)",
          fontWeight: 500,
          transition: "all 0.2s",
        }}
      >
        {submitting ? "Redirecting to Stripe..." : "Proceed to Payment →"}
      </button>

      <p style={{ fontSize: "13px", color: TEXT_MUTED, textAlign: "center", marginTop: "12px", lineHeight: 1.6 }}>
        Stripe Checkout will open in a new tab. Your information is sent to Stan before payment processes.
      </p>
    </form>
  );
}

// ── Cart Sidebar ──────────────────────────────────────────────────────────
function CartSidebar({
  monthlyItems,
  onetimeItems,
  monthlyTotal,
  onetimeTotal,
  showStackUpgrade,
  stackSavings,
  upsells,
  onRemove,
  onUpgrade,
  onAddUpsell,
  isEmpty,
  onCheckout,
}) {
  return (
    <div
      style={{
        background: BG_SIDEBAR,
        border: `1px solid ${GOLD_DIM}`,
        padding: "32px 28px",
        display: "flex",
        flexDirection: "column",
        gap: "0",
      }}
    >
      <div
        style={{
          fontSize: "11px",
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: TEXT_MUTED,
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span>Your Cart</span>
        {!isEmpty && (
          <span style={{ color: GOLD, fontSize: "13px" }}>
            {monthlyItems.length + onetimeItems.length} item{monthlyItems.length + onetimeItems.length !== 1 ? "s" : ""}
          </span>
        )}
      </div>

      {isEmpty ? (
        <div
          style={{
            textAlign: "center",
            padding: "40px 0",
            color: TEXT_MUTED,
            fontSize: "15px",
            lineHeight: 1.7,
          }}
        >
          Select services from the grid to build your growth stack.
        </div>
      ) : (
        <>
          {/* Monthly */}
          {monthlyItems.length > 0 && (
            <div style={{ marginBottom: "20px" }}>
              <div style={{ fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: GOLD, marginBottom: "8px" }}>
                Monthly
              </div>
              {monthlyItems.map((s) => (
                <CartItem key={s.id} service={s} onRemove={onRemove} />
              ))}
            </div>
          )}

          {/* One-time */}
          {onetimeItems.length > 0 && (
            <div style={{ marginBottom: "20px" }}>
              <div style={{ fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: GOLD, marginBottom: "8px" }}>
                One-Time
              </div>
              {onetimeItems.map((s) => (
                <CartItem key={s.id} service={s} onRemove={onRemove} />
              ))}
            </div>
          )}

          {/* Totals */}
          <div
            style={{
              borderTop: `1px solid ${GOLD_DIM}`,
              paddingTop: "16px",
              marginBottom: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {monthlyTotal > 0 && (
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
                <span style={{ color: TEXT_MUTED }}>Monthly Total</span>
                <span style={{ color: TEXT_PRIMARY, fontWeight: 500 }}>
                  {fmt(monthlyTotal)}/mo
                </span>
              </div>
            )}
            {onetimeTotal > 0 && (
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
                <span style={{ color: TEXT_MUTED }}>One-Time Total</span>
                <span style={{ color: TEXT_PRIMARY, fontWeight: 500 }}>{fmt(onetimeTotal)}</span>
              </div>
            )}
            {onetimeTotal > 0 && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "15px",
                  borderTop: `1px solid ${GOLD_DIM}`,
                  paddingTop: "8px",
                  marginTop: "4px",
                }}
              >
                <span style={{ color: TEXT_MUTED }}>Due Today</span>
                <span style={{ color: GOLD, fontWeight: 600 }}>{fmt(onetimeTotal)}</span>
              </div>
            )}
          </div>
        </>
      )}

      {/* Stack upgrade callout */}
      {showStackUpgrade && (
        <div
          style={{
            background: "rgba(201,168,76,0.06)",
            border: `1px solid ${GOLD_MED}`,
            padding: "16px 18px",
            marginBottom: "16px",
          }}
        >
          <div style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: GOLD, marginBottom: "8px" }}>
            Upgrade Available
          </div>
          <p style={{ fontSize: "13px", color: TEXT_MUTED, lineHeight: 1.6, marginBottom: "12px" }}>
            {STACK_UPGRADE_MESSAGE.replace("You've", "You have")}
          </p>
          {stackSavings > 0 && (
            <p style={{ fontSize: "13px", color: GOLD, marginBottom: "12px", fontWeight: 500 }}>
              Save {fmt(stackSavings)}/mo by upgrading.
            </p>
          )}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <button
              onClick={onUpgrade}
              style={{
                flex: 1,
                padding: "9px 12px",
                background: GOLD,
                color: "#080808",
                border: "none",
                fontSize: "11px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                cursor: "pointer",
                fontFamily: "var(--font-dm-sans)",
                fontWeight: 500,
                whiteSpace: "nowrap",
              }}
            >
              Upgrade to Stack
            </button>
            <button
              onClick={() => {}}
              style={{
                flex: 1,
                padding: "9px 12px",
                background: "transparent",
                color: TEXT_MUTED,
                border: `1px solid ${GOLD_DIM}`,
                fontSize: "11px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                cursor: "pointer",
                fontFamily: "var(--font-dm-sans)",
                whiteSpace: "nowrap",
              }}
            >
              Keep Selection
            </button>
          </div>
        </div>
      )}

      {/* Upsell suggestions */}
      {upsells.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "16px" }}>
          {upsells.map((u) => {
            const svc = SERVICES.find((s) => s.id === u.suggest);
            if (!svc) return null;
            return (
              <div
                key={u.suggest}
                style={{
                  background: "rgba(201,168,76,0.03)",
                  border: `1px solid rgba(201,168,76,0.15)`,
                  padding: "14px 16px",
                }}
              >
                <p style={{ fontSize: "13px", color: TEXT_MUTED, lineHeight: 1.6, marginBottom: "10px" }}>
                  {u.message}
                </p>
                <button
                  onClick={() => onAddUpsell(u.suggest)}
                  style={{
                    background: "transparent",
                    border: `1px solid ${GOLD_DIM}`,
                    color: GOLD,
                    padding: "7px 14px",
                    fontSize: "11px",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    fontFamily: "var(--font-dm-sans)",
                    transition: "all 0.2s",
                  }}
                >
                  Add {svc.name} ({svc.priceLabel})
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* CTA */}
      <button
        onClick={onCheckout}
        disabled={isEmpty}
        style={{
          width: "100%",
          padding: "14px 20px",
          background: isEmpty ? "rgba(201,168,76,0.2)" : GOLD,
          color: isEmpty ? TEXT_MUTED : "#080808",
          border: "none",
          fontSize: "13px",
          letterSpacing: "2px",
          textTransform: "uppercase",
          cursor: isEmpty ? "not-allowed" : "pointer",
          fontFamily: "var(--font-dm-sans)",
          fontWeight: 500,
          transition: "all 0.2s",
          marginTop: "auto",
        }}
      >
        {isEmpty ? "Add Services to Continue" : "Continue to Checkout →"}
      </button>

      {!isEmpty && (
        <p style={{ fontSize: "12px", color: TEXT_MUTED, textAlign: "center", marginTop: "10px", lineHeight: 1.6 }}>
          No commitment on discovery calls. Fixed prices, no surprise fees.
        </p>
      )}
    </div>
  );
}

// ── Mobile Cart Bar ───────────────────────────────────────────────────────
function MobileCartBar({ count, monthlyTotal, onetimeTotal, onOpen }) {
  if (count === 0) return null;
  return (
    <div
      className="shop-mobile-bar"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 90,
        background: BG_SIDEBAR,
        borderTop: `1px solid ${GOLD_MED}`,
        padding: "14px 5%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
      }}
    >
      <div>
        <div style={{ fontSize: "13px", color: TEXT_PRIMARY, fontWeight: 500 }}>
          {count} service{count !== 1 ? "s" : ""} selected
        </div>
        <div style={{ fontSize: "12px", color: GOLD, marginTop: "2px" }}>
          {monthlyTotal > 0 && `${fmt(monthlyTotal)}/mo`}
          {monthlyTotal > 0 && onetimeTotal > 0 && " + "}
          {onetimeTotal > 0 && fmt(onetimeTotal)}
        </div>
      </div>
      <button
        onClick={onOpen}
        style={{
          background: GOLD,
          color: "#080808",
          border: "none",
          padding: "10px 20px",
          fontSize: "12px",
          letterSpacing: "2px",
          textTransform: "uppercase",
          cursor: "pointer",
          fontFamily: "var(--font-dm-sans)",
          fontWeight: 500,
          flexShrink: 0,
        }}
      >
        View Cart →
      </button>
    </div>
  );
}

// ── Mobile Cart Drawer ────────────────────────────────────────────────────
function MobileCartDrawer({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <div
        style={{ flex: 1, background: "rgba(0,0,0,0.7)" }}
        onClick={onClose}
      />
      <div
        style={{
          background: BG_SIDEBAR,
          borderTop: `1px solid ${GOLD_MED}`,
          maxHeight: "85vh",
          overflowY: "auto",
          padding: "24px 5% 40px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <div style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: TEXT_MUTED }}>
            Your Cart
          </div>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              color: TEXT_MUTED,
              fontSize: "22px",
              cursor: "pointer",
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────
const RECURRING = SERVICES.filter((s) => s.type === "recurring");
const ONETIME = SERVICES.filter((s) => s.type === "onetime");

export default function ShopPage() {
  const cart = useCart();
  const formRef = useRef(null);
  const [formVisible, setFormVisible] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [addedAlert, setAddedAlert] = useState(null); // { name, message }

  function handleToggle(id) {
    cart.addItem(id);
  }

  function handleCheckout() {
    setFormVisible(true);
    setDrawerOpen(false);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

  function handleAddUpsell(id) {
    const svc = SERVICES.find((s) => s.id === id);
    cart.addItem(id);
    if (svc) {
      setAddedAlert({ name: svc.name });
      setTimeout(() => setAddedAlert(null), 2500);
    }
  }

  const totalCount = cart.items.length;

  const cartContent = (
    <CartSidebar
      monthlyItems={cart.monthlyItems}
      onetimeItems={cart.onetimeItems}
      monthlyTotal={cart.monthlyTotal}
      onetimeTotal={cart.onetimeTotal}
      showStackUpgrade={cart.showStackUpgrade}
      stackSavings={cart.stackSavings}
      upsells={cart.upsells}
      onRemove={cart.removeItem}
      onUpgrade={cart.upgradeToStack}
      onAddUpsell={handleAddUpsell}
      isEmpty={cart.isEmpty}
      onCheckout={handleCheckout}
    />
  );

  return (
    <main style={{ background: BG_MAIN, paddingTop: "92px" }}>

      {/* Added-to-cart toast */}
      {addedAlert && (
        <div
          style={{
            position: "fixed",
            bottom: "80px",
            right: "24px",
            zIndex: 300,
            background: "#161616",
            border: `1px solid ${GOLD_MED}`,
            padding: "12px 18px",
            fontSize: "14px",
            color: TEXT_PRIMARY,
            maxWidth: "280px",
          }}
        >
          <span style={{ color: GOLD }}>✓</span> {addedAlert.name} added to cart
        </div>
      )}

      {/* Hero */}
      <section
        style={{
          padding: "80px 5% 80px",
          borderBottom: `1px solid rgba(201,168,76,0.15)`,
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "14px", letterSpacing: "1px", color: TEXT_MUTED, marginBottom: "48px" }}>
          <Link href="/" style={{ color: TEXT_MUTED, textDecoration: "none" }} className="hover-gold">Home</Link>
          <span style={{ color: "rgba(201,168,76,0.4)" }}>→</span>
          <span style={{ color: GOLD }}>Shop Services</span>
        </div>

        {/* Eyebrow pill */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(201,168,76,0.08)",
            border: `1px solid ${GOLD_DIM}`,
            padding: "8px 18px",
            fontSize: "12px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: GOLD,
            marginBottom: "32px",
          }}
        >
          McKinney, TX · Veteran-Owned · AI-Powered
        </div>

        <h1
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(52px, 7vw, 96px)",
            fontWeight: 300,
            lineHeight: 1.0,
            letterSpacing: "-0.5px",
            color: TEXT_PRIMARY,
            marginBottom: "24px",
          }}
        >
          Build Your
          <br />
          <em style={{ fontStyle: "italic", color: GOLD }}>Growth Stack.</em>
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: TEXT_MUTED,
            lineHeight: 1.7,
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Select the services your business needs. Our system will guide you to the right
          combination — no sales call required for standard packages.
        </p>
      </section>

      {/* Main: Grid + Cart */}
      <section style={{ padding: "72px 5% 100px" }}>
        <div
          className="shop-layout"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 360px",
            gap: "48px",
            alignItems: "start",
            maxWidth: "1280px",
            margin: "0 auto",
          }}
        >
          {/* Service Grid */}
          <div>
            {/* Recurring */}
            <div style={{ marginBottom: "56px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px" }}>
                <span
                  style={{
                    width: "32px",
                    height: "1px",
                    background: GOLD,
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                <div style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: GOLD }}>
                  Recurring Monthly Services
                </div>
              </div>
              <div
                className="shop-service-grid"
                style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}
              >
                {RECURRING.map((s) => (
                  <ServiceCard
                    key={s.id}
                    service={s}
                    selected={cart.items.includes(s.id)}
                    onToggle={handleToggle}
                  />
                ))}
              </div>
            </div>

            {/* One-time */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px" }}>
                <span
                  style={{
                    width: "32px",
                    height: "1px",
                    background: GOLD,
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                <div style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: GOLD }}>
                  One-Time Projects
                </div>
              </div>
              <div
                className="shop-service-grid"
                style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}
              >
                {ONETIME.map((s) => (
                  <ServiceCard
                    key={s.id}
                    service={s}
                    selected={cart.items.includes(s.id)}
                    onToggle={handleToggle}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Cart — desktop */}
          <div
            className="shop-cart-desktop"
            style={{ position: "sticky", top: "108px" }}
          >
            {cartContent}
          </div>
        </div>
      </section>

      {/* Intake Form */}
      {formVisible && (
        <section
          ref={formRef}
          style={{
            padding: "80px 5% 100px",
            background: "#0e0e0e",
            borderTop: `1px solid rgba(201,168,76,0.15)`,
          }}
        >
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div style={{ marginBottom: "48px" }}>
              <div
                style={{
                  fontSize: "13px",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  color: GOLD,
                  marginBottom: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <span style={{ width: "32px", height: "1px", background: GOLD, display: "inline-block", flexShrink: 0 }} />
                Checkout
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(32px, 4vw, 52px)",
                  fontWeight: 300,
                  color: TEXT_PRIMARY,
                  lineHeight: 1.1,
                  marginBottom: "16px",
                }}
              >
                A Few Details
                <br />
                <em style={{ color: GOLD, fontStyle: "italic" }}>Before We Start.</em>
              </h2>
              <p style={{ fontSize: "16px", color: TEXT_MUTED, lineHeight: 1.7 }}>
                Stan reviews every order before processing. This info helps him prepare for your onboarding call and make sure everything is scoped correctly.
              </p>
            </div>

            {orderPlaced ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "60px 32px",
                  background: BG_SIDEBAR,
                  border: `1px solid ${GOLD_MED}`,
                }}
              >
                <div style={{ fontSize: "36px", marginBottom: "16px" }}>✓</div>
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "28px",
                    fontWeight: 300,
                    color: TEXT_PRIMARY,
                    marginBottom: "12px",
                  }}
                >
                  Stripe checkout opened in a new tab.
                </h3>
                <p style={{ fontSize: "16px", color: TEXT_MUTED, lineHeight: 1.7 }}>
                  Complete your payment there. Once confirmed, Stan will reach out within 24 hours to schedule your onboarding call.
                </p>
              </div>
            ) : (
              <IntakeForm
                cartServices={cart.cartServices}
                monthlyTotal={cart.monthlyTotal}
                onetimeTotal={cart.onetimeTotal}
                onSuccess={() => setOrderPlaced(true)}
              />
            )}
          </div>
        </section>
      )}

      {/* Mobile cart bar + drawer */}
      <MobileCartBar
        count={totalCount}
        monthlyTotal={cart.monthlyTotal}
        onetimeTotal={cart.onetimeTotal}
        onOpen={() => setDrawerOpen(true)}
      />
      <MobileCartDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        {cartContent}
      </MobileCartDrawer>

    </main>
  );
}
