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

export function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) return {};

    return {
        title: project.name,
        description: `${project.name} in ${project.location} — configurations, amenities, floor plans, location and latest price. ${project.positioning}`,
        alternates: { canonical: `/projects/${project.slug}` },
        openGraph: {
            title: `${project.name} | Indiabulls Projects Gurgaon`,
            description: project.positioning,
            images: [project.heroImage],
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
    if (!project) notFound();

    return (
        <>
            <SiteHeader />
            <main className="pb-16 md:pb-0">
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
