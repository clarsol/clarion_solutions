"use client";

import { useState, useEffect, useCallback } from "react";
import { mediaGallery } from "@/data/mediaGallery";

export default function MediaCarousel() {
  const [current, setCurrent] = useState(0);
  const total = mediaGallery.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = () => setCurrent((c) => (c - 1 + total) % total);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section style={{ background: "#080808", padding: "0 5% 80px" }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          aspectRatio: "16 / 9",
          overflow: "hidden",
          border: "1px solid rgba(201,168,76,0.15)",
        }}
      >
        {mediaGallery.map((filename, i) => (
          <img
            key={filename}
            src={`/media/${filename}`}
            alt={`Media production sample ${i + 1}`}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: i === current ? 1 : 0,
              transition: "opacity 0.7s ease",
            }}
          />
        ))}

        {/* Left arrow */}
        <button
          onClick={prev}
          aria-label="Previous image"
          style={{
            position: "absolute",
            left: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(8,8,8,0.75)",
            border: "1px solid rgba(201,168,76,0.4)",
            color: "#C9A84C",
            width: "44px",
            height: "44px",
            fontSize: "24px",
            lineHeight: 1,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
            transition: "background 0.2s, border-color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(201,168,76,0.15)";
            e.currentTarget.style.borderColor = "#C9A84C";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(8,8,8,0.75)";
            e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)";
          }}
        >
          ‹
        </button>

        {/* Right arrow */}
        <button
          onClick={next}
          aria-label="Next image"
          style={{
            position: "absolute",
            right: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(8,8,8,0.75)",
            border: "1px solid rgba(201,168,76,0.4)",
            color: "#C9A84C",
            width: "44px",
            height: "44px",
            fontSize: "24px",
            lineHeight: 1,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
            transition: "background 0.2s, border-color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(201,168,76,0.15)";
            e.currentTarget.style.borderColor = "#C9A84C";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(8,8,8,0.75)";
            e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)";
          }}
        >
          ›
        </button>

        {/* Dot indicators */}
        <div
          style={{
            position: "absolute",
            bottom: "16px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "8px",
            zIndex: 10,
          }}
        >
          {mediaGallery.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to image ${i + 1}`}
              style={{
                width: i === current ? "28px" : "8px",
                height: "8px",
                background: i === current ? "#C9A84C" : "rgba(201,168,76,0.3)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "width 0.3s, background 0.3s",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
