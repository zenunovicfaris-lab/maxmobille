"use client";

import { motion, useAnimationControls } from "framer-motion";
import { MessageCircle, Phone, ArrowDown } from "lucide-react";
import { useEffect } from "react";
import { BRAND } from "@/lib/constants";

// ─── KINA → BALKAN animated route indicator (colors for dark background) ─
function RouteIndicator() {
  const dotControls = useAnimationControls();

  useEffect(() => {
    async function loop() {
      while (true) {
        // Instantly reset to Kina side
        dotControls.set({ left: "-6px", opacity: 0 });
        // Fade in
        await dotControls.start({ opacity: 1, transition: { duration: 0.3 } });
        // Travel to Balkan side
        await dotControls.start({
          left: "calc(100% - 6px)",
          transition: { duration: 2.8, ease: [0.4, 0, 0.2, 1] },
        });
        // Hold at destination
        await new Promise((r) => setTimeout(r, 500));
        // Fade out
        await dotControls.start({ opacity: 0, transition: { duration: 0.3 } });
        await new Promise((r) => setTimeout(r, 300));
      }
    }
    loop();
  }, [dotControls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="flex items-center gap-5 mb-10"
    >
      {/* KINA label */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <span className="w-2.5 h-2.5 bg-white rounded-full opacity-80" />
        <span className="text-xs font-bold tracking-[0.25em] text-white/90 uppercase">
          Kina
        </span>
      </div>

      {/* Animated line */}
      <div className="relative flex-1 max-w-[220px] sm:max-w-xs">
        {/* Base track */}
        <div className="h-px bg-white/20" />
        {/* Dashed overlay */}
        <div
          className="absolute inset-0 h-px"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 6px, transparent 6px, transparent 12px)",
          }}
        />

        {/* Traveling dot — white core + green glow so it pops on dark blue */}
        <motion.div
          animate={dotControls}
          className="absolute -top-[5px] w-[11px] h-[11px]"
          style={{ left: "-6px" }}
        >
          {/* Glow ring */}
          <span className="absolute inset-[-4px] rounded-full bg-green-400 opacity-30" />
          {/* Core */}
          <span className="absolute inset-0 rounded-full bg-white shadow-[0_0_10px_3px_rgba(74,222,128,0.7)]" />
        </motion.div>

        {/* Arrow tip */}
        <svg
          className="absolute -right-2 -top-[7px] text-white/70"
          width="14" height="14" viewBox="0 0 14 14" fill="none"
        >
          <path
            d="M1 7h10M8 3l4 4-4 4"
            stroke="currentColor" strokeWidth="1.8"
            strokeLinecap="round" strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* BALKAN label */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <span className="text-xs font-bold tracking-[0.25em] text-white/90 uppercase">
          Balkan
        </span>
        <span className="w-2.5 h-2.5 bg-white rounded-full opacity-80" />
      </div>
    </motion.div>
  );
}

// ─── Trust badges ─────────────────────────────────────────────────────────
const BADGES = [
  "Tim u Kini",
  "Inspekcija robe",
  "Cijeli Balkan",
  "Transparentni troškovi",
];

// ─── Main Hero ────────────────────────────────────────────────────────────
export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Live badge */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-blue-600/30 border border-blue-400/30 text-blue-100 text-sm font-medium px-4 py-2 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Dostupni za konsultaciju
          </motion.div>

          {/* KINA → BALKAN animation */}
          <RouteIndicator />

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
          >
            MaxMobille –{" "}
            <span className="text-blue-300">Vaš pouzdani partner</span> za uvoz
            iz Kine
          </motion.h1>

          {/* Slogan */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-lg sm:text-xl text-blue-100 leading-relaxed mb-10 max-w-3xl"
          >
            {BRAND.slogan}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href={`https://wa.me/${BRAND.harun.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              <MessageCircle size={22} />
              Kontaktiraj nas putem WhatsAppa
            </a>
            <a
              href={`tel:${BRAND.harun.phone}`}
              className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 backdrop-blur-sm"
            >
              <Phone size={22} />
              Pozovi sada
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-16 flex flex-wrap gap-8"
          >
            {BADGES.map((label) => (
              <div key={label} className="flex items-center gap-2">
                <span className="text-green-400 font-bold text-lg">✓</span>
                <span className="text-blue-200 text-sm">{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-blue-300 animate-bounce z-10"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
}
