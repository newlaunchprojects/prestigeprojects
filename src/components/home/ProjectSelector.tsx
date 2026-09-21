"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectSelector({ projects }: { projects: Project[] }) {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <section className="flex flex-1 flex-col justify-center py-16 md:py-12">
            <div className="container-page mb-10 flex flex-col items-center text-center md:mb-12">
                <motion.h1
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mb-3 text-[10px] font-medium uppercase tracking-[0.25em] text-stone-50/60"
                >
                    Indiabulls
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.1,
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="max-w-xl font-display text-lg leading-[1.1] text-stone-50 md:text-xl"
                >
                    Two distinctive addresses.
                    <span className="block text-stone-50/60">
                        One exceptional city.
                    </span>
                </motion.p>
            </div>

            <div className="relative">
                <div
                    className="
                        flex w-full snap-x snap-mandatory gap-4
                        overflow-x-auto overscroll-x-contain
                        px-6 pb-5
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
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.15 + i * 0.12,
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
            </div>
        </section>
    );
}
