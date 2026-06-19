"use client";

import { useState } from "react";
import Link from "next/link";
import { Hammer, Check, ArrowLeft } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import Footer from "@/components/Footer";

const filters = [
  "catalog.filter.all", "catalog.filter.textures", "catalog.filter.concepts",
  "catalog.filter.pastwork", "catalog.filter.handrails", "catalog.filter.pergolas",
  "catalog.filter.gates", "catalog.filter.solar", "catalog.filter.wood",
  "catalog.filter.steel", "catalog.filter.furniture",
];

const catalog = [
  {
    category: "catalog.filter.textures",
    items: [
      { name: "Hammered Copper", desc: "Hand-hammered texture with living finish that patinas beautifully in coastal air.", tag: "#copper #handmade", filter: "catalog.filter.textures" },
      { name: "Rusty Patina", desc: "Accelerated weathering process for that timeless Baja rust aesthetic.", tag: "#rust #weathered", filter: "catalog.filter.textures" },
      { name: "Matte Black Steel", desc: "Powder-coated or raw steel with industrial-grade matte finish.", tag: "#steel #industrial", filter: "catalog.filter.steel" },
      { name: "Brushed Aluminum", desc: "Marine-grade aluminum, brushed for a modern, lightweight look.", tag: "#aluminum #modern", filter: "catalog.filter.steel" },
      { name: "Natural Wood", desc: "Teak, mesquite, and reclaimed hardwoods sourced locally in BCS.", tag: "#wood #organic", filter: "catalog.filter.wood" },
      { name: "Wrought Iron", desc: "Hand-forged details with traditional blacksmith techniques.", tag: "#iron #handforged", filter: "catalog.filter.gates" },
    ],
  },
  {
    category: "catalog.filter.concepts",
    items: [
      { name: "Desert Modern", desc: "Clean lines, raw steel, and sun-bleached wood. Built to outlast the Baja sun.", tag: "#minimal #steel #outdoor", filter: "catalog.filter.concepts" },
      { name: "Coastal Rustic", desc: "Weathered finishes and hand-forged details that embrace salt air and sea breeze.", tag: "#rustic #hand-forged #coastal", filter: "catalog.filter.concepts" },
      { name: "Industrial Chic", desc: "Exposed welds, perforated panels, and bold geometry for statement pieces.", tag: "#industrial #modern #commercial", filter: "catalog.filter.concepts" },
      { name: "Baja Organic", desc: "Curved forms inspired by desert landscapes and ocean waves.", tag: "#organic #curved #artistic", filter: "catalog.filter.concepts" },
    ],
  },
  {
    category: "catalog.filter.pastwork",
    items: [
      { name: "Pergolas & Shade Structures", desc: "Engineered for 120mph Baja winds. Steel, wood, or hybrid construction.", tag: "#pergola #shade #engineering", filter: "catalog.filter.pergolas" },
      { name: "Staircases & Railings", desc: "Custom elevations, handrail sections, and code-compliant structural steel.", tag: "#stairs #handrail #structural", filter: "catalog.filter.handrails" },
      { name: "Gates & Entry Systems", desc: "Automated or manual. From minimalist to ornate wrought iron.", tag: "#gate #entry #security", filter: "catalog.filter.gates" },
      { name: "Outdoor Kitchens & Fire Features", desc: "Custom fabrication for coastal environments. Stainless, copper, or corten.", tag: "#outdoor #kitchen #fire", filter: "catalog.filter.furniture" },
      { name: "Solar Installation", desc: "Integrated solar panel mounts and brackets designed for Baja wind loads.", tag: "#solar #renewable #engineering", filter: "catalog.filter.solar" },
      { name: "CNC Woodwork", desc: "Precision-cut hardwood panels, signage, and decorative elements.", tag: "#cnc #wood #precision", filter: "catalog.filter.wood" },
      { name: "Custom Steel Panels", desc: "Perforated, laser-cut, or rolled steel for architectural facades.", tag: "#steel #panel #architecture", filter: "catalog.filter.steel" },
      { name: "Furniture", desc: "Bespoke tables, benches, and shelving built to survive the elements.", tag: "#furniture #custom #outdoor", filter: "catalog.filter.furniture" },
    ],
  },
];

export default function ProductsPage() {
  const { t } = useI18n();
  const [activeFilter, setActiveFilter] = useState("catalog.filter.all");

  const filteredCatalog = catalog.map((s) => ({
    ...s,
    items: s.items.filter((i) => {
      if (activeFilter === "catalog.filter.all") return true;
      if (activeFilter === s.category) return true;
      if (activeFilter === i.filter) return true;
      return false;
    }),
  })).filter((s) => s.items.length > 0);

  return (
    <main className="min-h-screen">
      {/* HEADER */}
      <section className="relative px-4 sm:px-6 pt-8 pb-12 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <div className="absolute -top-10 -right-10 w-72 h-72 sm:w-96 sm:h-96 bg-[#b87333] rounded-full blur-[100px] sm:blur-[140px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />{t("nav.home") as string}
          </Link>
          <h1 className="text-4xl md:text-5xl font-black mb-4">{t("catalog.title") as string}</h1>
          <p className="text-gray-400 text-lg max-w-2xl">{t("catalog.subtitle") as string}</p>
        </div>
      </section>

      {/* CATALOG */}
      <section className="pb-24 px-4 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button key={f} onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                activeFilter === f ? "copper-gradient border-transparent text-white" : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}>
              <span className="flex items-center gap-1.5">{activeFilter === f && <Check className="w-3.5 h-3.5" />}{t(f) as string}</span>
            </button>
          ))}
        </div>
        <div className="space-y-16">
          {filteredCatalog.map((section) => (
            <div key={section.category}>
              <h3 className="text-xl sm:text-2xl font-bold mb-8 flex flex-wrap items-center gap-3 break-words"><Hammer className="w-6 h-6 text-[#b87333]" />{t(section.category) as string}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item) => (
                  <div key={item.name} className="texture-card group relative p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#b87333]/50 hover:bg-white/[0.06]">
                    <div className="h-2 w-12 copper-gradient rounded-full mb-4 group-hover:w-20 transition-all" />
                    <h4 className="text-xl font-bold mb-2">{item.name}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.desc}</p>
                    <span className="text-xs text-[#b87333] font-mono">{item.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
