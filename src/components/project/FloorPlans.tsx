"use client";

import { useState } from "react";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { Lightbox } from "@/components/ui/Lightbox";

export function FloorPlans({ project }: { project: Project }) {
    const cards = [
        ...(project.masterPlan
            ? [{ name: "Master Plan", image: project.masterPlan.image }]
            : []),
        ...project.floorPlans,
    ];
    const images = cards.map((c) => ({
        src: c.image,
        alt: `${project.name} — ${c.name}`,
    }));
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section id="floor-plans" className="bg-stone-100/60 py-10 md:py-18">
            <div className="container-page">
                <h2 className="mb-3 font-display text-3xl text-ink-900 md:text-4xl">
                    {project.name} Floor Plans &amp; Master Plan
                </h2>
                <p className="mb-10 max-w-[55ch] text-ink-500">
                    Tap a plan to open a full-screen viewer. Plans are for
                    viewing only and are not available for download.
                </p>

                <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible">
                    {cards.map((card, i) => (
                        <button
                            key={card.name}
                            type="button"
                            onClick={() => setActiveIndex(i)}
                            className="group w-[75vw] cursor-pointer shrink-0 snap-center overflow-hidden rounded-[3px] border border-stone-200 bg-white text-left sm:w-auto"
                        >
                            <div className="relative  aspect-4/5 w-full">
                                <Image
                                    src={card.image}
                                    alt={`${project.name} — ${card.name}`}
                                    fill
                                    sizes="(max-width: 768px) 75vw, 33vw"
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <p className="p-4 font-medium text-ink-900">
                                {card.name}
                            </p>
                        </button>
                    ))}
                </div>
            </div>

            <Lightbox
                images={images}
                index={activeIndex}
                onClose={() => setActiveIndex(null)}
                onNavigate={setActiveIndex}
            />
        </section>
    );
}
