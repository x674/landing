import { MarketingShell } from "@/components/layout/MarketingShell";
import { LegalPage } from "@/components/pages/LegalPage";

export default function SubscriptionTermsRoute() {
  return (
    <MarketingShell>
      <LegalPage slug="subscription-terms" />
    </MarketingShell>
  );
}
