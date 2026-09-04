"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { track } from "@/lib/analytics";

export function ProjectCard({
    project,
    index,
    hovered,
    onHover,
}: {
    project: Project;
    index: number;
    hovered: number | null;
    onHover: (i: number | null) => void;
}) {
    const isDimmed = hovered !== null && hovered !== index;

    return (
        <motion.div
            initial={{ opacity: 0, x: index === 0 ? -60 : 60, y: 20 }}
            animate={{
                opacity: 1,
                x: 0,
                y: 0,
                scale: hovered === index ? 1.02 : 1,
            }}
            transition={{
                opacity: {
                    duration: 0.8,
                    delay: 0.2 + index * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                },
                x: {
                    duration: 0.9,
                    delay: 0.2 + index * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                },
                y: {
                    duration: 0.9,
                    delay: 0.2 + index * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                },
                scale: { duration: 0.4, ease: "easeOut" },
            }}
            onHoverStart={() => onHover(index)}
            onHoverEnd={() => onHover(null)}
            onViewportEnter={() =>
                track("project_card_view", { project: project.slug })
            }
            className="w-[78vw] max-w-90 shrink-0 snap-center md:w-[320px] lg:w-90"
        >
            <Link
                href={`/projects/${project.slug}`}
                onClick={() =>
                    track("project_card_click", { project: project.slug })
                }
                className="group block"
            >
                <div className="relative aspect-3/4 w-full overflow-hidden rounded-[3px] bg-ink-900/20">
                    <motion.div
                        animate={{ scale: hovered === index ? 1.06 : 1 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={project.cardImage}
                            alt={project.name}
                            fill
                            sizes="(max-width: 768px) 78vw, 360px"
                            className="object-cover"
                        />
                    </motion.div>
                    <div
                        className="absolute inset-0 bg-linear-to-t from-ink-900/85 via-ink-900/10 to-transparent transition-opacity duration-300"
                        style={{ opacity: isDimmed ? 0.9 : 0.75 }}
                    />

                    <div className="absolute inset-x-0 bottom-0 p-6 text-stone-50">
                        <p className="text-xs tracking-wide text-stone-50/80">
                            {project.location}
                        </p>
                        <h2 className="mt-1 font-display text-2xl leading-tight md:text-[1.75rem]">
                            {project.name}
                        </h2>
                        <p className="mt-2 max-w-[26ch] text-sm text-stone-50/85">
                            {project.positioning}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-stone-50 underline-offset-4 group-hover:underline">
                            Explore Project →
                        </span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
