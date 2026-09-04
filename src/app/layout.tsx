import type { Metadata } from "next";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/fraunces/wght-italic.css";
import "@fontsource-variable/inter";
import "./globals.css";
import { LeadFormProvider } from "@/components/ui/LeadFormProvider";

export const metadata: Metadata = {
    metadataBase: new URL("https://indiabulls-projects-gurgaon.example.com"),
    title: {
        default: "Indiabulls Projects Gurgaon | Estate & Club · Heights",
        template: "%s | Indiabulls Projects Gurgaon",
    },
    description:
        "Indiabulls Projects Gurgaon — explore Indiabulls Estate & Club and Indiabulls Heights, premium residential developments in Gurgaon. Configurations, amenities, floor plans and latest price.",
    keywords: [
        "Indiabulls projects Gurgaon",
        "Indiabulls Gurgaon projects",
        "Indiabulls new projects Gurgaon",
        "Indiabulls residential projects Gurgaon",
    ],
    openGraph: {
        title: "Indiabulls Projects Gurgaon",
        description:
            "Premium residential projects in Gurgaon — Indiabulls Estate & Club and Indiabulls Heights.",
        type: "website",
        locale: "en_IN",
    },
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className="h-full">
            <body className="min-h-full flex flex-col bg-stone-50 text-ink-900 antialiased">
                <LeadFormProvider>{children}</LeadFormProvider>
            </body>
        </html>
    );
}
