"use client";

import {
  Phone, MapPin, Hammer, Ruler, Waves,
  Mountain, Factory, ArrowRight, MessageCircle, Clock,
} from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/constants";
import { socialLinks } from "@/lib/social";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

function WhatsAppButton({ large = false }: { large?: boolean }) {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
  const classes = large
    ? "inline-flex items-center justify-center gap-2 sm:gap-3 copper-gradient px-5 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-lg shadow-2xl hover:shadow-copper/50 transition-all hover:scale-105 text-center max-w-full"
    : "inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-5 py-2.5 rounded-full font-medium transition-all hover:scale-105";
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
      <MessageCircle className={large ? "w-6 h-6" : "w-5 h-5"} />
      {large ? (
        <>
          <span className="sm:hidden">Start on WhatsApp</span>
          <span className="hidden sm:inline">Start Your Project on WhatsApp</span>
        </>
      ) : (
        "Chat on WhatsApp"
      )}
    </a>
  );
}

export default function Home() {
  const { t } = useI18n();

  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
          <div className="absolute -top-10 -left-10 w-72 h-72 sm:w-96 sm:h-96 bg-[#b87333] rounded-full blur-[100px] sm:blur-[140px]" />
          <div className="absolute -bottom-10 -right-10 w-80 h-80 sm:w-[28rem] sm:h-[28rem] bg-[#8b4513] rounded-full blur-[120px] sm:blur-[160px]" />
        </div>
        <div className="relative z-10 w-full max-w-4xl mx-auto text-center py-12 space-y-5 sm:space-y-6">
          <div className="flex items-center justify-center gap-4 mb-2 sm:mb-4">
            <LanguageSwitcher />
          </div>
          <div className="block mb-2 sm:mb-4">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto bg-white/5 border-2 border-copper/30 rounded-full flex items-center justify-center text-copper font-black text-base sm:text-xl tracking-tighter">
              CHILLI<br/>BOYS
            </div>
          </div>
          <div className="inline-flex flex-wrap justify-center items-center gap-2 text-[10px] sm:text-sm tracking-[0.15em] sm:tracking-[0.3em] uppercase text-[#b87333] font-semibold border border-[#b87333]/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full max-w-full">
            <Factory className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="text-center leading-none whitespace-normal">{t("hero.tagline") as string}</span>
          </div>
          <h1 className="text-[1.5rem] sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.1] break-all sm:break-words px-1 sm:px-0 min-w-0 w-full max-w-[340px] sm:max-w-full">
            {t("hero.title1") as string}<br/>
            <span className="text-gradient-copper">{t("hero.title2") as string}</span>
          </h1>
          <p className="text-[10px] sm:text-lg md:text-2xl text-gray-400 w-full max-w-[340px] sm:max-w-2xl mx-auto leading-normal sm:leading-relaxed break-all sm:break-words min-w-0">{t("hero.subtitle") as string}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 sm:pt-6 w-full px-2 sm:px-0">
            <WhatsAppButton large />
            <Link href="/products" className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-white/20 hover:bg-white/5 transition-all font-medium text-sm sm:text-base">
              {t("hero.cta.catalog") as string}<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
          <div className="flex items-center justify-center gap-5 sm:gap-6 pt-6 sm:pt-8">
            {socialLinks.map((link) => (
              <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer"
                 className={`p-2.5 sm:p-3 rounded-full bg-white/5 border border-white/10 transition-all hover:scale-110 ${link.color}`} aria-label={link.name}>
                <link.icon className="w-5 h-5 sm:w-6 sm:h-6" />
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
              <div><p className="text-sm text-gray-500 uppercase tracking-wider">{t("info.phone") as string}</p><p className="font-medium text-sm">{t("info.phone.val") as string}</p></div>
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

      <Footer />

      <FloatingWhatsApp />
    </main>
  );
}
