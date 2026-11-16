import type { Metadata } from "next";
import "./globals.css";
import { personal } from "@/data/personal";

export const metadata: Metadata = {
  metadataBase: new URL(personal.website),
  title: {
    default: "Deepak GM — Engineer, Builder & Founder",
    template: "%s — Deepak GM",
  },
  description:
    "Explore the work of Deepak GM — an independent technology builder working across AI, software engineering, systems, electronics and product development.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Deepak GM — Independent Builder",
    description: "Building technology that solves real-world problems.",
    url: personal.website,
    siteName: "Deepak GM",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak GM — Independent Builder",
    description: "Building technology that solves real-world problems.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
