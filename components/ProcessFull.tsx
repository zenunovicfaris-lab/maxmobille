"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { PROCESS_STEPS, BRAND } from "@/lib/constants";

export function ProcessFull() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vertical timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-100" />

          <div className="space-y-8">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative flex gap-6"
              >
                {/* Circle */}
                <div className="flex-shrink-0 w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                  {step.number}
                </div>

                {/* Card */}
                <div className="flex-1 pb-2">
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href={`https://wa.me/${BRAND.harun.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all hover:shadow-lg"
          >
            <MessageCircle size={22} />
            Pokreni proces – WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
