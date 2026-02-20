'use client';

import { useState } from "react";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { ROUTES, APP_CONFIG } from "@/lib/constants";
import { useLanguage } from "@/lib/languageContext";

type Status = "idle" | "sending" | "success" | "error";

export function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "general",
    message: "",
    country: "",
    consentPrivacy: false,
    consentMarketing: false,
    consentAge: false,
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!formData.consentPrivacy || !formData.consentAge) {
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(`${APP_CONFIG.apiUrl}/public/feedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          type: formData.topic,
          message: formData.message,
          source: 'landing'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send feedback');
      }

      const consentLog = {
        consentPrivacy: formData.consentPrivacy,
        consentMarketing: formData.consentMarketing,
        consentAge: formData.consentAge,
        timestamp: new Date().toISOString(),
        policyVersion: "1.0",
      };
      localStorage.setItem("jai_contact_consent", JSON.stringify(consentLog));

      setStatus("success");
      setFormData((prev) => ({
        ...prev,
        message: "",
        consentPrivacy: false,
        consentAge: false,
        consentMarketing: false,
      }));
    } catch (err) {
      console.error("Feedback submission error:", err);
      setStatus("error");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <div className="min-h-screen bg-dark text-white">
      <div className="max-w-4xl mx-auto px-4 pt-24 pb-12">
        <div className="mb-6">
          <Link href={ROUTES.home} className="text-sm text-pink-400 hover:text-pink-300">
            &larr; {t.legal.back}
          </Link>
        </div>

        <GlassCard>
          <h1 className="text-3xl font-bold mb-2 text-white">{t.contact.title}</h1>
          <p className="text-gray-400 mb-8">{t.contact.subtitle}</p>

          {status === "success" ? (
            <div className="p-4 bg-green-500/10 border border-green-500/30 text-green-400 rounded-xl">
              {t.contact.form.success}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">{t.contact.form.name} *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-pink-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">{t.contact.form.email} *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-pink-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">{t.contact.form.topic} *</label>
                  <select
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-pink-500"
                  >
                    {Object.entries(t.contact.form.topics).map(([key, label]) => (
                      <option key={key} value={key} className="bg-slate-800">
                        {label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">{t.contact.form.country}</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-pink-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">{t.contact.form.message} *</label>
                <textarea
                  name="message"
                  required
                  minLength={20}
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-pink-500 resize-none"
                />
                <p className="text-xs text-yellow-500/80 mt-2">{t.contact.form.sensitiveDataWarning}</p>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/5">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consentPrivacy"
                    checked={formData.consentPrivacy}
                    onChange={handleCheckbox}
                    className="mt-1 w-4 h-4 rounded border-gray-600 accent-pink-500"
                  />
                  <span className="text-sm text-gray-300">
                    {t.contact.consent.privacy} <Link href={ROUTES.legal.privacy} className="underline">{t.legal.titles.privacy}</Link> *
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consentAge"
                    checked={formData.consentAge}
                    onChange={handleCheckbox}
                    className="mt-1 w-4 h-4 rounded border-gray-600 accent-pink-500"
                  />
                  <span className="text-sm text-gray-300">{t.contact.consent.age} *</span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consentMarketing"
                    checked={formData.consentMarketing}
                    onChange={handleCheckbox}
                    className="mt-1 w-4 h-4 rounded border-gray-600 accent-pink-500"
                  />
                  <span className="text-sm text-gray-400">{t.contact.consent.marketing}</span>
                </label>
              </div>

              {status === "error" && (
                <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl text-sm">
                  {t.contact.form.error}
                </div>
              )}

              <Button
                type="submit"
                variant="gradient"
                size="lg"
                className="w-full"
                disabled={status === "sending" || !formData.consentPrivacy || !formData.consentAge}
              >
                {status === "sending" ? t.contact.form.sending : t.contact.form.submit}
              </Button>
            </form>
          )}
        </GlassCard>
      </div>
    </div>
  );
}
