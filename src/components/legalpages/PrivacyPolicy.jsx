import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const sections = [
  {
    heading: "1. Information We Collect",
    body: "We may collect your name, email address, phone number, and business details submitted through our forms. We also collect usage data from your interactions with our website, and any messages you send us via contact forms, email, or SMS.",
  },
  {
    heading: "2. How We Use Your Information",
    body: "We use your information to provide and manage the services you have requested, send appointment reminders, confirmations, and follow-up messages, send promotional and informational SMS and email communications with your consent, respond to inquiries and provide customer support, and improve our website and services.",
  },
  {
    heading: "3. SMS Messaging",
    body: null,
    sms: true,
  },
  {
    heading: "4. Sharing Your Information",
    body: "We do not sell, rent, or trade your personal information. We may share your information only with service providers who assist us in operating our business such as SMS delivery, email platforms, and CRM tools, when required by law, or with your explicit consent.",
  },
  {
    heading: "5. Data Security",
    body: "We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet is 100% secure and we cannot guarantee absolute security.",
  },
  {
    heading: "6. Your Rights",
    body: "You have the right to request access to the personal information we hold about you, request correction or deletion of your personal information, and opt out of SMS or email communications at any time by replying STOP or contacting us directly.",
  },
  {
    heading: "7. Cookies",
    body: "Our website may use cookies to improve your browsing experience. You can disable cookies in your browser settings, though this may affect some functionality.",
  },
  {
    heading: "8. Children's Privacy",
    body: "Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children.",
  },
  {
    heading: "9. Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Continued use of our services after changes constitutes acceptance of the updated policy.",
  },
  {
    heading: "10. Contact Us",
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

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p style={{ fontSize: "14px", letterSpacing: "1px", color: "#9E9A92", textTransform: "uppercase" }}>
            Last updated: March 25, 2026
          </p>
        </section>

        {/* Content */}
        <section style={{ padding: "72px 5% 120px" }}>
          <div style={{ maxWidth: "760px" }}>
            <p style={bodyStyle}>
              Clarion Solutions (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates clarionsol.com and related services including Seatd. This Privacy Policy explains how we collect, use, and protect your personal information.
            </p>

            {sections.map((s) => (
              <div key={s.heading}>
                <h2 style={sectionStyle}>{s.heading}</h2>
                {s.body && <p style={bodyStyle}>{s.body}</p>}
                {s.sms && (
                  <p style={bodyStyle}>
                    By providing your phone number and opting in through our website forms, you consent to receive SMS text messages from Clarion Solutions and Seatd. These messages may include appointment reminders, confirmations, promotional offers, and service updates. Message frequency varies. Message and data rates may apply. Reply <strong style={{ color: "#F5F1E8" }}>STOP</strong> to opt out at any time. Reply <strong style={{ color: "#F5F1E8" }}>HELP</strong> for assistance. We do not sell or share your phone number with third parties for their marketing purposes.
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
