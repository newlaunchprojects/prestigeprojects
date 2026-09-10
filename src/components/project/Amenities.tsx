import Image from "next/image";
import type { Project } from "@/data/projects";

export function Amenities({ project }: { project: Project }) {
    return (
        <section
            id="amenities"
            className="bg-moss-700 py-10 text-stone-50 md:py-18"
        >
            <div className="container-page">
                <h2 className="font-display text-3xl md:text-4xl">
                    {project.name} Amenities
                </h2>
                <p className="mt-3 max-w-[55ch] text-stone-50/80">
                    Amenities at {project.name} are organised around how
                    residents actually spend their day — not as a checklist of
                    icons.
                </p>

                <div className="mt-14 space-y-14">
                    {project.amenities.map((group) => (
                        <div key={group.category}>
                            <h3 className="mb-5 text-sm tracking-wide text-stone-50/70">
                                {group.category}
                            </h3>
                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                                {group.items.map((item) => (
                                    // <div key={item.name} className="group">
                                    <div
                                        key={item.image}
                                        className="relative aspect-square w-full overflow-hidden rounded-[3px]"
                                    >
                                        {item.image && (
                                            <Image
                                                src={item.image}
                                                alt="amenities"
                                                fill
                                                sizes="(max-width: 768px) 45vw, 240px"
                                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        )}
                                    </div>
                                    // {/* <p className="mt-2 text-sm text-stone-50/90">{item.name}</p> */}
                                    // </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
