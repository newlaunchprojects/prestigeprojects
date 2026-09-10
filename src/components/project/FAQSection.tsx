"use client";

import type { Project } from "@/data/projects";
import { Accordion } from "@/components/ui/Accordion";
import { track } from "@/lib/analytics";
import { LeadForm } from "@/components/ui/LeadForm";

export function FAQSection({ project }: { project: Project }) {
    return (
        <section id="faq" className="bg-stone-100/60 py-10 md:py-18">
            <div className="container-page">
                <div className="grid gap-12 lg:grid-cols-[1fr_420px]">
                    {/* FAQ */}
                    <div>
                        <h2 className="mb-10 font-display text-3xl text-ink-900 md:text-4xl">
                            {project.name} FAQ&apos;s
                        </h2>

                        <Accordion
                            items={project.faqs}
                            onOpen={(question) =>
                                track("faq_open", {
                                    project: project.slug,
                                    question,
                                })
                            }
                        />
                    </div>

                    {/* LEAD FORM */}
                    <div className="lg:sticky lg:top-24">
                        <div className="overflow-hidden rounded-sm bg-stone-50 p-4 text-ink-900 shadow-xl sm:p-6">
                            <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-bronze-600">
                                Private Enquiry
                            </p>

                            <h3 className="font-display text-lg leading-tight text-ink-900 sm:text-xl">
                                Interested in {project.name}?
                            </h3>

                            <p className="mt-2 mb-7 text-xs leading-6 text-ink-500">
                                Get the latest pricing, availability and site
                                visit details from our team.
                            </p>

                            <LeadForm
                                projectName={project.name}
                                source="faq_form"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
