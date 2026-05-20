"use client";
import { useState } from "react";

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

const selectBase = {
  ...inputBase,
  cursor: "pointer",
  appearance: "none",
  WebkitAppearance: "none",
  backgroundImage: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%23C9A84C'/%3E%3C/svg%3E\")",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 14px center",
  paddingRight: "40px",
};

const labelBase = {
  fontSize: "10px",
  letterSpacing: "2px",
  textTransform: "uppercase",
  color: "#9E9A92",
  display: "block",
  marginBottom: "8px",
};

const eyebrow = {
  fontSize: "13px",
  letterSpacing: "4px",
  textTransform: "uppercase",
  color: "#C9A84C",
  marginBottom: "32px",
};

const divider = {
  marginTop: "40px",
  paddingTop: "40px",
  borderTop: "1px solid rgba(201,168,76,0.15)",
};

function fg(e) { e.target.style.borderColor = "#C9A84C"; }
function bg(e) { e.target.style.borderColor = "rgba(201,168,76,0.2)"; }

function Field({ label, error, children }) {
  return (
    <div style={{ marginBottom: "24px" }}>
      <label style={labelBase}>{label}</label>
      {children}
      {error && <p style={{ fontSize: "14px", color: "#e57373", marginTop: "6px" }}>{error}</p>}
    </div>
  );
}

function BudgetLabel() {
  const [show, setShow] = useState(false);
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
      Budget Range
      <span
        style={{ position: "relative", display: "inline-flex", alignItems: "center" }}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onClick={(e) => { e.stopPropagation(); setShow((p) => !p); }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "14px",
            height: "14px",
            borderRadius: "50%",
            border: "1px solid #C9A84C",
            color: "#C9A84C",
            fontSize: "9px",
            fontWeight: 700,
            cursor: "pointer",
            lineHeight: 1,
            letterSpacing: 0,
            textTransform: "none",
            flexShrink: 0,
          }}
        >
          i
        </span>
        {show && (
          <div
            style={{
              position: "absolute",
              bottom: "100%",
              left: "50%",
              transform: "translateX(-50%)",
              background: "#1a1a1a",
              border: "1px solid rgba(201,168,76,0.3)",
              padding: "10px 14px",
              width: "220px",
              fontSize: "14px",
              color: "#9E9A92",
              lineHeight: 1.6,
              letterSpacing: "normal",
              textTransform: "none",
              fontWeight: 400,
              zIndex: 10,
              marginBottom: "4px",
            }}
          >
            We ask this so we can understand your vision and see how to best fit it within your budget.
          </div>
        )}
      </span>
    </span>
  );
}

function MultiCheck({ options, selected, onChange }) {
  const toggle = (v) =>
    onChange(selected.includes(v) ? selected.filter((x) => x !== v) : [...selected, v]);
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "8px" }}>
      {options.map((opt) => {
        const on = selected.includes(opt);
        return (
          <button
            key={opt}
            type="button"
            onClick={() => toggle(opt)}
            style={{
              padding: "10px 14px",
              fontSize: "14px",
              letterSpacing: "0.5px",
              background: on ? "rgba(201,168,76,0.1)" : "#161616",
              border: `1px solid ${on ? "#C9A84C" : "rgba(201,168,76,0.2)"}`,
              color: on ? "#C9A84C" : "#9E9A92",
              cursor: "pointer",
              transition: "all 0.2s",
              textAlign: "left",
              fontFamily: "var(--font-dm-sans)",
              lineHeight: 1.4,
            }}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

function ToggleGroup({ value, onChange, options }) {
  return (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      {options.map(([val, label]) => {
        const on = value === val;
        return (
          <button
            key={val}
            type="button"
            onClick={() => onChange(val)}
            style={{
              padding: "10px 24px",
              fontSize: "14px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              background: on ? "#C9A84C" : "transparent",
              border: `1px solid ${on ? "#C9A84C" : "rgba(201,168,76,0.3)"}`,
              color: on ? "#080808" : "#9E9A92",
              cursor: "pointer",
              transition: "all 0.2s",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

const INITIAL = {
  name: "", business: "", phone: "", email: "", service: "",
  hasWebsite: "", currentUrl: "", currentPlatform: "", pages: [], crmIntegration: "",
  currentTools: [], leadHandling: "", teamSize: "", bottleneck: "",
  contentTypes: [], hasBrandGuide: "", contentPlatforms: [], assetCount: "",
  multipleServices: [], projectDescription: "",
  timeline: "", budget: "", notes: "",
};

function buildDescription(f) {
  const lines = [];
  if (f.service === "Web Design") {
    lines.push("SERVICE: Web Design");
    if (f.hasWebsite) lines.push(`Has existing website: ${f.hasWebsite === "yes" ? "Yes" : "No"}`);
    if (f.hasWebsite === "yes" && f.currentUrl) lines.push(`Current URL: ${f.currentUrl}`);
    if (f.currentPlatform) lines.push(`Current platform: ${f.currentPlatform}`);
    if (f.pages.length) lines.push(`Pages needed: ${f.pages.join(", ")}`);
    if (f.crmIntegration) {
      const labels = { yes: "Yes", no: "No", "not-sure": "Not Sure" };
      lines.push(`CRM/booking integration: ${labels[f.crmIntegration] ?? f.crmIntegration}`);
    }
  } else if (f.service === "CRM & AI Workflows") {
    lines.push("SERVICE: CRM & AI Workflows");
    if (f.currentTools.length) lines.push(`Current tools: ${f.currentTools.join(", ")}`);
    if (f.leadHandling) lines.push(`Lead handling:\n${f.leadHandling}`);
    if (f.teamSize) lines.push(`Team size: ${f.teamSize}`);
    if (f.bottleneck) lines.push(`Biggest bottleneck:\n${f.bottleneck}`);
  } else if (f.service === "Media Production") {
    lines.push("SERVICE: Media Production");
    if (f.contentTypes.length) lines.push(`Content types: ${f.contentTypes.join(", ")}`);
    if (f.hasBrandGuide) lines.push(`Has brand guide: ${f.hasBrandGuide === "yes" ? "Yes" : "No"}`);
    if (f.contentPlatforms.length) lines.push(`Platforms: ${f.contentPlatforms.join(", ")}`);
    if (f.assetCount) lines.push(`Estimated assets: ${f.assetCount}`);
  } else if (f.service === "Multiple Services") {
    lines.push("SERVICE: Multiple Services");
    if (f.multipleServices.length) lines.push(`Which services: ${f.multipleServices.join(", ")}`);
    if (f.projectDescription) lines.push(`Description:\n${f.projectDescription}`);
  }
  if (f.timeline) lines.push(`\nTimeline: ${f.timeline}`);
  if (f.budget) lines.push(`Budget: ${f.budget}`);
  return lines.join("\n");
}

export default function QuoteForm() {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (k, v) => {
    setForm((p) => ({ ...p, [k]: v }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: null }));
  };

  function validate() {
    const e = {};
    if (!form.name.trim())     e.name     = "Required";
    if (!form.business.trim()) e.business = "Required";
    if (!form.phone.trim())    e.phone    = "Required";
    if (!form.email.trim())    e.email    = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.service)         e.service  = "Required";
    if (form.service === "CRM & AI Workflows" && !form.leadHandling.trim()) e.leadHandling = "Required";
    if (form.service === "Multiple Services" && !form.projectDescription.trim()) e.projectDescription = "Required";
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
          name:        form.name,
          business:    form.business,
          phone:       form.phone,
          email:       form.email,
          services:    [form.service],
          description: buildDescription(form),
          message:     form.notes || undefined,
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
        <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "32px", fontWeight: 300, color: "#F5F1E8", marginBottom: "16px" }}>
          Quote request received.
        </h2>
        <p style={{ fontSize: "17px", color: "#9E9A92", lineHeight: 1.8, maxWidth: "360px", margin: "0 auto" }}>
          We will review your details and send a custom quote within one business day.
        </p>
      </div>
    );
  }

  const s = form.service;
  const isWeb   = s === "Web Design";
  const isCRM   = s === "CRM & AI Workflows";
  const isMedia = s === "Media Production";
  const isMulti = s === "Multiple Services";
  const hasService = isWeb || isCRM || isMedia || isMulti;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      style={{ background: "#0e0e0e", border: "1px solid rgba(201,168,76,0.15)", padding: "clamp(28px, 5vw, 48px)" }}
    >
      {/* Contact info */}
      <div style={eyebrow}>Your Information</div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0 24px" }}>
        <div style={{ flex: "1 1 220px", minWidth: 0 }}>
          <Field label="Full Name *" error={errors.name}>
            <input type="text" value={form.name} onChange={(e) => set("name", e.target.value)}
              style={inputBase} onFocus={fg} onBlur={bg} />
          </Field>
        </div>
        <div style={{ flex: "1 1 220px", minWidth: 0 }}>
          <Field label="Business Name *" error={errors.business}>
            <input type="text" value={form.business} onChange={(e) => set("business", e.target.value)}
              style={inputBase} onFocus={fg} onBlur={bg} />
          </Field>
        </div>
        <div style={{ flex: "1 1 220px", minWidth: 0 }}>
          <Field label="Phone Number *" error={errors.phone}>
            <input type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)}
              style={inputBase} onFocus={fg} onBlur={bg} />
          </Field>
        </div>
        <div style={{ flex: "1 1 220px", minWidth: 0 }}>
          <Field label="Email *" error={errors.email}>
            <input type="email" value={form.email} onChange={(e) => set("email", e.target.value)}
              style={inputBase} onFocus={fg} onBlur={bg} />
          </Field>
        </div>
      </div>

      <Field label="Service Needed *" error={errors.service}>
        <select
          value={form.service}
          onChange={(e) => { set("service", e.target.value); set("budget", ""); }}
          style={selectBase} onFocus={fg} onBlur={bg}
        >
          <option value="">Select a service</option>
          <option value="Web Design">Web Design</option>
          <option value="CRM & AI Workflows">CRM &amp; AI Workflows</option>
          <option value="Media Production">Media Production</option>
          <option value="Multiple Services">Multiple Services</option>
        </select>
      </Field>

      {!hasService && (
        <p style={{ fontSize: "14px", color: "rgba(201,168,76,0.4)", fontStyle: "italic" }}>
          Select a service above to continue.
        </p>
      )}

      {/* Web Design */}
      {isWeb && (
        <div style={divider}>
          <div style={eyebrow}>Web Design Details</div>

          <Field label="Do you have an existing website?">
            <ToggleGroup value={form.hasWebsite} onChange={(v) => set("hasWebsite", v)}
              options={[["yes", "Yes"], ["no", "No"]]} />
          </Field>

          {form.hasWebsite === "yes" && (
            <Field label="Current Website URL">
              <input type="url" value={form.currentUrl} onChange={(e) => set("currentUrl", e.target.value)}
                placeholder="https://" style={inputBase} onFocus={fg} onBlur={bg} />
            </Field>
          )}

          <Field label="What platform is your current site on?">
            <select value={form.currentPlatform} onChange={(e) => set("currentPlatform", e.target.value)}
              style={selectBase} onFocus={fg} onBlur={bg}>
              <option value="">Select platform</option>
              <option>WordPress</option>
              <option>Squarespace</option>
              <option>Wix</option>
              <option>Custom</option>
              <option>Not Sure</option>
            </select>
          </Field>

          <Field label="What pages do you need?">
            <MultiCheck
              options={["Home", "About", "Services", "Contact", "Blog", "Portfolio", "Other"]}
              selected={form.pages} onChange={(v) => set("pages", v)}
            />
          </Field>

          <Field label="Do you need a CRM or booking integration?">
            <ToggleGroup value={form.crmIntegration} onChange={(v) => set("crmIntegration", v)}
              options={[["yes", "Yes"], ["no", "No"], ["not-sure", "Not Sure"]]} />
          </Field>
        </div>
      )}

      {/* CRM & AI Workflows */}
      {isCRM && (
        <div style={divider}>
          <div style={eyebrow}>CRM &amp; AI Workflows Details</div>

          <Field label="What tools are you currently using?">
            <MultiCheck
              options={["Spreadsheets", "Gmail / Outlook", "Another CRM", "Scheduling software", "Phone system", "None"]}
              selected={form.currentTools} onChange={(v) => set("currentTools", v)}
            />
          </Field>

          <Field label="How does your team currently handle leads? *" error={errors.leadHandling}>
            <textarea value={form.leadHandling} onChange={(e) => set("leadHandling", e.target.value)}
              rows={4} style={{ ...inputBase, resize: "vertical" }} onFocus={fg} onBlur={bg} />
          </Field>

          <Field label="How many people on your team?">
            <select value={form.teamSize} onChange={(e) => set("teamSize", e.target.value)}
              style={selectBase} onFocus={fg} onBlur={bg}>
              <option value="">Select team size</option>
              <option>Just me</option>
              <option>2 to 5</option>
              <option>6 to 15</option>
              <option>16 or more</option>
            </select>
          </Field>

          <Field label="What is the biggest bottleneck in your current process?">
            <textarea value={form.bottleneck} onChange={(e) => set("bottleneck", e.target.value)}
              rows={3} style={{ ...inputBase, resize: "vertical" }} onFocus={fg} onBlur={bg} />
          </Field>
        </div>
      )}

      {/* Media Production */}
      {isMedia && (
        <div style={divider}>
          <div style={eyebrow}>Media Production Details</div>

          <Field label="What type of content do you need?">
            <MultiCheck
              options={["Photography", "Short-form video", "Social media content", "Google Business Profile photos", "All of the above"]}
              selected={form.contentTypes} onChange={(v) => set("contentTypes", v)}
            />
          </Field>

          <Field label="Do you have an existing brand guide or style preferences?">
            <ToggleGroup value={form.hasBrandGuide} onChange={(v) => set("hasBrandGuide", v)}
              options={[["yes", "Yes"], ["no", "No"]]} />
          </Field>

          <Field label="Where will this content be used?">
            <MultiCheck
              options={["Website", "Google Business Profile", "Instagram", "TikTok", "Facebook", "All platforms"]}
              selected={form.contentPlatforms} onChange={(v) => set("contentPlatforms", v)}
            />
          </Field>

          <Field label="Estimated number of assets needed">
            <select value={form.assetCount} onChange={(e) => set("assetCount", e.target.value)}
              style={selectBase} onFocus={fg} onBlur={bg}>
              <option value="">Select range</option>
              <option>1 to 10</option>
              <option>10 to 25</option>
              <option>25 to 50</option>
              <option>50 or more</option>
              <option>Not Sure</option>
            </select>
          </Field>
        </div>
      )}

      {/* Multiple Services */}
      {isMulti && (
        <div style={divider}>
          <div style={eyebrow}>Multiple Services Details</div>

          <Field label="Which services?">
            <MultiCheck
              options={["Web Design", "CRM & AI Workflows", "Media Production"]}
              selected={form.multipleServices} onChange={(v) => set("multipleServices", v)}
            />
          </Field>

          <Field label="Brief description of what you need *" error={errors.projectDescription}>
            <textarea value={form.projectDescription} onChange={(e) => set("projectDescription", e.target.value)}
              rows={4} style={{ ...inputBase, resize: "vertical" }} onFocus={fg} onBlur={bg} />
          </Field>
        </div>
      )}

      {/* Common ending */}
      {hasService && (
        <div style={divider}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0 24px" }}>
            <div style={{ flex: "1 1 200px", minWidth: 0 }}>
              <Field label="Timeline">
                <select value={form.timeline} onChange={(e) => set("timeline", e.target.value)}
                  style={selectBase} onFocus={fg} onBlur={bg}>
                  <option value="">Select timeline</option>
                  <option>ASAP</option>
                  <option>Within 1 month</option>
                  <option>1 to 3 months</option>
                  <option>No rush</option>
                </select>
              </Field>
            </div>
            <div style={{ flex: "1 1 200px", minWidth: 0 }}>
              <Field label={<BudgetLabel />}>
                <select value={form.budget} onChange={(e) => set("budget", e.target.value)}
                  style={selectBase} onFocus={fg} onBlur={bg}>
                  <option value="">Select range</option>
                  {isWeb && <>
                    <option>Under $2,000</option>
                    <option>$2,000 to $4,000</option>
                    <option>$4,000 to $8,000</option>
                    <option>$8,000 or more</option>
                    <option>Not Sure</option>
                  </>}
                  {isCRM && <>
                    <option>Under $2,500</option>
                    <option>$2,500 to $5,000</option>
                    <option>$5,000 to $8,000</option>
                    <option>$8,000 or more</option>
                    <option>Not Sure</option>
                  </>}
                  {isMedia && <>
                    <option>Under $1,000</option>
                    <option>$1,000 to $2,500</option>
                    <option>$2,500 to $5,000</option>
                    <option>$5,000 or more</option>
                    <option>Not Sure</option>
                  </>}
                  {isMulti && <>
                    <option>Under $5,000</option>
                    <option>$5,000 to $10,000</option>
                    <option>$10,000 or more</option>
                    <option>Not Sure</option>
                  </>}
                </select>
              </Field>
            </div>
          </div>

          <Field label="Additional Notes">
            <textarea
              value={form.notes}
              onChange={(e) => set("notes", e.target.value)}
              rows={3}
              placeholder="Anything else you want us to know"
              style={{ ...inputBase, resize: "vertical" }}
              onFocus={fg} onBlur={bg}
            />
          </Field>

          <button
            type="submit"
            disabled={submitting}
            style={{
              width: "100%",
              padding: "16px",
              background: submitting ? "rgba(201,168,76,0.5)" : "#C9A84C",
              color: "#080808",
              fontSize: "14px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              fontFamily: "var(--font-dm-sans)",
              fontWeight: 500,
              border: "none",
              cursor: submitting ? "not-allowed" : "pointer",
              transition: "background 0.25s",
              marginTop: "8px",
            }}
          >
            {submitting ? "Sending..." : "Submit Quote Request"}
          </button>
        </div>
      )}
    </form>
  );
}
