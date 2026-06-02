import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ShopPage from "@/components/ShopPage";

export const dynamic = "force-dynamic";

const SITE_URL = "https://www.clarionsol.com";

export const metadata = {
  title: "Shop Services | AI Automation, SEO & Web Design | Clarion Solutions",
  description:
    "Build your growth stack online. Browse Clarion Solutions' AI automation, local SEO, web design, and CRM services. Select, configure, and purchase — no sales call required for standard packages.",
  alternates: { canonical: `${SITE_URL}/shop` },
  openGraph: {
    title: "Shop Services | AI Automation, SEO & Web Design | Clarion Solutions",
    description:
      "Build your growth stack online. Browse Clarion Solutions' AI automation, local SEO, web design, and CRM services.",
    url: `${SITE_URL}/shop`,
    siteName: "Clarion Solutions",
    locale: "en_US",
    type: "website",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "Shop Services | Clarion Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop Services | Clarion Solutions",
    description: "Build your growth stack online. AI automation, local SEO, web design, and CRM services from a veteran-owned McKinney TX agency.",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/shop`,
      url: `${SITE_URL}/shop`,
      name: "Shop Services | Clarion Solutions",
      description:
        "AI automation, local SEO, web design, CRM, and media production services available for direct purchase from Clarion Solutions.",
      publisher: { "@id": `${SITE_URL}/#business` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Shop Services", item: `${SITE_URL}/shop` },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Nav />
      <ShopPage />
      <Footer />
    </>
  );
}
