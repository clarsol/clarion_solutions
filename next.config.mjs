/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
  { key: "Cross-Origin-Resource-Policy", value: "same-site" },
];

const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "clarionsol.com" }],
        destination: "https://www.clarionsol.com/:path*",
        permanent: true,
      },
      // Rebrand: AI Automation + CRM & AI Workflows merged into Automation & CRM
      {
        source: "/ai-services",
        destination: "/services/automation-crm",
        permanent: true,
      },
      {
        source: "/services/ai-automation",
        destination: "/services/automation-crm",
        permanent: true,
      },
      {
        source: "/services/ai-workflows",
        destination: "/services/automation-crm",
        permanent: true,
      },
      // Rebrand: standalone pricing page retired in favor of /shop
      {
        source: "/pricing",
        destination: "/shop",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
