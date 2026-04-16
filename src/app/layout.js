import "./globals.css";
import { Cormorant_Garamond, DM_Sans, Bebas_Neue } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
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

export const metadata = {
  title: "Clarion Solutions | AI-Powered Business Growth | McKinney, TX",
  description:
    "Clarion Solutions is a veteran-owned AI automation, local SEO, web design, and media production agency serving North Dallas businesses.",
  keywords:
    "AI automation McKinney TX, local SEO North Dallas, web design McKinney, veteran-owned agency, SEO Frisco TX, SEO Allen TX, SEO Plano TX",
  openGraph: {
    title: "Clarion Solutions | AI-Powered Business Growth | McKinney, TX",
    description:
      "Veteran-owned AI and digital growth agency based in McKinney, TX. Local SEO, AI Automation, Web Design, and Media Production for North Dallas businesses.",
    url: "https://clarionsol.com",
    siteName: "Clarion Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clarion Solutions | AI-Powered Business Growth | McKinney, TX",
    description:
      "Veteran-owned AI and digital growth agency. Local SEO, AI Automation, Web Design & Media Production — McKinney, TX.",
  },
  alternates: {
    canonical: "https://clarionsol.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Clarion Solutions",
              description:
                "Veteran-owned AI automation, local SEO, web design, and media production agency serving North Dallas businesses.",
              url: "https://clarionsol.com",
              telephone: "+12147991868",
              email: "hello@clarionsol.com",
              address: {
                "@type": "PostalAddress",
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
                "McKinney, TX",
                "Frisco, TX",
                "Allen, TX",
                "Plano, TX",
                "Anna, TX",
                "North Dallas",
              ],
              foundingDate: "2023",
              serviceType: [
                "Local SEO",
                "AI Automation",
                "Web Design",
                "Media Production",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${cormorant.variable} ${dmSans.variable} ${bebasNeue.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
