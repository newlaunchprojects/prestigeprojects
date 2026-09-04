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
                    The information provided on this website is intended for
                    general informational and reference purposes only. While
                    reasonable efforts are made to keep the information accurate
                    and current, no representation or warranty is made regarding
                    the completeness, accuracy, reliability or availability of
                    any information presented on this website.
                </p>

                <h2>Project Information</h2>
                <p>
                    Project names, descriptions, images, specifications,
                    configurations, sizes, amenities, floor plans, master plans,
                    location information and other project-related details
                    displayed on this website are provided for informational
                    purposes and may be subject to change. Such information
                    should not be treated as a final or binding representation
                    of the project. Visitors are advised to verify all relevant
                    details with the appropriate project representatives and
                    authorised sources before making any decision.
                </p>

                <h2>Pricing</h2>
                <p>
                    This website does not publish fixed or guaranteed property
                    prices. Pricing information is available through the{" "}
                    <strong>Get Latest Price</strong>
                    enquiry option and may vary depending on configuration, unit
                    selection, availability, applicable charges, offers and
                    other factors at the time of enquiry.
                </p>

                <h2>Availability &amp; Specifications</h2>
                <p>
                    Unit availability, apartment sizes, configurations,
                    specifications, amenities, facilities, layouts and other
                    project features may change without prior notice. Any
                    information displayed on this website should therefore be
                    independently confirmed before proceeding with a booking or
                    transaction.
                </p>

                <h2>Approvals &amp; Regulatory Information</h2>
                <p>
                    Project approvals, permissions, licences, plans,
                    registrations and other regulatory information are subject
                    to confirmation from the relevant authorities. Where
                    applicable, visitors should independently verify the latest
                    status of such approvals and registrations before making a
                    purchase or investment decision.
                </p>

                <h2>RERA Information</h2>
                <p>
                    Where a project is required to be registered under
                    applicable real estate regulations, the relevant RERA
                    registration details should be verified through the official
                    RERA authority or other authorised source. Any RERA
                    information displayed on this website is subject to
                    verification and should not be relied upon as a substitute
                    for checking the official registration records.
                </p>

                <h2>Images &amp; Visual Representations</h2>
                <p>
                    Images, renderings, illustrations, photographs, floor plans,
                    master plans and other visual materials shown on this
                    website may be representative, artistic or indicative in
                    nature. Actual buildings, interiors, finishes, landscaping,
                    amenities and other project features may differ from the
                    visual representations. Visitors should refer to approved
                    project documentation for final specifications.
                </p>

                <h2>Investment Disclaimer</h2>
                <p>
                    Nothing on this website should be interpreted as financial,
                    investment, legal or tax advice, or as a guarantee of
                    appreciation, rental income, returns or future property
                    value. Any decision to purchase or invest in a property
                    should be made after conducting appropriate independent
                    evaluation and obtaining professional advice where
                    necessary.
                </p>

                <h2>No Binding Offer</h2>
                <p>
                    The information presented on this website does not
                    constitute an offer, invitation to offer, allotment,
                    commitment or legally binding agreement to sell or purchase
                    any property. Any transaction will be subject to the
                    applicable booking documents, agreements, terms and
                    conditions and approvals governing the relevant project.
                </p>

                <h2>Third-Party Information</h2>
                <p>
                    Certain information, materials or links may relate to
                    third-party developers, authorities, service providers or
                    other external sources. Such information is provided for
                    convenience and reference. Users should independently verify
                    information obtained from third-party sources before relying
                    upon it.
                </p>

                <h2>Changes to Information</h2>
                <p>
                    Project information, pricing, availability, specifications,
                    approvals and other website content may be updated, modified
                    or removed without prior notice. We reserve the right to
                    make such changes whenever necessary to reflect updated
                    information.
                </p>

                <h2>Contact &amp; Verification</h2>
                <p>
                    Before making a booking, purchase or investment decision,
                    visitors are encouraged to request the latest project
                    information and independently verify all material details,
                    including pricing, availability, specifications, approvals
                    and RERA registration.
                </p>

                <p>
                    For project enquiries or to request the latest available
                    information, please use the enquiry options provided on the
                    relevant project page.
                </p>
            </LegalPage>
            <SiteFooter />
        </>
    );
}
