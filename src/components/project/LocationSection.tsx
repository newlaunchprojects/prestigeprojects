import type { Project } from "@/data/projects";

export function LocationSection({ project }: { project: Project }) {
    // const mapQuery = encodeURIComponent(`${project.name}, ${project.location}`);
    return (
        <section id="location" className="container-page py-10 md:py-18">
            <h2 className="font-display text-3xl text-ink-900 md:text-4xl">
                {project.name} Location &amp; Connectivity
            </h2>
            <p className="mt-4 max-w-[60ch] leading-relaxed text-ink-700">
                {project.name} is positioned in {project.location}. Exact
                connectivity distances and travel times below are indicative and
                will be confirmed with verified data before launch.
            </p>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
                <div className="aspect-4/3 w-full overflow-hidden rounded-[3px] border border-stone-200">
                    <iframe
                        title={`Map showing ${project.location}`}
                        src={project.locationlink}
                        className="h-full w-full"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
                    {project.locationAdvantages.map((item) => (
                        <div
                            key={item.name}
                            className="border-t border-stone-200 pt-4"
                        >
                            <p className="font-medium text-ink-900">
                                {item.name}
                            </p>
                            {item.description && (
                                <p className="mt-1 text-sm leading-relaxed text-ink-500">
                                    {item.description}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
