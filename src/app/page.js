import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import ServicesPricingSection from "@/components/ServicesPricingSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import AutoTechDashboard from "@/components/AutoTechDashboard";
import BookingChatDemo from "@/components/BookingChatDemo";
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
        <AutoTechDashboard />
        <BookingChatDemo />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
