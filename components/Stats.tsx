"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1600;
    const step = 16;
    const totalSteps = duration / step;
    const increment = target / totalSteps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const STATS = [
  { value: 50000, suffix: "+", label: "Job seekers helped" },
  { value: 247, suffix: "", label: "Avg. applications per week" },
  { value: 3, suffix: "×", label: "More interviews per applicant" },
  { value: 94, suffix: "%", label: "ATS pass rate" },
];

export function Stats() {
  return (
    <section style={{ background: "#09090B", padding: "88px 28px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <h2 style={{ fontFamily: "var(--font-bricolage)", fontWeight: 800, fontSize: "clamp(26px,3.5vw,40px)", letterSpacing: "-.03em", color: "#fff", margin: "0 0 12px" }}>
            Numbers that speak for themselves
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,.45)" }}>Real outcomes from real job seekers.</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1, borderRadius: 12, overflow: "hidden", border: "1px solid rgba(255,255,255,.08)" }}>
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{ padding: "40px 28px", background: "#111117", textAlign: "center", borderRight: i < 3 ? "1px solid rgba(255,255,255,.07)" : "none" }}
            >
              <div style={{ fontFamily: "var(--font-bricolage)", fontWeight: 800, fontSize: 48, letterSpacing: "-.04em", marginBottom: 8, background: "linear-gradient(135deg,#a78bfa,#60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                <AnimatedNumber target={s.value} suffix={s.suffix} />
              </div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,.4)", fontWeight: 500 }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
