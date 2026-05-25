"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const SHOP = {
  name: "Apex Auto Detailing",
  address: "123 Commerce Dr",
  city: "McKinney, TX",
  phone: "(469) 555-0100",
  email: "info@apexautodetailing.com",
  hours: [
    { days: "Monday – Saturday", time: "9:00 AM – 6:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  services: [
    { name: "Ceramic Coating", price: "$499", tag: "most popular" },
    { name: "Paint Protection Film", price: "$399", tag: "" },
    { name: "Window Tint", price: "$199", tag: "" },
    { name: "Vinyl Wrap", price: "$799", tag: "" },
    { name: "Paint Correction", price: "$299", tag: "" },
    { name: "Ultimate Armor", price: "Custom quote", tag: "flagship" },
    { name: "Detailing", price: "$149", tag: "" },
  ],
};

const TABS = ["Shop Setup", "Customer Demo"];

function ShopSetupTab() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", alignItems: "start" }} className="shop-setup-grid">
      {/* Left: Profile */}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {/* Shop identity */}
        <div style={{ border: "1px solid rgba(201,168,76,0.2)", padding: "28px 32px", background: "#161616" }}>
          <div style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "20px" }}>
            Business Profile
          </div>
          <div style={{
            width: "56px", height: "56px",
            background: "rgba(201,168,76,0.12)",
            border: "1px solid rgba(201,168,76,0.3)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--font-bebas)", fontSize: "18px", color: "#C9A84C", letterSpacing: "2px",
            marginBottom: "18px",
          }}>
            APX
          </div>
          <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "26px", color: "#F5F1E8", fontWeight: 600, marginBottom: "4px" }}>
            {SHOP.name}
          </div>
          <div style={{ fontSize: "13px", color: "#9E9A92", lineHeight: 1.8 }}>
            {SHOP.address}<br />
            {SHOP.city}
          </div>
          <div style={{ height: "1px", background: "rgba(201,168,76,0.15)", margin: "18px 0" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              { label: "Phone", value: SHOP.phone },
              { label: "Email", value: SHOP.email },
            ].map(({ label, value }) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", color: "#9E9A92" }}>{label}</span>
                <span style={{ fontSize: "13px", color: "#F5F1E8" }}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hours */}
        <div style={{ border: "1px solid rgba(201,168,76,0.2)", padding: "24px 32px", background: "#161616" }}>
          <div style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "18px" }}>
            Business Hours
          </div>
          {SHOP.hours.map(({ days, time }) => (
            <div key={days} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "10px", marginBottom: "10px", borderBottom: "1px solid rgba(201,168,76,0.08)" }}>
              <span style={{ fontSize: "13px", color: "#9E9A92" }}>{days}</span>
              <span style={{ fontSize: "13px", color: time === "Closed" ? "#9E9A92" : "#F5F1E8" }}>{time}</span>
            </div>
          ))}
          <div style={{ marginTop: "6px", fontSize: "12px", color: "#C9A84C", display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4CAF50", display: "inline-block" }} />
            Open now — AI responds 24/7
          </div>
        </div>
      </div>

      {/* Right: Service menu */}
      <div style={{ border: "1px solid rgba(201,168,76,0.2)", padding: "28px 32px", background: "#161616" }}>
        <div style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "20px" }}>
          Service Menu — Loaded into AI
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {SHOP.services.map((svc, i) => (
            <div
              key={svc.name}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "14px 0",
                borderBottom: i < SHOP.services.length - 1 ? "1px solid rgba(201,168,76,0.1)" : "none",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "14px", color: "#F5F1E8" }}>{svc.name}</span>
                {svc.tag && (
                  <span style={{
                    fontSize: "9px", letterSpacing: "1.5px", textTransform: "uppercase",
                    color: "#080808", background: "#C9A84C",
                    padding: "2px 7px", lineHeight: "16px",
                  }}>
                    {svc.tag}
                  </span>
                )}
              </div>
              <span style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "18px",
                color: "#C9A84C",
                letterSpacing: "1px",
              }}>
                {svc.price}
              </span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "28px", padding: "16px 20px", background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.15)" }}>
          <div style={{ fontSize: "12px", color: "#9E9A92", lineHeight: 1.8 }}>
            This service list, pricing, and business hours are what the AI references when a customer asks about services or wants to book. Any changes here update the AI immediately.
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DemoPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Nav />
      <main style={{ background: "#080808", minHeight: "100vh" }}>
        {/* Hero */}
        <div style={{ padding: "clamp(80px, 10vw, 140px) 5% clamp(40px, 5vw, 64px)" }}>
          <div style={{ fontSize: "13px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "20px", display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ width: "32px", height: "1px", background: "#C9A84C", display: "inline-block", flexShrink: 0 }} />
            Interactive Demo
          </div>
          <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(40px, 5.5vw, 80px)", fontWeight: 300, lineHeight: 1.05, letterSpacing: "-0.5px", color: "#F5F1E8", marginBottom: "20px" }}>
            See It Work Before
            <br />
            <em style={{ fontStyle: "italic", color: "#C9A84C" }}>You Buy Anything.</em>
          </h1>
          <p style={{ maxWidth: "560px", fontSize: "17px", color: "#9E9A92", lineHeight: 1.8 }}>
            Pre-loaded with a real auto detailing shop. Review the setup, then step into the customer demo and see how the AI handles a missed call — from greeting to booking.
          </p>
        </div>

        {/* Tab container */}
        <div style={{ padding: "0 5% clamp(80px, 10vw, 140px)" }}>
          {/* Tab bar */}
          <div style={{ display: "flex", borderBottom: "1px solid rgba(201,168,76,0.2)", marginBottom: "40px" }}>
            {TABS.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                style={{
                  padding: "16px 32px",
                  fontSize: "13px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-dm-sans)",
                  fontWeight: 500,
                  color: activeTab === i ? "#C9A84C" : "#9E9A92",
                  background: "transparent",
                  border: "none",
                  borderBottom: activeTab === i ? "2px solid #C9A84C" : "2px solid transparent",
                  marginBottom: "-1px",
                  cursor: "pointer",
                  transition: "color 0.2s",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab content */}
          {activeTab === 0 && <ShopSetupTab />}

          {activeTab === 1 && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px, 6vw, 80px)", alignItems: "start" }} className="customer-demo-grid">
              {/* Left: context */}
              <div>
                <div style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "16px" }}>
                  Scenario
                </div>
                <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 300, color: "#F5F1E8", lineHeight: 1.15, marginBottom: "20px" }}>
                  Missed Call
                  <br />
                  <em style={{ fontStyle: "italic", color: "#C9A84C" }}>Recovery</em>
                </h2>
                <p style={{ fontSize: "16px", color: "#9E9A92", lineHeight: 1.8, marginBottom: "32px" }}>
                  A customer called Apex Auto Detailing — no one picked up. The AI texted back within seconds. You are that customer.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {[
                    { step: "01", text: "Type naturally — say what service you want in your own words" },
                    { step: "02", text: "The AI detects your intent and shows available time slots" },
                    { step: "03", text: "Click a time slot to complete the booking" },
                  ].map(({ step, text }) => (
                    <div key={step} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                      <div style={{
                        fontFamily: "var(--font-bebas)", fontSize: "16px", color: "rgba(201,168,76,0.5)",
                        letterSpacing: "1px", flexShrink: 0, width: "28px", paddingTop: "1px",
                      }}>
                        {step}
                      </div>
                      <p style={{ fontSize: "14px", color: "#9E9A92", lineHeight: 1.7 }}>{text}</p>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: "36px", padding: "18px 24px", border: "1px solid rgba(201,168,76,0.15)", background: "rgba(201,168,76,0.03)" }}>
                  <div style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "#9E9A92", marginBottom: "10px" }}>
                    Try saying
                  </div>
                  {[
                    '"I need PPF on the front of my car"',
                    '"What\'s the difference between ceramic and PPF?"',
                    '"I want to get my windows tinted"',
                  ].map((ex) => (
                    <div key={ex} style={{ fontSize: "13px", color: "#C9A84C", padding: "6px 0", borderBottom: "1px solid rgba(201,168,76,0.08)", fontStyle: "italic" }}>
                      {ex}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: chat */}
              <div style={{ position: "sticky", top: "24px" }}>
                <ChatWidget />
                <p style={{ marginTop: "12px", fontSize: "11px", color: "#9E9A92", letterSpacing: "0.5px", textAlign: "center" }}>
                  Scripted demo — no live backend · Restart anytime after booking
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
