import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

const SITE_URL = "https://www.clarionsol.com";

export const metadata = {
  title: "Order Confirmed | Clarion Solutions",
  description: "Your Clarion Solutions order is confirmed. Stan will be in touch within 24 hours to schedule your onboarding call.",
  robots: { index: false, follow: false },
};

const NEXT_STEPS = [
  {
    num: "01",
    title: "Stan receives your order",
    desc: "Your intake form and selected services are sent to Stan immediately. He reviews every order before work begins.",
  },
  {
    num: "02",
    title: "Welcome email within 24 hours",
    desc: "You'll receive a welcome email with next steps, access credentials (if applicable), and a direct line to Stan.",
  },
  {
    num: "03",
    title: "Onboarding call within 48 hours",
    desc: "Stan schedules a kickoff call to align on goals, gather access, and confirm the scope before work starts.",
  },
];

export default function ShopSuccessPage() {
  return (
    <>
      <Nav />
      <main style={{ background: "#080808", paddingTop: "92px" }}>

        {/* Confirmation hero */}
        <section
          style={{
            padding: "100px 5% 80px",
            textAlign: "center",
            borderBottom: "1px solid rgba(201,168,76,0.15)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              width: "64px",
              height: "64px",
              border: "1px solid #C9A84C",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 32px",
              fontSize: "24px",
              color: "#C9A84C",
            }}
          >
            ✓
          </div>

          <div
            style={{
              fontSize: "13px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#C9A84C",
              marginBottom: "20px",
            }}
          >
            Order Confirmed
          </div>

          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(44px, 6vw, 80px)",
              fontWeight: 300,
              lineHeight: 1.05,
              color: "#F5F1E8",
              marginBottom: "24px",
              letterSpacing: "-0.5px",
            }}
          >
            You&apos;re In.
            <br />
            <em style={{ fontStyle: "italic", color: "#C9A84C" }}>Let&apos;s Build.</em>
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: "#9E9A92",
              lineHeight: 1.7,
              maxWidth: "520px",
              margin: "0 auto",
            }}
          >
            Your payment is confirmed and your order is on its way to Stan. Here&apos;s what happens next.
          </p>
        </section>

        {/* What happens next */}
        <section style={{ padding: "100px 5%", background: "#0e0e0e" }}>
          <div style={{ maxWidth: "960px", margin: "0 auto" }}>
            <div
              style={{
                fontSize: "13px",
                letterSpacing: "4px",
                textTransform: "uppercase",
                color: "#C9A84C",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
              }}
            >
              <span style={{ width: "32px", height: "1px", background: "#C9A84C", display: "inline-block", flexShrink: 0 }} />
              What Happens Next
              <span style={{ width: "32px", height: "1px", background: "#C9A84C", display: "inline-block", flexShrink: 0 }} />
            </div>

            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 300,
                color: "#F5F1E8",
                lineHeight: 1.1,
                marginBottom: "64px",
                textAlign: "center",
              }}
            >
              Simple.
              <br />
              <em style={{ color: "#C9A84C", fontStyle: "italic" }}>No surprises.</em>
            </h2>

            <div
              className="next-steps-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1px",
                background: "rgba(201,168,76,0.15)",
              }}
            >
              {NEXT_STEPS.map((step) => (
                <div
                  key={step.num}
                  style={{ background: "#0e0e0e", padding: "40px 32px" }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-bebas)",
                      fontSize: "14px",
                      letterSpacing: "3px",
                      color: "rgba(201,168,76,0.4)",
                      marginBottom: "16px",
                    }}
                  >
                    {step.num}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "22px",
                      fontWeight: 300,
                      color: "#F5F1E8",
                      marginBottom: "12px",
                      lineHeight: 1.2,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ fontSize: "16px", color: "#9E9A92", lineHeight: 1.8 }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            padding: "100px 5%",
            background: "#080808",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "480px", margin: "0 auto" }}>
            <p style={{ fontSize: "17px", color: "#9E9A92", lineHeight: 1.8, marginBottom: "36px" }}>
              Questions before your onboarding call? Reach Stan directly at{" "}
              <a
                href="mailto:stanw@clarionsol.com"
                style={{ color: "#C9A84C", textDecoration: "none" }}
              >
                stanw@clarionsol.com
              </a>
              .
            </p>
            <Link href="/" className="btn-primary-link">
              Back to Home
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
