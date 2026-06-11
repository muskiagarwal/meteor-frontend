"use client";

import { motion } from "framer-motion";

const LOGOS = [
  { name: "Google" }, { name: "Meta" }, { name: "Apple" }, { name: "Microsoft" },
  { name: "Amazon" }, { name: "Netflix" }, { name: "Spotify" }, { name: "Airbnb" },
  { name: "Uber" }, { name: "Stripe" }, { name: "Figma" }, { name: "Notion" },
];

export function TrustStrip() {
  return (
    <section style={{ background: "#fff", padding: "36px 0", borderBottom: "1px solid #f0f0f0", overflow: "hidden" }}>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: "center", fontSize: 12, fontWeight: 600, letterSpacing: ".1em", color: "#9ca3af", textTransform: "uppercase", marginBottom: 22 }}
      >
        Used by people hired at
      </motion.p>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <div className="animate-marquee" style={{ display: "flex", gap: 52, width: "max-content" }}>
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div key={`${logo.name}-${i}`}
              style={{ display: "flex", alignItems: "center", gap: 7, opacity: 0.4, flexShrink: 0, transition: "opacity .2s" }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "0.4")}
            >
              <span style={{ fontSize: 14, fontWeight: 800, color: "#0a0a0a", letterSpacing: "-.02em" }}>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
