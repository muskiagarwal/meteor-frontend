"use client";

import { motion } from "framer-motion";

export function CTA() {
  return (
    <section style={{ background: "#09090B", padding: "100px 28px", position: "relative", overflow: "hidden" }}>
      {/* Glow */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 800, height: 400, background: "radial-gradient(ellipse, rgba(124,58,237,.25) 0%, rgba(37,99,235,.12) 50%, transparent 70%)", filter: "blur(50px)" }} />
      </div>

      <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center", position: "relative" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{ fontSize: 40, marginBottom: 20 }}>⚡</div>
          <h2 style={{ fontFamily: "var(--font-bricolage)", fontWeight: 800, fontSize: "clamp(30px,4.5vw,52px)", letterSpacing: "-.03em", color: "#fff", lineHeight: 1.1, margin: "0 0 20px" }}>
            Your next job is<br />
            <span style={{ background: "linear-gradient(135deg,#a78bfa,#60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>waiting for Meteor</span>
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,.5)", lineHeight: 1.7, marginBottom: 36 }}>
            Join 50,000+ job seekers who've stopped applying manually. Start free, no credit card required.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <motion.a
              href="#"
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(124,58,237,.6)" }}
              whileTap={{ scale: 0.97 }}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "15px 32px", borderRadius: 8, background: "linear-gradient(135deg,#7C3AED,#2563EB)", color: "#fff", fontWeight: 700, fontSize: 16, textDecoration: "none", boxShadow: "0 4px 20px rgba(124,58,237,.45)" }}
            >
              Get started free
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </motion.a>
          </div>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,.25)", marginTop: 16 }}>No credit card · Cancel anytime · Free forever plan</p>
        </motion.div>
      </div>
    </section>
  );
}
