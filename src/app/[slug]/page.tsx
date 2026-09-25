import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getProjectBySlug, projects } from "@/data/projects";

import { ProjectHero } from "@/components/project/ProjectHero";
import { QuickFacts } from "@/components/project/QuickFacts";
import { Overview } from "@/components/project/Overview";
import { Highlights } from "@/components/project/Highlights";
import { PricingGrid } from "@/components/project/PricingGrid";
import { Amenities } from "@/components/project/Amenities";
import { FloorPlans } from "@/components/project/FloorPlans";
import { Gallery } from "@/components/project/Gallery";
import { LocationSection } from "@/components/project/LocationSection";
import { WhyProject } from "@/components/project/WhyProject";
import { FAQSection } from "@/components/project/FAQSection";
import { FinalCTA } from "@/components/project/FinalCTA";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
const SITE_URL = "https://prestigeprojects-wheat.vercel.app";

const SITE_NAME = "Prestige Projects";
export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;

    const project = getProjectBySlug(slug);
    if (!project) {
        return {
            title: "Project Not Found | Prestige Projects",

            robots: {
                index: false,
                follow: false,
            },
        };
    }

    const canonicalUrl = `${SITE_URL}/${project.slug}`;

    const title = project.metaTitle;

    const description = project.metaDescription;

    const ogImage = project.openGraphImage || project.heroImage;

    return {
        title,

        description,

        keywords: project.metaKeywords,

        authors: [
            {
                name: SITE_NAME,
            },
        ],

        creator: SITE_NAME,

        publisher: SITE_NAME,
        metadataBase: new URL(SITE_URL),

        alternates: {
            canonical: canonicalUrl,
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

            url: canonicalUrl,

            siteName: SITE_NAME,

            title,

            description,

            images: [
                {
                    url: ogImage,

                    width: 1200,

                    height: 630,

                    alt: `${project.name} - Prestige Projects`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",

            title,

            description,

            images: [
                {
                    url: ogImage,

                    alt: `${project.name} - Prestige Projects`,
                },
            ],
        },
    };
}
export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const project = getProjectBySlug(slug);
    if (!project) {
        notFound();
    }
    const projectUrl = `${SITE_URL}/${project.slug}`;
    const breadcrumbSchema = {
        "@context": "https://schema.org",

        "@type": "BreadcrumbList",

        itemListElement: [
            {
                "@type": "ListItem",

                position: 1,

                name: "Home",

                item: SITE_URL,
            },

            {
                "@type": "ListItem",

                position: 2,

                name: "Projects",

                item: `${SITE_URL}/projects`,
            },

            {
                "@type": "ListItem",

                position: 3,

                name: project.name,

                item: projectUrl,
            },
        ],
    };
    const websiteSchema = {
        "@context": "https://schema.org",

        "@type": "WebSite",

        "@id": `${SITE_URL}#website`,

        name: SITE_NAME,

        url: SITE_URL,

        description:
            "Explore Prestige real estate projects in Gurgaon, including project details, pricing, floor plans, amenities and location information.",
    };
    const webPageSchema = {
        "@context": "https://schema.org",

        "@type": "WebPage",

        "@id": `${projectUrl}#webpage`,

        url: projectUrl,

        name: project.metaTitle || project.name,

        description:
            project.metaDescription ||
            project.positioning ||
            `Explore ${project.name} in Gurgaon.`,

        isPartOf: {
            "@type": "WebSite",

            "@id": `${SITE_URL}#website`,

            name: SITE_NAME,

            url: SITE_URL,
        },

        about: {
            "@type": "Residence",

            name: project.name,

            url: projectUrl,
        },

        primaryImageOfPage: {
            "@type": "ImageObject",

            url: project.heroImage,
        },
    };
    const residenceSchema = {
        "@context": "https://schema.org",

        "@type": "Residence",

        "@id": `${projectUrl}#residence`,

        name: project.name,

        description:
            project.metaDescription ||
            project.positioning ||
            `Explore ${project.name}, a premium real estate project in Gurgaon.`,

        url: projectUrl,

        image: [project.heroImage, ...(project.gallery || [])],

        ...(project.positioning
            ? {
                  slogan: project.positioning,
              }
            : {}),

        provider: {
            "@type": "RealEstateAgent",

            name: SITE_NAME,

            url: SITE_URL,
        },
    };
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema),
                }}
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(webPageSchema),
                }}
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(residenceSchema),
                }}
            />
            <SiteHeader />
            <main>
                <ProjectHero project={project} />
                <QuickFacts project={project} />
                <Overview project={project} />
                <Highlights project={project} />
                <PricingGrid project={project} />
                <Amenities project={project} />
                <FloorPlans project={project} />
                <Gallery project={project} />
                <LocationSection project={project} />
                <WhyProject project={project} />
                <FAQSection project={project} />
                <FinalCTA project={project} />
            </main>
            <SiteFooter />
            <MobileStickyBar projectName={project.name} />
        </>
    );
}
