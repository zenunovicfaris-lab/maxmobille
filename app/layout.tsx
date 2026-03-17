import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "MaxMobille – Uvoz robe iz Kine za Balkan | Kompletna logistika",
  description:
    "Uvoz iz Kine za BiH i Balkan: pronalaženje, kvaliteta, transport, carina. Tim u Kini + Balkan.",
  keywords: "uvoz iz Kine, logistika Balkan, MaxMobille, uvoz robe BiH, kina uvoz",
  openGraph: {
    title: "MaxMobille – Uvoz robe iz Kine za Balkan",
    description:
      "Uvoz iz Kine za BiH i Balkan: pronalaženje, kvaliteta, transport, carina.",
    type: "website",
    locale: "bs_BA",
    siteName: "MaxMobille d.o.o.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MaxMobille – Uvoz robe iz Kine za Balkan",
    description: "Uvoz iz Kine za BiH i Balkan: pronalaženje, kvaliteta, transport, carina.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bs">
      <body className="min-h-screen bg-white">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
