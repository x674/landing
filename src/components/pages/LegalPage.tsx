'use client';

import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { LEGAL_SLUGS, type LegalSlug, type LegalTitleKey, ROUTES } from "@/lib/constants";
import { useLanguage } from "@/lib/languageContext";

interface LegalPageProps {
  slug: LegalSlug;
}

export function LegalPage({ slug }: LegalPageProps) {
  const { t } = useLanguage();
  const titleKey = LEGAL_SLUGS[slug] as LegalTitleKey;
  const title = t.legal.titles[titleKey];
  const isRefund = slug === "refund-policy";

  return (
    <div className="min-h-screen bg-dark text-white">
      <div className="max-w-4xl mx-auto px-4 pt-24 pb-12">
        <div className="mb-6">
          <Link href={ROUTES.home} className="text-sm text-pink-400 hover:text-pink-300">
            &larr; {t.legal.back}
          </Link>
        </div>

        <GlassCard>
          <div className="border-b border-white/10 pb-6 mb-6">
            <h1 className="text-3xl font-bold text-white mb-2">{title}</h1>
            <p className="text-sm text-gray-400">{t.legal.lastUpdated}</p>
          </div>

          <div className="space-y-6 text-gray-300 leading-relaxed">
            <div className="p-4 bg-yellow-900/20 border border-yellow-500/20 rounded-lg text-yellow-200 text-sm">
              <strong>Disclaimer:</strong> {t.legal.disclaimer}
            </div>

            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h2 className="text-lg font-semibold mb-2 text-white">Service Operator Information</h2>
              <p>{t.legal.operator}</p>
            </div>

            {isRefund ? (
              <div className="space-y-4">
                <h3 className="text-xl text-white font-semibold">Refund Policy Overview</h3>
                <p>{t.legal.content.refund}</p>
                <h4 className="text-white font-semibold">1. Subscription Renewals</h4>
                <p>
                  Subscriptions automatically renew unless canceled at least 24 hours before the end of the current period.
                </p>
                <h4 className="text-white font-semibold">2. Right of Withdrawal (EU/EEA)</h4>
                <p>
                  EU/EEA users may have a 14-day withdrawal right. If digital content is consumed immediately after purchase,
                  withdrawal may no longer apply when required consent is provided.
                </p>
                <h4 className="text-white font-semibold">3. Cancellations</h4>
                <p>
                  You may cancel anytime in account settings. Cancellation stops future billing and does not refund the active paid period.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <p>{t.legal.content.general}</p>
                <h3 className="text-white font-semibold">1. Introduction</h3>
                <p>By using this service, users agree to the terms and policies listed on this website.</p>
                <h3 className="text-white font-semibold">2. Data Collection and Use</h3>
                <p>We process account, profile, and usage data to provide matching and communication services.</p>
                <h3 className="text-white font-semibold">3. User Conduct and Safety</h3>
                <p>Harassment, illegal activity, and abuse are prohibited and may result in suspension.</p>
              </div>
            )}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
