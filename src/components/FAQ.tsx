"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqKeys = [
  { q: "faq.q1", a: "faq.a1" },
  { q: "faq.q2", a: "faq.a2" },
  { q: "faq.q3", a: "faq.a3" },
  { q: "faq.q4", a: "faq.a4" },
  { q: "faq.q5", a: "faq.a5" },
  { q: "faq.q6", a: "faq.a6" },
];

export default function FAQ() {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <HelpCircle className="w-10 h-10 text-copper mx-auto mb-4" />
        <h2 className="text-4xl md:text-5xl font-black mb-4">{t("faq.title") as string}</h2>
      </div>

      <div className="space-y-4">
        {faqKeys.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
            >
              <span className="font-bold text-lg pr-4">{t(item.q) as string}</span>
              <ChevronDown
                className={`w-5 h-5 text-copper shrink-0 transition-transform ${
                  openIndex === idx ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === idx && (
              <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                {t(item.a) as string}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
