import { serviceList } from "@/lib/serviceData";

export default function sitemap() {
  const base = "https://clarionsol.com";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    ...serviceList.map((s) => ({
      url: `${base}/services/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    })),
    // Legal pages are noindex — excluded from sitemap to avoid crawl budget waste
  ];
}
