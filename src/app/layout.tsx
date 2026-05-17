import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Harel Asher | Software Developer",
  description:
    "Software Developer specializing in GenAI integration and high-performance systems.",
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
      </body>
    </html>
  );
}
