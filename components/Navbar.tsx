"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const features = [
  { href: "#", icon: "⚡", name: "Auto-Apply", desc: "Apply to 200+ jobs automatically" },
  { href: "#", icon: "📄", name: "Resume Builder", desc: "AI-optimized resumes for every job" },
  { href: "#", icon: "✅", name: "ATS Checker", desc: "Beat the algorithm, score your resume" },
  { href: "#", icon: "📊", name: "Job Tracker", desc: "Kanban board for your applications" },
  { href: "#", icon: "🎤", name: "Interview Coach", desc: "AI-powered interview prep" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? "rgba(9,9,11,.95)" : "rgba(9,9,11,.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,.07)",
        transition: "background .3s",
      }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 28px" }}>
        <div style={{ height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-bricolage)", fontWeight: 800, fontSize: 17, color: "#fff", textDecoration: "none" }}>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              style={{ width: 30, height: 30, borderRadius: 6, background: "linear-gradient(135deg,#7C3AED,#2563EB)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
            >
              <svg width="12" height="16" viewBox="0 0 12 16" fill="none">
                <path d="M7.5 1L1 9.5H5.5L3.5 15L11 6.5H6.5L7.5 1Z" fill="#fff" />
              </svg>
            </motion.div>
            Meteor
          </Link>

          {/* Center nav */}
          <ul style={{ display: "flex", alignItems: "center", listStyle: "none", gap: 0, margin: 0, padding: 0 }}>
            {/* Features dropdown */}
            <li style={{ position: "relative" }} onMouseLeave={() => setOpen(false)}>
              <button
                onMouseEnter={() => setOpen(true)}
                onClick={() => setOpen(o => !o)}
                style={{ padding: "7px 14px", fontSize: 14, fontWeight: 500, color: open ? "#fff" : "rgba(255,255,255,.5)", borderRadius: 6, transition: "color .18s, background .18s", cursor: "pointer", border: "none", background: open ? "rgba(255,255,255,.06)" : "none", display: "flex", alignItems: "center", gap: 5, fontFamily: "var(--font-dm)" }}
              >
                Features
                <motion.svg animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ color: "rgba(255,255,255,.3)" }}>
                  <path d="M2 4.5L6 8.5L10 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
              </button>
              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.97 }}
                    transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    style={{ position: "absolute", top: "calc(100% + 6px)", left: -8, background: "#18181f", border: "1px solid rgba(255,255,255,.1)", borderRadius: 10, padding: 6, boxShadow: "0 12px 40px rgba(0,0,0,.5)", minWidth: 268, zIndex: 200 }}
                  >
                    {features.map((f) => (
                      <motion.a
                        key={f.name}
                        href={f.href}
                        whileHover={{ background: "rgba(255,255,255,.06)", x: 2 }}
                        style={{ display: "flex", alignItems: "flex-start", gap: 11, padding: "10px 11px", borderRadius: 7, transition: "background .15s", color: "rgba(255,255,255,.7)", textDecoration: "none" }}
                      >
                        <div style={{ width: 34, height: 34, borderRadius: 7, border: "1px solid rgba(255,255,255,.1)", background: "rgba(255,255,255,.05)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 15 }}>{f.icon}</div>
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 600, color: "#fff", marginBottom: 2 }}>{f.name}</div>
                          <div style={{ fontSize: 12, color: "rgba(255,255,255,.4)", lineHeight: 1.4 }}>{f.desc}</div>
                        </div>
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
            {["Pricing", "Blog"].map((label) => (
              <li key={label}>
                <a href={label === "Pricing" ? "#pricing" : "#"} style={{ padding: "7px 14px", fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,.5)", borderRadius: 6, display: "block", transition: "color .18s", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.5)")}
                >{label}</a>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <motion.a href="#" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              style={{ padding: "8px 18px", fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,.8)", border: "1.5px solid rgba(255,255,255,.18)", borderRadius: 6, textDecoration: "none", transition: "all .2s" }}
            >Sign in</motion.a>
            <motion.a href="#" whileHover={{ scale: 1.03, boxShadow: "0 4px 20px rgba(124,58,237,.5)" }} whileTap={{ scale: 0.97 }}
              style={{ padding: "8px 18px", fontSize: 14, fontWeight: 600, color: "#fff", background: "linear-gradient(135deg,#7C3AED,#2563EB)", borderRadius: 6, textDecoration: "none", boxShadow: "0 2px 12px rgba(124,58,237,.35)" }}
            >Get started</motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
