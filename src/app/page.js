import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import ServicesPricingSection from "@/components/ServicesPricingSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <HeroSection />
        <Marquee />
        <section style={{ padding: "56px 5% 0", background: "#080808" }}>
          <div style={{ maxWidth: "760px", padding: "24px 28px", borderLeft: "3px solid rgba(201,168,76,0.6)", background: "rgba(201,168,76,0.04)" }}>
            <p style={{ fontSize: "clamp(15px, 1.2vw, 18px)", color: "#9E9A92", lineHeight: 1.85, margin: 0 }}>
              Clarion Solutions is a local SEO and AI automation agency based in McKinney, TX, serving small businesses throughout the North Dallas corridor. We optimize local businesses to rank in Google Maps and organic search, get cited in AI-generated answers from ChatGPT and Google AI Overviews, and capture leads automatically through AI-powered follow-up systems. Veteran-owned and operated.
            </p>
          </div>
        </section>
        <ServicesPricingSection />
        <CapabilitiesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
