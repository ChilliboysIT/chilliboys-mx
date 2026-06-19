"use client";

import { useI18n } from "@/lib/i18n";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const { lang, setLang } = useI18n();

  return (
    <button
      onClick={() => setLang(lang === "en" ? "es" : "en")}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all text-sm font-medium"
      aria-label="Switch language"
    >
      <Globe className="w-4 h-4" />
      <span className="uppercase tracking-wider">{lang === "en" ? "ES" : "EN"}</span>
    </button>
  );
}
