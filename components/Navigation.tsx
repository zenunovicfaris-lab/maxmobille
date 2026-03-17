"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, BRAND } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100"
          : "bg-blue-900/40 backdrop-blur-sm border-b border-white/10"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className={cn("text-xl font-bold transition-colors", scrolled ? "text-blue-700" : "text-white")}>
              MaxMobille
            </span>
            <span className={cn("text-xs hidden sm:block transition-colors", scrolled ? "text-gray-500" : "text-blue-200")}>d.o.o.</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  scrolled
                    ? pathname === link.href
                      ? "text-blue-700"
                      : "text-gray-600 hover:text-blue-700"
                    : pathname === link.href
                      ? "text-white font-semibold"
                      : "text-blue-100 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="hidden md:flex">
            <a
              href={`https://wa.me/${BRAND.harun.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "text-sm font-semibold px-4 py-2 rounded-lg transition-colors",
                scrolled
                  ? "bg-blue-700 text-white hover:bg-blue-800"
                  : "bg-white/15 border border-white/40 text-white hover:bg-white/25"
              )}
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className={cn("md:hidden p-2 transition-colors", scrolled ? "text-gray-600" : "text-white")}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "block py-3 text-sm font-medium border-b border-gray-50 transition-colors",
                pathname === link.href
                  ? "text-blue-700"
                  : "text-gray-600 hover:text-blue-700"
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`https://wa.me/${BRAND.harun.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-center bg-blue-700 text-white text-sm font-semibold px-4 py-3 rounded-lg"
          >
            Kontaktiraj na WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
