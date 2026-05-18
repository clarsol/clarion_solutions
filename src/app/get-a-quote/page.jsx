import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BookCallButton from "@/components/BookCallButton";
import QuoteForm from "@/components/QuoteForm";
import Link from "next/link";

const SITE_URL = "https://www.clarionsol.com";

export const metadata = {
  title: "Get a Quote | Clarion Solutions | McKinney TX",
  description: "Request a custom quote for web design, CRM & AI workflows, or media production from Clarion Solutions. Veteran-owned digital agency serving North Dallas.",
  alternates: { canonical: `${SITE_URL}/get-a-quote` },
  openGraph: {
    title: "Get a Quote | Clarion Solutions | McKinney TX",
    description: "Request a custom quote for web design, CRM & AI workflows, or media production from Clarion Solutions. Veteran-owned digital agency serving North Dallas.",
    url: `${SITE_URL}/get-a-quote`,
    siteName: "Clarion Solutions",
    locale: "en_US",
    type: "website",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "Get a Quote | Clarion Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get a Quote | Clarion Solutions | McKinney TX",
    description: "Request a custom quote for web design, CRM & AI workflows, or media production from Clarion Solutions. Veteran-owned digital agency serving North Dallas.",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${SITE_URL}/get-a-quote`,
      url: `${SITE_URL}/get-a-quote`,
      name: "Get a Quote | Clarion Solutions | McKinney TX",
      description: "Request a custom quote for web design, CRM & AI workflows, or media production from Clarion Solutions. Veteran-owned digital agency serving North Dallas.",
      publisher: { "@id": `${SITE_URL}/#business` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Get a Quote", item: `${SITE_URL}/get-a-quote` },
      ],
    },
  ],
};

const nextSteps = [
  {
    num: "01",
    title: "We review your request",
    desc: "Within one business day of receiving your quote request, we review the details and assess scope.",
  },
  {
    num: "02",
    title: "We send your quote",
    desc: "You receive a clear, itemized quote with timeline and pricing. No vague estimates.",
  },
  {
    num: "03",
    title: "You decide",
    desc: "No pressure, no follow-up harassment. If it is a fit, we move forward. If not, no hard feelings.",
  },
];

export default function GetAQuotePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Nav />
      <main style={{ background: "#080808", paddingTop: "92px" }}>

        {/* Hero */}
        <section style={{ padding: "80px 5% 100px", borderBottom: "1px solid rgba(201,168,76,0.15)", position: "relative", overflow: "hidden", textAlign: "center" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "12px", letterSpacing: "1px", color: "#9E9A92", marginBottom: "48px" }}>
            <Link href="/" style={{ color: "#9E9A92", textDecoration: "none" }} className="hover-gold">Home</Link>
            <span style={{ color: "rgba(201,168,76,0.4)" }}>→</span>
            <span style={{ color: "#C9A84C" }}>Get a Quote</span>
          </div>

          <div style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "24px" }}>
            Get a Quote · Clarion Solutions
          </div>
          <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(48px, 6vw, 88px)", fontWeight: 300, lineHeight: 1.05, color: "#F5F1E8", marginBottom: "32px", letterSpacing: "-0.5px" }}>
            Tell Us About
            <br />
            <em style={{ fontStyle: "italic", color: "#C9A84C" }}>Your Project.</em>
          </h1>
          <p style={{ fontSize: "18px", color: "#9E9A92", lineHeight: 1.7, maxWidth: "600px", margin: "0 auto" }}>
            Answer a few questions and we will put together a custom quote within one business day. No obligation, no pressure.
          </p>
        </section>

        {/* Form */}
        <section style={{ padding: "100px 5%", background: "#080808" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <QuoteForm />
          </div>
        </section>

        {/* What Happens Next */}
        <section style={{ padding: "100px 5%", background: "#0e0e0e", borderTop: "1px solid rgba(201,168,76,0.15)", textAlign: "center" }}>
          <div style={{ maxWidth: "960px", margin: "0 auto" }}>
            <div style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "20px", display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
              <span style={{ width: "32px", height: "1px", background: "#C9A84C", display: "inline-block", flexShrink: 0 }} />
              What Happens Next
              <span style={{ width: "32px", height: "1px", background: "#C9A84C", display: "inline-block", flexShrink: 0 }} />
            </div>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 300, color: "#F5F1E8", lineHeight: 1.1, marginBottom: "72px" }}>
              Simple.
              <br />
              <em style={{ color: "#C9A84C", fontStyle: "italic" }}>No surprises.</em>
            </h2>

            <div
              className="next-steps-grid"
              style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "rgba(201,168,76,0.15)", textAlign: "left" }}
            >
              {nextSteps.map((step) => (
                <div key={step.num} style={{ background: "#0e0e0e", padding: "40px 32px" }}>
                  <div style={{ fontFamily: "var(--font-bebas)", fontSize: "13px", letterSpacing: "3px", color: "rgba(201,168,76,0.4)", marginBottom: "16px" }}>
                    {step.num}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "22px", fontWeight: 300, color: "#F5F1E8", marginBottom: "12px", lineHeight: 1.2 }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#9E9A92", lineHeight: 1.8 }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "120px 5%", background: "#080808", borderTop: "1px solid rgba(201,168,76,0.15)", textAlign: "center" }}>
          <div style={{ maxWidth: "640px", margin: "0 auto" }}>
            <div style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "24px" }}>
              Prefer a Conversation?
            </div>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 300, color: "#F5F1E8", lineHeight: 1.1, marginBottom: "24px" }}>
              Prefer to Talk First?
              <br />
              <em style={{ color: "#C9A84C", fontStyle: "italic" }}>Book a Call.</em>
            </h2>
            <p style={{ fontSize: "16px", color: "#9E9A92", lineHeight: 1.8, marginBottom: "48px" }}>
              Skip the form and book a free 20-minute call instead. We can scope your project together in real time.
            </p>
            <BookCallButton className="btn-primary-link">Book a Free Call</BookCallButton>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
