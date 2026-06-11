"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const PLANS = [
  {
    name: "Free",
    price: { monthly: 0, annual: 0 },
    desc: "For curious job seekers just getting started.",
    features: ["10 auto-applies per week", "Resume builder (1 version)", "Job tracker (up to 20 apps)", "ATS score checks (3/mo)"],
    cta: "Start for free",
    highlight: false,
  },
  {
    name: "Pro",
    price: { monthly: 29, annual: 19 },
    desc: "For serious candidates who want the best chance.",
    features: ["Unlimited auto-applies", "Unlimited resume versions", "Priority ATS keyword match", "Interview coach (unlimited)", "Application analytics dashboard", "Email follow-up automation"],
    cta: "Get Pro",
    highlight: true,
    badge: "Most popular",
  },
  {
    name: "Team",
    price: { monthly: 79, annual: 59 },
    desc: "For career coaches and recruiting teams.",
    features: ["Everything in Pro", "Up to 5 seats", "Candidate management dashboard", "Bulk resume optimizer", "Custom branding", "Priority support"],
    cta: "Contact sales",
    highlight: false,
  },
];

export function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" style={{ background: "#fff", padding: "100px 28px" }}>
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <h2 style={{ fontFamily: "var(--font-bricolage)", fontWeight: 800, fontSize: "clamp(28px,3.5vw,44px)", letterSpacing: "-.03em", color: "#0a0a0a", margin: "0 0 14px" }}>
            Simple, honest pricing
          </h2>
          <p style={{ fontSize: 16, color: "#6b7280", marginBottom: 28 }}>Cancel anytime. No hidden fees.</p>
          <div style={{ display: "inline-flex", background: "#f3f4f6", borderRadius: 8, padding: 3, gap: 2 }}>
            {["Monthly", "Annual"].map((label) => (
              <button key={label} onClick={() => setAnnual(label === "Annual")}
                style={{ padding: "7px 20px", borderRadius: 6, fontSize: 13, fontWeight: 600, cursor: "pointer", border: "none", background: (label === "Annual") === annual ? "#fff" : "transparent", color: (label === "Annual") === annual ? "#0a0a0a" : "#6b7280", boxShadow: (label === "Annual") === annual ? "0 1px 4px rgba(0,0,0,.1)" : "none", transition: "all .2s" }}
              >
                {label}{label === "Annual" && <span style={{ marginLeft: 6, fontSize: 10, fontWeight: 700, color: "#6b7280" }}>−35%</span>}
              </button>
            ))}
          </div>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, alignItems: "stretch" }}>
          {PLANS.map((plan, i) => (
            <motion.div key={plan.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: plan.highlight ? -4 : -2 }}
              style={{
                borderRadius: 12, padding: "32px 28px", display: "flex", flexDirection: "column",
                ...(plan.highlight
                  ? { border: "2px solid transparent", background: "linear-gradient(white,white) padding-box, linear-gradient(135deg,#1a1a1a,#C5F135) border-box", boxShadow: "0 16px 48px rgba(197,241,53,.2)" }
                  : { border: "1px solid #e5e7eb", background: "#fff" }),
              }}
            >
              {plan.badge && (
                <div style={{ marginBottom: 14 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: "#6b7280", background: "rgba(197,241,53,.2)", padding: "3px 10px", borderRadius: 100, letterSpacing: ".04em", border: "1px solid rgba(197,241,53,.35)" }}>{plan.badge}</span>
                </div>
              )}
              <div style={{ fontSize: 17, fontWeight: 800, color: "#0a0a0a", marginBottom: 4, fontFamily: "var(--font-bricolage)" }}>{plan.name}</div>
              <div style={{ fontSize: 13, color: "#6b7280", marginBottom: 20, lineHeight: 1.5 }}>{plan.desc}</div>
              <div style={{ marginBottom: 24 }}>
                <span style={{ fontSize: 44, fontWeight: 800, color: "#0a0a0a", fontFamily: "var(--font-bricolage)", letterSpacing: "-.04em" }}>
                  ${annual ? plan.price.annual : plan.price.monthly}
                </span>
                {plan.price.monthly > 0 && <span style={{ fontSize: 13, color: "#9ca3af" }}>/mo</span>}
              </div>
              <motion.a href="#" whileHover={{ scale: 1.02, boxShadow: plan.highlight ? "0 6px 20px rgba(197,241,53,.4)" : "none" }} whileTap={{ scale: 0.97 }}
                style={{
                  display: "block", textAlign: "center", padding: "12px", borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: "none", marginBottom: 24,
                  ...(plan.highlight
                    ? { background: "linear-gradient(135deg,#1a1a1a,#C5F135)", color: "#0a0a0a" }
                    : { background: "#f3f4f6", color: "#374151" }),
                }}
              >
                {plan.cta}
              </motion.a>
              <div style={{ flex: 1 }}>
                {plan.features.map((f) => (
                  <div key={f} style={{ display: "flex", gap: 9, alignItems: "flex-start", marginBottom: 11 }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginTop: 1.5, flexShrink: 0 }}>
                      <circle cx="7" cy="7" r="6" fill={plan.highlight ? "#C5F135" : "#f3f4f6"} />
                      <path d="M4.5 7L6.2 8.7L9.5 5.3" stroke={plan.highlight ? "#0a0a0a" : "#6b7280"} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ fontSize: 13.5, color: "#374151" }}>{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
