import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BookCallButton from "@/components/BookCallButton";
import ContactPageForm from "@/components/ContactPageForm";
import Link from "next/link";

const SITE_URL = "https://www.clarionsol.com";

export const metadata = {
  title: "Contact Clarion Solutions | McKinney TX Digital Marketing Agency",
  description:
    "Get in touch with Clarion Solutions. Book a free strategy call or send us a message. Veteran-owned digital marketing agency serving McKinney and North Dallas.",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Contact Clarion Solutions | McKinney TX Digital Marketing Agency",
    description:
      "Get in touch with Clarion Solutions. Book a free strategy call or send us a message. Veteran-owned digital marketing agency serving McKinney and North Dallas.",
    url: `${SITE_URL}/contact`,
    siteName: "Clarion Solutions",
    locale: "en_US",
    type: "website",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "Contact Clarion Solutions | McKinney TX" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Clarion Solutions | McKinney TX Digital Marketing Agency",
    description:
      "Get in touch with Clarion Solutions. Book a free strategy call or send us a message. Veteran-owned digital marketing agency serving McKinney and North Dallas.",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${SITE_URL}/contact`,
      url: `${SITE_URL}/contact`,
      name: "Contact Clarion Solutions | McKinney TX Digital Marketing Agency",
      description:
        "Get in touch with Clarion Solutions. Book a free strategy call or send us a message. Veteran-owned digital marketing agency serving McKinney and North Dallas.",
      publisher: { "@id": `${SITE_URL}/#business` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact` },
      ],
    },
  ],
};

const contactDetails = [
  {
    label: "Phone",
    value: "(214) 799-1868",
    href: "tel:+12147991868",
  },
  {
    label: "Email",
    value: "stan@clarionsol.com",
    href: "mailto:stan@clarionsol.com",
  },
  {
    label: "Location",
    value: "McKinney, TX",
    sub: "Serving the North Dallas Corridor",
  },
  {
    label: "Hours",
    value: "Monday through Friday",
    sub: "8AM to 6PM CST",
  },
];

export default function ContactPage() {
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
            <span style={{ color: "#C9A84C" }}>Contact</span>
          </div>

          <div style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "24px" }}>
            Contact · Clarion Solutions
          </div>
          <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(48px, 6vw, 88px)", fontWeight: 300, lineHeight: 1.05, color: "#F5F1E8", marginBottom: "32px", letterSpacing: "-0.5px" }}>
            Let&apos;s Talk About
            <br />
            <em style={{ fontStyle: "italic", color: "#C9A84C" }}>Your Business.</em>
          </h1>
          <p style={{ fontSize: "18px", color: "#9E9A92", lineHeight: 1.7, maxWidth: "600px", margin: "0 auto" }}>
            No pitch, no pressure. Book a free strategy call or send a message and we&apos;ll get back to you within one business day.
          </p>
        </section>

        {/* Contact Section */}
        <section style={{ padding: "100px 5%", background: "#080808" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ display: "flex", gap: "72px", flexWrap: "wrap", alignItems: "flex-start" }}>

              {/* Left: Contact Details */}
              <div style={{ flex: "1 1 280px", minWidth: "0" }}>
                <div style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "20px", display: "flex", alignItems: "center", gap: "16px" }}>
                  <span style={{ width: "32px", height: "1px", background: "#C9A84C", display: "inline-block", flexShrink: 0 }} />
                  Reach Out
                </div>
                <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(32px, 3.5vw, 48px)", fontWeight: 300, color: "#F5F1E8", lineHeight: 1.1, marginBottom: "48px" }}>
                  Get In Touch.
                </h2>

                <div style={{ border: "1px solid rgba(201,168,76,0.15)" }}>
                  {contactDetails.map((item, i) => (
                    <div
                      key={item.label}
                      style={{
                        padding: "24px 28px",
                        borderBottom: i < contactDetails.length - 1 ? "1px solid rgba(201,168,76,0.1)" : "none",
                      }}
                    >
                      <div style={{ fontSize: "10px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "8px" }}>
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="hover-gold"
                          style={{ fontSize: "16px", color: "#F5F1E8", textDecoration: "none", display: "block", transition: "color 0.2s" }}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div style={{ fontSize: "16px", color: "#F5F1E8" }}>{item.value}</div>
                      )}
                      {item.sub && (
                        <div style={{ fontSize: "13px", color: "#9E9A92", marginTop: "4px" }}>{item.sub}</div>
                      )}
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: "32px", padding: "28px", background: "#0e0e0e", border: "1px solid rgba(201,168,76,0.15)" }}>
                  <p style={{ fontSize: "14px", color: "#9E9A92", lineHeight: 1.8, marginBottom: "20px" }}>
                    Prefer to book directly? Use the button below to schedule a free strategy call at a time that works for you.
                  </p>
                  <BookCallButton className="btn-primary-link">Book a Free Call</BookCallButton>
                </div>
              </div>

              {/* Right: Form */}
              <div style={{ flex: "1 1 440px", minWidth: "0" }}>
                <ContactPageForm />
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "120px 5%", background: "#0e0e0e", borderTop: "1px solid rgba(201,168,76,0.15)", textAlign: "center" }}>
          <div style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "24px" }}>
            Not Sure Where to Start?
          </div>
          <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 300, color: "#F5F1E8", lineHeight: 1.1, marginBottom: "24px" }}>
            Not Sure Where
            <br />
            <em style={{ color: "#C9A84C", fontStyle: "italic" }}>to Start?</em>
          </h2>
          <p style={{ fontSize: "16px", color: "#9E9A92", lineHeight: 1.8, maxWidth: "480px", margin: "0 auto 48px" }}>
            Book a free strategy call. We will look at where you are, share what we see, and tell you honestly whether we can help.
          </p>
          <BookCallButton className="btn-primary-link">Book a Free Call</BookCallButton>
        </section>

      </main>
      <Footer />
    </>
  );
}
