import type { Metadata } from "next";
import { TeamFull } from "@/components/TeamFull";
import { FooterCTA } from "@/components/FooterCTA";

export const metadata: Metadata = {
  title: "Naš tim – MaxMobille | Stručnjaci za uvoz iz Kine",
  description:
    "Upoznajte tim MaxMobille: Harun u Bosni i Ellen u Kini – vaši pouzdani partneri za uvoz.",
};

export default function TimPage() {
  return (
    <>
      <div className="pt-20 bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Naš tim
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dva kontinenta, jedan cilj – vaša roba stigla sigurno i na vrijeme.
          </p>
        </div>
      </div>
      <TeamFull />
      <FooterCTA />
    </>
  );
}
