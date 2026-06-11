"use client";

import { motion } from "framer-motion";
import { Player } from "@remotion/player";
import { AutoApplyComposition } from "@/remotion/AutoApplyComposition";

const STEPS = [
  { n: "1", title: "Connect your profile", desc: "Import from LinkedIn or fill in once. Meteor learns your skills, experience, and preferences." },
  { n: "2", title: "Set your targets", desc: "Tell Meteor what roles, companies, and locations you want. It filters out everything else." },
  { n: "3", title: "Watch applications go out", desc: "Meteor applies 24/7 — even while you sleep. Track every submission in real-time." },
];

export function AutoApplySection() {
  return (
    <section style={{ background: "#09090B", padding: "100px 28px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 400px", alignItems: "center", gap: 72 }}>
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 12px", borderRadius: 100, background: "rgba(197,241,53,.12)", border: "1px solid rgba(197,241,53,.3)", marginBottom: 20 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#C5F135" }} className="animate-pulse-dot" />
              <span style={{ fontSize: 11, fontWeight: 700, color: "#C5F135", letterSpacing: ".06em", textTransform: "uppercase" }}>Auto-Apply</span>
            </div>
            <h2 style={{ fontFamily: "var(--font-bricolage)", fontWeight: 800, fontSize: "clamp(28px,3.5vw,44px)", letterSpacing: "-.03em", color: "#fff", margin: "0 0 18px", lineHeight: 1.1 }}>
              Apply to 200+ jobs<br />
              <span style={{ background: "linear-gradient(135deg,#C5F135,#a8cc20)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>while you do nothing</span>
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,.5)", lineHeight: 1.7, marginBottom: 40, maxWidth: 440 }}>
              Our AI matches you to open roles, tailors each cover letter, fills out every form, and hits submit — completely autonomously.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {STEPS.map((s, i) => (
                <motion.div key={s.n} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.5 }}
                  style={{ display: "flex", gap: 16, alignItems: "flex-start" }}
                >
                  <div style={{ width: 30, height: 30, borderRadius: 8, background: "linear-gradient(135deg,#1a1a1a,#C5F135)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: "#0a0a0a", flexShrink: 0, marginTop: 1 }}>{s.n}</div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{s.title}</div>
                    <div style={{ fontSize: 14, color: "rgba(255,255,255,.45)", lineHeight: 1.6 }}>{s.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a href="#" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} whileHover={{ scale: 1.03, boxShadow: "0 8px 28px rgba(197,241,53,.45)" }} whileTap={{ scale: 0.97 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 36, padding: "13px 26px", borderRadius: 8, background: "linear-gradient(135deg,#1a1a1a,#C5F135)", color: "#0a0a0a", fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: "0 4px 16px rgba(197,241,53,.25)" }}
            >
              Try auto-apply free
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2.5 6.5H10.5M10.5 6.5L7 3M10.5 6.5L7 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </motion.a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          style={{ position: "relative" }}
        >
          <div style={{ position: "absolute", inset: -20, background: "radial-gradient(ellipse, rgba(197,241,53,.15) 0%, transparent 70%)", filter: "blur(24px)", pointerEvents: "none" }} />
          <div style={{ position: "relative", borderRadius: 14, overflow: "hidden", border: "1px solid rgba(255,255,255,.1)", boxShadow: "0 24px 60px rgba(0,0,0,.6)" }}>
            <Player
              component={AutoApplyComposition as React.ComponentType<Record<string, never>>}
              durationInFrames={240}
              compositionWidth={400}
              compositionHeight={380}
              fps={30}
              style={{ width: "100%", height: "auto", display: "block" }}
              loop
              autoPlay
              showPosterWhenUnplayed={false}
              showPosterWhenEnded={false}
              showPosterWhenPaused={false}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
