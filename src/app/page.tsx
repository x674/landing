import { Hero } from "@/components/features/Hero";
import { Features } from "@/components/features/Features";
import { HowItWorks } from "@/components/features/HowItWorks";
import { ContactCta } from "@/components/features/ContactCta";
import { MarketingShell } from "@/components/layout/MarketingShell";

export default function Home() {
  return (
    <MarketingShell>
      <Hero />
      <Features />
      <HowItWorks />
      <ContactCta />
    </MarketingShell>
  );
}
