import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const sections = [
  {
    heading: "1. Acceptance of Terms",
    body: "By using our website or services, you confirm that you are at least 18 years old and have the legal capacity to enter into these Terms. If you are using our services on behalf of a business, you represent that you have the authority to bind that business to these Terms.",
  },
  {
    heading: "2. Services",
    body: "Clarion Solutions provides local SEO, digital marketing, and CRM software services including Seatd, a client management platform for service professionals including barbers, stylists, tattoo artists, and nail technicians. We reserve the right to modify, suspend, or discontinue any part of our services at any time with reasonable notice.",
  },
  {
    heading: "3. SMS Communications",
    body: null,
    sms: true,
  },
  {
    heading: "4. User Responsibilities",
    body: "You agree to provide accurate and complete information when using our services, use our services only for lawful purposes, not attempt to interfere with or disrupt our systems, not use our services to send unsolicited communications, and maintain the confidentiality of any account credentials.",
  },
  {
    heading: "5. Payment Terms",
    body: "Services are billed on a monthly basis unless otherwise agreed in writing. Fees are due at the start of each billing cycle. We reserve the right to suspend services for non-payment after reasonable notice. All fees are non-refundable unless otherwise stated.",
  },
  {
    heading: "6. Intellectual Property",
    body: "All content, branding, software, and materials on our website and within our services are the property of Clarion Solutions and are protected by applicable intellectual property laws. You may not copy, reproduce, or distribute our content without prior written permission.",
  },
  {
    heading: "7. Limitation of Liability",
    body: "To the maximum extent permitted by law, Clarion Solutions shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services. Our total liability for any claim shall not exceed the amount you paid us in the three months preceding the claim.",
  },
  {
    heading: "8. Disclaimer of Warranties",
    body: 'Our services are provided "as is" without warranties of any kind. We do not guarantee specific results from SEO or marketing services, as outcomes depend on many factors outside our control.',
  },
  {
    heading: "9. Termination",
    body: "Either party may terminate services with 30 days written notice. We reserve the right to terminate services immediately for violations of these Terms or non-payment.",
  },
  {
    heading: "10. Governing Law",
    body: "These Terms are governed by the laws of the State of Texas, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Collin County, Texas.",
  },
  {
    heading: "11. Changes to Terms",
    body: "We may update these Terms from time to time. Continued use of our services after changes are posted constitutes acceptance of the updated Terms.",
  },
  {
    heading: "12. Contact Us",
    body: null,
    contact: true,
  },
];

const sectionStyle = {
  fontFamily: "var(--font-cormorant)",
  fontSize: "clamp(18px, 2vw, 24px)",
  fontWeight: 300,
  color: "#C9A84C",
  lineHeight: 1.2,
  marginTop: "48px",
  marginBottom: "14px",
  letterSpacing: "-0.1px",
};

const bodyStyle = {
  fontSize: "18px",
  color: "#9E9A92",
  lineHeight: 1.85,
  fontFamily: "var(--font-dm-sans)",
};

export default function TermsOfService() {
  return (
    <>
      <Nav />
      <main style={{ background: "#080808", paddingTop: "92px" }}>

        {/* Hero */}
        <section style={{ padding: "80px 5% 64px", borderBottom: "1px solid rgba(201,168,76,0.15)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 60% at 70% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ fontSize: "13px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "24px", display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ width: "32px", height: "1px", background: "#C9A84C", display: "inline-block", flexShrink: 0 }} />
            Legal
          </div>
          <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(48px, 6vw, 80px)", fontWeight: 300, color: "#F5F1E8", lineHeight: 1.05, letterSpacing: "-0.5px", marginBottom: "20px" }}>
            Terms of Service
          </h1>
          <p style={{ fontSize: "14px", letterSpacing: "1px", color: "#9E9A92", textTransform: "uppercase" }}>
            Last updated: March 25, 2026
          </p>
        </section>

        {/* Content */}
        <section style={{ padding: "72px 5% 120px" }}>
          <div style={{ maxWidth: "760px" }}>
            <p style={bodyStyle}>
              These Terms of Service govern your use of clarionsol.com and all services provided by Clarion Solutions, including Seatd. By accessing or using our services, you agree to be bound by these Terms.
            </p>

            {sections.map((s) => (
              <div key={s.heading}>
                <h2 style={sectionStyle}>{s.heading}</h2>
                {s.body && <p style={bodyStyle}>{s.body}</p>}
                {s.sms && (
                  <p style={bodyStyle}>
                    By providing your phone number and opting in through our website or booking forms, you agree to receive SMS text messages from Clarion Solutions and Seatd. These messages may include appointment confirmations and reminders, follow-up and rebooking messages, promotional offers and service updates, and review requests. Message frequency varies. Message and data rates may apply. Reply <strong style={{ color: "#F5F1E8" }}>STOP</strong> to opt out at any time. Reply <strong style={{ color: "#F5F1E8" }}>HELP</strong> for support. Carriers are not liable for delayed or undelivered messages. View our{" "}
                    <a href="/privacy-policy" style={{ color: "#C9A84C", textDecoration: "none", borderBottom: "1px solid rgba(201,168,76,0.35)" }}>Privacy Policy</a>.
                  </p>
                )}
                {s.contact && (
                  <p style={bodyStyle}>
                    Clarion Solutions &mdash; McKinney, Texas<br />
                    Email: <a href="mailto:stanw@clarionsol.com" style={{ color: "#C9A84C", textDecoration: "none", borderBottom: "1px solid rgba(201,168,76,0.35)" }}>stanw@clarionsol.com</a><br />
                    Website: <a href="https://clarionsol.com" style={{ color: "#C9A84C", textDecoration: "none", borderBottom: "1px solid rgba(201,168,76,0.35)" }}>clarionsol.com</a>
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
