"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { BRAND } from "@/lib/constants";

export function FooterCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Spremni za uvoz iz Kine?
          </h2>
          <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
            Kontaktirajte Haruna danas – besplatna konzultacija, bez obaveza.
            Odgovorimo u roku od 24 sata.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${BRAND.harun.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              <MessageCircle size={22} />
              Kontaktiraj nas
            </a>
            <a
              href={`tel:${BRAND.harun.phone}`}
              className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Phone size={22} />
              Pozovi sada
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
