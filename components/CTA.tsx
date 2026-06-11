"use client";

import { motion } from "framer-motion";

export function CTA() {
  return (
    <section style={{ background: "#09090B", padding: "100px 28px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 800, height: 400, background: "radial-gradient(ellipse, rgba(197,241,53,.2) 0%, rgba(197,241,53,.05) 50%, transparent 70%)", filter: "blur(50px)" }} />
      </div>

      <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center", position: "relative" }}>
        <motion.div initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}>
          <div style={{ fontSize: 40, marginBottom: 20 }}>⚡</div>
          <h2 style={{ fontFamily: "var(--font-bricolage)", fontWeight: 800, fontSize: "clamp(30px,4.5vw,52px)", letterSpacing: "-.03em", color: "#fff", lineHeight: 1.1, margin: "0 0 20px" }}>
            Stop applying manually.<br />
            <span style={{ background: "linear-gradient(135deg,#C5F135,#a8cc20)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Let Meteor do it.</span>
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,.5)", lineHeight: 1.7, marginBottom: 36 }}>
            Join 50,000+ job seekers who found their next role with Meteor. Start free, no credit card required.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <motion.a href="#" whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(197,241,53,.5)" }} whileTap={{ scale: 0.97 }}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "15px 32px", borderRadius: 8, background: "linear-gradient(135deg,#1a1a1a,#C5F135)", color: "#0a0a0a", fontWeight: 700, fontSize: 16, textDecoration: "none", boxShadow: "0 4px 20px rgba(197,241,53,.3)" }}
            >
              Start for free →
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.02, borderColor: "#C5F135" }} whileTap={{ scale: 0.97 }}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "15px 28px", borderRadius: 8, border: "1.5px solid rgba(255,255,255,.2)", color: "rgba(255,255,255,.8)", fontWeight: 600, fontSize: 15, textDecoration: "none", transition: "border-color .2s" }}
            >
              See all features
            </motion.a>
          </div>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,.2)", marginTop: 16 }}>No credit card · Cancel anytime · Free forever plan</p>
        </motion.div>
      </div>
    </section>
  );
}
