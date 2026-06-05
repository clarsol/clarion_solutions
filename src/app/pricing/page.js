import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BookCallButton from "@/components/BookCallButton";

const SITE_URL = "https://www.clarionsol.com";

export const metadata = {
  title: "Pricing | Clarion Solutions | McKinney, TX",
  description:
    "Transparent pricing for AI automation, local SEO, web design, media production, and CRM workflows. No hidden fees. North Dallas businesses, McKinney TX.",
  alternates: { canonical: `${SITE_URL}/pricing` },
  openGraph: {
    title: "Pricing | Clarion Solutions | McKinney, TX",
    description:
      "Transparent pricing for AI automation, local SEO, web design, media production, and CRM workflows. No hidden fees.",
    url: `${SITE_URL}/pricing`,
    siteName: "Clarion Solutions",
    locale: "en_US",
    type: "website",
  },
};

const services = [
  {
    slug: "ai-automation",
    name: "AI Automation",
    desc: "AI lead capture, missed call text-back, automated follow-up, and appointment reminders running 24/7.",
    price: "From $1,500/mo",
  },
  {
    slug: "local-seo",
    name: "Local SEO & AEO",
    desc: "Google Business Profile management, local keyword targeting, citation building, and monthly content.",
    price: "From $750/mo",
  },
  {
    slug: "clarion-complete-stack",
    name: "Clarion Complete Stack",
    desc: "The done-for-you system: AI automation, local SEO, content production, and professional media under one contract.",
    price: "$4,500/mo",
  },
  {
    slug: "ai-workflows",
    name: "CRM & AI Workflows",
    desc: "Custom CRM systems built around your business with pipeline management, automated follow-ups, and tool integration.",
    price: "From $2,500",
  },
  {
    slug: "web-design",
    name: "Web Design",
    desc: "Custom Next.js websites built to load fast, rank on Google, and convert visitors into customers. Starter from $800 · Pro from $2,000 · Maintenance $200/mo.",
    price: "From $800",
  },
  {
    slug: "media-production",
    name: "Media Production",
    desc: "Professional photography and short-form video built for your Google Business Profile, social media, and website.",
    price: "Custom",
  },
];

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main style={{ background: "#080808", paddingTop: "92px" }}>

        {/* Single shared container for hero + pricing list */}
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px" }}>

          {/* Hero */}
          <section style={{ padding: "80px 0 100px", borderBottom: "1px solid rgba(201,168,76,0.15)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", letterSpacing: "1px", color: "#9E9A92", marginBottom: "40px" }}>
              <Link href="/" style={{ color: "#9E9A92", textDecoration: "none" }} className="hover-gold">Home</Link>
              <span style={{ color: "rgba(201,168,76,0.4)" }}>→</span>
              <span style={{ color: "#C9A84C" }}>Pricing</span>
            </div>
            <div style={{ fontSize: "13px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "24px" }}>
              What It Costs
            </div>
            <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(48px, 6vw, 88px)", fontWeight: 300, lineHeight: 1.05, color: "#F5F1E8", marginBottom: "24px", letterSpacing: "-0.5px" }}>
              Transparent Pricing.
              <br />
              <em style={{ fontStyle: "italic", color: "#C9A84C" }}>No Surprises.</em>
            </h1>
            <p style={{ fontSize: "17px", color: "#9E9A92", lineHeight: 1.7 }}>
              Every service is priced clearly. Click any service below to see full package details on its service page.
            </p>
          </section>

          {/* Pricing list */}
          <section style={{ padding: "80px 0 0" }}>
            {services.map((s, i) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}#pricing`}
                style={{ textDecoration: "none", display: "block" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "32px",
                    padding: "36px 0",
                    borderBottom: "1px solid rgba(201,168,76,0.12)",
                    transition: "background 0.2s",
                  }}
                  className="pricing-row"
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "13px", letterSpacing: "3px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "8px" }}>
                      {s.name}
                    </div>
                    <p style={{ fontSize: "16px", color: "#9E9A92", lineHeight: 1.6, margin: 0 }}>
                      {s.desc}
                    </p>
                  </div>
                  <div style={{ flexShrink: 0, textAlign: "right" }}>
                    <div style={{ fontFamily: "var(--font-bebas)", fontSize: "28px", color: "#F5F1E8", letterSpacing: "1px", lineHeight: 1 }}>
                      {s.price}
                    </div>
                    <div style={{ fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", color: "#C9A84C", marginTop: "6px" }}>
                      See Details →
                    </div>
                  </div>
                </div>
              </Link>
            ))}

            {/* Total Online Presence Takeover — Featured Card */}
            <div style={{ paddingTop: "48px", paddingBottom: "120px" }}>
              <div
                style={{
                  background: "#C9A84C",
                  padding: "48px 40px",
                }}
              >
                {/* Badge */}
                <div
                  style={{
                    display: "inline-block",
                    fontSize: "10px",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    background: "#080808",
                    color: "#C9A84C",
                    padding: "5px 14px",
                    marginBottom: "28px",
                    fontFamily: "var(--font-dm-sans)",
                    fontWeight: 500,
                  }}
                >
                  TOTAL DOMINATION
                </div>

                <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 300, color: "#080808", lineHeight: 1.0, letterSpacing: "-0.5px", marginBottom: "8px" }}>
                  Total Online Presence Takeover
                </div>

                <div style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(44px, 6vw, 64px)", color: "#080808", lineHeight: 1, marginBottom: "6px", letterSpacing: "2px" }}>
                  $9,500
                </div>
                <div style={{ fontSize: "14px", color: "rgba(8,8,8,0.6)", letterSpacing: "0.5px", marginBottom: "32px" }}>
                  per month · $3,000 ad spend included · No setup fee · Cancel after 3-month minimum
                </div>

                {/* Full bullet list */}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "36px" }}>
                  {[
                    "Everything in Clarion Complete Stack",
                    "Monthly on-site media shoot (photos + video)",
                    "Short-form video editing (Reels, TikTok, Shorts)",
                    "Social media management (IG + FB + TikTok)",
                    "Caption writing + hashtag strategy",
                    "Content calendar and posting schedule",
                    "DM and comment monitoring",
                    "Google Ads management",
                    "Meta Ads management",
                    "TikTok Ads management",
                    "$3,000/mo ad spend included",
                    "Landing page optimization",
                    "Retargeting setup and management",
                    "Weekly performance optimization",
                    "Unified performance dashboard",
                    "Dedicated point of contact",
                  ].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "14px", fontSize: "15px", color: "#080808", lineHeight: 1.5 }}>
                      <span style={{ width: "16px", height: "1px", background: "#080808", flexShrink: 0, display: "inline-block", marginTop: "10px" }} />
                      {item}
                    </div>
                  ))}
                </div>

                <Link
                  href="/shop"
                  style={{
                    display: "inline-block",
                    padding: "14px 32px",
                    fontSize: "13px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-dm-sans)",
                    fontWeight: 600,
                    color: "#C9A84C",
                    background: "#080808",
                    border: "1px solid #080808",
                    textDecoration: "none",
                  }}
                >
                  Shop Services →
                </Link>
              </div>
            </div>
          </section>

        </div>

        {/* CTA — full-width background so it lives outside the shared wrapper */}
        <section style={{ padding: "100px 24px", background: "#0e0e0e", borderTop: "1px solid rgba(201,168,76,0.15)", textAlign: "center" }}>
          <div style={{ fontSize: "13px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "24px" }}>
            Not Sure What You Need?
          </div>
          <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 300, color: "#F5F1E8", lineHeight: 1.1, marginBottom: "24px" }}>
            Book a Free Call.
            <br />
            <em style={{ color: "#C9A84C", fontStyle: "italic" }}>No Commitment.</em>
          </h2>
          <p style={{ fontSize: "18px", color: "#9E9A92", lineHeight: 1.8, maxWidth: "480px", margin: "0 auto 40px" }}>
            We&apos;ll look at your business, tell you honestly what makes sense, and give you a clear number before anything starts.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <BookCallButton className="btn-primary-link">Book a Free Call</BookCallButton>
            <Link href="/services" className="btn-ghost-link">All Services</Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
