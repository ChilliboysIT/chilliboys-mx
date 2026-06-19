"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { socialLinks } from "@/lib/social";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-white/10 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-bold text-lg">Chilli Boys MFG.</p>
          <p className="text-sm text-gray-500">KM 65 Highway 1, El Pescadero BCS 23300</p>
          <p className="text-xs text-gray-600 mt-1">DWG NO: CB-2025-001 | REV: A</p>
        </div>
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
        <div className="text-center md:text-right text-sm text-gray-500 space-y-1">
          <p>© {new Date().getFullYear()} Chilli Boys Manufacturing</p>
          <p className="mt-1">
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
