import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <LegalPage title="Privacy Policy" updated="1 September 2026">
        <p>
          <strong>Placeholder — for legal review.</strong> This page must be written specifically for
          this microsite and reviewed by qualified legal counsel before publication.
        </p>
        <h2>Information we collect</h2>
        <p>
          When you use the enquiry, Get Latest Price, Request Price, Download Brochure or Schedule Site
          Visit forms on this site, we collect the information you provide, which may include your
          name, phone number and, optionally, your email address. We also automatically capture the
          project and call-to-action you engaged with, the page URL, timestamp, and any campaign (UTM)
          parameters associated with your visit.
        </p>
        <h2>How we use your information</h2>
        <p>
          We use this information to respond to your enquiry, share project information and pricing,
          and coordinate site visits. We do not sell your personal information to third parties.
        </p>
        <h2>How we contact you</h2>
        <p>
          By submitting a form on this site, you agree that our team or authorised representatives may
          contact you by phone, WhatsApp, SMS or email regarding your enquiry.
        </p>
        <h2>Data retention &amp; security</h2>
        <p>
          We retain enquiry information only as long as necessary to respond to your request and for
          legitimate business record-keeping, and we take reasonable measures to protect it from
          unauthorised access.
        </p>
        <h2>Contact</h2>
        <p>
          For questions about this policy or to request that your information be deleted, contact us
          using the phone number listed in the site footer.
        </p>
      </LegalPage>
      <SiteFooter />
    </>
  );
}
