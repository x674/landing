'use client';

import Link from "next/link";
import { APP_CONFIG, ROUTES } from "@/lib/constants";
import { useLanguage } from "@/lib/languageContext";

interface FooterProps {
  onOpenCookies?: () => void;
}

export function Footer({ onOpenCookies }: FooterProps) {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-white/5 bg-black/20 pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-4">
              {APP_CONFIG.name}
            </h3>
            <p className="text-gray-400 text-sm mb-4">{t.hero.subheadline}</p>
            <p className="text-xs text-gray-500">{t.footer.eighteenPlus}</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href={ROUTES.legal.privacy} className="hover:text-pink-400">{t.legal.titles.privacy}</Link></li>
              <li><Link href={ROUTES.legal.terms} className="hover:text-pink-400">{t.legal.titles.terms}</Link></li>
              <li><Link href={ROUTES.legal.cookies} className="hover:text-pink-400">{t.legal.titles.cookies}</Link></li>
              <li><Link href={ROUTES.legal.refund} className="hover:text-pink-400">{t.legal.titles.refund}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href={ROUTES.contact} className="hover:text-pink-400">{t.nav.contact}</Link></li>
              <li><Link href={ROUTES.legal.community} className="hover:text-pink-400">{t.legal.titles.community}</Link></li>
              <li><a href={`mailto:${APP_CONFIG.placeholders.supportEmail}`} className="hover:text-pink-400">{APP_CONFIG.placeholders.supportEmail}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Settings</h4>
            <button onClick={onOpenCookies} className="text-sm text-gray-400 hover:text-pink-400 text-left">
              {t.footer.changeCookies}
            </button>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {APP_CONFIG.name}. {t.footer.rights}
          </p>
          <p className="text-xs text-gray-600 max-w-md text-center md:text-right">{t.legal.operator}</p>
        </div>
      </div>
    </footer>
  );
}
