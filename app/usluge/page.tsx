import type { Metadata } from "next";
import { ServicesDetailed } from "@/components/ServicesDetailed";
import { FooterCTA } from "@/components/FooterCTA";

export const metadata: Metadata = {
  title: "Usluge MaxMobille | Uvoz robe iz Kine",
  description:
    "Kompletne usluge uvoza iz Kine: pronalaženje proizvođača, pregovaranje, kontrola kvaliteta, logistika, carina i isporuka na Balkanu.",
};

export default function UslugeePage() {
  return (
    <>
      <div className="pt-20 bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Naše usluge
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Svaki korak uvoza iz Kine je pod našom kontrolom od pronalaženja
            dobavljača do isporuke na vaša vrata.
          </p>
        </div>
      </div>
      <ServicesDetailed />
      <FooterCTA />
    </>
  );
}
