"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Logo3D } from "./Logo3D";

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
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? "rgba(255,255,255,.97)" : "rgba(255,255,255,.92)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid #e5e7eb" : "1px solid transparent",
        transition: "all .3s",
      }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 28px" }}>
        <div style={{ height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo — 3D bolt, no box */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
            >
              <Logo3D size={34} />
            </motion.div>
            <span style={{ fontFamily: "var(--font-bricolage)", fontWeight: 800, fontSize: 18, color: "#0a0a0a", letterSpacing: "-.02em" }}>Meteor</span>
          </Link>

          {/* Center nav */}
          <ul style={{ display: "flex", alignItems: "center", listStyle: "none", gap: 0, margin: 0, padding: 0 }}>
            <li style={{ position: "relative" }} onMouseLeave={() => setOpen(false)}>
              <button
                onMouseEnter={() => setOpen(true)}
                onClick={() => setOpen(o => !o)}
                style={{ padding: "7px 14px", fontSize: 14, fontWeight: 500, color: open ? "#0a0a0a" : "#6b7280", borderRadius: 6, transition: "color .18s, background .18s", cursor: "pointer", border: "none", background: open ? "#f3f4f6" : "none", display: "flex", alignItems: "center", gap: 5, fontFamily: "var(--font-dm)" }}
              >
                Features
                <motion.svg animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 4.5L6 8.5L10 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
              </button>
              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.97 }}
                    transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                    style={{ position: "absolute", top: "calc(100% + 6px)", left: -8, background: "#fff", border: "1px solid #e5e7eb", borderRadius: 10, padding: 6, boxShadow: "0 12px 36px rgba(0,0,0,.1)", minWidth: 268, zIndex: 200 }}
                  >
                    {features.map((f) => (
                      <motion.a
                        key={f.name}
                        href={f.href}
                        whileHover={{ background: "#f9fafb", x: 2 }}
                        style={{ display: "flex", alignItems: "flex-start", gap: 11, padding: "10px 11px", borderRadius: 7, transition: "background .15s", color: "#374151", textDecoration: "none" }}
                      >
                        <div style={{ width: 34, height: 34, borderRadius: 7, border: "1px solid #e5e7eb", background: "#f9fafb", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 15 }}>{f.icon}</div>
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 600, color: "#0a0a0a", marginBottom: 2 }}>{f.name}</div>
                          <div style={{ fontSize: 12, color: "#9ca3af", lineHeight: 1.4 }}>{f.desc}</div>
                        </div>
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
            {["Pricing", "Blog"].map((label) => (
              <li key={label}>
                <a href={label === "Pricing" ? "#pricing" : "#"} style={{ padding: "7px 14px", fontSize: 14, fontWeight: 500, color: "#6b7280", borderRadius: 6, display: "block", transition: "color .18s", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#0a0a0a")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#6b7280")}
                >{label}</a>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <motion.a href="#" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              style={{ padding: "8px 18px", fontSize: 14, fontWeight: 600, color: "#374151", border: "1.5px solid #e5e7eb", borderRadius: 8, textDecoration: "none", transition: "all .2s", background: "#fff" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#C5F135"; e.currentTarget.style.color = "#0a0a0a"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#e5e7eb"; e.currentTarget.style.color = "#374151"; }}
            >Sign in</motion.a>
            <motion.a href="#" whileHover={{ scale: 1.03, boxShadow: "0 4px 18px rgba(197,241,53,.45)" }} whileTap={{ scale: 0.97 }}
              style={{ padding: "8px 18px", fontSize: 14, fontWeight: 700, color: "#0a0a0a", background: "linear-gradient(135deg,#1a1a1a 0%,#C5F135 100%)", borderRadius: 8, textDecoration: "none", boxShadow: "0 2px 10px rgba(197,241,53,.25)" }}
            >Get started</motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
