"use client";

import { motion } from "framer-motion";

const BULLETS = [
  "Led redesign of checkout flow reducing drop-off by 32%",
  "Shipped React component library used by 8 engineering teams",
  "Improved Lighthouse score from 61 to 96 across all key pages",
];

const SCORES = [
  { label: "Keyword Match", score: 94, color: "#C5F135" },
  { label: "Format Score", score: 88, color: "#a8cc20" },
  { label: "Readability", score: 97, color: "#C5F135" },
];

export function ResumeBuilder() {
  return (
    <section style={{ background: "#fff", padding: "100px 28px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", display: "grid", gridTemplateColumns: "440px 1fr", alignItems: "center", gap: 72 }}>
        {/* Left — mockup */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: "relative" }}
        >
          {/* Resume card */}
          <div style={{ borderRadius: 12, border: "1px solid #e5e7eb", overflow: "hidden", boxShadow: "0 16px 48px rgba(0,0,0,.1)" }}>
            {/* Header bar */}
            <div style={{ background: "linear-gradient(135deg,#1a1a1a,#C5F135)", padding: "20px 22px" }}>
              <div style={{ fontSize: 16, fontWeight: 800, color: "#fff", marginBottom: 2 }}>Alex Johnson</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,.7)" }}>Senior Frontend Engineer · San Francisco, CA</div>
            </div>
            {/* Body */}
            <div style={{ background: "#fff", padding: "18px 22px" }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: "#C5F135", letterSpacing: ".08em", textTransform: "uppercase", marginBottom: 10 }}>Experience</div>
              <div style={{ marginBottom: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#0a0a0a" }}>Stripe</span>
                  <span style={{ fontSize: 10.5, color: "#9ca3af" }}>2021 – Present</span>
                </div>
                <div style={{ fontSize: 11.5, color: "#6b7280", marginBottom: 8 }}>Product Engineer, Checkout</div>
                {BULLETS.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                    style={{ display: "flex", gap: 6, marginBottom: 4 }}
                  >
                    <span style={{ color: "#C5F135", flexShrink: 0, marginTop: 2.5, fontSize: 8 }}>▶</span>
                    <span style={{ fontSize: 11, color: "#374151", lineHeight: 1.55 }}>{b}</span>
                  </motion.div>
                ))}
              </div>

              {/* Skill pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 12 }}>
                {["React", "TypeScript", "Next.js", "GraphQL", "Node.js", "Figma"].map(s => (
                  <span key={s} style={{ padding: "3px 9px", borderRadius: 4, background: "#f3f4f6", fontSize: 10, fontWeight: 600, color: "#374151" }}>{s}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Floating ATS badge */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: "absolute", top: -16, right: -20, background: "#fff", border: "1px solid #e5e7eb", borderRadius: 10, padding: "10px 14px", boxShadow: "0 8px 24px rgba(0,0,0,.1)", minWidth: 170 }}
          >
            <div style={{ fontSize: 10, fontWeight: 700, color: "#6b7280", marginBottom: 8, letterSpacing: ".06em", textTransform: "uppercase" }}>ATS Scores</div>
            {SCORES.map(s => (
              <div key={s.label} style={{ marginBottom: 6 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                  <span style={{ fontSize: 10, color: "#374151" }}>{s.label}</span>
                  <span style={{ fontSize: 10, fontWeight: 700, color: s.color }}>{s.score}%</span>
                </div>
                <div style={{ height: 4, borderRadius: 2, background: "#f3f4f6", overflow: "hidden" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.score}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{ height: "100%", borderRadius: 2, background: s.color }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — text */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 12px", borderRadius: 100, background: "rgba(37,99,235,.08)", border: "1px solid rgba(37,99,235,.2)", marginBottom: 20 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: ".06em", textTransform: "uppercase" }}>AI Resume Builder</span>
          </div>
          <h2 style={{ fontFamily: "var(--font-bricolage)", fontWeight: 800, fontSize: "clamp(28px,3.5vw,44px)", letterSpacing: "-.03em", color: "#0a0a0a", margin: "0 0 18px", lineHeight: 1.1 }}>
            A resume that speaks<br />every job description's language
          </h2>
          <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.7, marginBottom: 32 }}>
            Paste a job description and Meteor rewrites your bullet points to match it — adding the exact keywords ATS systems look for, without sounding robotic.
          </p>

          {[
            { icon: "✦", text: "Automatically mirrors keywords from the JD" },
            { icon: "✦", text: "Quantifies achievements with the right metrics" },
            { icon: "✦", text: "One-click variants for different roles" },
          ].map((item) => (
            <div key={item.text} style={{ display: "flex", gap: 10, marginBottom: 14, alignItems: "flex-start" }}>
              <span style={{ color: "#C5F135", fontWeight: 700, marginTop: 1 }}>{item.icon}</span>
              <span style={{ fontSize: 14.5, color: "#374151" }}>{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
