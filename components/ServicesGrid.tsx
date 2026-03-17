"use client";

import { motion } from "framer-motion";
import {
  Search,
  Handshake,
  ShieldCheck,
  Ship,
  FileText,
  Truck,
} from "lucide-react";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = {
  Search,
  Handshake,
  ShieldCheck,
  Ship,
  FileText,
  Truck,
};

export function ServicesGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kompletna usluga uvoza
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Svaki korak je pod našom kontrolom – od fabrike u Kini do vaše
            lokacije.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                  <Icon size={24} className="text-blue-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.short}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/usluge"
            className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-900 transition-colors"
          >
            Pogledaj sve usluge →
          </Link>
        </div>
      </div>
    </section>
  );
}
