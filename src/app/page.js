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
        <div style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0 }}>
          <p>
            Clarion Solutions is a local SEO and AI automation agency based in McKinney, TX, serving small businesses throughout the North Dallas corridor. We optimize local businesses to rank in Google Maps and organic search, get cited in AI-generated answers from ChatGPT and Google AI Overviews, and capture leads automatically through AI-powered follow-up systems. Veteran-owned and operated.
          </p>
        </div>
        <ServicesPricingSection />
        <CapabilitiesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
