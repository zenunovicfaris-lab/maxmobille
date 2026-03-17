"use client";

import { WorldMapSVG } from "./WorldMapSVG";
import { HeroContent } from "./HeroContent";

/**
 * Hero section with holographic world-map background animation.
 * Exported as `Hero` so app/page.tsx import stays clean.
 *
 * Layer stack (bottom → top):
 *   1. Blue gradient   – CSS background on <section>
 *   2. WorldMapSVG     – absolute-positioned SVG with graticule + Guangzhou→Srebrenik animation
 *   3. HeroContent     – text, slogan, WhatsApp CTA, trust badges
 */
export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
      {/* Layer 2: Holographic world-map SVG (replaces old dot-pattern div) */}
      <WorldMapSVG />

      {/* Layer 3: Text & CTAs */}
      <HeroContent />
    </section>
  );
}
