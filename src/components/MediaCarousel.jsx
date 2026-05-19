"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { mediaGallery } from "@/data/mediaGallery";

export default function MediaCarousel() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    function measure() {
      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        setTranslateX(-(trackWidth - viewportWidth));
      }
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, translateX]);

  return (
    <section
      ref={containerRef}
      style={{ height: "300vh", position: "relative", background: "#080808" }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Section label */}
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "5%",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div style={{ width: "32px", height: "1px", background: "rgba(201,168,76,0.4)" }} />
          <span
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "11px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#C9A84C",
            }}
          >
            Our Work
          </span>
        </div>

        {/* Scroll hint */}
        <div
          style={{
            position: "absolute",
            bottom: "36px",
            right: "5%",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "10px",
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              color: "#9E9A92",
            }}
          >
            Scroll to browse
          </span>
          <div style={{ width: "28px", height: "1px", background: "rgba(201,168,76,0.3)" }} />
        </div>

        {/* Scrolling track */}
        <motion.div
          ref={trackRef}
          style={{
            display: "flex",
            gap: "24px",
            paddingLeft: "5%",
            paddingRight: "5%",
            x,
          }}
        >
          {mediaGallery.map((filename, i) => (
            <div
              key={filename}
              style={{
                flexShrink: 0,
                width: "min(520px, 80vw)",
                border: "1px solid rgba(201,168,76,0.15)",
                overflow: "hidden",
              }}
            >
              <img
                src={`/media/${filename}`}
                alt={`Media production sample ${i + 1}`}
                style={{
                  display: "block",
                  width: "100%",
                  height: "380px",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  padding: "14px 20px",
                  borderTop: "1px solid rgba(201,168,76,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "11px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "#9E9A92",
                  }}
                >
                  Media Production
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "11px",
                    letterSpacing: "2px",
                    color: "#C9A84C",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
