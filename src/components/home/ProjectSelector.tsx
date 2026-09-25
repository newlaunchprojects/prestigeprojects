"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectSelector({ projects }: { projects: Project[] }) {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <section className="flex flex-1 flex-col justify-center py-12 md:py-16">
            {/* Section Intro */}
            <div className="container-page mb-8 flex flex-col items-center text-center md:mb-10">
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mb-4 flex items-center gap-3"
                >
                    <span className="h-px w-8 bg-stone-50/30" />

                    <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-stone-50/60">
                        Prestige
                    </span>

                    <span className="h-px w-8 bg-stone-50/30" />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.08,
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="font-display text-xl leading-tight text-stone-50 md:text-2xl"
                >
                    Two distinctive addresses.
                    <span className="block text-stone-50/55">
                        One exceptional city.
                    </span>
                </motion.h2>
            </div>

            {/* Project Cards */}
            <div className="relative">
                <div
                    className="
                        flex w-full snap-x snap-mandatory gap-4
                        overflow-x-auto overscroll-x-contain
                        px-6 pb-4
                        [-ms-overflow-style:none]
                        scrollbar-none
                        [&::-webkit-scrollbar]:hidden

                        sm:px-8

                        md:justify-center
                        md:gap-6
                        md:overflow-visible
                        md:px-0
                    "
                >
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.slug}
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: 0.18 + i * 0.12,
                                duration: 0.7,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="
                                w-[82vw]
                                max-w-95
                                shrink-0
                                snap-center

                                sm:w-[70vw]

                                md:w-90

                                lg:w-97.5
                            "
                        >
                            <ProjectCard
                                project={project}
                                index={i}
                                hovered={hovered}
                                onHover={setHovered}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Mobile scroll hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="mt-1 flex justify-center md:hidden"
                >
                    <span className="text-[9px] uppercase tracking-[0.18em] text-stone-50/40">
                        Swipe to explore
                    </span>
                </motion.div>
            </div>
        </section>
    );
}
