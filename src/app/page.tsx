"use client";

import {
  Phone, Instagram, Facebook, MapPin, Mail, Hammer, Ruler, Waves,
  Mountain, Factory, ArrowRight, MessageCircle, Clock, Check,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const WHATSAPP_NUMBER = "5216242294158";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Chilli Boys! I visited your website and I'm interested in a custom project. Can we discuss?"
);

const socialLinks = [
  { name: "Instagram", href: "https://instagram.com/chilliboys.mx", icon: Instagram, color: "hover:text-pink-500" },
  { name: "Facebook", href: "https://facebook.com/chilliboys.mx", icon: Facebook, color: "hover:text-blue-500" },
  { name: "WhatsApp", href: `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, icon: MessageCircle, color: "hover:text-green-500" },
];

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

function WhatsAppButton({ large = false }: { large?: boolean }) {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
  const classes = large
    ? "inline-flex items-center gap-3 copper-gradient px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-copper/50 transition-all hover:scale-105"
    : "inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-5 py-2.5 rounded-full font-medium transition-all hover:scale-105";
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
      <MessageCircle className={large ? "w-6 h-6" : "w-5 h-5"} />
      {large ? "Start Your Project on WhatsApp" : "Chat on WhatsApp"}
    </a>
  );
}

export default function Home() {
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
      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] text-center px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#b87333] rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8b4513] rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <div className="flex items-center justify-center gap-4 mb-4">
            <LanguageSwitcher />
          </div>
          <div className="inline-block mb-4">
            <div className="w-32 h-32 mx-auto bg-white/5 border-2 border-copper/30 rounded-full flex items-center justify-center text-copper font-black text-xl tracking-tighter">
              CHILLI<br/>BOYS
            </div>
          </div>
          <div className="inline-flex items-center gap-2 text-sm tracking-[0.3em] uppercase text-[#b87333] font-semibold border border-[#b87333]/30 px-4 py-2 rounded-full">
            <Factory className="w-4 h-4" />
            {t("hero.tagline") as string}
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1]">
            {t("hero.title1") as string}<br/>
            <span className="text-transparent bg-clip-text copper-gradient">{t("hero.title2") as string}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">{t("hero.subtitle") as string}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <WhatsAppButton large />
            <a href="#catalog" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 transition-all font-medium">
              {t("hero.cta.catalog") as string}<ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <div className="flex items-center justify-center gap-6 pt-8">
            {socialLinks.map((link) => (
              <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer"
                 className={`p-3 rounded-full bg-white/5 border border-white/10 transition-all hover:scale-110 ${link.color}`} aria-label={link.name}>
                <link.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* INFO BAR */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center md:text-left">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <MapPin className="w-5 h-5 text-[#b87333] shrink-0" />
              <div><p className="text-sm text-gray-500 uppercase tracking-wider">{t("info.location") as string}</p><p className="font-medium text-sm">KM 65 Highway 1<br/>El Pescadero, BCS 23300</p></div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <Ruler className="w-5 h-5 text-[#b87333] shrink-0" />
              <div><p className="text-sm text-gray-500 uppercase tracking-wider">{t("info.specialty") as string}</p><p className="font-medium text-sm">{t("info.specialty.val") as string}</p></div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <Waves className="w-5 h-5 text-[#b87333] shrink-0" />
              <div><p className="text-sm text-gray-500 uppercase tracking-wider">{t("info.service") as string}</p><p className="font-medium text-sm">{t("info.service.val") as string}</p></div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <Clock className="w-5 h-5 text-[#b87333] shrink-0" />
              <div><p className="text-sm text-gray-500 uppercase tracking-wider">{t("info.hours") as string}</p><p className="font-medium text-sm">{t("info.hours.val") as string}</p></div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <Phone className="w-5 h-5 text-[#b87333] shrink-0" />
              <div><p className="text-sm text-gray-500 uppercase tracking-wider">{t("info.phone") as string}</p><p className="font-medium text-sm">+52 624 229 4158</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <Hammer className="w-16 h-16 text-copper mx-auto mb-4" />
                <p className="text-gray-500 text-sm">[Insert workshop photo here]</p>
                <p className="text-gray-600 text-xs mt-2">Crafting metal wonders: Our gallery of work</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 copper-gradient rounded-xl -z-10" />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-black">{t("about.title") as string}</h2>
            <p className="text-gray-400 leading-relaxed">{t("about.p1") as string}</p>
            <p className="text-gray-400 leading-relaxed">{t("about.p2") as string}</p>
            <p className="text-gray-400 leading-relaxed">{t("about.p3") as string}</p>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 text-copper hover:text-white transition-colors font-medium">
              <MessageCircle className="w-5 h-5" />{t("about.cta") as string}
            </a>
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-black mb-4">{t("catalog.title") as string}</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">{t("catalog.subtitle") as string}</p>
        </div>
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
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3"><Hammer className="w-6 h-6 text-[#b87333]" />{t(section.category) as string}</h3>
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

      {/* LEAD FORM */}
      <section id="contact" className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 copper-gradient opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <Mountain className="w-16 h-16 mx-auto text-[#b87333]" />
          <h2 className="text-4xl md:text-5xl font-black">{t("lead.title") as string}</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t("lead.subtitle") as string}</p>
          <LeadForm />
          <div className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-xl bg-black/30 border border-white/10"><p className="text-[#b87333] font-bold text-lg mb-1">Step 1</p><p className="text-sm text-gray-400">Fill out the form above or message us on WhatsApp with your idea.</p></div>
            <div className="p-6 rounded-xl bg-black/30 border border-white/10"><p className="text-[#b87333] font-bold text-lg mb-1">Step 2</p><p className="text-sm text-gray-400">We draft a storyboard and send you a custom quote within 48 hours.</p></div>
            <div className="p-6 rounded-xl bg-black/30 border border-white/10"><p className="text-[#b87333] font-bold text-lg mb-1">Step 3</p><p className="text-sm text-gray-400">We fabricate, deliver, and install. Built for the Baja climate.</p></div>
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ />

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-bold text-lg">Chilli Boys MFG.</p>
            <p className="text-sm text-gray-500">KM 65 Highway 1, El Pescadero BCS 23300</p>
            <p className="text-xs text-gray-600 mt-1">DWG NO: CB-2025-001 | REV: A</p>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer"
                 className={`p-2 rounded-lg bg-white/5 transition-all hover:scale-110 ${link.color}`} aria-label={link.name}>
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          <div className="text-center md:text-right text-sm text-gray-500 space-y-1">
            <p>© {new Date().getFullYear()} Chilli Boys Manufacturing</p>
            <p className="mt-1"><Link href="https://plan.chilliboys.mx" className="hover:text-[#b87333] transition-colors">{t("footer.plan") as string}</Link></p>
            <div className="flex gap-4 justify-center md:justify-end text-xs">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">{t("footer.privacy") as string}</Link>
              <Link href="/terms" className="hover:text-white transition-colors">{t("footer.terms") as string}</Link>
            </div>
          </div>
        </div>
      </footer>

      <FloatingWhatsApp />
    </main>
  );
}
