"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { BRAND } from "@/lib/constants";

const TEAM = [
  {
    name: BRAND.harun.name,
    role: BRAND.harun.role,
    location: "Srebrenik, BiH",
    phone: BRAND.harun.phone,
    whatsapp: BRAND.harun.whatsapp,
    description:
      "Osnivač MaxMobille-a i vaša kontakt osoba za sve upite. Harun koordinira cijeli proces od prvog kontakta do isporuke, osiguravajući da vaša narudžba teče bez komplikacija.",
    avatar: "H",
    color: "bg-blue-700",
    image: "/images/harun.jpg",
  },
  {
    name: BRAND.ellen.name,
    role: BRAND.ellen.role,
    location: "Kina",
    phone: BRAND.ellen.phone,
    whatsapp: BRAND.ellen.whatsapp,
    description:
      "Ellen je naša menadžerica nabave sa sjedištem u Kini. Direktno komunicira s fabrikama, vrši inspekcije robe i prati produkciju osiguravajući da sve bude prema dogovoru.",
    avatar: "E",
    color: "bg-indigo-600",
    image: "/images/ellen.jpg",
  },
];

// Shows photo if available, falls back to letter avatar
function MemberAvatar({
  image,
  avatar,
  color,
  name,
}: {
  image: string;
  avatar: string;
  color: string;
  name: string;
}) {
  const [imgError, setImgError] = useState(false);
  if (imgError) {
    return (
      <div className={`w-20 h-20 ${color} rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-5`}>
        {avatar}
      </div>
    );
  }
  return (
    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-5 ring-4 ring-blue-100">
      <Image
        src={image}
        alt={`${name} MaxMobille tim`}
        width={80}
        height={80}
        className="object-cover w-full h-full"
        onError={() => setImgError(true)}
      />
    </div>
  );
}

export function TeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Naš tim
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dva kontinenta, jedna misija vaša roba sigurno i na vrijem.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {TEAM.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100"
            >
              {/* Avatar photo or letter fallback */}
              <MemberAvatar
                image={member.image}
                avatar={member.avatar}
                color={member.color}
                name={member.name}
              />

              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-blue-700 font-medium text-sm mb-2">
                {member.role}
              </p>
              <div className="flex items-center justify-center gap-1 text-gray-500 text-xs mb-4">
                <MapPin size={12} />
                {member.location}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {member.description}
              </p>

              {/* Contact buttons */}
              <div className="flex gap-3 justify-center">
                <a
                  href={`https://wa.me/${member.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                >
                  <MessageCircle size={15} />
                  WhatsApp
                </a>
                <a
                  href={`tel:${member.phone}`}
                  className="flex items-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                >
                  <Phone size={15} />
                  Pozovi
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
