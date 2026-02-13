import { MarketingShell } from "@/components/layout/MarketingShell";
import { LegalPage } from "@/components/pages/LegalPage";

export default function DataProcessingRoute() {
  return (
    <MarketingShell>
      <LegalPage slug="data-processing-notice" />
    </MarketingShell>
  );
}
