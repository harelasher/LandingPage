import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { BlueprintProvider } from "@/context/BlueprintContext";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
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
  metadataBase: new URL("https://harelasher.com"),
  title: {
    default: "Harel Asher | Software Developer",
    template: "%s | Harel Asher",
  },
  description:
    "Software Developer specializing in GenAI integration and high-performance systems. Full-stack with React, Node.js, TypeScript, Python, C#, and pgvector.",
  keywords: [
    "Harel Asher",
    "software developer",
    "GenAI developer",
    "full-stack developer",
    "RAG",
    "LangChain",
    "pgvector",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "C#",
  ],
  authors: [{ name: "Harel Asher", url: "https://harelasher.com" }],
  creator: "Harel Asher",
  openGraph: {
    type: "website",
    url: "https://harelasher.com",
    siteName: "Harel Asher",
    title: "Harel Asher | Software Developer",
    description:
      "Software Developer specializing in GenAI integration and high-performance systems. Full-stack with React, Node.js, TypeScript, Python, C#, and pgvector.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Harel Asher — Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harel Asher | Software Developer",
    description:
      "Software Developer specializing in GenAI integration and high-performance systems.",
    images: ["/opengraph-image"],
  },
  alternates: { canonical: "https://harelasher.com" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <SmoothScroll>
          <BlueprintProvider>{children}</BlueprintProvider>
        </SmoothScroll>
        <Analytics />
        <GoogleAnalytics gaId="G-7Q1HZZK9LM" />
      </body>
    </html>
  );
}
