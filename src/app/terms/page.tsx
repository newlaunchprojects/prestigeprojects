import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <LegalPage title="Terms & Conditions" updated="1 September 2026">
        <p>
          <strong>Placeholder — for legal review.</strong> This page must be written specifically for
          this microsite and reviewed by qualified legal counsel before publication.
        </p>
        <h2>Use of this website</h2>
        <p>
          This website provides general information about Indiabulls Estate &amp; Club and Indiabulls
          Heights in Gurgaon. Content is provided for informational purposes and does not constitute an
          offer, contract or legal commitment of any kind.
        </p>
        <h2>Accuracy of information</h2>
        <p>
          Project details, configurations, pricing approach, imagery and timelines shown on this site
          are subject to change and should be independently verified before making any decision. See
          our Disclaimer for further detail.
        </p>
        <h2>Intellectual property</h2>
        <p>
          All content on this site, including text, images and design, is owned by or licensed to the
          project and may not be reproduced without permission.
        </p>
        <h2>Limitation of liability</h2>
        <p>
          We are not liable for any loss arising from reliance on information presented on this site.
        </p>
      </LegalPage>
      <SiteFooter />
    </>
  );
}
