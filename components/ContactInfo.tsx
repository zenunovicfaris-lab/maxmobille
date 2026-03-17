import { MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import { BRAND } from "@/lib/constants";

export function ContactInfo() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Direktni kontakt
      </h2>

      {/* WhatsApp - primary */}
      <a
        href={`https://wa.me/${BRAND.harun.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 bg-green-50 hover:bg-green-100 border border-green-200 rounded-2xl p-5 mb-4 transition-colors group"
      >
        <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
          <MessageCircle size={24} className="text-white" />
        </div>
        <div>
          <div className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
            WhatsApp (Harun)
          </div>
          <div className="text-green-600 font-medium">{BRAND.harun.phone}</div>
          <div className="text-gray-500 text-xs mt-0.5">
            Najbrži odgovor tipično &lt;2h
          </div>
        </div>
      </a>

      {/* Phone */}
      <a
        href={`tel:${BRAND.harun.phone}`}
        className="flex items-center gap-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-2xl p-5 mb-4 transition-colors group"
      >
        <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
          <Phone size={24} className="text-white" />
        </div>
        <div>
          <div className="font-semibold text-gray-900">Poziv (Harun)</div>
          <div className="text-blue-700 font-medium">{BRAND.harun.phone}</div>
        </div>
      </a>

      {/* Email */}
      <a
        href={`mailto:${BRAND.email}`}
        className="flex items-center gap-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-2xl p-5 mb-4 transition-colors"
      >
        <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center flex-shrink-0">
          <Mail size={24} className="text-white" />
        </div>
        <div>
          <div className="font-semibold text-gray-900">Email</div>
          <div className="text-gray-600">{BRAND.email}</div>
        </div>
      </a>

      {/* Address & Hours */}
      <div className="space-y-3 mt-6">
        <div className="flex items-start gap-3 text-sm text-gray-600">
          <MapPin size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
          <span>{BRAND.address}</span>
        </div>
        <div className="flex items-start gap-3 text-sm text-gray-600">
          <Clock size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
          <span>Pon Sub: 09:00 18:00 (Ellen u Kini: dostupna 24/7)</span>
        </div>
      </div>
    </div>
  );
}
