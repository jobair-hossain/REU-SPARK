import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SPARK | Quantum-Ready AI & Cybersecurity REU at UCA",
  description:
    "Explore SPARK, a proposed 10-week undergraduate research experience in AI-enabled cybersecurity, trustworthy AI, and quantum-ready computing at the University of Central Arkansas.",
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
