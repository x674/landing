import { MarketingShell } from "@/components/layout/MarketingShell";
import { LegalPage } from "@/components/pages/LegalPage";

export default function PrivacyPolicyRoute() {
  return (
    <MarketingShell>
      <LegalPage slug="privacy-policy" />
    </MarketingShell>
  );
}
