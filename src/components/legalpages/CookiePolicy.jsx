import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const sections = [
  {
    heading: "Purpose of Cookies",
    body: "Cookies are small text files that are stored on your device when you visit a website. They serve various purposes, including enabling core functionality, remembering user preferences, enhancing performance, and collecting analytical data to improve the overall user experience.",
  },
  {
    heading: "Types of Cookies Used",
    body: "This website may use different types of cookies depending on the functionality required. These may include cookies that are essential for the website to operate, as well as cookies used for performance monitoring, statistical analysis, and functionality enhancements. In some cases, third-party services integrated into the website may also place cookies through your browser.",
  },
  {
    heading: "User Consent",
    body: "Where required by applicable law, cookies that are not strictly necessary are only placed with the user's informed consent. Upon your first visit to the website, you may be presented with a notice regarding the use of cookies. By continuing to browse the site after seeing this notice, you consent to the use of cookies as described in this policy unless you choose to disable them through your browser settings.",
  },
  {
    heading: "Managing Cookies",
    body: "Most modern browsers allow users to control cookies through their settings, including the ability to disable or delete cookies already placed. Please note that restricting cookies may affect the functionality of the website and reduce the quality of your browsing experience.",
  },
  {
    heading: "Third-Party Cookies",
    body: "Some cookies may be placed by third-party services used on this website. These third parties may collect information about your activity across this and other websites. The website owner is not responsible for the data practices of such third parties and encourages users to consult their respective cookie or privacy policies.",
  },
  {
    heading: "Changes to This Policy",
    body: "This Cookie Policy may be updated periodically to reflect changes in technology, legal requirements, or the website's use of cookies. Users are encouraged to review this page regularly to stay informed about how cookies are used and how their data is managed.",
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

export default function CookiePolicy() {
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
            Cookie Policy
          </h1>
          <p style={{ fontSize: "14px", letterSpacing: "1px", color: "#9E9A92", textTransform: "uppercase" }}>
            Clarion Solutions &mdash; clarionsol.com
          </p>
        </section>

        {/* Content */}
        <section style={{ padding: "72px 5% 120px" }}>
          <div style={{ maxWidth: "760px" }}>
            <p style={bodyStyle}>
              This Cookie Policy describes how clarionsol.com uses cookies and similar technologies during user interactions with our website.
            </p>

            {sections.map((s) => (
              <div key={s.heading}>
                <h2 style={sectionStyle}>{s.heading}</h2>
                <p style={bodyStyle}>{s.body}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
