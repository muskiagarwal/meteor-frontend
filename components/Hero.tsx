"use client";

import { motion } from "framer-motion";
import { Player } from "@remotion/player";
import { AutoApplyComposition } from "@/remotion/AutoApplyComposition";

const avatarColors = ["#7C3AED", "#2563EB", "#059669", "#d97706", "#db2777"];

export function Hero() {
  return (
    <section style={{ minHeight: "100vh", background: "#09090B", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", paddingTop: 62 }}>
      {/* Mesh gradient bg */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: -200, left: "50%", transform: "translateX(-50%)", width: 900, height: 700, background: "radial-gradient(ellipse at center, rgba(124,58,237,.25) 0%, rgba(37,99,235,.12) 45%, transparent 70%)", filter: "blur(60px)" }} />
        <div style={{ position: "absolute", top: 200, right: -100, width: 500, height: 500, background: "radial-gradient(ellipse, rgba(37,99,235,.18) 0%, transparent 70%)", filter: "blur(40px)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: "rgba(255,255,255,.06)" }} />
      </div>

      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "80px 28px", width: "100%", display: "grid", gridTemplateColumns: "1fr 420px", alignItems: "center", gap: 64, position: "relative" }}>
        {/* Left — text */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 12px 5px 8px", borderRadius: 100, background: "rgba(124,58,237,.15)", border: "1px solid rgba(124,58,237,.35)", marginBottom: 24 }}
          >
            <span style={{ background: "linear-gradient(135deg,#7C3AED,#2563EB)", borderRadius: 100, padding: "2px 8px", fontSize: 10, fontWeight: 700, color: "#fff", letterSpacing: ".04em" }}>NEW</span>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,.6)" }}>AI-powered job hunt — apply in seconds</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: "var(--font-bricolage)", fontWeight: 800, fontSize: "clamp(38px,5vw,60px)", lineHeight: 1.08, letterSpacing: "-.03em", color: "#fff", margin: "0 0 22px" }}
          >
            Land your dream job<br />
            <span style={{ background: "linear-gradient(135deg,#a78bfa 0%,#60a5fa 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>10× faster</span> with AI
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.55 }}
            style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(255,255,255,.55)", maxWidth: 480, margin: "0 0 36px" }}
          >
            Meteor auto-applies to hundreds of jobs, tailors every resume, and tracks every response — so you focus on interviews that matter.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.5 }}
            style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(124,58,237,.55)" }}
              whileTap={{ scale: 0.97 }}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 7, background: "linear-gradient(135deg,#7C3AED,#2563EB)", color: "#fff", fontWeight: 700, fontSize: 15, textDecoration: "none", boxShadow: "0 4px 16px rgba(124,58,237,.4)" }}
            >
              Start for free
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.02, background: "rgba(255,255,255,.07)" }}
              whileTap={{ scale: 0.97 }}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 22px", borderRadius: 7, border: "1.5px solid rgba(255,255,255,.16)", color: "rgba(255,255,255,.8)", fontWeight: 600, fontSize: 15, textDecoration: "none", transition: "background .2s" }}
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1.5" /><path d="M6 5.5L10 7.5L6 9.5V5.5Z" fill="currentColor" /></svg>
              Watch demo
            </motion.a>
          </motion.div>

          {/* Proof strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 36 }}
          >
            <div style={{ display: "flex", marginRight: 4 }}>
              {avatarColors.map((c, i) => (
                <div key={i} style={{ width: 28, height: 28, borderRadius: "50%", background: c, border: "2px solid #09090B", marginLeft: i > 0 ? -8 : 0, fontSize: 10, fontWeight: 700, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>{["AK","BL","JM","RO","PS"][i]}</div>
              ))}
            </div>
            <div>
              <div style={{ display: "flex", gap: 1, marginBottom: 2 }}>
                {[1,2,3,4,5].map(i => <svg key={i} width="11" height="11" viewBox="0 0 11 11" fill="#fbbf24"><path d="M5.5 1L6.795 4.13H10.163L7.434 6.115L8.729 9.245L5.5 7.26L2.271 9.245L3.566 6.115L0.837 4.13H4.205L5.5 1Z" /></svg>)}
              </div>
              <div style={{ fontSize: 11.5, color: "rgba(255,255,255,.45)" }}>Trusted by <strong style={{ color: "rgba(255,255,255,.75)", fontWeight: 600 }}>50,000+</strong> job seekers</div>
            </div>
          </motion.div>
        </div>

        {/* Right — Remotion player */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: "relative" }}
        >
          {/* Glow */}
          <div style={{ position: "absolute", inset: -24, background: "radial-gradient(ellipse at center, rgba(124,58,237,.25) 0%, transparent 70%)", filter: "blur(30px)", pointerEvents: "none", borderRadius: 24 }} />
          {/* Player card */}
          <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", border: "1px solid rgba(255,255,255,.1)", boxShadow: "0 32px 80px rgba(0,0,0,.6), 0 0 0 1px rgba(124,58,237,.15)" }}>
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
          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: "absolute", bottom: -16, left: -16, background: "#18181f", border: "1px solid rgba(255,255,255,.1)", borderRadius: 10, padding: "9px 14px", display: "flex", alignItems: "center", gap: 9, boxShadow: "0 8px 24px rgba(0,0,0,.4)" }}
          >
            <div style={{ width: 32, height: 32, borderRadius: 7, background: "linear-gradient(135deg,#059669,#065f46)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>✓</div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#4ade80" }}>Interview Request!</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,.4)" }}>Stripe · 2 min ago</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
