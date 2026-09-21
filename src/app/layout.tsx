import type { Metadata } from "next";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/fraunces/wght-italic.css";
import "@fontsource-variable/inter";
import "./globals.css";
import { LeadFormProvider } from "@/components/ui/LeadFormProvider";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
    metadataBase: new URL("https://indiabullsprojectsgurgaon.vercel.app"),
    title: {
        default: "Indiabulls Projects | Estate & Club · Heights",
        template: "%s | Indiabulls Projects",
    },
    description:
        "Indiabulls Projects — explore Indiabulls Estate & Club and Indiabulls Heights, premium residential developments in Gurgaon. Configurations, amenities, floor plans and latest price.",
    keywords: [
        "Indiabulls Projects",
        "Indiabulls Projects Gurgaon",
        "Indiabulls Gurgaon projects",
        "Indiabulls new projects Gurgaon",
        "Indiabulls residential projects Gurgaon",
    ],
    openGraph: {
        title: "Indiabulls Projects",
        description:
            "Premium residential projects in Gurgaon — Indiabulls Estate & Club and Indiabulls Heights.",
        type: "website",
        locale: "en_IN",
        url: "https://indiabullsprojectsgurgaon.vercel.app",
        siteName: "Indiabulls Projects",
        images: [
            {
                url: "https://indiabullsprojectsgurgaon.vercel.app/og-image.webp",
                width: 1200,
                height: 630,
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className="h-full">
            <body className="min-h-full flex flex-col bg-stone-50 text-ink-900 antialiased">
                <Analytics />
                <LeadFormProvider>{children}</LeadFormProvider>
            </body>
        </html>
    );
}
