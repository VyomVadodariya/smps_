import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { NewsMarquee } from "@/components/layout/NewsMarquee";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "SMPS Electric | Uninterrupted Power Solutions",
    template: "%s | SMPS Electric",
  },
  description:
    "SMPS Electric Control Private Limited is a premium ODM delivering game-changing industrial power electronics, smart grids, and EV infrastructure.",
  keywords: [
    "BESS",
    "Smart Energy Storage",
    "EV Charging",
    "SMPS Power Supply",
    "Industrial Electronics",
    "Smart Grid",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <NewsMarquee />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
