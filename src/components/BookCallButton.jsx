"use client";

export default function BookCallButton({ children, className, style, onMouseEnter, onMouseLeave }) {
  return (
    <button
      className={className}
      style={{ border: "none", cursor: "pointer", ...style }}
      onClick={() => window.dispatchEvent(new CustomEvent("openContactModal"))}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
}
