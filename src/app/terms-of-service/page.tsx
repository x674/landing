import { MarketingShell } from "@/components/layout/MarketingShell";
import { LegalPage } from "@/components/pages/LegalPage";

export default function TermsRoute() {
  return (
    <MarketingShell>
      <LegalPage slug="terms-of-service" />
    </MarketingShell>
  );
}
