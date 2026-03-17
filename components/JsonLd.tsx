import { BRAND } from "@/lib/constants";

export function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BRAND.name,
    description:
      "Uvoz robe iz Kine za BiH i Balkan – pronalaženje, kontrola kvaliteta, logistika, carina i isporuka.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Radnička 16",
      addressLocality: "Srebrenik",
      postalCode: "75350",
      addressCountry: "BA",
    },
    telephone: BRAND.harun.phone,
    email: BRAND.email,
    url: "https://maxmobille.ba",
    areaServed: ["BA", "HR", "RS", "SI", "ME", "MK", "AL"],
    serviceType: "Uvoz robe iz Kine",
  };

  const services = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Uvoz robe iz Kine za Balkan",
    provider: { "@type": "Organization", name: BRAND.name },
    areaServed: "Balkan",
    description:
      "Kompletna usluga uvoza: pronalaženje proizvođača, inspekcija kvaliteta, logistika, carina, isporuka.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(services) }}
      />
    </>
  );
}
