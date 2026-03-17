import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { ContactInfo } from "@/components/ContactInfo";

export const metadata: Metadata = {
  title: "Kontakt MaxMobille | Uvoz robe iz Kine za Balkan",
  description:
    "Kontaktirajte MaxMobille za uvoz iz Kine. Dostupni smo na WhatsApp i email. Srebrenik, BiH.",
};

export default function KontaktPage() {
  return (
    <>
      <div className="pt-20 bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kontaktirajte nas
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Spremni smo odgovoriti na sva pitanja o uvozu iz Kine.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ContactForm />
        <ContactInfo />
      </div>
    </>
  );
}
