"use client";

import { AbsoluteFill, useCurrentFrame, interpolate, Easing, spring, useVideoConfig } from "remotion";

const JOBS = [
  { title: "Senior Frontend Engineer", company: "Stripe", logo: "S", color: "#635BFF", location: "Remote" },
  { title: "Product Designer", company: "Figma", logo: "F", color: "#F24E1E", location: "San Francisco" },
  { title: "Software Engineer II", company: "Linear", logo: "L", color: "#5E6AD2", location: "Remote" },
  { title: "Data Scientist", company: "OpenAI", logo: "O", color: "#10A37F", location: "New York" },
  { title: "Full-Stack Engineer", company: "Vercel", logo: "V", color: "#000", location: "Remote" },
  { title: "Backend Engineer", company: "Notion", logo: "N", color: "#fff", color2: "#111", location: "NYC" },
];

const STATUSES = ["Queued", "Applying", "Applied"] as const;
type Status = typeof STATUSES[number];

const STATUS_COLOR: Record<Status, { bg: string; text: string; dot: string }> = {
  Queued:   { bg: "rgba(255,255,255,.1)", text: "rgba(255,255,255,.5)", dot: "#6b7280" },
  Applying: { bg: "rgba(250,204,21,.15)", text: "#fbbf24", dot: "#fbbf24" },
  Applied:  { bg: "rgba(34,197,94,.15)", text: "#4ade80", dot: "#4ade80" },
};

function getJobStatus(jobIndex: number, frame: number): Status {
  const applyStart = 30 + jobIndex * 20;
  const appliedStart = applyStart + 25;
  if (frame >= appliedStart) return "Applied";
  if (frame >= applyStart) return "Applying";
  return "Queued";
}

function JobRow({ job, index, frame }: { job: typeof JOBS[0]; index: number; frame: number }) {
  const { fps } = useVideoConfig();
  const entryFrame = index * 15;
  const opacity = interpolate(frame, [entryFrame, entryFrame + 20], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const translateY = interpolate(frame, [entryFrame, entryFrame + 20], [16, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const status = getJobStatus(index, frame);
  const statusStyle = STATUS_COLOR[status];
  const prevStatus = index > 0 ? getJobStatus(index, frame - 1) : status;
  const statusChanged = status !== prevStatus;

  const scaleSpring = spring({ frame: statusChanged ? frame : 0, fps, config: { stiffness: 300, damping: 20 }, from: 1, to: statusChanged ? 1.06 : 1 });

  return (
    <div style={{ opacity, transform: `translateY(${translateY}px)`, display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", marginBottom: 4, borderRadius: 8, background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.07)" }}>
      {/* Logo */}
      <div style={{ width: 32, height: 32, borderRadius: 7, background: job.color, border: `1px solid rgba(255,255,255,.12)`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif", fontWeight: 800, fontSize: 13, color: job.color2 || "#fff", flexShrink: 0 }}>
        {job.logo}
      </div>
      {/* Job info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 11.5, fontWeight: 600, color: "#fff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{job.title}</div>
        <div style={{ fontSize: 10, color: "rgba(255,255,255,.4)", marginTop: 1 }}>{job.company} · {job.location}</div>
      </div>
      {/* Status chip */}
      <div style={{ transform: `scale(${scaleSpring})`, flexShrink: 0, display: "flex", alignItems: "center", gap: 5, padding: "3px 9px", borderRadius: 20, background: statusStyle.bg, transition: "background .3s" }}>
        <div style={{ width: 5, height: 5, borderRadius: "50%", background: statusStyle.dot }} />
        <span style={{ fontSize: 9.5, fontWeight: 700, color: statusStyle.text, fontFamily: "sans-serif" }}>{status}</span>
      </div>
    </div>
  );
}

function Counter({ frame }: { frame: number }) {
  const count = Math.floor(interpolate(frame, [30, 200], [0, 247], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.exp) }));
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 14px", borderRadius: 8, background: "rgba(124,58,237,.15)", border: "1px solid rgba(124,58,237,.3)", marginBottom: 12 }}>
      <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#a78bfa", boxShadow: "0 0 8px #7C3AED" }} />
      <span style={{ fontSize: 11, color: "rgba(255,255,255,.6)", fontFamily: "sans-serif" }}>Applications sent today</span>
      <span style={{ marginLeft: "auto", fontSize: 15, fontWeight: 800, color: "#fff", fontFamily: "sans-serif" }}>{count}</span>
    </div>
  );
}

export function AutoApplyComposition() {
  const frame = useCurrentFrame();
  const sceneOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: "#0d0d14", padding: 20, opacity: sceneOpacity }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
        <div style={{ width: 22, height: 22, borderRadius: 5, background: "linear-gradient(135deg,#7C3AED,#2563EB)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="9" height="12" viewBox="0 0 9 12" fill="none"><path d="M5.5 1L1 7H4L3 11L8 5H5L5.5 1Z" fill="#fff" /></svg>
        </div>
        <span style={{ fontSize: 12, fontWeight: 700, color: "#fff", fontFamily: "sans-serif" }}>Meteor Auto-Apply</span>
        <span style={{ marginLeft: "auto", fontSize: 9.5, color: "#4ade80", fontFamily: "sans-serif", background: "rgba(34,197,94,.12)", padding: "2px 8px", borderRadius: 10 }}>● LIVE</span>
      </div>

      <Counter frame={frame} />

      {JOBS.map((job, i) => (
        <JobRow key={job.company} job={job} index={i} frame={frame} />
      ))}
    </AbsoluteFill>
  );
}
