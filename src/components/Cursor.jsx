"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const mx = useRef(0);
  const my = useRef(0);
  const rx = useRef(0);
  const ry = useRef(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    const onMove = (e) => {
      mx.current = e.clientX;
      my.current = e.clientY;
      cursor.style.transform = `translate(${mx.current}px, ${my.current}px) translate(-50%, -50%)`;
    };

    const animateRing = () => {
      rx.current += (mx.current - rx.current) * 0.1;
      ry.current += (my.current - ry.current) * 0.1;
      ring.style.transform = `translate(${rx.current}px, ${ry.current}px) translate(-50%, -50%)`;
      rafRef.current = requestAnimationFrame(animateRing);
    };

    document.addEventListener("mousemove", onMove);
    rafRef.current = requestAnimationFrame(animateRing);

    return () => {
      document.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
