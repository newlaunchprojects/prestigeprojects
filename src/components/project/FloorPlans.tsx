"use client";

import Image from "next/image";
import type { Project } from "@/data/projects";
import { LockKeyhole } from "lucide-react";
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

    if (cards.length === 0) return null;

    return (
        <section
            id="floor-plans"
            className="border-b border-stone-200 bg-stone-50 py-14 md:py-20"
        >
            <div className="container-page">
                {/* Heading */}
                <div className="max-w-2xl">
                    <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-bronze-600">
                        Plans & Layouts
                    </p>

                    <h2 className="font-display text-3xl leading-tight text-ink-900 md:text-4xl">
                        {project.name} Floor Plans
                    </h2>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-ink-600">
                        Explore the master plan and available floor plans.
                        Submit an enquiry to unlock detailed layouts.
                    </p>
                </div>

                {/* Plans */}
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {cards.map((card) => (
                        <button
                            key={card.name}
                            type="button"
                            onClick={() => handlePlanClick(card.name)}
                            className="
                                group overflow-hidden
                                border border-stone-200
                                bg-white text-left
                                transition-all duration-300
                                hover:border-stone-300
                                hover:shadow-xl cursor-pointer
                            "
                        >
                            {/* Image */}
                            <div className="relative aspect-4/5  overflow-hidden bg-stone-100">
                                <Image
                                    src={card.image}
                                    alt={`${project.name} — ${card.name}`}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="
                                        scale-105 object-cover blur-md
                                        transition-transform duration-700
                                        group-hover:scale-110
                                    "
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-ink-900/20 transition-colors duration-300 group-hover:bg-ink-900/30" />

                                {/* Unlock */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span
                                        className="
                                            inline-flex items-center gap-2
                                            border border-white/70
                                            bg-white/95
                                            px-5 py-3
                                            text-[10px] font-medium
                                            uppercase tracking-[0.16em]
                                            text-ink-900
                                            shadow-lg
                                            transition-all duration-300
                                            group-hover:bg-ink-900
                                            group-hover:text-white
                                        "
                                    >
                                        <LockKeyhole
                                            size={13}
                                            strokeWidth={1.5}
                                        />
                                        Unlock Plan
                                    </span>
                                </div>
                            </div>

                            {/* Card Footer */}
                            <div className="flex items-center justify-between px-5 py-5">
                                <div>
                                    <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-ink-400">
                                        Layout
                                    </p>

                                    <p className="mt-1 font-display text-lg text-ink-900">
                                        {card.name}
                                    </p>
                                </div>

                                <span className="text-xs text-ink-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink-900">
                                    →
                                </span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
