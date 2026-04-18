"use client";

export default function BookCallButton({ children, className, style }) {
  return (
    <button
      className={className}
      style={{ border: "none", cursor: "pointer", ...style }}
      onClick={() => window.dispatchEvent(new CustomEvent("openContactModal"))}
    >
      {children}
    </button>
  );
}
