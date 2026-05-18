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
      <Nav />
      <main>
        <HeroSection />
        <Marquee />
        <ServicesPricingSection />
        <CapabilitiesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
