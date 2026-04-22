import Link from "next/link";
import BookCallButton from "@/components/BookCallButton";
import { services } from "@/lib/serviceData";

const { includes, process } = services["local-seo"];

export default function CityLocalSeoPage({ city, intro }) {
  const faq = [
    {
      q: `How long does local SEO take in ${city}, TX?`,
      a: `Most ${city} businesses start seeing measurable movement in rankings and map pack visibility within 60–90 days. Competitive categories typically take 4–6 months for sustained top rankings.`,
    },
    {
      q: `Do I need a ${city} address to rank in ${city}?`,
      a: `A ${city} address helps significantly for map pack rankings. If you serve ${city} from a nearby location, we can still improve your organic rankings and GBP service area coverage for ${city} searches.`,
    },
    {
      q: `How much does local SEO cost in ${city}, TX?`,
      a: `Clarion Solutions offers local SEO starting at $2,500/month as part of our AI + Local SEO package. Pricing depends on your category competitiveness and goals. We offer a free strategy call before any commitment.`,
    },
    {
      q: `What makes Clarion Solutions different from other ${city} SEO agencies?`,
      a: `We're a veteran-owned agency based in McKinney, TX — not a remote firm or national franchise. We combine local SEO with AI automation, report transparently every month, and work with a limited number of clients so every business gets real attention.`,
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ background: "#080808", paddingTop: "72px" }}>

      {/* Hero */}
      <section style={{ padding: "80px 5% 100px", borderBottom: "1px solid rgba(201,168,76,0.15)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 60% at 70% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

        {/* Breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", letterSpacing: "1px", color: "#9E9A92", marginBottom: "48px" }}>
          <Link href="/" style={{ color: "#9E9A92", textDecoration: "none" }} className="hover-gold">Home</Link>
          <span style={{ color: "rgba(201,168,76,0.4)" }}>→</span>
          <Link href="/services/local-seo" style={{ color: "#9E9A92", textDecoration: "none" }} className="hover-gold">Local SEO</Link>
          <span style={{ color: "rgba(201,168,76,0.4)" }}>→</span>
          <span style={{ color: "#C9A84C" }}>{city}, TX</span>
        </div>

        <div style={{ maxWidth: "800px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "24px", display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ width: "32px", height: "1px", background: "#C9A84C", display: "inline-block", flexShrink: 0 }} />
            Local SEO · {city}, TX
          </div>
          <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(48px, 6vw, 88px)", fontWeight: 300, lineHeight: 1.05, letterSpacing: "-0.5px", color: "#F5F1E8", marginBottom: "32px" }}>
            Local SEO Services
            <br />
            <em style={{ fontStyle: "italic", color: "#C9A84C" }}>in {city}, TX.</em>
          </h1>
          <p style={{ fontSize: "18px", color: "#9E9A92", lineHeight: 1.7, maxWidth: "600px", marginBottom: "48px" }}>
            {intro}
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <BookCallButton className="btn-primary-link">Book a Free Call</BookCallButton>
            <Link href="/services/local-seo" className="btn-ghost-link">View Local SEO Service</Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section style={{ padding: "80px 5% 100px", background: "#0e0e0e" }}>
        <div style={{ marginBottom: "64px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "20px", display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ width: "32px", height: "1px", background: "#C9A84C", display: "inline-block", flexShrink: 0 }} />
            What&apos;s Included
          </div>
          <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 300, color: "#F5F1E8", lineHeight: 1.1 }}>
            Everything You Need.
            <br />
            <em style={{ color: "#C9A84C", fontStyle: "italic" }}>Nothing You Don&apos;t.</em>
          </h2>
        </div>
        <div
          className="service-includes-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1px", background: "rgba(201,168,76,0.15)" }}
        >
          {includes.map((item) => (
            <div key={item.title} className="includes-card" style={{ background: "#0e0e0e", padding: "40px 36px" }}>
              <div style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "12px" }}>
                {item.title}
              </div>
              <p style={{ fontSize: "14px", color: "#9E9A92", lineHeight: 1.8 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: "80px 5% 100px", background: "#080808" }}>
        <div style={{ marginBottom: "64px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "20px", display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ width: "32px", height: "1px", background: "#C9A84C", display: "inline-block", flexShrink: 0 }} />
            Our Process
          </div>
          <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 300, color: "#F5F1E8", lineHeight: 1.1 }}>
            Clear from Day One.
            <br />
            <em style={{ color: "#C9A84C", fontStyle: "italic" }}>No Guesswork.</em>
          </h2>
        </div>
        <div
          className="service-process-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "rgba(201,168,76,0.15)" }}
        >
          {process.map((step) => (
            <div key={step.num} style={{ background: "#080808", padding: "40px 32px" }}>
              <div style={{ fontFamily: "var(--font-bebas)", fontSize: "56px", color: "rgba(201,168,76,0.25)", lineHeight: 1, marginBottom: "20px" }}>
                {step.num}
              </div>
              <div style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "12px" }}>
                {step.title}
              </div>
              <p style={{ fontSize: "14px", color: "#9E9A92", lineHeight: 1.7 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Local Context */}
      <section style={{ padding: "80px 5%", background: "#0e0e0e", borderTop: "1px solid rgba(201,168,76,0.15)" }}>
        <div style={{ maxWidth: "760px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "20px", display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ width: "32px", height: "1px", background: "#C9A84C", display: "inline-block", flexShrink: 0 }} />
            Service Area
          </div>
          <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 300, color: "#F5F1E8", lineHeight: 1.15, marginBottom: "24px" }}>
            Serving {city} and the
            <br />
            <em style={{ color: "#C9A84C", fontStyle: "italic" }}>North Dallas Corridor.</em>
          </h2>
          <p style={{ fontSize: "15px", color: "#9E9A92", lineHeight: 1.8 }}>
            Clarion Solutions is a veteran-owned digital agency based in McKinney, TX. We serve local businesses throughout the North Dallas corridor — including {city}, McKinney, Frisco, Allen, Plano, Anna, Melissa, and Princeton. Every client gets the same team, the same standard, and the same clear reporting every month.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "120px 5%", background: "#080808", borderTop: "1px solid rgba(201,168,76,0.15)", textAlign: "center" }}>
        <div style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "24px" }}>
          Ready to Rank in {city}?
        </div>
        <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 300, color: "#F5F1E8", lineHeight: 1.1, marginBottom: "24px" }}>
          Let&apos;s Get Your Business
          <br />
          <em style={{ color: "#C9A84C", fontStyle: "italic" }}>Found First.</em>
        </h2>
        <p style={{ fontSize: "16px", color: "#9E9A92", lineHeight: 1.8, maxWidth: "480px", margin: "0 auto 48px" }}>
          Book a free strategy call. We&apos;ll audit your current rankings, GBP, and local competitors — and tell you exactly what it takes to own your market in {city}.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <BookCallButton className="btn-primary-link">Book a Free Call</BookCallButton>
          <Link href="/services/local-seo" className="btn-ghost-link">View Local SEO Service</Link>
        </div>
      </section>
    </main>
    </>
  );
}
