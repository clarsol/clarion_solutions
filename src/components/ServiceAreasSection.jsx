import Link from "next/link";

const cities = [
  { label: "McKinney, TX",  href: "/local-seo-mckinney-tx"  },
  { label: "Frisco, TX",    href: "/local-seo-frisco-tx"    },
  { label: "Plano, TX",     href: "/local-seo-plano-tx"     },
  { label: "Allen, TX",     href: "/local-seo-allen-tx"     },
  { label: "Anna, TX",      href: "/local-seo-anna-tx"      },
  { label: "Melissa, TX",   href: "/local-seo-melissa-tx"   },
  { label: "Princeton, TX", href: "/local-seo-princeton-tx" },
  { label: "Celina, TX",    href: "/local-seo-celina-tx"    },
  { label: "Prosper, TX",   href: "/local-seo-prosper-tx"   },
];

export default function ServiceAreasSection() {
  return (
    <section
      style={{
        background: "#0e0e0e",
        padding: "80px 5% 100px",
        textAlign: "center",
        borderTop: "1px solid rgba(201,168,76,0.15)",
      }}
    >
      <div style={{ fontSize: "13px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "20px" }}>
        Service Areas
      </div>

      <h2
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "clamp(36px, 5vw, 72px)",
          fontWeight: 300,
          lineHeight: 1.1,
          color: "#F5F1E8",
          marginBottom: "16px",
        }}
      >
        Serving the{" "}
        <em style={{ fontStyle: "italic", color: "#C9A84C" }}>North Dallas</em>{" "}
        Corridor
      </h2>

      <p style={{ fontSize: "18px", color: "#9E9A92", lineHeight: 1.8, maxWidth: "480px", margin: "0 auto 56px" }}>
        Local SEO and AI automation for businesses across North Dallas.
      </p>

      <div
        className="city-links-grid"
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        {cities.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="hover-gold"
            style={{
              display: "block",
              padding: "16px 20px",
              border: "1px solid rgba(201,168,76,0.2)",
              color: "#9E9A92",
              textDecoration: "none",
              fontSize: "15px",
              letterSpacing: "0.5px",
              transition: "border-color 0.2s, color 0.2s",
            }}
          >
            {label}
          </Link>
        ))}
      </div>
    </section>
  );
}
