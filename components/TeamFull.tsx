"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";
import { BRAND } from "@/lib/constants";

const TEAM_FULL = [
  {
    name: BRAND.harun.name,
    role: BRAND.harun.role,
    location: "Srebrenik, BiH",
    phone: BRAND.harun.phone,
    whatsapp: BRAND.harun.whatsapp,
    email: BRAND.email,
    bio: "Harun je osnivač MaxMobille-a i jedini kontakt na Balkan strani. Sa iskustvom u međunarodnoj trgovini i dubokim razumijevanjem kineskog tržišta, vodi svaki projekt osobno od prvog upita do finalne isporuke. Dostupan je svaki dan za konzultacije bez obaveza.",
    skills: ["Pregovaranje", "Logistika", "Carinska administracija", "Koordinacija"],
    avatar: "H",
    color: "bg-blue-700",
    image: "/images/harun.jpg",
  },
  {
    name: BRAND.ellen.name,
    role: BRAND.ellen.role,
    location: "Kina (Guangzhou / Shenzhen)",
    phone: BRAND.ellen.phone,
    whatsapp: BRAND.ellen.whatsapp,
    email: null,
    bio: "Ellen je naša lokalna ekspertica u Kini sa višegodišnjim iskustvom u nabavci za strane klijente. Tečno govori mandarski, engleski i ograničeno srpski/bosanski. Posjećuje fabrike, vrši inspekcije robe i komunicira direktno s proizvođačima u vaše ime.",
    skills: ["Inspekcija fabrika", "Pregovaranje s dobavljačima", "Kontrola kvaliteta", "Mandarin/English"],
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
      <div className={`w-20 h-20 ${color} rounded-2xl flex items-center justify-center text-white text-3xl font-bold flex-shrink-0`}>
        {avatar}
      </div>
    );
  }
  return (
    <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 ring-4 ring-blue-100">
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

export function TeamFull() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TEAM_FULL.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
            >
              {/* Avatar photo or letter fallback */}
              <div className="flex items-start gap-5 mb-6">
                <MemberAvatar
                  image={member.image}
                  avatar={member.avatar}
                  color={member.color}
                  name={member.name}
                />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h2>
                  <p className="text-blue-700 font-medium text-sm mb-1">
                    {member.role}
                  </p>
                  <div className="flex items-center gap-1 text-gray-500 text-xs">
                    <MapPin size={12} />
                    {member.location}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed text-sm mb-6">
                {member.bio}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Contact */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone size={14} className="text-blue-500" />
                  <a href={`tel:${member.phone}`} className="hover:text-blue-700 transition-colors">
                    {member.phone}
                  </a>
                </div>
                {member.email && (
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail size={14} className="text-blue-500" />
                    <a href={`mailto:${member.email}`} className="hover:text-blue-700 transition-colors">
                      {member.email}
                    </a>
                  </div>
                )}
              </div>

              {/* CTA buttons */}
              <div className="flex gap-3">
                <a
                  href={`https://wa.me/${member.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-3 rounded-lg transition-colors"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
                <a
                  href={`tel:${member.phone}`}
                  className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-sm font-semibold py-3 rounded-lg transition-colors"
                >
                  <Phone size={16} />
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
