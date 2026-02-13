'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { APP_CONFIG, ROUTES } from "@/lib/constants";
import { useLanguage } from "@/lib/languageContext";

const LogoIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      fill="url(#paint0_linear)"
    />
    <defs>
      <linearGradient id="paint0_linear" x1="2" y1="3" x2="22" y2="21.35" gradientUnits="userSpaceOnUse">
        <stop stopColor="#EC4899" />
        <stop offset="1" stopColor="#8B5CF6" />
      </linearGradient>
    </defs>
  </svg>
);

export function Navbar() {
  const { t, lang, toggleLang } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-black/50 backdrop-blur-xl border-white/5" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href={ROUTES.home} className="flex items-center gap-2">
            <LogoIcon />
            <span className="font-bold text-xl tracking-tight text-white hidden sm:block">{APP_CONFIG.name}</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/#features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              {t.nav.features}
            </Link>
            <Link href="/#how-it-works" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              {t.nav.howItWorks}
            </Link>
            <Link href={ROUTES.contact} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              {t.nav.contact}
            </Link>

            <button
              onClick={toggleLang}
              className="px-3 py-1 rounded-lg border border-white/10 text-xs font-bold text-gray-300 hover:bg-white/5 uppercase transition-colors"
            >
              {lang === "en" ? "TH" : "EN"}
            </button>

            <Button size="sm" onClick={() => window.open(APP_CONFIG.urls.pwa, "_blank", "noopener,noreferrer")}>
              {t.nav.openApp}
            </Button>
          </div>

          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="md:hidden text-gray-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 absolute w-full left-0 top-16 px-4 py-4 flex flex-col gap-4">
          <Link href="/#features" className="text-base font-medium text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
            {t.nav.features}
          </Link>
          <Link href="/#how-it-works" className="text-base font-medium text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
            {t.nav.howItWorks}
          </Link>
          <Link href={ROUTES.contact} className="text-base font-medium text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
            {t.nav.contact}
          </Link>

          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                toggleLang();
                setMobileMenuOpen(false);
              }}
              className="px-3 py-1 rounded-lg border border-white/10 text-xs font-bold text-white bg-white/10 uppercase"
            >
              {lang === "en" ? "TH" : "EN"}
            </button>
            <Button
              size="sm"
              onClick={() => {
                window.open(APP_CONFIG.urls.pwa, "_blank", "noopener,noreferrer");
                setMobileMenuOpen(false);
              }}
            >
              {t.nav.openApp}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
