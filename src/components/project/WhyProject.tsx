import type { Project } from "@/data/projects";

export function WhyProject({ project }: { project: Project }) {
    return (
        <section className="container-page py-20 md:py-28">
            <h2 className="font-display text-3xl text-ink-900 md:text-4xl">
                Why {project.name}
            </h2>
            <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-1">
                {project.whyThisProject.map((reason) => (
                    <div
                        key={reason.title}
                        className="border-t border-stone-200 pt-5"
                    >
                        <h3 className="font-medium text-ink-900">
                            {reason.title}
                        </h3>
                        <p className="mt-2 max-w-auto text-justify text-sm leading-relaxed text-ink-500">
                            {reason.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
