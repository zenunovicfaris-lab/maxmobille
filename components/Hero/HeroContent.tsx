"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, ArrowDown } from "lucide-react";
import { BRAND } from "@/lib/constants";

// Pure content layer sits above the WorldMapSVG background
export function HeroContent() {
  return (
    <>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Live badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-blue-600/30 border border-blue-400/30 text-blue-100 text-sm font-medium px-4 py-2 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Dostupni za konsultaciju
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
          >
            MaxMobille –{" "}
            <span className="text-blue-300">Vaš pouzdani partner</span> za uvoz
            iz Kine
          </motion.h1>

          {/* Slogan */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-lg sm:text-xl text-blue-100 leading-relaxed mb-10 max-w-3xl"
          >
            {BRAND.slogan}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
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
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-16 flex flex-wrap gap-8"
          >
            {[
              { label: "Tim u Kini", value: "✓" },
              { label: "Inspekcija robe", value: "✓" },
              { label: "Cijeli Balkan", value: "✓" },
              { label: "Transparentni troškovi", value: "✓" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-2">
                <span className="text-green-400 font-bold text-lg">{stat.value}</span>
                <span className="text-blue-200 text-sm">{stat.label}</span>
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
    </>
  );
}
