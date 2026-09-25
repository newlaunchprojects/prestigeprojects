"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import type { Project } from "@/data/projects";

export function Highlights({ project }: { project: Project }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const highlights = project.highlights;

    useEffect(() => {
        if (highlights.length <= 1 || isPaused) return;

        const timer = setInterval(() => {
            setActiveIndex((current) =>
                current === highlights.length - 1 ? 0 : current + 1,
            );
        }, 5000);

        return () => clearInterval(timer);
    }, [highlights.length, isPaused]);

    if (highlights.length === 0) return null;

    const highlight = highlights[activeIndex];

    const goNext = () => {
        setActiveIndex((current) =>
            current === highlights.length - 1 ? 0 : current + 1,
        );
    };

    const goPrevious = () => {
        setActiveIndex((current) =>
            current === 0 ? highlights.length - 1 : current - 1,
        );
    };

    return (
        <section
            id="highlights"
            className="bg-stone-100/60 py-14 md:py-20"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="container-page mb-10 md:mb-14">
                <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-bronze-600">
                    Project Highlights
                </p>

                <h2 className="font-display text-3xl leading-tight text-ink-900 md:text-4xl">
                    {project.name}
                </h2>
            </div>

            <div className="container-page">
                <div className="grid overflow-hidden rounded-[3px] bg-stone-50 md:grid-cols-2">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto md:min-h-[480px]">
                        {highlight.image && (
                            <Image
                                key={highlight.image}
                                src={highlight.image}
                                alt={highlight.title}
                                title={highlight.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover highlight-image-in"
                            />
                        )}
                    </div>

                    {/* Content */}
                    <div
                        key={highlight.title}
                        className="flex min-h-[320px] flex-col justify-center px-7 py-10 md:px-12 lg:px-16"
                    >
                        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-bronze-600">
                            Highlight {String(activeIndex + 1).padStart(2, "0")}
                        </p>

                        <h3 className="mt-4 max-w-lg font-display text-2xl leading-tight text-ink-900 md:text-3xl lg:text-4xl highlight-content-in">
                            {highlight.title}
                        </h3>

                        <p className="mt-5 max-w-[55ch] text-sm leading-7 text-ink-600 md:text-base highlight-content-in">
                            {highlight.description}
                        </p>

                        <div className="mt-9 flex items-center gap-5">
                            <button
                                type="button"
                                onClick={goPrevious}
                                aria-label="Previous highlight"
                                className="flex h-10 w-10 items-center cursor-pointer justify-center rounded-full border border-stone-300 text-ink-700 transition-colors hover:border-ink-900 hover:bg-ink-900 hover:text-stone-50"
                            >
                                <ChevronLeft size={17} strokeWidth={1.5} />
                            </button>

                            <button
                                type="button"
                                onClick={goNext}
                                aria-label="Next highlight"
                                className="flex h-10 w-10 items-center cursor-pointer justify-center rounded-full border border-stone-300 text-ink-700 transition-colors hover:border-ink-900 hover:bg-ink-900 hover:text-stone-50"
                            >
                                <ChevronRight size={17} strokeWidth={1.5} />
                            </button>

                            <div className="ml-2 flex items-center gap-2">
                                {highlights.map((_, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        aria-label={`Go to highlight ${index + 1}`}
                                        onClick={() => setActiveIndex(index)}
                                        className="group flex h-5 items-center"
                                    >
                                        <span
                                            className={`
                                                block h-px transition-all duration-300
                                                ${
                                                    index === activeIndex
                                                        ? "w-8 bg-bronze-600"
                                                        : "w-4 bg-stone-300 group-hover:bg-ink-400"
                                                }
                                            `}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-page mt-5 flex justify-end">
                <span className="text-[10px] font-medium tracking-[0.15em] text-ink-400">
                    {String(activeIndex + 1).padStart(2, "0")} /{" "}
                    {String(highlights.length).padStart(2, "0")}
                </span>
            </div>
        </section>
    );
}
