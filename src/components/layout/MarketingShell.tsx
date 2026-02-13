'use client';

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AgeGate } from "@/components/features/AgeGate";
import { CookieConsent } from "@/components/features/CookieConsent";

interface MarketingShellProps {
  children: React.ReactNode;
}

export function MarketingShell({ children }: MarketingShellProps) {
  const [cookieSettingsOpen, setCookieSettingsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-dark text-white selection:bg-primary selection:text-white">
      <Navbar />
      {children}
      <Footer onOpenCookies={() => setCookieSettingsOpen(true)} />
      <AgeGate />
      <CookieConsent openSettings={cookieSettingsOpen} setOpenSettings={setCookieSettingsOpen} />
    </main>
  );
}
