import "./globals.css";
import { Cormorant_Garamond, DM_Sans, Bebas_Neue } from "next/font/google";
import Script from "next/script";
import ContactModal from "@/components/ContactModal";
import Cursor from "@/components/Cursor";

const GA_ID = "G-2DKX5346BV";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  // Only load the weights/styles actually used in the design
  weight: ["300", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
  display: "swap",
});

const SITE_URL = "https://www.clarionsol.com";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080808",
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  // Lead with primary keywords, location mid, brand at end
  title:
    "Local SEO & AI Automation | McKinney, TX | Clarion Solutions",
  description:
    "Local SEO, AI automation, web design & media production for North Dallas businesses. Veteran-owned agency in McKinney, TX. Book a free strategy call.",
  keywords:
    "local SEO McKinney TX, AI automation North Dallas, web design McKinney Texas, media production McKinney, SEO agency Frisco TX, SEO Allen TX, SEO Plano TX, veteran-owned digital agency",
  openGraph: {
    title:
      "Local SEO & AI Automation | McKinney, TX | Clarion Solutions",
    description:
      "Clarion Solutions is a veteran-owned AI and digital growth agency in McKinney, TX, serving North Dallas businesses with local SEO, AI automation, web design, and media production.",
    url: SITE_URL,
    siteName: "Clarion Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Local SEO & AI Automation | McKinney, TX | Clarion Solutions",
    description:
      "Veteran-owned AI and digital growth agency. Local SEO, AI Automation, Web Design & Media Production | McKinney, TX.",
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: "lZgXFP51K8Hs3oWN8RfCSNRyFzfl9eytp-L-IWBfQXk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Combined @graph schema: LocalBusiness + WebSite
const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MarketingAgency",
      "@id": `${SITE_URL}/#business`,
      name: "Clarion Solutions",
      description:
        "Veteran-owned AI automation, local SEO, web design, and media production agency serving North Dallas businesses.",
      url: SITE_URL,
      telephone: "+12147991868",
      email: "stan@clarionsol.com",
      priceRange: "$$",
      foundingDate: "2023",
      sameAs: [
        "https://www.linkedin.com/in/stanley-wilder/",
        "https://www.instagram.com/clarionsolutions",
        "https://www.tiktok.com/@clarionsolutions",
        "https://share.google/tPExnf7cAzODhGPPJ",
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "6675 S Custer Rd Ste 500 #3080",
        addressLocality: "McKinney",
        addressRegion: "TX",
        postalCode: "75070",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 33.1972,
        longitude: -96.6397,
      },
      areaServed: [
        { "@type": "City", name: "McKinney", containedInPlace: { "@type": "AdministrativeArea", name: "Texas" } },
        { "@type": "City", name: "Frisco",   containedInPlace: { "@type": "AdministrativeArea", name: "Texas" } },
        { "@type": "City", name: "Allen",    containedInPlace: { "@type": "AdministrativeArea", name: "Texas" } },
        { "@type": "City", name: "Plano",    containedInPlace: { "@type": "AdministrativeArea", name: "Texas" } },
        { "@type": "City", name: "Anna",     containedInPlace: { "@type": "AdministrativeArea", name: "Texas" } },
        { "@type": "City", name: "Melissa",  containedInPlace: { "@type": "AdministrativeArea", name: "Texas" } },
        { "@type": "City", name: "Princeton", containedInPlace: { "@type": "AdministrativeArea", name: "Texas" } },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital Marketing & AI Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Local SEO",
              description:
                "Google Business Profile optimization, local keyword targeting, technical SEO, citation building, and monthly ranking reports for North Dallas businesses.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Automation",
              description:
                "AI lead capture, automated follow-up sequences, missed call text-back, appointment automation, and reputation management.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Web Design",
              description:
                "Custom Next.js websites, mobile-first, performance optimized, with SEO architecture built in and CRM integration.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Media Production",
              description:
                "Professional photography, short-form video, Google Business Profile content, and social media content packages.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "CRM & AI Workflows",
              description:
                "Custom CRM system setup and AI workflow automation including pipeline management, contact tracking, automated follow-ups, appointment booking, and tool integration.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Clarion Complete Stack",
              description:
                "The complete done-for-you growth system combining AI automation, local SEO, content production, and professional media under one contract.",
            },
          },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#stan-wilder`,
      name: "Stan Wilder",
      jobTitle: "Founder",
      url: `${SITE_URL}/blog`,
      sameAs: ["https://www.linkedin.com/in/stanley-wilder/"],
      worksFor: { "@id": `${SITE_URL}/#business` },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Clarion Solutions",
      description:
        "AI-powered business growth for North Dallas companies. Local SEO, AI Automation, Web Design & Media Production.",
      publisher: { "@id": `${SITE_URL}/#business` },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
        <script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a0bdf3523ccd598c9be5a6a"
          data-source="WEB_USER"
        />
      </head>
      <body
        className={`${cormorant.variable} ${dmSans.variable} ${bebasNeue.variable}`}
      >
        <Cursor />
        {children}
        <ContactModal />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
