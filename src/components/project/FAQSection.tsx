"use client";

import type { Project } from "@/data/projects";
import { Accordion } from "@/components/ui/Accordion";
import { track } from "@/lib/analytics";

export function FAQSection({ project }: { project: Project }) {
    return (
        <section id="faq" className="bg-stone-100/60 py-20 md:py-28">
            <div className="container-page max-w-3xl">
                <h2 className="mb-10 font-display text-3xl text-ink-900 md:text-4xl">
                    {project.name} FAQ&apos;s
                </h2>
                <Accordion
                    items={project.faqs}
                    onOpen={(question) =>
                        track("faq_open", { project: project.slug, question })
                    }
                />
            </div>
        </section>
    );
}
