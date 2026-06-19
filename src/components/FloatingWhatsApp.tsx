"use client";

import { MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/constants";

export default function FloatingWhatsApp() {
  const { t } = useI18n();

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-4 py-3 rounded-full shadow-2xl hover:shadow-green-500/40 transition-all hover:scale-105 group"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-sm font-medium">
        {t("floating.tooltip") as string}
      </span>
    </a>
  );
}
