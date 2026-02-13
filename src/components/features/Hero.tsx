'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { APP_CONFIG } from "@/lib/constants";
import { useLanguage } from "@/lib/languageContext";

function GooglePlayBadge() {
    return (
        <div className="flex items-center gap-3 bg-black border border-white/20 rounded-xl px-4 py-2 w-[186px] h-[56px] select-none shadow-lg">
            <svg viewBox="0 0 64 64" className="w-7 h-7 shrink-0" aria-hidden>
                <path d="M6 6 L34 32 L6 58 Z" fill="#00D9FF" />
                <path d="M6 6 L46 24 L34 32 Z" fill="#00E676" />
                <path d="M6 58 L34 32 L46 40 Z" fill="#FF3D00" />
                <path d="M46 24 L58 30 Q60 32 58 34 L46 40 L34 32 Z" fill="#FFD600" />
            </svg>
            <div className="flex flex-col items-start justify-center leading-tight">
                <span className="text-[10px] text-gray-300 uppercase tracking-wide">Get it on</span>
                <span className="text-[17px] font-bold text-white -mt-0.5">Google Play</span>
            </div>
        </div>
    );
}

function AppStoreBadge() {
    return (
        <div className="flex items-center gap-3 bg-black border border-white/20 rounded-xl px-4 py-2 w-[186px] h-[56px] select-none shadow-lg">
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white shrink-0" aria-hidden>
                <path d="M16.7 12.7c0-2.2 1.8-3.3 1.9-3.4-1-1.6-2.6-1.8-3.1-1.8-1.3-.1-2.5.7-3.2.7-.7 0-1.7-.7-2.8-.7-1.5 0-2.8.9-3.6 2.1-1.5 2.7-.4 6.7 1.1 8.9.8 1.1 1.7 2.4 2.9 2.3 1.2-.1 1.6-.7 3-.7s1.8.7 3 .6c1.2 0 2-1.1 2.8-2.2.9-1.3 1.2-2.5 1.2-2.6-.1 0-3.2-1.3-3.2-4.2zm-2.1-6.7c.7-.8 1.1-1.8 1-2.8-1 .1-2 .7-2.7 1.5-.6.7-1.2 1.8-1 2.8 1 .1 2-.5 2.7-1.5z" />
            </svg>
            <div className="flex flex-col items-start justify-center leading-tight">
                <span className="text-[10px] text-gray-300">Download on the</span>
                <span className="text-[17px] font-bold text-white -mt-0.5">App Store</span>
            </div>
        </div>
    );
}

export function Hero() {
    const { t } = useLanguage();
    return (
        <section className="relative pt-32 pb-20 px-4 overflow-hidden min-h-screen flex items-center justify-center">
            {/* Animated Blobs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-screen filter blur-[128px] opacity-20"
            />
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full mix-blend-screen filter blur-[128px] opacity-20"
            />

            <div className="max-w-7xl mx-auto text-center relative z-10 px-4">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block p-1.5 px-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
                >
                    <span className="text-primary font-semibold tracking-wide uppercase text-xs">
                        Beta Live
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {t.hero.headline}
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    {t.hero.subheadline}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Button
                        size="lg"
                        variant="gradient"
                        className="gap-2 shadow-lg shadow-primary/20"
                        onClick={() => window.location.href = APP_CONFIG.urls.pwa}
                    >
                        {t.hero.ctaPwa}
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="gap-2"
                        onClick={() => window.location.href = APP_CONFIG.urls.apk}
                    >
                        {t.hero.ctaApk}
                    </Button>
                </motion.div>

                {/* Store Badges - Muted/Unavailable */}
                <motion.div
                    className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <div className="relative group opacity-40 hover:opacity-50 transition-all duration-300 cursor-not-allowed scale-95 hover:scale-100 grayscale">
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
                            {t.hero.comingSoon}
                        </div>
                        <GooglePlayBadge />
                    </div>
                    <div className="relative group opacity-40 hover:opacity-50 transition-all duration-300 cursor-not-allowed scale-95 hover:scale-100 grayscale">
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
                            {t.hero.comingSoon}
                        </div>
                        <AppStoreBadge />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
