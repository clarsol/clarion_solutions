const items = [
  "Local SEO",
  "AI Automation",
  "Web Design",
  "Media Production",
  "CRM Systems",
  "Lead Capture",
  "Google Rankings",
  "McKinney, TX",
  "North Dallas",
  "Veteran-Owned",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div
      style={{
        borderTop: "1px solid rgba(201,168,76,0.25)",
        borderBottom: "1px solid rgba(201,168,76,0.25)",
        padding: "20px 0",
        overflow: "hidden",
        background: "#0e0e0e",
      }}
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              padding: "0 48px",
              whiteSpace: "nowrap",
              fontSize: "12px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#9E9A92",
            }}
          >
            <span style={{ color: "#C9A84C", fontSize: "16px" }}>✦</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
