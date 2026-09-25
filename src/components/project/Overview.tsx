import Image from "next/image";
import type { Project } from "@/data/projects";

function renderBoldText(text: string) {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);

    return parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
            return (
                <strong key={index} className="font-semibold text-ink-900">
                    {part.slice(2, -2)}
                </strong>
            );
        }

        return <span key={index}>{part}</span>;
    });
}

export function Overview({ project }: { project: Project }) {
    return (
        <section
            id="overview"
            className="container-page grid gap-10 py-10 lg:grid-cols-2 lg:gap-16 lg:py-18"
        >
            <div>
                <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-bronze-600">
                    Overview
                </p>
                <h2 className="font-display text-3xl text-ink-900 md:text-4xl">
                    {project.name} Project Overview
                </h2>

                <div className="mt-6 space-y-5">
                    {project.overview.map((para, i) => (
                        <p
                            key={i}
                            className="max-w-[65ch] leading-relaxed text-ink-700"
                        >
                            {renderBoldText(para)}
                        </p>
                    ))}
                </div>
            </div>

            <div className="relative lg:aspect-auto aspect-4/5 w-full overflow-hidden rounded-[3px]">
                <Image
                    src={project.heroImage}
                    alt={`${project.name} — architectural detail`}
                    title={`${project.name} — architectural detail`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                />
            </div>
        </section>
    );
}
