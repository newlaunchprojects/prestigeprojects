import {
    FaChild,
    FaDumbbell,
    FaFootballBall,
    FaGamepad,
    FaSpa,
    FaSwimmer,
    FaTrophy,
} from "react-icons/fa";

import {
    MdOutlineSportsGymnastics,
    MdSelfImprovement,
    MdSportsCricket,
    MdSportsTennis,
    MdSportsVolleyball,
} from "react-icons/md";

import { GiBoxingGlove, GiMountainRoad } from "react-icons/gi";

import { IoHome, IoWater } from "react-icons/io5";

import type { Project } from "@/data/projects";

const amenityIcons = {
    Dumbbell: FaDumbbell,
    "Yoga & Meditation": MdSelfImprovement,
    "Swimming Pool": FaSwimmer,
    Spa: FaSpa,
    "Indoor Games": FaGamepad,
    "Steam & Sauna": IoWater,
    "Boxing Ring": GiBoxingGlove,
    "Clubhouse Reception": IoHome,

    "Sports Arena": FaTrophy,
    "Tennis Court": MdSportsTennis,
    "Volleyball Court": MdSportsVolleyball,
    "Cricket Ground": MdSportsCricket,
    "Squash Court": MdOutlineSportsGymnastics,
    "Kids Play Area": FaChild,
    "Rooftop Lounge": GiMountainRoad,
    "Football Ground": FaFootballBall,
} as const;

export function Amenities({ project }: { project: Project }) {
    return (
        <section
            id="amenities"
            className="bg-bronze-600 py-14 text-stone-50 md:py-20"
        >
            <div className="container-page">
                {/* Heading */}
                <div className="max-w-2xl">
                    <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-stone-50/65">
                        Lifestyle & Wellness
                    </p>

                    <h2 className="font-display text-3xl leading-tight md:text-4xl">
                        {project.name} Amenities
                    </h2>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-stone-50/70">
                        Thoughtfully designed spaces and facilities created for
                        recreation, wellness and everyday living.
                    </p>
                </div>

                {/* Amenity Groups */}
                <div className="mt-12 space-y-12 md:mt-16 md:space-y-16">
                    {project.amenities.map((group) => (
                        <div key={group.category}>
                            {/* Category */}
                            <div className="mb-6 flex items-center gap-4">
                                <h3 className="shrink-0 text-[10px] font-medium uppercase tracking-[0.18em] text-stone-50/65">
                                    {group.category}
                                </h3>

                                <span className="h-px flex-1 bg-stone-50/15" />
                            </div>

                            {/* Amenities */}
                            <div className="grid grid-cols-2 border-l border-t border-stone-50/15 sm:grid-cols-3 lg:grid-cols-4">
                                {group.items.map((item) => {
                                    const Icon =
                                        amenityIcons[
                                            item.icon as keyof typeof amenityIcons
                                        ];

                                    return (
                                        <div
                                            key={item.title}
                                            className="
                                                group
                                                flex min-h-32
                                                flex-col items-start
                                                justify-center
                                                border-b border-r border-stone-50/15
                                                px-5 py-6
                                                transition-colors duration-300
                                                hover:bg-stone-50/5
                                                md:min-h-36
                                                md:px-6
                                            "
                                        >
                                            {/* Icon */}
                                            <div
                                                className="
                                                    flex h-10 w-10
                                                    items-center justify-center
                                                    text-stone-50/85
                                                    transition-transform
                                                    duration-300
                                                    group-hover:-translate-y-1
                                                "
                                            >
                                                {Icon ? (
                                                    <Icon
                                                        size={25}
                                                        strokeWidth={1.5}
                                                    />
                                                ) : (
                                                    <IoHome size={25} />
                                                )}
                                            </div>

                                            {/* Title */}
                                            <p className="mt-4 text-sm font-medium leading-snug text-stone-50/90">
                                                {item.title}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
