'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { APP_CONFIG } from "@/lib/constants";
import { useLanguage } from "@/lib/languageContext";

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
                        {/* Google Play Badge SVG */}
                        <div className="flex items-center gap-3 bg-black border border-white/20 rounded-xl px-4 py-2 w-[170px] h-[52px] select-none shadow-lg">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-white shrink-0">
                                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,25.88L21,17.25C21.46,16.97 21.46,16.37 21,16.1L16.81,15.12M20.3,4.9C20.83,5.2 20.83,6 20.3,6.3L6.05,17.95L14.68,9.33L20.3,4.9M5.27,1.35L13.69,9.77L3.84,19.92C3.5,19.92 3.23,19.8 3.03,19.58L5.27,1.35Z" />
                            </svg>
                            <div className="flex flex-col items-start justify-center pl-1">
                                <span className="text-[10px] leading-tight text-gray-300 uppercase">Get it on</span>
                                <span className="text-[17px] font-bold leading-tight text-white font-sans -mt-0.5">Google Play</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative group opacity-40 hover:opacity-50 transition-all duration-300 cursor-not-allowed scale-95 hover:scale-100 grayscale">
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
                            {t.hero.comingSoon}
                        </div>
                        {/* App Store Badge SVG */}
                        <div className="flex items-center gap-3 bg-black border border-white/20 rounded-xl px-4 py-2 w-[170px] h-[52px] select-none shadow-lg">
                            <svg viewBox="0 0 384 512" className="w-7 h-7 fill-current text-white shrink-0">
                                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 46.9 126.7 84.5 126.7 19.3 0 35.7-16.8 63.2-16.8 26.5 0 38.6 16.8 63.2 16.8 36.6 0 71-90.8 84.5-126.7 5.5-15.3 15-40.4 15-40.4-36.5-16.1-50.1-53.7-50.1-85.6z M247.5 89.5c19.3-29.3 16.2-70.6-2.5-89.5-26.1 2.8-54.8 21.6-70.6 62.7-14.1 36.2 3.6 71.3 24.6 71.3 22.4 0 39.9-19.4 48.5-44.5z" />
                            </svg>
                            <div className="flex flex-col items-start justify-center">
                                <span className="text-[10px] leading-tight text-gray-300">Download on the</span>
                                <span className="text-[17px] font-bold leading-tight text-white font-sans -mt-0.5">App Store</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
