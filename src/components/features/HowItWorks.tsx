'use client';

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { useLanguage } from "@/lib/languageContext";

export function HowItWorks() {
  const { t } = useLanguage();

  return (
    <Section className="bg-black/20" id="how-it-works">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          {t.howItWorks.title}
        </motion.h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8 relative items-start">
        <div className="hidden md:block absolute top-12 left-20 right-20 h-0.5 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 -z-10" />

        {t.howItWorks.steps.map((step, idx) => (
          <motion.div
            key={idx}
            className="flex-1 text-center relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
          >
            <div className="w-24 h-24 mx-auto rounded-full bg-dark border border-primary/30 flex items-center justify-center mb-6 shadow-[0_0_30px_-5px_rgba(236,72,153,0.3)] z-10 relative">
              <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
                {idx + 1}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
            <p className="text-gray-400 px-4 max-w-xs mx-auto text-sm leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
