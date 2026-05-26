import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nafeez Ahamed | Software Engineer & AI Engineering",
  description:
    "Portfolio of Nafeez Ahamed Mohamed — Software Engineer with 3+ years at Accenture, MS in Software Engineering at ASU, specializing in AI engineering, full-stack development, and cloud architecture.",
  keywords: [
    "Nafeez Ahamed",
    "Software Engineer",
    "AI Engineering",
    "Full Stack Developer",
    "Arizona State University",
    "Accenture",
    "Python",
    "TypeScript",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Nafeez Ahamed Mohamed" }],
  openGraph: {
    title: "Nafeez Ahamed | Software Engineer & AI Engineering",
    description:
      "Software Engineer with 3+ years of industry experience, specializing in AI engineering, cloud solutions, and full-stack development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
