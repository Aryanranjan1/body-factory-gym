// @ts-nocheck
"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import { Toaster } from "@/components/ui/toaster";
import { ReactLenis } from '@studio-freight/react-lenis'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// export const metadata: Metadata = {
//   title: "Body Factory Gym & Fitness Centre | 24/7 Gym Petaling Jaya",
//   description: "Train anytime with Mr. Malaysia 2023 Champion at Body Factory Gym PJ — Affordable 24/7 fitness from RM110 per month.",
//   keywords: "24/7 gym Petaling Jaya, budget gym PJ, Body Factory Gym, Mr Malaysia 2023, HVLP gym Malaysia",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "min-h-screen bg-background font-body antialiased",
          inter.variable
        )}
      >
        <ReactLenis root>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster />
        </ReactLenis>
      </body>
    </html>
  );
}
