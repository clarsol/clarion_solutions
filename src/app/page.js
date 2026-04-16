import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import WhySection from "@/components/WhySection";
import PricingSection from "@/components/PricingSection";
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
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <WhySection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
