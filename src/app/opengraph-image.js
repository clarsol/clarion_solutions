import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Clarion Solutions | Local SEO & AI Automation Agency | McKinney, TX";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#080808",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Gold radial glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 55% 55% at 50% 50%, rgba(201,168,76,0.13) 0%, transparent 70%)",
          }}
        />

        {/* Top border accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "#C9A84C",
          }}
        />

        {/* CS mark */}
        <div
          style={{
            width: "96px",
            height: "96px",
            border: "1.5px solid #C9A84C",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "36px",
          }}
        >
          <span
            style={{
              fontSize: "48px",
              color: "#C9A84C",
              fontWeight: 700,
              letterSpacing: "5px",
            }}
          >
            CS
          </span>
        </div>

        {/* Company name */}
        <div
          style={{
            fontSize: "52px",
            fontWeight: 500,
            color: "#F5F1E8",
            letterSpacing: "8px",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          Clarion Solutions
        </div>

        {/* Services line */}
        <div
          style={{
            fontSize: "20px",
            color: "#9E9A92",
            letterSpacing: "2px",
            marginBottom: "24px",
          }}
        >
          Local SEO · AI Automation · Web Design · Media Production
        </div>

        {/* Divider */}
        <div
          style={{
            width: "48px",
            height: "1px",
            background: "#C9A84C",
            marginBottom: "24px",
            opacity: 0.6,
          }}
        />

        {/* Location */}
        <div
          style={{
            fontSize: "15px",
            color: "#C9A84C",
            letterSpacing: "5px",
            textTransform: "uppercase",
          }}
        >
          McKinney, TX · North Dallas · Veteran-Owned
        </div>

        {/* Bottom border accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "#C9A84C",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
