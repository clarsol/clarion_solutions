import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HowItWorksContent from "@/components/HowItWorksContent";

const SITE_URL = "https://www.clarionsol.com";

const howItWorksSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "How It Works", item: `${SITE_URL}/how-it-works` },
      ],
    },
    {
      "@type": "HowTo",
      name: "How Clarion Solutions Works",
      description: "From first call to measurable results: how Clarion Solutions delivers AI automation, local SEO, and digital marketing for North Dallas businesses.",
      url: `${SITE_URL}/how-it-works`,
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Discovery Call",
          text: "We start with a free 30-minute call. We want to understand your business, your market, your goals, and where you're currently losing ground. Most clients leave the call with a clearer picture of their situation than they had going in.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Strategy & Audit",
          text: "After the call, we audit your Google Business Profile, your rankings, your website, your lead flow, and your top competitors. We map every gap between where you are and where you should be, and we build a clear plan to close it.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Build & Deploy",
          text: "Once you're ready to move, we build fast. AI systems are typically live within two weeks. SEO foundations and website builds follow a clear timeline we set and stick to. You don't have to manage the process. We do.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Grow & Report",
          text: "Every month you get a plain-English report that shows exactly what happened: rankings moved, leads captured, content published, AI performance. No vanity metrics, no confusion. Just the numbers that matter and what we're doing next.",
        },
      ],
    },
  ],
};

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howItWorksSchema) }} />
      <Nav />
      <HowItWorksContent />
      <Footer />
    </>
  );
}
