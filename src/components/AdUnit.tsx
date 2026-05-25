"use client";

interface AdUnitProps {
  slot: "leaderboard" | "rectangle" | "sidebar";
  className?: string;
}

// Dimensions per slot type
const SIZES = {
  leaderboard: { width: 728, height: 90, label: "728×90 Leaderboard" },
  rectangle:   { width: 336, height: 280, label: "336×280 Rectangle" },
  sidebar:     { width: 300, height: 250, label: "300×250 Sidebar" },
};

export default function AdUnit({ slot, className = "" }: AdUnitProps) {
  const { width, height, label } = SIZES[slot];

  // After AdSense approval: replace this div with your real <ins> tag
  // e.g.:
  // <ins className="adsbygoogle"
  //      style={{ display: "block" }}
  //      data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
  //      data-ad-slot="XXXXXXXXXX"
  //      data-ad-format="auto"
  //      data-full-width-responsive="true" />
  //
  // Then call: (adsbygoogle = window.adsbygoogle || []).push({});

  return (
    <div
      className={`ad-unit ad-unit-${slot} ${className}`}
      style={{ width, height, maxWidth: "100%" }}
      aria-hidden="true"
      data-ad-slot={slot}
    >
      {/* Placeholder only shown in development */}
      {process.env.NODE_ENV === "development" && (
        <span className="ad-unit-label">{label}</span>
      )}
    </div>
  );
}
