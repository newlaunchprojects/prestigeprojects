import type { Metadata } from "next";

import "@fontsource-variable/fraunces";
import "@fontsource-variable/fraunces/wght-italic.css";
import "@fontsource-variable/inter";

import "./globals.css";

import { LeadFormProvider } from "@/components/ui/LeadFormProvider";
import { Analytics } from "@vercel/analytics/next";
const SITE_URL = "https://prestigeprojects-wheat.vercel.app";

const SITE_NAME = "Prestige Projects";

const SITE_DESCRIPTION =
    "Explore Prestige residential projects in Gurgaon, including Prestige Sector 92 Gurgaon and Prestige Sector 109 Gurgaon. View project details, pricing, floor plans, amenities, location and more.";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: "Prestige Projects | Premium Residential Projects in Gurgaon",
    description: SITE_DESCRIPTION,
    keywords: [
        "Prestige Projects",
        "Prestige Projects Gurgaon",
        "Prestige Gurgaon Projects",
        "Prestige residential projects Gurgaon",
        "Prestige new projects Gurgaon",
        "Prestige Sector 92 Gurgaon",
        "Prestige Sector 92 Gurgaon Gurgaon",
        "Prestige Sector 109 Gurgaon Gurgaon",
        "Prestige property Gurgaon",
        "Prestige flats Gurgaon",
        "Gurgaon residential projects",
        "Gurgaon luxury apartments",
    ],
    authors: [
        {
            name: SITE_NAME,
        },
    ],

    creator: SITE_NAME,

    publisher: SITE_NAME,

    applicationName: SITE_NAME,
    alternates: {
        canonical: SITE_URL,
    },
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
    openGraph: {
        type: "website",

        locale: "en_IN",

        url: SITE_URL,

        siteName: SITE_NAME,

        title: "Prestige Projects | Premium Residential Projects in Gurgaon",

        description:
            "Explore Prestige Sector 92 Gurgaon and Prestige Sector 109 Gurgaon in Gurgaon. View pricing, floor plans, amenities, location and project details.",

        images: [
            {
                url: "/og-image.webp",

                width: 1200,

                height: 630,

                alt: "Prestige Projects - Premium Residential Projects in Gurgaon",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",

        title: "Prestige Projects | Premium Residential Projects in Gurgaon",

        description:
            "Explore Prestige Sector 92 Gurgaon and Prestige Sector 109 Gurgaon in Gurgaon, including pricing, floor plans, amenities and location.",

        images: [
            {
                url: "/og-image.webp",

                alt: "Prestige Projects - Premium Residential Projects in Gurgaon",
            },
        ],
    },
    icons: {
        icon: "/favicon.ico",

        shortcut: "/favicon.ico",

        apple: "/apple-touch-icon.png",
    },
};
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
