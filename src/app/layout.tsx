import type { Metadata } from "next";

import "@fontsource-variable/fraunces";
import "@fontsource-variable/fraunces/wght-italic.css";
import "@fontsource-variable/inter";

import "./globals.css";

import { LeadFormProvider } from "@/components/ui/LeadFormProvider";
import { Analytics } from "@vercel/analytics/next";

/* -------------------------------------------------------------------------- */
/* SITE CONFIGURATION                                                         */
/* -------------------------------------------------------------------------- */

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || "https://indiabulls-projects.com";

const SITE_NAME = "Indiabulls Projects";

const SITE_DESCRIPTION =
    "Explore Indiabulls residential projects in Gurgaon, including Indiabulls Estate & Club and Indiabulls Heights. View project details, pricing, floor plans, amenities, location and more.";

/* -------------------------------------------------------------------------- */
/* GLOBAL METADATA                                                            */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
    /* ---------------------------------------------------------------------- */
    /* BASE URL                                                               */
    /* ---------------------------------------------------------------------- */

    metadataBase: new URL(SITE_URL),

    /* ---------------------------------------------------------------------- */
    /* TITLE                                                                  */
    /* ---------------------------------------------------------------------- */

    title: "Indiabulls Projects | Premium Residential Projects in Gurgaon",

    /* ---------------------------------------------------------------------- */
    /* DESCRIPTION                                                            */
    /* ---------------------------------------------------------------------- */

    description: SITE_DESCRIPTION,

    /* ---------------------------------------------------------------------- */
    /* KEYWORDS                                                               */
    /* ---------------------------------------------------------------------- */

    keywords: [
        "Indiabulls Projects",
        "Indiabulls Projects Gurgaon",
        "Indiabulls Gurgaon Projects",
        "Indiabulls residential projects Gurgaon",
        "Indiabulls new projects Gurgaon",
        "Indiabulls Estate and Club",
        "Indiabulls Estate & Club Gurgaon",
        "Indiabulls Heights Gurgaon",
        "Indiabulls property Gurgaon",
        "Indiabulls flats Gurgaon",
        "Gurgaon residential projects",
        "Gurgaon luxury apartments",
    ],

    /* ---------------------------------------------------------------------- */
    /* AUTHORS                                                                */
    /* ---------------------------------------------------------------------- */

    authors: [
        {
            name: SITE_NAME,
        },
    ],

    creator: SITE_NAME,

    publisher: SITE_NAME,

    applicationName: SITE_NAME,

    /* ---------------------------------------------------------------------- */
    /* CANONICAL                                                              */
    /* ---------------------------------------------------------------------- */

    alternates: {
        canonical: SITE_URL,
    },

    /* ---------------------------------------------------------------------- */
    /* ROBOTS                                                                 */
    /* ---------------------------------------------------------------------- */

    robots: {
        index: true,
        follow: true,

        googleBot: {
            index: true,
            follow: true,

            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },

    /* ---------------------------------------------------------------------- */
    /* OPEN GRAPH                                                             */
    /* ---------------------------------------------------------------------- */

    openGraph: {
        type: "website",

        locale: "en_IN",

        url: SITE_URL,

        siteName: SITE_NAME,

        title: "Indiabulls Projects | Premium Residential Projects in Gurgaon",

        description:
            "Explore Indiabulls Estate & Club and Indiabulls Heights in Gurgaon. View pricing, floor plans, amenities, location and project details.",

        images: [
            {
                url: "/og-image.webp",

                width: 1200,

                height: 630,

                alt: "Indiabulls Projects - Premium Residential Projects in Gurgaon",
            },
        ],
    },

    /* ---------------------------------------------------------------------- */
    /* TWITTER / X                                                            */
    /* ---------------------------------------------------------------------- */

    twitter: {
        card: "summary_large_image",

        title: "Indiabulls Projects | Premium Residential Projects in Gurgaon",

        description:
            "Explore Indiabulls Estate & Club and Indiabulls Heights in Gurgaon, including pricing, floor plans, amenities and location.",

        images: [
            {
                url: "/og-image.webp",

                alt: "Indiabulls Projects - Premium Residential Projects in Gurgaon",
            },
        ],
    },

    /* ---------------------------------------------------------------------- */
    /* ICONS                                                                  */
    /* ---------------------------------------------------------------------- */

    icons: {
        icon: "/favicon.ico",

        shortcut: "/favicon.ico",

        apple: "/apple-touch-icon.png",
    },
};

/* -------------------------------------------------------------------------- */
/* ROOT LAYOUT                                                               */
/* -------------------------------------------------------------------------- */

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full">
            <body className="min-h-full flex flex-col bg-stone-50 text-ink-900 antialiased">
                <Analytics />

                <LeadFormProvider>{children}</LeadFormProvider>
            </body>
        </html>
    );
}
