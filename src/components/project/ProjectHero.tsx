import Image from "next/image";
import type { Project } from "@/data/projects";
import {
    GetLatestPriceButton,
    SiteVisitButton,
} from "@/components/ui/LeadCTAs";
import { LeadForm } from "@/components/ui/LeadForm";

export function ProjectHero({ project }: { project: Project }) {
    return (
        <section
            id="hero"
            className="relative flex min-h-[85vh] items-end overflow-hidden md:max-h-screen"
        >
            <Image
                src={project.heroImage}
                alt={project.name}
                title={project.name}
                fill
                priority
                sizes="100vw"
                className="object-cover -z-10"
            />

            <div className="absolute inset-0 -z-10 bg-linear-to-t from-ink-900/90 via-ink-900/30 to-ink-900/40" />

            <div className="container-page w-full pb-10 pt-32 text-stone-50 md:pb-20">
                <div className="grid items-end gap-8 lg:grid-cols-[1fr_410px] lg:gap-10">
                    {/* LEFT — HERO CONTENT */}
                    <div>
                        {project.status && (
                            <p className="text-xs uppercase tracking-[0.18em] text-stone-50/80">
                                {project.propertyType ?? "Residential"}
                                <span className="mx-2 text-stone-50/40">·</span>
                                {project.status}
                            </p>
                        )}

                        <h1 className="mt-3 max-w-3xl font-display text-4xl leading-[1.08] md:text-6xl">
                            {project.name}
                        </h1>

                        <p className="mt-3 text-sm text-stone-50/85 md:text-base">
                            {project.location}
                        </p>

                        <p className="mt-4 max-w-xl text-sm leading-6 text-stone-50/90 md:text-base">
                            {project.positioning}
                        </p>

                        {project.startingPrice && (
                            <div className="mt-7 inline-flex rounded-full border border-stone-50/70 bg-stone-50/5 px-5 py-2.5 text-sm font-medium tracking-wide text-stone-50 backdrop-blur-sm md:px-6 md:py-3 md:text-base">
                                <span>Starting Price:&nbsp;</span>
                                <span>{project.startingPrice}</span>
                            </div>
                        )}

                        {project.reraNumber && (
                            <div className="mt-5 flex items-center gap-3">
                                <span className="h-px w-8 bg-stone-50/40" />
                                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-stone-50/70">
                                    RERA No.{" "}
                                    <span className="text-stone-50/90">
                                        {project.reraNumber}
                                    </span>
                                </p>
                            </div>
                        )}

                        <div className="mt-7 flex flex-wrap items-center gap-3">
                            <GetLatestPriceButton projectName={project.name} />

                            <SiteVisitButton
                                projectName={project.name}
                                className="border-stone-50/50 text-stone-50"
                            />
                        </div>
                    </div>

                    {/* RIGHT — LEAD FORM */}
                    <div className="hidden w-full lg:block">
                        <div className="rounded-sm bg-stone-50 p-5 text-ink-900 shadow-2xl sm:p-6">
                            <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-bronze-600">
                                Private Enquiry
                            </p>

                            <h2 className="font-display text-xl leading-tight text-ink-900">
                                Interested in {project.name}?
                            </h2>

                            <p className="mb-6 mt-2 text-xs leading-6 text-ink-500">
                                Get the latest pricing, availability and site
                                visit details from our team.
                            </p>

                            <LeadForm
                                projectName={project.name}
                                source="hero_form"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
