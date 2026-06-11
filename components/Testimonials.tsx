"use client";

import { motion } from "framer-motion";

const REVIEWS = [
  { quote: "I applied to 400 jobs in 2 weeks without lifting a finger. Got 18 callbacks. Meteor is the only reason I landed my Stripe offer.", name: "Arjun K.", role: "Software Engineer @ Stripe", avatar: "AK" },
  { quote: "The ATS checker showed me exactly why my resume was getting filtered out. Fixed it in 10 minutes, got 3 interviews the next week.", name: "Priya M.", role: "Product Manager @ Figma", avatar: "PM" },
  { quote: "I was job hunting for 4 months before Meteor. Within 3 weeks of using it I had 6 first rounds. This thing genuinely works.", name: "Jordan T.", role: "Data Scientist @ OpenAI", avatar: "JT" },
  { quote: "The resume builder rewrites your bullets to match each JD. It sounds like you wrote it — not an AI. Absolutely changed my response rate.", name: "Sarah L.", role: "UX Designer @ Airbnb", avatar: "SL" },
  { quote: "Auto-Apply ran while I slept. Woke up to 12 new applications submitted. It handles everything — form filling, cover letters, all of it.", name: "Marcus R.", role: "Backend Engineer @ Linear", avatar: "MR" },
  { quote: "Went from 2% response rate to 14% after Meteor optimized my profile. I genuinely can't believe this tool is this good.", name: "Emma W.", role: "ML Engineer @ Anthropic", avatar: "EW" },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } } };

export function Testimonials() {
  return (
    <section style={{ background: "#f9fafb", padding: "100px 28px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 60 }}
        >
          <h2 style={{ fontFamily: "var(--font-bricolage)", fontWeight: 800, fontSize: "clamp(28px,3.5vw,44px)", letterSpacing: "-.03em", color: "#0a0a0a", margin: "0 0 14px" }}>
            Real people. Real offers.
          </h2>
          <p style={{ fontSize: 16, color: "#6b7280", maxWidth: 440, margin: "0 auto" }}>
            Thousands of job seekers have used Meteor to land roles at top companies.
          </p>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}
        >
          {REVIEWS.map((r) => (
            <motion.div key={r.name} variants={item} whileHover={{ y: -3, boxShadow: "0 12px 36px rgba(0,0,0,.08)" }}
              style={{ background: "#fff", borderRadius: 10, border: "1px solid #e5e7eb", padding: "24px 22px", transition: "box-shadow .25s" }}
            >
              <div style={{ display: "flex", gap: 2, marginBottom: 14 }}>
                {[1,2,3,4,5].map(i => <svg key={i} width="13" height="13" viewBox="0 0 13 13" fill="#C5F135"><path d="M6.5 1L7.945 4.627H11.834L8.694 6.915L10.14 10.541L6.5 8.254L2.86 10.541L4.306 6.915L1.166 4.627H5.055L6.5 1Z" /></svg>)}
              </div>
              <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.65, margin: "0 0 18px" }}>"{r.quote}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg,#1a1a1a,#C5F135)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#0a0a0a", flexShrink: 0 }}>{r.avatar}</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#0a0a0a" }}>{r.name}</div>
                  <div style={{ fontSize: 11.5, color: "#9ca3af" }}>{r.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
