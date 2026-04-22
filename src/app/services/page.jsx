import Link from "next/link";
import BookCallButton from "@/components/BookCallButton";

const SITE_URL = "https://clarionsol.com";

export const metadata = {
  title: "Digital Marketing Services McKinney TX | AI, SEO, Web Design | Clarion Solutions",
  description: "AI automation, local SEO, web design, media production, and custom AI workflows for North Dallas businesses. View all Clarion services and pricing.",
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: "Digital Marketing Services McKinney TX | AI, SEO, Web Design | Clarion Solutions",
    description: "AI automation, local SEO, web design, media production, and custom AI workflows for North Dallas businesses.",
    url: `${SITE_URL}/services`,
    siteName: "Clarion Solutions",
    locale: "en_US",
    type: "website",
  },
};

const allServices = [
  {
    num: "01",
    name: "AI Foundation",
    desc: "Automated lead capture, missed call text-back, follow-up sequences, and appointment reminders.",
    price: "$1,500/mo",
    href: "/services/ai-automation",
  },
  {
    num: "02",
    name: "AI + Local SEO",
    desc: "AI automation plus full local SEO management, GBP optimization, and monthly performance reporting.",
    price: "$2,500/mo",
    href: "/services/local-seo",
  },
  {
    num: "03",
    name: "Clarion Complete Stack",
    desc: "The complete done-for-you system — AI automation, local SEO, content production, and media.",
    price: "$4,500/mo",
    href: "/services/clarion-complete-stack",
  },
  {
    num: "04",
    name: "Web Design",
    desc: "Custom Next.js websites built to load fast, rank on Google, and convert visitors into customers.",
    price: "Custom",
    href: "/services/web-design",
  },
  {
    num: "05",
    name: "Media Production",
    desc: "Professional photography and short-form video built for Google, social media, and your website.",
    price: "Custom",
    href: "/services/media-production",
  },
  {
    num: "06",
    name: "AI Workflows",
    desc: "Custom AI workflows that connect your tools, automate your operations, and eliminate manual work.",
    price: "From $2,500",
    href: "/services/ai-workflows",
  },
];

export default function ServicesPage() {
  return (
    <main style={{ background: "#080808", paddingTop: "72px" }}>

      {/* Hero */}
      <section style={{ padding: "80px 5% 100px", borderBottom: "1px solid rgba(201,168,76,0.15)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 60% at 70% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "800px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "24px", display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ width: "32px", height: "1px", background: "#C9A84C", display: "inline-block", flexShrink: 0 }} />
            What We Do
          </div>
          <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(48px, 6vw, 88px)", fontWeight: 300, lineHeight: 1.05, color: "#F5F1E8", marginBottom: "24px", letterSpacing: "-0.5px" }}>
            Digital Marketing Services
            <br />
            <em style={{ fontStyle: "italic", color: "#C9A84C" }}>in McKinney, TX.</em>
          </h1>
          <p style={{ fontSize: "17px", color: "#9E9A92", lineHeight: 1.7, maxWidth: "560px" }}>
            Six services — from AI automation and local SEO to custom websites and media production — all built to work together and available under one contract.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section style={{ padding: "80px 5% 120px" }}>
        <div
          className="services-overview-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "rgba(201,168,76,0.15)",
          }}
        >
          {allServices.map((s) => (
            <Link key={s.num} href={s.href} style={{ textDecoration: "none", display: "flex" }}>
              <div
                className="service-overview-card"
                style={{
                  background: "#080808",
                  padding: "44px 36px",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "background 0.25s",
                  cursor: "pointer",
                }}
              >
                <div style={{ fontFamily: "var(--font-bebas)", fontSize: "13px", letterSpacing: "3px", color: "rgba(201,168,76,0.35)", marginBottom: "20px" }}>
                  {s.num}
                </div>
                <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(22px, 2.5vw, 30px)", fontWeight: 400, color: "#F5F1E8", marginBottom: "12px", lineHeight: 1.2, transition: "color 0.25s" }}>
                  {s.name}
                </h2>
                <p style={{ fontSize: "14px", color: "#9E9A92", lineHeight: 1.7, flexGrow: 1, marginBottom: "28px" }}>
                  {s.desc}
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "var(--font-bebas)", fontSize: "22px", color: "#C9A84C", letterSpacing: "1px" }}>
                    {s.price}
                  </span>
                  <span style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "#C9A84C" }}>
                    Learn More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 5%", background: "#0e0e0e", borderTop: "1px solid rgba(201,168,76,0.15)", textAlign: "center" }}>
        <div style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "24px" }}>
          Not Sure Where to Start?
        </div>
        <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 300, color: "#F5F1E8", lineHeight: 1.1, marginBottom: "24px" }}>
          Let&apos;s Figure It Out
          <br />
          <em style={{ color: "#C9A84C", fontStyle: "italic" }}>Together.</em>
        </h2>
        <p style={{ fontSize: "16px", color: "#9E9A92", lineHeight: 1.8, maxWidth: "480px", margin: "0 auto 40px" }}>
          Book a free 30-minute strategy call. We&apos;ll look at where you are, share what we see, and tell you honestly what makes the most sense.
        </p>
        <BookCallButton className="btn-primary-link">
          Book a Free Call
        </BookCallButton>
      </section>

    </main>
  );
}
