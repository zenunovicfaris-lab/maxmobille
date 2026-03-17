import type { Metadata } from "next";
import { ProcessFull } from "@/components/ProcessFull";
import { FooterCTA } from "@/components/FooterCTA";

export const metadata: Metadata = {
  title: "Proces uvoza – MaxMobille | Kako radimo",
  description:
    "Saznajte kako funkcioniše naš proces uvoza iz Kine: od konsultacija do isporuke robe na Balkanu.",
};

export default function ProcesPage() {
  return (
    <>
      <div className="pt-20 bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kako radimo
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparentan proces u 6 koraka – od vaše ideje do isporuke robe.
          </p>
        </div>
      </div>
      <ProcessFull />
      <FooterCTA />
    </>
  );
}
