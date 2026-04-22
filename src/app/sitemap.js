import { serviceList } from "@/lib/serviceData";

const cityPages = [
  "local-seo-frisco-tx",
  "local-seo-plano-tx",
  "local-seo-allen-tx",
  "local-seo-mckinney-tx",
  "local-seo-anna-tx",
  "local-seo-melissa-tx",
  "local-seo-princeton-tx",
];

export default function sitemap() {
  const base = "https://clarionsol.com";
  return [
    { url: base,                          lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/services`,            lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/how-it-works`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`,                lastModified: new Date(), changeFrequency: "weekly",  priority: 0.6 },
    ...serviceList.map((s) => ({
      url: `${base}/services/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    })),
    ...cityPages.map((slug) => ({
      url: `${base}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    })),
    // Legal pages are noindex — excluded from sitemap to avoid crawl budget waste
  ];
}
