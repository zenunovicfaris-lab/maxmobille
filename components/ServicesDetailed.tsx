"use client";

import { motion } from "framer-motion";
import {
  Search,
  Handshake,
  ShieldCheck,
  Ship,
  FileText,
  Truck,
  MessageCircle,
} from "lucide-react";
import { SERVICES, BRAND } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = {
  Search,
  Handshake,
  ShieldCheck,
  Ship,
  FileText,
  Truck,
};

export function ServicesDetailed() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col md:flex-row items-start gap-6 bg-gray-50 rounded-2xl p-8 border border-gray-100"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <Icon size={28} className="text-blue-700" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-blue-500 bg-blue-50 px-2 py-1 rounded-full">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-xl font-bold text-gray-900">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href={`https://wa.me/${BRAND.harun.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:shadow-lg"
          >
            <MessageCircle size={22} />
            Kontaktiraj Haruna WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
