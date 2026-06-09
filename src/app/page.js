const SITE_URL = "https://www.clarionsol.com";

export const metadata = {
  title: "Local SEO & AI Automation | McKinney, TX | Clarion Solutions",
  description: "Veteran-owned AI automation and local SEO agency in McKinney, TX. We help North Dallas businesses rank higher, capture more leads, and grow faster. Book a free strategy call.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Local SEO & AI Automation | McKinney, TX | Clarion Solutions",
    description: "Veteran-owned AI automation and local SEO agency in McKinney, TX. We help North Dallas businesses rank higher, capture more leads, and grow faster.",
    url: SITE_URL,
    siteName: "Clarion Solutions",
    locale: "en_US",
    type: "website",
  },
};

import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import ServicesPricingSection from "@/components/ServicesPricingSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import AutoTechDashboard from "@/components/AutoTechDashboard";
import BookingChatDemo from "@/components/BookingChatDemo";
import ServiceAreasSection from "@/components/ServiceAreasSection";
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
        <ServiceAreasSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
