import type { Project } from "@/data/projects";
import { GetLatestPriceButton } from "@/components/ui/LeadCTAs";

export function PricingGrid({ project }: { project: Project }) {
    return (
        <section id="pricing" className="container-page py-20 md:py-28">
            <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div>
                    <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-bronze-600">
                        Residences
                    </p>

                    <h2 className="font-display text-3xl leading-tight text-ink-900 md:text-4xl">
                        {project.name} Configurations &amp; Pricing
                    </h2>
                </div>

                <p className="max-w-xs text-sm leading-6 text-ink-500 md:text-right">
                    *Sizes are approximate and subject to change.
                </p>
            </div>

            <div className="grid gap-px overflow-hidden border border-stone-200 bg-stone-200 sm:grid-cols-2">
                {project.configurations.map((config, index) => (
                    <article
                        key={config.name}
                        className="group relative flex min-h-80 cursor-pointer flex-col bg-white p-7 transition-colors duration-300 hover:bg-stone-50 md:p-8"
                    >
                        {/* Entire card is clickable */}
                        <GetLatestPriceButton
                            projectName={project.name}
                            className="absolute inset-0 z-10 h-full w-full border-0! p-0! opacity-0"
                        />

                        <div className="flex items-start justify-between">
                            <span className="font-mono text-xs tracking-[0.15em] text-stone-400">
                                0{index + 1}
                            </span>

                            <span className="h-2 w-2 rounded-full bg-bronze-500 transition-transform duration-300 group-hover:scale-150" />
                        </div>

                        <div className="mt-auto">
                            <h3 className="font-display text-2xl text-ink-900 md:text-3xl">
                                {config.name}
                            </h3>

                            {config.size && (
                                <p className="mt-2 text-sm text-ink-500">
                                    {config.size}
                                </p>
                            )}

                            <div className="my-7 h-px w-full bg-stone-200" />

                            <p className="text-xs font-medium uppercase tracking-[0.16em] text-ink-400">
                                Starting from
                            </p>

                            <p className="mt-1 font-display text-xl text-bronze-600">
                                {config.priceLabel}
                            </p>

                            <div className="mt-6 flex items-center gap-3 text-sm font-medium text-ink-900">
                                <span>Get Latest Price</span>
                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
