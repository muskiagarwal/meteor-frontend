"use client";

import { motion } from "framer-motion";

const LINKS = {
  Product: ["Auto-Apply", "Resume Builder", "ATS Checker", "Job Tracker", "Interview Coach"],
  Company: ["About", "Blog", "Careers", "Press"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export function Footer() {
  return (
    <footer style={{ background: "#09090B", borderTop: "1px solid rgba(255,255,255,.07)", padding: "64px 28px 32px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 48, marginBottom: 56 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <div style={{ width: 28, height: 28, borderRadius: 6, background: "linear-gradient(135deg,#7C3AED,#2563EB)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="10" height="14" viewBox="0 0 10 14" fill="none"><path d="M6 1L1 8H4.5L3 13L9 6H5.5L6 1Z" fill="#fff" /></svg>
              </div>
              <span style={{ fontFamily: "var(--font-bricolage)", fontWeight: 800, fontSize: 16, color: "#fff" }}>Meteor</span>
            </div>
            <p style={{ fontSize: 13.5, color: "rgba(255,255,255,.4)", lineHeight: 1.65, maxWidth: 230, marginBottom: 20 }}>
              AI-powered job hunting that applies for you, optimizes every resume, and tracks every response.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {["𝕏", "in", "✦"].map((icon) => (
                <motion.a
                  key={icon}
                  href="#"
                  whileHover={{ scale: 1.1, background: "rgba(255,255,255,.1)" }}
                  style={{ width: 32, height: 32, borderRadius: 7, border: "1px solid rgba(255,255,255,.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: "rgba(255,255,255,.5)", textDecoration: "none", transition: "background .2s" }}
                >{icon}</motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([group, items]) => (
            <div key={group}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,.4)", letterSpacing: ".08em", textTransform: "uppercase", marginBottom: 16 }}>{group}</div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {items.map(item => (
                  <li key={item}>
                    <a href="#" style={{ fontSize: 13.5, color: "rgba(255,255,255,.5)", textDecoration: "none", transition: "color .15s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.5)")}
                    >{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ paddingTop: 24, borderTop: "1px solid rgba(255,255,255,.07)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,.3)" }}>© 2026 Meteor. All rights reserved.</span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,.25)" }}>Built with ⚡ for job seekers everywhere</span>
        </div>
      </div>
    </footer>
  );
}
