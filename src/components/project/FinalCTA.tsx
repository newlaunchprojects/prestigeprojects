import type { Project } from "@/data/projects";
import { EnquireNowButton, BrochureButton } from "@/components/ui/LeadCTAs";

export function FinalCTA({ project }: { project: Project }) {
    return (
        <section className="container-page py-14 text-center md:py-22">
            <h2 className="mx-auto max-w-xl font-display text-3xl text-ink-900 md:text-4xl">
                Considering {project.name}?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-ink-500">
                Request the brochure, or schedule a site visit.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <EnquireNowButton projectName={project.name} />
                <BrochureButton projectName={project.name} />
            </div>
        </section>
    );
}
