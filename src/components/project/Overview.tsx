import Image from "next/image";
import type { Project } from "@/data/projects";

export function Overview({ project }: { project: Project }) {
    return (
        <section
            id="overview"
            className="container-page grid gap-10 py-10 md:grid-cols-2 md:gap-16 md:py-18"
        >
            <div>
                <h2 className="font-display text-3xl text-ink-900 md:text-4xl">
                    {project.name} Project Overview
                </h2>
                <div className="mt-6 space-y-5">
                    {project.overview.map((para, i) => (
                        <p
                            key={i}
                            className="max-w-[65ch] leading-relaxed text-ink-700"
                        >
                            {para}
                        </p>
                    ))}
                </div>
            </div>
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-[3px]">
                <Image
                    src={project.heroImage}
                    alt={`${project.name} — architectural detail`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                />
            </div>
        </section>
    );
}
