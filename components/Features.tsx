"use client";

import { motion } from "framer-motion";

const CARDS = [
  { icon: "⚡", title: "Auto-Apply Engine", desc: "One-click applies to hundreds of matching jobs. Meteor fills forms, attaches your resume, and submits — while you sleep.", tag: "Most popular" },
  { icon: "📄", title: "AI Resume Builder", desc: "Generate a tailored resume for every job in seconds. Meteor rewrites bullet points to match the job description language.", tag: "" },
  { icon: "✅", title: "ATS Score Checker", desc: "See your match score before you apply. Know exactly which keywords are missing and how to fix them.", tag: "" },
  { icon: "📊", title: "Application Tracker", desc: "Visual kanban board: Applied → Responded → Interviewing → Offer. Never lose track of a single application.", tag: "" },
  { icon: "🎤", title: "Interview Coach", desc: "Practice with an AI interviewer trained on real questions from your target companies. Get scored feedback instantly.", tag: "New" },
  { icon: "🔔", title: "Smart Job Alerts", desc: "AI filters thousands of listings to surface only roles that genuinely match your skills, seniority, and preferences.", tag: "" },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export function Features() {
  return (
    <section style={{ background: "#fff", padding: "100px 28px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 12px", borderRadius: 100, background: "rgba(197,241,53,.15)", border: "1px solid rgba(197,241,53,.4)", marginBottom: 16 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: ".06em", textTransform: "uppercase" }}>Everything you need</span>
          </div>
          <h2 style={{ fontFamily: "var(--font-bricolage)", fontWeight: 800, fontSize: "clamp(30px,4vw,46px)", letterSpacing: "-.03em", color: "#0a0a0a", margin: "0 0 16px" }}>
            Your entire job search,<br />powered by AI
          </h2>
          <p style={{ fontSize: 17, color: "#6b7280", maxWidth: 520, margin: "0 auto", lineHeight: 1.65 }}>
            Six tools working together so you can focus on what matters — showing up prepared and confident.
          </p>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}
        >
          {CARDS.map((c) => (
            <motion.div
              key={c.title}
              variants={card}
              whileHover={{ y: -5, boxShadow: "0 16px 40px rgba(0,0,0,.1)" }}
              style={{ borderRadius: 10, border: "1px solid #e5e7eb", padding: "28px 26px", background: "#fff", cursor: "default", transition: "box-shadow .25s" }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
                <div style={{ width: 42, height: 42, borderRadius: 8, background: "rgba(197,241,53,.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>
                  {c.icon}
                </div>
                {c.tag && (
                  <span style={{ fontSize: 10, fontWeight: 700, color: "#6b7280", background: "rgba(197,241,53,.2)", padding: "3px 8px", borderRadius: 100, letterSpacing: ".04em", border: "1px solid rgba(197,241,53,.4)" }}>{c.tag}</span>
                )}
              </div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#0a0a0a", marginBottom: 8, fontFamily: "var(--font-bricolage)" }}>{c.title}</div>
              <div style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6 }}>{c.desc}</div>
              <div style={{ marginTop: 18, display: "flex", alignItems: "center", gap: 4, fontSize: 13, fontWeight: 600, color: "#0a0a0a" }}>
                Learn more
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6H9.5M9.5 6L7 3.5M9.5 6L7 8.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
