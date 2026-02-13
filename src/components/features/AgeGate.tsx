'use client';

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { useLanguage } from "@/lib/languageContext";

export function AgeGate() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState<boolean | null>(null);

  useEffect(() => {
    const timerId = window.setTimeout(() => {
      const isVerified = localStorage.getItem("jai_age_verified");
      setIsVisible(!isVerified);
    }, 0);

    return () => window.clearTimeout(timerId);
  }, []);

  const handleConfirm = () => {
    localStorage.setItem("jai_age_verified", "true");
    setIsVisible(false);
  };

  const handleDeny = () => {
    window.location.href = "https://www.google.com";
  };

  if (isVisible === null) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
        >
          <GlassCard className="max-w-md w-full p-8 text-center border-primary/20 shadow-[0_0_50px_-10px_rgba(236,72,153,0.3)]">
            <h2 className="text-2xl font-bold text-white mb-4">{t.ageGate.title}</h2>
            <p className="text-gray-300 mb-8">{t.ageGate.message}</p>
            <div className="flex flex-col gap-3">
              <Button variant="gradient" size="lg" onClick={handleConfirm} className="w-full">
                {t.ageGate.confirm}
              </Button>
              <Button variant="ghost" onClick={handleDeny} className="w-full text-gray-400 hover:text-white">
                {t.ageGate.deny}
              </Button>
            </div>
          </GlassCard>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
