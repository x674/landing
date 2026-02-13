'use client';

import { GlassCard } from "@/components/ui/GlassCard";
import { Section } from "@/components/ui/Section";
import { ShieldCheck, Lock, Heart, Users } from "lucide-react";
import { useLanguage } from "@/lib/languageContext";

export function Features() {
    const { t } = useLanguage();

    // Map icons to the translated cards order
    // Order in DICTIONARY: Verified Profiles, Privacy First, Smart Matching, Safe Space
    const icons = [ShieldCheck, Lock, Heart, Users];

    return (
        <Section id="features" className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-primary/5 rounded-full blur-3xl -z-10" />

            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white tracking-tight">
                {t.features.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {t.features.cards.map((card, idx) => {
                    const Icon = icons[idx] || Heart;
                    return (
                        <GlassCard key={idx} hoverEffect className="flex flex-col items-start p-8">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 text-primary shadow-inner shadow-white/5 border border-white/5">
                                <Icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {card.desc}
                            </p>
                        </GlassCard>
                    );
                })}
            </div>
        </Section>
    );
}
