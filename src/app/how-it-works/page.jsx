import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HowItWorksContent from "@/components/HowItWorksContent";

const SITE_URL = "https://clarionsol.com";

export const metadata = {
  title: "How It Works | Our Process | Clarion Solutions | McKinney TX",
  description:
    "Learn how Clarion Solutions delivers AI automation, local SEO, and digital marketing for North Dallas businesses. Simple process, real results.",
  alternates: { canonical: `${SITE_URL}/how-it-works` },
  openGraph: {
    title: "How It Works | Our Process | Clarion Solutions | McKinney TX",
    description:
      "Learn how Clarion Solutions delivers AI automation, local SEO, and digital marketing for North Dallas businesses. Simple process, real results.",
    url: `${SITE_URL}/how-it-works`,
    siteName: "Clarion Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How It Works | Our Process | Clarion Solutions | McKinney TX",
    description:
      "Learn how Clarion Solutions delivers AI automation, local SEO, and digital marketing for North Dallas businesses. Simple process, real results.",
  },
};

export default function HowItWorksPage() {
  return (
    <>
      <Nav />
      <HowItWorksContent />
      <Footer />
    </>
  );
}
