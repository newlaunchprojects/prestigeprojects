import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = { title: "Disclaimer" };

export default function DisclaimerPage() {
  return (
    <>
      <SiteHeader />
      <LegalPage title="Disclaimer" updated="1 September 2026">
        <p>
          <strong>Placeholder — for legal review.</strong> This page must be written specifically for
          this microsite and reviewed by qualified legal counsel before publication.
        </p>
        <h2>Sample content</h2>
        <p>
          Some project details on this website, including certain facts, sizes, RERA references and
          imagery, are sample placeholders used to demonstrate the website template and must be
          replaced with approved, verified information before this site is published for real use.
        </p>
        <h2>Pricing</h2>
        <p>
          This site does not publish fixed prices. Pricing is available on request via Get Latest Price
          and is subject to change without notice based on availability, configuration and market
          conditions at the time of enquiry.
        </p>
        <h2>Availability, specifications &amp; approvals</h2>
        <p>
          Unit availability, specifications, amenities, floor plans, master plan and project timelines
          are indicative and may change during the course of development, subject to approvals from the
          relevant authorities.
        </p>
        <h2>RERA</h2>
        <p>
          The project&apos;s RERA registration details will be published here once confirmed. Buyers are
          encouraged to verify RERA registration independently before making any decision.
        </p>
      </LegalPage>
      <SiteFooter />
    </>
  );
}
