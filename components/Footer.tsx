"use client";

import { motion } from "framer-motion";
import { Logo3D } from "./Logo3D";

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
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <Logo3D size={28} />
              <span style={{ fontFamily: "var(--font-bricolage)", fontWeight: 800, fontSize: 16, color: "#fff" }}>Meteor</span>
            </div>
            <p style={{ fontSize: 13.5, color: "rgba(255,255,255,.4)", lineHeight: 1.65, maxWidth: 230, marginBottom: 20 }}>
              AI-powered job hunting that applies for you, optimizes every resume, and tracks every response.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {["𝕏", "in", "✦"].map((icon) => (
                <motion.a key={icon} href="#" whileHover={{ scale: 1.1, borderColor: "#C5F135" }}
                  style={{ width: 32, height: 32, borderRadius: 7, border: "1px solid rgba(255,255,255,.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: "rgba(255,255,255,.5)", textDecoration: "none", transition: "border-color .2s" }}
                >{icon}</motion.a>
              ))}
            </div>
          </div>

          {Object.entries(LINKS).map(([group, items]) => (
            <div key={group}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,.3)", letterSpacing: ".08em", textTransform: "uppercase", marginBottom: 16 }}>{group}</div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {items.map(item => (
                  <li key={item}>
                    <a href="#" style={{ fontSize: 13.5, color: "rgba(255,255,255,.45)", textDecoration: "none", transition: "color .15s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#C5F135")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.45)")}
                    >{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ paddingTop: 24, borderTop: "1px solid rgba(255,255,255,.07)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,.25)" }}>© 2026 Meteor. All rights reserved.</span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,.2)" }}>Built with ⚡ for job seekers everywhere</span>
        </div>
      </div>
    </footer>
  );
}
