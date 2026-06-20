"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { socialLinks } from "@/lib/social";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-white/10 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand & contact */}
        <div className="text-center md:text-left space-y-4">
          <p className="font-bold text-lg">Chilli Boys Manufacturing</p>
          <div className="space-y-2 text-sm text-gray-500">
            <p className="flex items-center justify-center md:justify-start gap-2">
              <MapPin className="w-4 h-4 text-[#b87333]" />
              KM 65 Highway 1, El Pescadero BCS 23300
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <Phone className="w-4 h-4 text-[#b87333]" />
              {t("info.phone.val") as string}
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <Mail className="w-4 h-4 text-[#b87333]" />
              <a href="mailto:build@chilliboys.mx" className="hover:text-white transition-colors">build@chilliboys.mx</a>
            </p>
          </div>
          <p className="text-xs text-gray-600">DWG NO: CB-2025-001 | REV: A</p>
        </div>

        {/* Social */}
        <div className="flex flex-col items-center justify-center gap-3">
          <p className="text-sm text-gray-500 uppercase tracking-wider">Connect</p>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg bg-white/5 transition-all hover:scale-110 ${link.color}`}
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Legal / links */}
        <div className="text-center md:text-right text-sm text-gray-500 space-y-2">
          <p>© {new Date().getFullYear()} Chilli Boys Manufacturing</p>
          <p>
            <Link href="https://plan.chilliboys.mx" className="hover:text-[#b87333] transition-colors">
              {t("footer.plan") as string}
            </Link>
          </p>
          <div className="flex gap-4 justify-center md:justify-end text-xs">
            <Link href="/products" className="hover:text-white transition-colors">
              {t("nav.catalog") as string}
            </Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              {t("footer.privacy") as string}
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              {t("footer.terms") as string}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
