"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/data/projects";
import { Lightbox } from "@/components/ui/Lightbox";

export function Gallery({ project }: { project: Project }) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    if (!project.gallery?.length) return null;

    return (
        <section id="gallery" className="container-page py-14 md:py-20">
            {/* Header */}
            <div className="mb-10 flex items-end justify-between gap-6 md:mb-12">
                <div>
                    <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-bronze-600">
                        Visual Gallery
                    </p>

                    <h2 className="font-display text-3xl leading-tight text-ink-900 md:text-4xl">
                        {project.name}
                    </h2>
                </div>

                <p className="hidden text-xs tracking-wide text-ink-400 sm:block">
                    {project.gallery.length} Images
                </p>
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
                {project.gallery.map((image, i) => {
                    const isFeatured = i % 5 === 0;

                    return (
                        <button
                            key={image.src}
                            type="button"
                            onClick={() => setActiveIndex(i)}
                            aria-label={`Open ${image.alt}`}
                            className={`
                                group relative cursor-pointer
                                overflow-hidden rounded-[3px]
                                bg-stone-100
                                text-left
                                ${
                                    isFeatured
                                        ? "col-span-2 row-span-2 aspect-square"
                                        : "aspect-4/3"
                                }
                            `}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                title={image.alt}
                                fill
                                sizes={
                                    isFeatured
                                        ? "(max-width: 768px) 100vw, 50vw"
                                        : "(max-width: 768px) 50vw, 25vw"
                                }
                                className="
                                    object-cover
                                    transition-transform
                                    duration-700
                                    ease-out
                                    group-hover:scale-[1.04]
                                "
                            />

                            {/* Hover overlay */}
                            <div
                                className="
                                    absolute inset-0
                                    bg-ink-900/0
                                    transition-colors duration-500
                                    group-hover:bg-ink-900/25
                                "
                            />

                            {/* Open indicator */}
                            <div
                                className="
                                    absolute right-4 top-4
                                    flex h-9 w-9
                                    translate-y-2
                                    items-center justify-center
                                    rounded-full
                                    bg-stone-50/95
                                    text-ink-900
                                    opacity-0
                                    shadow-sm
                                    transition-all duration-300
                                    group-hover:translate-y-0
                                    group-hover:opacity-100
                                "
                            >
                                <ArrowUpRight size={15} strokeWidth={1.5} />
                            </div>

                            {/* Image number */}
                            <span
                                className="
                                    absolute bottom-3 left-3
                                    text-[9px]
                                    font-medium
                                    tracking-[0.16em]
                                    text-white
                                    opacity-0
                                    transition-opacity duration-300
                                    group-hover:opacity-100
                                "
                            >
                                {String(i + 1).padStart(2, "0")}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Mobile image count */}
            <div className="mt-5 flex justify-end sm:hidden">
                <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-ink-400">
                    {project.gallery.length} Images
                </p>
            </div>

            {/* Lightbox */}
            <Lightbox
                images={project.gallery}
                index={activeIndex}
                onClose={() => setActiveIndex(null)}
                onNavigate={setActiveIndex}
            />
        </section>
    );
}
