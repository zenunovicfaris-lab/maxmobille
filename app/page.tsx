import { Hero } from "@/components/Hero/HeroWithAnimation";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ProductCarousel } from "@/components/ProductCarousel";
import { TeamSection } from "@/components/TeamSection";
import { FooterCTA } from "@/components/FooterCTA";
import { JsonLd } from "@/components/JsonLd";

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <ServicesGrid />
      <ProcessTimeline />
      <ProductCarousel />
      <TeamSection />
      <FooterCTA />
    </>
  );
}
