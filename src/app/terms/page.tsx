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
                    By accessing or using this website, you acknowledge that you
                    have read, understood and agreed to these Terms &amp;
                    Conditions. If you do not agree with these terms, please
                    discontinue use of the website.
                </p>

                <h2>Purpose of This Website</h2>
                <p>
                    This website provides general information relating to
                    Indiabulls Estate &amp; Club, Indiabulls Heights and other
                    project information made available through this microsite.
                    The website is intended to help visitors understand project
                    features, configurations, amenities, location advantages and
                    other relevant information.
                </p>

                <p>
                    Information available on this website is provided for
                    general informational purposes and does not constitute an
                    offer, invitation, allotment, commitment, representation or
                    legally binding agreement to sell or purchase any property.
                </p>

                <h2>Project Information</h2>
                <p>
                    Project names, descriptions, specifications, configurations,
                    apartment sizes, amenities, floor plans, master plans,
                    images, location information, development timelines and
                    other project-related details may be modified, updated or
                    withdrawn without prior notice.
                </p>

                <p>
                    Visitors should independently verify all material
                    information with the appropriate authorised project
                    representatives and refer to the applicable official project
                    documentation before making a booking, purchase or
                    investment decision.
                </p>

                <h2>Pricing and Availability</h2>
                <p>
                    Property prices and availability are not fixed or guaranteed
                    through this website. Any pricing information provided in
                    response to an enquiry may vary based on configuration, unit
                    availability, applicable charges, offers, taxes and other
                    factors prevailing at the time of enquiry.
                </p>

                <p>
                    A request for pricing or project information does not
                    constitute a booking, reservation or confirmation of a
                    particular unit.
                </p>

                <h2>Enquiries and Site Visits</h2>
                <p>
                    Submitting an enquiry, requesting the latest price,
                    requesting a brochure or scheduling a site visit does not
                    create any contractual relationship or guarantee the
                    availability of a property or appointment.
                </p>

                <p>
                    Site visits are subject to availability and confirmation.
                    Any booking or transaction will be governed by the
                    applicable documents, terms and conditions issued or
                    executed by the relevant parties.
                </p>

                <h2>Third-Party Information</h2>
                <p>
                    Certain information presented on this website may originate
                    from or relate to developers, project representatives,
                    regulatory authorities, service providers or other third
                    parties.
                </p>

                <p>
                    While reasonable efforts may be made to present useful and
                    accurate information, visitors should independently verify
                    third-party information before relying upon it.
                </p>

                <h2>Intellectual Property</h2>
                <p>
                    Unless otherwise stated, the text, graphics, layout, design
                    elements, logos, photographs, illustrations and other
                    materials displayed on this website are owned by, licensed
                    to, or used with permission by the respective rights
                    holders.
                </p>

                <p>
                    You may not copy, reproduce, modify, distribute, publish,
                    transmit, commercially exploit or otherwise use website
                    content without obtaining the necessary permission from the
                    applicable rights holder.
                </p>

                <h2>Acceptable Use</h2>
                <p>
                    You agree to use this website only for lawful purposes. You
                    must not attempt to interfere with the operation or security
                    of the website, introduce malicious code, obtain
                    unauthorised access to systems or data, or use information
                    obtained from the website for unlawful or misleading
                    purposes.
                </p>

                <h2>External Links and Services</h2>
                <p>
                    The website may include links, integrations or communication
                    options provided by third parties. These services may be
                    governed by their own terms, conditions and privacy
                    policies.
                </p>

                <p>
                    We are not responsible for the availability, content,
                    security or practices of third-party websites or services.
                </p>

                <h2>Disclaimer and Limitation of Liability</h2>
                <p>
                    Information on this website is provided on an informational
                    basis and may contain errors, omissions or outdated
                    information. To the extent permitted by applicable law, we
                    do not guarantee that the website or its information will
                    always be complete, accurate, current or uninterrupted.
                </p>

                <p>
                    To the extent permitted by applicable law, we shall not be
                    responsible for losses or damages arising solely from
                    reliance on information presented on this website. Visitors
                    should conduct their own due diligence and obtain
                    appropriate professional advice before making a property or
                    investment decision.
                </p>

                <h2>RERA and Regulatory Information</h2>
                <p>
                    Where applicable, project RERA registration details and
                    other regulatory information should be independently
                    verified through the relevant official authority before
                    making any purchase or investment decision.
                </p>

                <p>
                    Nothing on this website should be interpreted as replacing
                    the official records, approvals, agreements or documentation
                    issued by the relevant authorities or authorised project
                    parties.
                </p>

                <h2>Privacy</h2>
                <p>
                    Information submitted through enquiry forms or other
                    communication channels is handled in accordance with our
                    <strong>Privacy Policy</strong>.
                </p>

                <h2>Changes to These Terms</h2>
                <p>
                    These Terms &amp; Conditions may be updated from time to
                    time to reflect changes to the website, services, project
                    information or applicable legal requirements. Updated terms
                    will be published on this page with a revised update date.
                </p>

                <h2>Governing Law</h2>
                <p>
                    These Terms &amp; Conditions shall be subject to the
                    applicable laws of India. Any dispute arising in connection
                    with the use of this website shall be subject to the
                    jurisdiction of the courts having appropriate jurisdiction
                    under applicable law.
                </p>

                <h2>Contact</h2>
                <p>
                    If you have questions regarding these Terms &amp; Conditions
                    or the information presented on this website, please use the
                    contact details provided in the website footer.
                </p>
            </LegalPage>
            <SiteFooter />
        </>
    );
}
