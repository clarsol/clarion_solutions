export default function sitemap() {
  const base = "https://clarionsol.com";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms-of-service`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/cookie-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/legal-details`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
