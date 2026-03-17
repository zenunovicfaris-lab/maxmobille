"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";

export function ProcessTimeline() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kako funkcioniše proces
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Od vašeg upita do isporuke – transparentno, pouzdano, efikasno.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-blue-200 -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-0">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className={`relative flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-0 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0
                      ? "lg:text-right lg:pr-16"
                      : "lg:text-left lg:pl-16"
                  }`}
                >
                  <div
                    className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 ${
                      index % 2 === 0 ? "lg:ml-auto lg:max-w-sm" : "lg:mr-auto lg:max-w-sm"
                    }`}
                  >
                    <div className="text-xs font-bold text-blue-500 mb-1 uppercase tracking-wide">
                      Korak {step.number}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Number circle */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-700 text-white rounded-full items-center justify-center font-bold text-sm z-10">
                  {step.number}
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
