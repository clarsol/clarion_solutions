const SITE_URL = "https://www.clarionsol.com";

export const metadata = {
  title: "Social Media & Marketing Agency | McKinney, TX | Clarion Solutions",
  description: "Veteran-owned marketing agency in McKinney, TX. Social media management, content, branding, SEO, and ads for North Dallas businesses. One team for your entire online presence.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Social Media & Marketing Agency | McKinney, TX | Clarion Solutions",
    description: "Veteran-owned marketing agency in McKinney, TX. Social media management, content, branding, SEO, and ads for North Dallas businesses. One team for your entire online presence.",
    url: SITE_URL,
    siteName: "Clarion Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media & Marketing Agency | McKinney, TX | Clarion Solutions",
    description: "Veteran-owned marketing agency in McKinney, TX. Social media management, content, branding, SEO, and ads for North Dallas businesses.",
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
        <CapabilitiesSection />
        <ServicesPricingSection />
        <AutoTechDashboard />
        <BookingChatDemo />
        <ServiceAreasSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
