"use client";

import { useState, useEffect, useCallback } from "react";
import { mediaGallery } from "@/data/mediaGallery";

export default function MediaCarousel() {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const total = mediaGallery.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);

  // Auto-advance; pause while lightbox is open
  useEffect(() => {
    if (lightbox) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next, lightbox]);

  // Close lightbox on Escape
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => { if (e.key === "Escape") setLightbox(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <section style={{ background: "#080808", padding: "0 5% 80px" }}>
      <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto" }}>

        {/* Slide area — 3:2 aspect ratio */}
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingTop: "66.67%",
            background: "#0e0e0e",
            border: "1px solid rgba(201,168,76,0.12)",
            overflow: "hidden",
          }}
        >
          {mediaGallery.map((filename, i) => (
            <img
              key={filename}
              src={`/media/${filename}`}
              alt={`Media production sample ${i + 1}`}
              onClick={() => setLightbox(true)}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: i === current ? 1 : 0,
                transition: "opacity 0.7s ease",
                cursor: "zoom-in",
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
              zIndex: 10,
              background: "rgba(8,8,8,0.75)",
              border: "1px solid rgba(201,168,76,0.35)",
              color: "#C9A84C",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "border-color 0.2s, background 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#C9A84C";
              e.currentTarget.style.background = "rgba(201,168,76,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(201,168,76,0.35)";
              e.currentTarget.style.background = "rgba(8,8,8,0.75)";
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
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
              zIndex: 10,
              background: "rgba(8,8,8,0.75)",
              border: "1px solid rgba(201,168,76,0.35)",
              color: "#C9A84C",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "border-color 0.2s, background 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#C9A84C";
              e.currentTarget.style.background = "rgba(201,168,76,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(201,168,76,0.35)";
              e.currentTarget.style.background = "rgba(8,8,8,0.75)";
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            marginTop: "20px",
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
                padding: 0,
                cursor: "pointer",
                transition: "width 0.3s ease, background 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.92)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            onClick={() => setLightbox(false)}
            aria-label="Close lightbox"
            style={{
              position: "absolute",
              top: "20px",
              right: "24px",
              background: "none",
              border: "none",
              color: "#F5F1E8",
              fontSize: "36px",
              lineHeight: 1,
              cursor: "pointer",
              padding: 0,
              opacity: 0.75,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.75")}
          >
            ×
          </button>
          <img
            src={`/media/${mediaGallery[current]}`}
            alt={`Media production sample ${current + 1}`}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>
      )}
    </section>
  );
}
