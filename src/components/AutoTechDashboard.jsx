"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const TABS = ["Pipeline", "AI Conversation", "Activity Feed", "How It Works"];

const PIPELINE = {
  "New Lead": [
    { name: "Jordan M.", service: "Ceramic Coating", time: "2 min ago", status: "hot" },
    { name: "Sarah T.", service: "Window Tint", time: "18 min ago", status: "new" },
    { name: "Ricky B.", service: "PPF", time: "1 hr ago", status: "new" },
  ],
  "Contacted": [
    { name: "Luis V.", service: "Vinyl Wrap", time: "34 min ago", status: "replied" },
    { name: "Dana K.", service: "Detailing", time: "2 hrs ago", status: "replied" },
  ],
  "Appt Set": [
    { name: "Mike R.", service: "Paint Correction", time: "Fri 10 AM", status: "set" },
    { name: "Brenda L.", service: "Ceramic Coating", time: "Sat 2 PM", status: "set" },
  ],
  "Won": [
    { name: "Carlos G.", service: "Ultimate Armor", amount: "$2,400", status: "won" },
  ],
};

const CONVERSATION = [
  { from: "ai",       text: "Hi! Sorry we missed your call at Apex Auto Detailing. What were you looking to get done?" },
  { from: "customer", text: "Yeah, wanted to ask about ceramic coating for my truck" },
  { from: "ai",       text: "Ceramic coating starts at $499 and protects your paint for years. Want to see available times?" },
  { from: "customer", text: "Sure, what do you have this week?" },
  { from: "ai",       text: "We have Thursday at 10 AM or Saturday at 2 PM open. Which works better?" },
  { from: "customer", text: "Saturday works" },
  { from: "ai",       text: "Perfect — you're booked for Saturday at 2 PM. We'll send a reminder the night before. See you then!" },
];

const ACTIVITY = [
  { icon: "💬", action: "Missed call recovered", detail: "Jordan M. → Ceramic Coating inquiry", time: "2 min ago", accent: true },
  { icon: "📅", action: "Appointment confirmed", detail: "Mike R. → Paint Correction, Fri 10 AM", time: "18 min ago", accent: true },
  { icon: "⭐", action: "Review request sent", detail: "Carlos G. (5-star follow-up)", time: "1 hr ago", accent: false },
  { icon: "📱", action: "Re-engagement SMS sent", detail: "12 inactive leads contacted", time: "3 hrs ago", accent: false },
  { icon: "🔔", action: "New web lead captured", detail: "Dana K. → Detailing inquiry", time: "5 hrs ago", accent: false },
];

const STEPS = [
  { num: "01", title: "Missed Call Detected", desc: "Customer calls your shop. No one answers. The system detects the missed call in real time." },
  { num: "02", title: "AI Texts Back Instantly", desc: "Within seconds, a personalized SMS goes out — friendly, on-brand, asking what they need." },
  { num: "03", title: "AI Qualifies & Books", desc: "The AI detects the service, confirms pricing, and offers real available time slots." },
  { num: "04", title: "You Get Notified", desc: "You receive an instant notification when an appointment is set. The lead is handled." },
];

const statusColor = {
  hot: "#ff4444",
  new: "#C9A84C",
  replied: "#4CAF50",
  set: "#C9A84C",
  won: "#4CAF50",
};

export default function AutoTechDashboard() {
  const [activeTab, setActiveTab] = useState(0);
  const eyebrowRef = useReveal();
  const titleRef = useReveal();
  const dashRef = useReveal();

  return (
    <section className="section-pad" style={{ background: "#0e0e0e" }}>
      <div
        ref={eyebrowRef}
        className="reveal"
        style={{ fontSize: "13px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "20px", display: "flex", alignItems: "center", gap: "16px" }}
      >
        <span style={{ width: "32px", height: "1px", background: "#C9A84C", display: "inline-block", flexShrink: 0 }} />
        AI Automation Platform
      </div>

      <h2
        ref={titleRef}
        className="reveal reveal-delay-1"
        style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(36px, 4.5vw, 68px)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.5px", color: "#F5F1E8", marginBottom: "64px" }}
      >
        Every Missed Call.
        <br />
        <em style={{ fontStyle: "italic", color: "#C9A84C" }}>Recovered Automatically.</em>
      </h2>

      {/* Dashboard frame */}
      <div
        ref={dashRef}
        className="reveal reveal-delay-2"
        style={{ border: "1px solid rgba(201,168,76,0.25)", background: "#0e0e0e", overflow: "hidden" }}
      >
        {/* Chrome bar */}
        <div style={{ background: "#161616", borderBottom: "1px solid rgba(201,168,76,0.15)", padding: "12px 20px", display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ display: "flex", gap: "6px" }}>
            {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
              <div key={i} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c }} />
            ))}
          </div>
          <div style={{ flex: 1, background: "#0e0e0e", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "4px", padding: "4px 12px", fontSize: "12px", color: "#9E9A92", maxWidth: "280px" }}>
            app.apexautodetailing.ai
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#C9A84C", boxShadow: "0 0 8px rgba(201,168,76,0.6)", animation: "pulse 2s infinite" }} />
            <span style={{ fontSize: "11px", color: "#9E9A92", letterSpacing: "1.5px" }}>LIVE</span>
          </div>
        </div>

        {/* Tab bar */}
        <div style={{ display: "flex", borderBottom: "1px solid rgba(201,168,76,0.15)", background: "#161616", overflowX: "auto" }}>
          {TABS.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              style={{
                padding: "14px 24px",
                fontSize: "12px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                fontFamily: "var(--font-dm-sans)",
                fontWeight: 500,
                color: activeTab === i ? "#C9A84C" : "#9E9A92",
                background: "transparent",
                border: "none",
                borderBottom: activeTab === i ? "2px solid #C9A84C" : "2px solid transparent",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "color 0.2s",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div style={{ padding: "clamp(20px, 3vw, 36px)", minHeight: "400px" }}>

          {/* Pipeline */}
          {activeTab === 0 && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(155px, 1fr))", gap: "16px" }}>
              {Object.entries(PIPELINE).map(([stage, leads]) => (
                <div key={stage}>
                  <div style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "#9E9A92", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
                    {stage}
                    <span style={{ background: "rgba(201,168,76,0.12)", color: "#C9A84C", fontSize: "10px", padding: "1px 7px", borderRadius: "10px" }}>{leads.length}</span>
                  </div>
                  {leads.map((lead, i) => (
                    <div key={i} style={{ background: "#161616", border: "1px solid rgba(201,168,76,0.15)", padding: "12px", marginBottom: "8px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6px" }}>
                        <span style={{ fontSize: "13px", color: "#F5F1E8", fontWeight: 500 }}>{lead.name}</span>
                        <div style={{
                          width: "7px", height: "7px", borderRadius: "50%", background: statusColor[lead.status],
                          flexShrink: 0, marginTop: "3px",
                          boxShadow: lead.status === "hot" ? "0 0 6px rgba(255,68,68,0.5)" : undefined,
                        }} />
                      </div>
                      <div style={{ fontSize: "12px", color: "#C9A84C", marginBottom: "4px" }}>{lead.service}</div>
                      <div style={{ fontSize: "11px", color: "#9E9A92" }}>{lead.amount || lead.time}</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* AI Conversation */}
          {activeTab === 1 && (
            <div style={{ maxWidth: "460px", margin: "0 auto" }}>
              <div style={{ background: "#161616", border: "1px solid rgba(201,168,76,0.2)", overflow: "hidden" }}>
                <div style={{ background: "#202020", padding: "14px 18px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "32px", height: "32px", background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-bebas)", fontSize: "13px", color: "#C9A84C", letterSpacing: "1px", flexShrink: 0 }}>
                    APX
                  </div>
                  <div>
                    <div style={{ fontSize: "13px", color: "#F5F1E8", fontWeight: 500 }}>Apex Auto Detailing</div>
                    <div style={{ fontSize: "11px", color: "#4CAF50", display: "flex", alignItems: "center", gap: "5px" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#4CAF50", display: "inline-block" }} />
                      AI Response Active
                    </div>
                  </div>
                </div>
                <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {CONVERSATION.map((msg, i) => (
                    <div key={i} style={{ display: "flex", justifyContent: msg.from === "ai" ? "flex-start" : "flex-end" }}>
                      <div style={{
                        maxWidth: "78%", padding: "10px 14px",
                        background: msg.from === "ai" ? "#202020" : "rgba(201,168,76,0.12)",
                        border: `1px solid ${msg.from === "ai" ? "rgba(255,255,255,0.06)" : "rgba(201,168,76,0.3)"}`,
                        fontSize: "13px", lineHeight: 1.65,
                        color: msg.from === "ai" ? "#F5F1E8" : "#E2C97E",
                        borderRadius: msg.from === "ai" ? "2px 10px 10px 2px" : "10px 2px 2px 10px",
                      }}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p style={{ textAlign: "center", marginTop: "14px", fontSize: "11px", color: "#9E9A92", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                AI handled this while you were with a customer
              </p>
            </div>
          )}

          {/* Activity Feed */}
          {activeTab === 2 && (
            <div style={{ maxWidth: "580px" }}>
              {ACTIVITY.map((a, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "14px", padding: "16px 0", borderBottom: i < ACTIVITY.length - 1 ? "1px solid rgba(201,168,76,0.1)" : "none" }}>
                  <div style={{ width: "36px", height: "36px", background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", flexShrink: 0 }}>
                    {a.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "14px", color: a.accent ? "#F5F1E8" : "#9E9A92", fontWeight: a.accent ? 500 : 400, marginBottom: "2px" }}>{a.action}</div>
                    <div style={{ fontSize: "12px", color: "#9E9A92" }}>{a.detail}</div>
                  </div>
                  <div style={{ fontSize: "11px", color: "#9E9A92", whiteSpace: "nowrap", letterSpacing: "0.5px", flexShrink: 0 }}>{a.time}</div>
                </div>
              ))}
            </div>
          )}

          {/* How It Works */}
          {activeTab === 3 && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "32px" }}>
              {STEPS.map((step) => (
                <div key={step.num}>
                  <div style={{ fontFamily: "var(--font-bebas)", fontSize: "52px", color: "rgba(201,168,76,0.2)", lineHeight: 1, marginBottom: "14px", letterSpacing: "2px" }}>
                    {step.num}
                  </div>
                  <h4 style={{ fontFamily: "var(--font-cormorant)", fontSize: "22px", fontWeight: 600, color: "#F5F1E8", marginBottom: "10px" }}>
                    {step.title}
                  </h4>
                  <p style={{ fontSize: "15px", color: "#9E9A92", lineHeight: 1.75 }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
