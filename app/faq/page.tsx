import type { Metadata } from "next";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FooterCTA } from "@/components/FooterCTA";

export const metadata: Metadata = {
  title: "FAQ – MaxMobille | Česta pitanja o uvozu iz Kine",
  description:
    "Odgovori na najčešća pitanja o uvozu robe iz Kine za BiH i Balkan: rokovi, količine, plaćanje, kvalitet.",
};

export default function FAQPage() {
  return (
    <>
      <div className="pt-20 bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Česta pitanja
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Odgovori na sve što vas zanima o procesu uvoza iz Kine.
          </p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FAQAccordion />
      </div>
      <FooterCTA />
    </>
  );
}
