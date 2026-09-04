import Image from "next/image";
import type { Project } from "@/data/projects";

export function Highlights({ project }: { project: Project }) {
    return (
        <section id="highlights" className="bg-stone-100/60 py-20 md:py-28">
            <div className="container-page mb-12">
                <h2 className="font-display text-3xl text-ink-900 md:text-4xl">
                    {project.name} Project Highlights
                </h2>
            </div>
            <div className="container-page space-y-16 md:space-y-24">
                {project.highlights.map((highlight, i) => (
                    <div
                        key={highlight.title}
                        className={`grid gap-8 md:grid-cols-2 md:gap-16 md:items-center ${
                            i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                        }`}
                    >
                        <div className="relative aspect-4/3 w-full overflow-hidden rounded-[3px]">
                            {highlight.image && (
                                <Image
                                    src={highlight.image}
                                    alt={highlight.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                />
                            )}
                        </div>
                        <div>
                            <h3 className="font-display text-2xl text-ink-900">
                                {highlight.title}
                            </h3>
                            <p className="mt-3 max-w-[55ch] leading-relaxed text-ink-700">
                                {highlight.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
