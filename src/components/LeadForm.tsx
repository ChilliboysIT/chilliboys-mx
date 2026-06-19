"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Send, CheckCircle, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5216242294158"; // ← REPLACE WITH YOUR REAL NUMBER

const projectTypes = [
  "project.handrails",
  "project.pergolas",
  "project.gates",
  "project.stairs",
  "project.shutters",
  "project.sconces",
  "project.solar",
  "project.signs",
  "project.steel",
  "project.wood",
  "project.furniture",
  "project.kitchen",
  "project.fire",
  "project.other",
];

const budgets = ["budget.1", "budget.2", "budget.3", "budget.4", "budget.5"];
const timelines = ["timeline.1", "timeline.2", "timeline.3", "timeline.4", "timeline.5"];

export default function LeadForm() {
  const { t } = useI18n();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const msg = encodeURIComponent(
      `Hi Chilli Boys!\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Project: ${formData.projectType ? t(formData.projectType) : "N/A"}\n` +
        `Budget: ${formData.budget ? t(formData.budget) : "N/A"}\n` +
        `Timeline: ${formData.timeline ? t(formData.timeline) : "N/A"}\n\n` +
        `Details: ${formData.message || "N/A"}`
    );

    setSubmitted(true);
    setTimeout(() => {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    }, 800);
  };

  if (submitted) {
    return (
      <div className="text-center space-y-6 py-8">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
        <h3 className="text-2xl font-bold">{t("lead.success") as string}</h3>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-full font-medium transition-all"
        >
          <MessageCircle className="w-5 h-5" />
          Open WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl mx-auto text-left">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium mb-1.5 text-gray-300">
            {t("lead.name") as string} <span className="text-red-400">*</span>
          </label>
          <input
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-copper focus:ring-1 focus:ring-copper outline-none transition-all"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5 text-gray-300">
            {t("lead.email") as string}
          </label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-copper focus:ring-1 focus:ring-copper outline-none transition-all"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium mb-1.5 text-gray-300">
            {t("lead.phone") as string} <span className="text-red-400">*</span>
          </label>
          <input
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-copper focus:ring-1 focus:ring-copper outline-none transition-all"
            placeholder="+52 624 123 4567"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5 text-gray-300">
            {t("lead.projectType") as string}
          </label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-copper focus:ring-1 focus:ring-copper outline-none transition-all appearance-none"
          >
            <option value="">{t("lead.projectType.placeholder") as string}</option>
            {projectTypes.map((pt) => (
              <option key={pt} value={pt}>
                {t(pt) as string}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium mb-1.5 text-gray-300">
            {t("lead.budget") as string}
          </label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-copper focus:ring-1 focus:ring-copper outline-none transition-all appearance-none"
          >
            <option value="">{t("lead.budget.placeholder") as string}</option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {t(b) as string}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5 text-gray-300">
            {t("lead.timeline") as string}
          </label>
          <select
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-copper focus:ring-1 focus:ring-copper outline-none transition-all appearance-none"
          >
            <option value="">{t("lead.timeline.placeholder") as string}</option>
            {timelines.map((tl) => (
              <option key={tl} value={tl}>
                {t(tl) as string}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5 text-gray-300">
          {t("lead.message") as string}
        </label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-copper focus:ring-1 focus:ring-copper outline-none transition-all resize-none"
          placeholder={t("lead.message.placeholder") as string}
        />
      </div>

      <button
        type="submit"
        className="w-full md:w-auto inline-flex items-center justify-center gap-2 copper-gradient px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-copper/50 transition-all hover:scale-105"
      >
        <Send className="w-5 h-5" />
        {t("lead.submit") as string}
      </button>
    </form>
  );
}
