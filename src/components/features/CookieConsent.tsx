'use client';

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/lib/languageContext";

type ConsentState = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
  version: string;
};

interface CookieConsentProps {
  openSettings: boolean;
  setOpenSettings: (open: boolean) => void;
}

const STORAGE_KEY = "jai_cookie_consent";

export function CookieConsent({ openSettings, setOpenSettings }: CookieConsentProps) {
  const { t } = useLanguage();
  const [isReady, setIsReady] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const timerId = window.setTimeout(() => {
      const rawConsent = localStorage.getItem(STORAGE_KEY);
      if (!rawConsent) {
        setShowBanner(true);
        setIsReady(true);
        return;
      }

      try {
        const parsed = JSON.parse(rawConsent) as ConsentState;
        setAnalytics(Boolean(parsed.analytics));
        setMarketing(Boolean(parsed.marketing));
      } catch {
        setShowBanner(true);
      }

      setIsReady(true);
    }, 0);

    return () => window.clearTimeout(timerId);
  }, []);

  const saveConsent = (next: { analytics: boolean; marketing: boolean }) => {
    const consent: ConsentState = {
      necessary: true,
      analytics: next.analytics,
      marketing: next.marketing,
      timestamp: new Date().toISOString(),
      version: "1.0",
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    setAnalytics(next.analytics);
    setMarketing(next.marketing);
    setShowBanner(false);
    setOpenSettings(false);
  };

  const settingsOpen = useMemo(() => isReady && openSettings, [isReady, openSettings]);

  if (!isReady || (!showBanner && !settingsOpen)) {
    return null;
  }

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4"
          >
            <div className="max-w-5xl mx-auto bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <p className="text-gray-300 text-sm leading-relaxed">{t.cookie.message}</p>
              </div>
              <div className="flex flex-wrap gap-3 justify-end">
                <Button variant="ghost" size="sm" onClick={() => setOpenSettings(true)} className="text-gray-300">
                  {t.cookie.customize}
                </Button>
                <Button variant="outline" size="sm" onClick={() => saveConsent({ analytics: false, marketing: false })}>
                  {t.cookie.reject}
                </Button>
                <Button variant="gradient" size="sm" onClick={() => saveConsent({ analytics: true, marketing: true })}>
                  {t.cookie.acceptAll}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {settingsOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              className="bg-slate-900 border border-white/10 rounded-2xl p-6 max-w-md w-full"
            >
              <h3 className="text-xl font-bold mb-4 text-white">{t.cookie.settingsTitle}</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">{t.cookie.necessary}</span>
                  <input type="checkbox" checked disabled className="accent-pink-500" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">{t.cookie.analytics}</span>
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(event) => setAnalytics(event.target.checked)}
                    className="accent-pink-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">{t.cookie.marketing}</span>
                  <input
                    type="checkbox"
                    checked={marketing}
                    onChange={(event) => setMarketing(event.target.checked)}
                    className="accent-pink-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Button variant="outline" onClick={() => saveConsent({ analytics: false, marketing: false })}>
                  {t.cookie.reject}
                </Button>
                <Button variant="gradient" onClick={() => saveConsent({ analytics, marketing })}>
                  {t.cookie.savePreferences}
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
