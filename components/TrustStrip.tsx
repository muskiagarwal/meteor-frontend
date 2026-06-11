"use client";

import { motion } from "framer-motion";

const LOGOS = [
  { name: "Google", symbol: "G" },
  { name: "Meta", symbol: "M" },
  { name: "Apple", symbol: "" },
  { name: "Microsoft", symbol: "⊞" },
  { name: "Amazon", symbol: "A" },
  { name: "Netflix", symbol: "N" },
  { name: "Spotify", symbol: "♪" },
  { name: "Airbnb", symbol: "◇" },
  { name: "Uber", symbol: "U" },
  { name: "Stripe", symbol: "$" },
  { name: "Figma", symbol: "✦" },
  { name: "Notion", symbol: "□" },
];

export function TrustStrip() {
  return (
    <section style={{ background: "#fff", padding: "36px 0", borderBottom: "1px solid #e5e7eb", overflow: "hidden" }}>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: "center", fontSize: 12, fontWeight: 600, letterSpacing: ".1em", color: "#9ca3af", textTransform: "uppercase", marginBottom: 24 }}
      >
        Used by people hired at
      </motion.p>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <div className="animate-marquee" style={{ display: "flex", gap: 48, width: "max-content" }}>
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div key={`${logo.name}-${i}`} style={{ display: "flex", alignItems: "center", gap: 8, opacity: 0.5, flexShrink: 0, transition: "opacity .2s" }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "0.5")}
            >
              <div style={{ width: 24, height: 24, borderRadius: 5, background: "#111", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: "#fff" }}>
                {logo.symbol}
              </div>
              <span style={{ fontSize: 15, fontWeight: 700, color: "#111827", letterSpacing: "-.02em" }}>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
