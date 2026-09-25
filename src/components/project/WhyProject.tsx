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

export function WhyProject({ project }: { project: Project }) {
    return (
        <section
            id="why-this-project"
            className="container-page py-10 md:py-18"
        >
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-bronze-600">
                Why This Project
            </p>
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
                            {renderBoldText(reason.description)}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
