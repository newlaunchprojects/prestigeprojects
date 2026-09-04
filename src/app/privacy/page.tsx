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
                    This Privacy Policy explains how information provided
                    through this website is collected, used, stored and
                    protected when you interact with our project information,
                    enquiry and lead-generation services.
                </p>

                <h2>Information We Collect</h2>
                <p>
                    When you submit an enquiry through forms such as{" "}
                    <strong>Get Latest Price</strong>,
                    <strong>Enquire Now</strong>, <strong>Request Price</strong>
                    ,<strong>Download Brochure</strong> or{" "}
                    <strong>Schedule Site Visit</strong>, we may collect the
                    information you voluntarily provide, including your name,
                    phone number and, where provided, your email address.
                </p>

                <p>
                    We may also collect information relating to your interaction
                    with the website, such as the project you are enquiring
                    about, the page or advertisement through which you reached
                    the website, the date and time of your interaction, and
                    campaign parameters such as UTM information.
                </p>

                <h2>How We Use Your Information</h2>
                <p>
                    The information collected through this website may be used
                    to:
                </p>

                <ul>
                    <li>
                        Respond to your property enquiry or request for
                        information.
                    </li>
                    <li>
                        Provide the latest available pricing and project
                        details.
                    </li>
                    <li>
                        Share brochures or other requested project information.
                    </li>
                    <li>Coordinate and assist with site visits.</li>
                    <li>
                        Respond to requests submitted through WhatsApp or other
                        contact channels.
                    </li>
                    <li>
                        Improve our website, enquiry process and user
                        experience.
                    </li>
                    <li>Maintain appropriate business and enquiry records.</li>
                </ul>

                <h2>Communication With You</h2>
                <p>
                    When you voluntarily submit your contact details through
                    this website, you acknowledge that we or our authorised
                    representatives may contact you regarding your enquiry or
                    the project you have requested information about. Depending
                    on the contact details and communication channels available,
                    this may include phone calls, WhatsApp messages, SMS or
                    email.
                </p>

                <p>
                    You may request that we stop sending non-essential
                    communications by contacting us through the details provided
                    on this website.
                </p>

                <h2>WhatsApp, Phone and Other Communication Services</h2>
                <p>
                    If you choose to contact us through WhatsApp, telephone or
                    another third-party communication service, your interaction
                    may also be subject to the privacy policy and terms of that
                    respective service provider.
                </p>

                <h2>Cookies and Analytics</h2>
                <p>
                    This website may use cookies, analytics tools and similar
                    technologies to understand website usage, measure marketing
                    performance, improve website functionality and identify how
                    visitors interact with different pages and enquiry options.
                </p>

                <p>
                    Depending on the tools implemented on the website,
                    information such as browser type, device information,
                    approximate location, referring page, pages visited,
                    interaction events and campaign parameters may be collected.
                </p>

                <h2>Lead and Enquiry Information</h2>
                <p>
                    Information submitted through an enquiry form may be
                    processed by the website&apos;s hosting, form-processing,
                    analytics or communication service providers where necessary
                    to operate the website and respond to your request.
                </p>

                <p>
                    We take reasonable steps to ensure that personal information
                    is handled appropriately and only shared where necessary for
                    legitimate business, operational, legal or service-related
                    purposes.
                </p>

                <h2>Sharing of Personal Information</h2>
                <p>
                    We do not sell or rent your personal information for
                    monetary consideration. Your information may, however, be
                    shared with authorised representatives, service providers or
                    relevant project representatives where reasonably necessary
                    to respond to your enquiry, provide requested project
                    information, coordinate a site visit or facilitate related
                    services.
                </p>

                <p>
                    We may also disclose information where required by
                    applicable law, regulation, legal process or a lawful
                    request from a competent authority.
                </p>

                <h2>Data Retention</h2>
                <p>
                    We retain enquiry and contact information for as long as
                    reasonably necessary to fulfil the purpose for which it was
                    collected, respond to enquiries, maintain legitimate
                    business records, comply with applicable legal obligations
                    or resolve disputes.
                </p>

                <h2>Data Security</h2>
                <p>
                    Reasonable technical and organisational measures may be used
                    to protect personal information against unauthorised access,
                    misuse, alteration, disclosure or loss. However, no method
                    of transmitting or storing information electronically can be
                    guaranteed to be completely secure.
                </p>

                <h2>Your Choices and Requests</h2>
                <p>
                    You may contact us to request information about the personal
                    information associated with your enquiry or to request
                    correction or deletion where applicable and technically or
                    legally possible.
                </p>

                <p>
                    If you no longer wish to receive communications relating to
                    your enquiry, you may also request that such communications
                    be discontinued.
                </p>

                <h2>Third-Party Websites</h2>
                <p>
                    This website may contain links or integrations that direct
                    you to third-party websites, platforms or services. We are
                    not responsible for the privacy practices, security or
                    content of those third-party services. We recommend
                    reviewing their respective privacy policies before providing
                    personal information.
                </p>

                <h2>Children&apos;s Privacy</h2>
                <p>
                    This website is intended for general property information
                    and enquiry purposes and is not specifically directed toward
                    children. We do not knowingly request personal information
                    from children for marketing or property enquiry purposes.
                </p>

                <h2>Changes to This Privacy Policy</h2>
                <p>
                    This Privacy Policy may be updated from time to time to
                    reflect changes in our website, services, data practices or
                    applicable legal requirements. Any updated version will be
                    published on this page with a revised effective or update
                    date.
                </p>

                <h2>Contact Us</h2>
                <p>
                    If you have questions about this Privacy Policy, wish to
                    make a privacy related request, or want to withdraw from
                    further enquiry-related communications, please contact us
                    using the phone or other contact details provided in the
                    website footer.
                </p>
            </LegalPage>
            <SiteFooter />
        </>
    );
}
