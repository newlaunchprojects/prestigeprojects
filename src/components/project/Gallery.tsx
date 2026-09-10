"use client";

import { useState } from "react";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { Lightbox } from "@/components/ui/Lightbox";

export function Gallery({ project }: { project: Project }) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section id="gallery" className="container-page py-10 md:py-18">
            <h2 className="mb-10 font-display text-3xl text-ink-900 md:text-4xl">
                {project.name} Gallery
            </h2>

            <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-4 md:overflow-visible">
                {project.gallery.map((image, i) => (
                    <button
                        key={image.src}
                        type="button"
                        onClick={() => setActiveIndex(i)}
                        className={
                            "group cursor-pointer relative aspect-4/3 shrink-0 snap-center overflow-hidden rounded-[3px] " +
                            (i % 5 === 0
                                ? "w-[75vw] md:col-span-2 md:row-span-2 md:aspect-square md:w-auto"
                                : "w-[60vw] md:w-auto")
                        }
                        aria-label={`Open ${image.alt}`}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(max-width: 768px) 70vw, 25vw"
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </button>
                ))}
            </div>

            <Lightbox
                images={project.gallery}
                index={activeIndex}
                onClose={() => setActiveIndex(null)}
                onNavigate={setActiveIndex}
            />
        </section>
    );
}
