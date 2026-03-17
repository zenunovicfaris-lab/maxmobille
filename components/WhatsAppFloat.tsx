"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/constants";

// Persistent floating WhatsApp button visible on all pages
export function WhatsAppFloat() {
  return (
    <motion.a
      href={`https://wa.me/${BRAND.harun.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Kontaktiraj na WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
    >
      <MessageCircle size={26} fill="currentColor" />
      {/* Pulse ring */}
      <span className="absolute w-full h-full rounded-full bg-green-400 animate-ping opacity-30" />
    </motion.a>
  );
}
