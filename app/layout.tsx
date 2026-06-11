import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Meteor — Land Your Dream Job 10× Faster with AI",
  description: "Auto-applies for you, optimizes every resume, and tracks every response — so you can focus on the interviews that matter.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${dmSans.variable}`}>
      <body
        className="min-h-screen"
        style={{
          fontFamily: "var(--font-dm), -apple-system, sans-serif",
          background: "#fff",
          color: "#111827",
        }}
      >
        {children}
      </body>
    </html>
  );
}
