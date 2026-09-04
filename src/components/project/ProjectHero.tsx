import Image from "next/image";
import type { Project } from "@/data/projects";
import {
    GetLatestPriceButton,
    SiteVisitButton,
} from "@/components/ui/LeadCTAs";
import { ContactActions } from "@/components/ui/ContactActions";

export function ProjectHero({ project }: { project: Project }) {
    return (
        <section
            id="hero"
            className="relative flex min-h-[85vh] items-end overflow-hidden md:min-h-screen"
        >
            <Image
                src={project.heroImage}
                alt={project.name}
                fill
                priority
                sizes="100vw"
                className="object-cover -z-10"
            />

            <div className="absolute inset-0 -z-10 bg-linear-to-t from-ink-900/85 via-ink-900/25 to-ink-900/40" />

            <div className="container-page w-full pb-14 pt-32 text-stone-50 md:pb-20">
                {project.status && (
                    <p className="text-xs tracking-widest text-stone-50/80">
                        {project.propertyType ?? "Residential"} ·{" "}
                        {project.status}
                    </p>
                )}

                <h1 className="mt-3 max-w-2xl font-display text-4xl leading-[1.1] md:text-6xl">
                    {project.name}
                </h1>

                <p className="mt-3 text-stone-50/85">{project.location}</p>

                <p className="mt-4 max-w-lg text-stone-50/90">
                    {project.positioning}
                </p>

                <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
                    {project.startingPrice && (
                        <div className="rounded-full border border-stone-50/80 px-4 py-2 text-base font-medium tracking-wide text-stone-50 sm:px-6 sm:py-3 sm:text-sm md:text-lg">
                            <span>Starting Price : </span>
                            <span>{project.startingPrice}</span>
                            <span> Onwards</span>
                        </div>
                    )}

                    {project.bookingAmount && (
                        <div className="rounded-full border border-stone-50/80 px-4 py-2 text-base font-medium tracking-wide text-stone-50 sm:px-6 sm:py-3 sm:text-sm md:text-lg">
                            <span>Booking Amount : </span>
                            <span>{project.bookingAmount}</span>
                        </div>
                    )}
                </div>

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

                <div className="mt-8 flex flex-wrap items-center gap-3">
                    <GetLatestPriceButton projectName={project.name} />

                    <SiteVisitButton
                        projectName={project.name}
                        className="border-stone-50/50 text-stone-50"
                    />

                    <ContactActions dark className="ml-1" />
                </div>
            </div>
        </section>
    );
}
