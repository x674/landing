'use client';

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ROUTES } from "@/lib/constants";
import { useLanguage } from "@/lib/languageContext";

export function ContactCta() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6">{t.contact.teaserTitle}</h2>
        <p className="text-gray-400 mb-8">{t.contact.teaserSubtitle}</p>
        <Link href={ROUTES.contact}>
          <Button variant="outline" size="lg">{t.contact.teaserCta}</Button>
        </Link>
      </div>
    </section>
  );
}
