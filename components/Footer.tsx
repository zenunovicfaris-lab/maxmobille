import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-white text-xl font-bold mb-2">MaxMobille</div>
            <div className="text-gray-500 text-xs mb-4">d.o.o.</div>
            <p className="text-sm leading-relaxed max-w-sm">
              Vaš pouzdani partner za uvoz robe iz Kine za BiH i Balkan. Tim na
              dva kontinenta za vašu sigurnost.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-white font-semibold text-sm mb-4">
              Navigacija
            </div>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-white font-semibold text-sm mb-4">Kontakt</div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin size={15} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span>{BRAND.address}</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail size={15} className="text-blue-400 flex-shrink-0" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-white transition-colors">
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone size={15} className="text-blue-400 flex-shrink-0" />
                <a href={`tel:${BRAND.harun.phone}`} className="hover:text-white transition-colors">
                  {BRAND.harun.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs">
            © {new Date().getFullYear()} MaxMobille d.o.o. Sva prava pridržana.
          </p>
          <p className="text-xs">
            Radnička 16, Srebrenik 75350, BiH
          </p>
        </div>
      </div>
    </footer>
  );
}
