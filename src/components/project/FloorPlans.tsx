"use client";

import Image from "next/image";
import type { Project } from "@/data/projects";
import { useLeadForm } from "../ui/LeadFormProvider";
export function FloorPlans({ project }: { project: Project }) {
    const { open } = useLeadForm();

    const cards = [
        ...(project.masterPlan
            ? [
                  {
                      name: "Master Plan",
                      image: project.masterPlan.image,
                  },
              ]
            : []),
        ...project.floorPlans,
    ];

    const handlePlanClick = (planName: string) => {
        open({
            source: "floor_plan",
            projectName: project.name,
            configName: planName,
        });
    };

    return (
        <section id="floor-plans" className="bg-stone-100/60 py-10 md:py-18">
            <div className="container-page">
                <h2 className="mb-3 font-display text-3xl text-ink-900 md:text-4xl">
                    {project.name} Floor Plans &amp; Master Plan
                </h2>

                <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3">
                    {cards.map((card) => (
                        <button
                            key={card.name}
                            type="button"
                            onClick={() => handlePlanClick(card.name)}
                            className="group w-[75vw] shrink-0 snap-center cursor-pointer overflow-hidden rounded-[3px] border border-stone-200 bg-white text-left transition-all duration-300 hover:border-stone-300 hover:shadow-lg sm:w-auto"
                        >
                            <div className="relative aspect-4/5 w-full overflow-hidden">
                                <Image
                                    src={card.image}
                                    alt={`${project.name} — ${card.name}`}
                                    fill
                                    sizes="(max-width: 768px) 75vw, 33vw"
                                    className="scale-105 object-cover blur-md"
                                />

                                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                    <span className="rounded-full bg-white/90 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-ink-900">
                                        Unlock Plan
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-4">
                                <p className="font-medium text-ink-900">
                                    {card.name}
                                </p>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
