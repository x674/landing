import { MarketingShell } from "@/components/layout/MarketingShell";
import { LegalPage } from "@/components/pages/LegalPage";

export default function CookiePolicyRoute() {
  return (
    <MarketingShell>
      <LegalPage slug="cookie-policy" />
    </MarketingShell>
  );
}
