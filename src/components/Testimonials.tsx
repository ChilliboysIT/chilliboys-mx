"use client";

import { useI18n } from "@/lib/i18n";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah & Mike",
    location: "Cerritos Beach",
    project: "Pergolas & Shade",
    text: "Built our pergola in 2023, still perfect after two hurricane seasons. The team was professional, on time, and the steelwork is immaculate. You Dream It, They Build It — for real.",
    rating: 5,
  },
  {
    name: "Carlos R.",
    location: "Todos Santos",
    project: "Custom Handrails",
    text: "We needed a modern handrail for our cliffside villa. Chilli Boys designed something that looks like it belongs in an architecture magazine. The hammered copper finish is stunning.",
    rating: 5,
  },
  {
    name: "The Johnson Family",
    location: "La Paz",
    project: "Gates & Entry",
    text: "Our custom gate has become the talk of the neighborhood. The rust patina finish fits perfectly with our desert landscape. Highly recommend for anyone in BCS.",
    rating: 5,
  },
];

export default function Testimonials() {
  const { t } = useI18n();

  return (
    <section id="testimonials" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <Quote className="w-10 h-10 text-copper mx-auto mb-4" />
        <h2 className="text-4xl md:text-5xl font-black mb-4">
          {t("testimonials.title") as string}
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          {t("testimonials.subtitle") as string}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-copper/30 transition-all"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: item.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-copper text-copper" />
              ))}
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 italic">"{item.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-copper/20 flex items-center justify-center text-copper font-bold">
                {item.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-sm">{item.name}</p>
                <p className="text-xs text-gray-500">
                  {item.location} · {item.project}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-gray-500 mt-8">
        * Replace these with real testimonials and photos from your clients.
      </p>
    </section>
  );
}
