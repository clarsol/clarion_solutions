import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import ServicesPricingSection from "@/components/ServicesPricingSection";
import ProcessSection from "@/components/ProcessSection";
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
        <ServicesPricingSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
