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

/**
 * Map the icon names stored in project data
 * to react-icons components.
 */
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
            className="bg-bronze-600 py-10 text-stone-50 md:py-18"
        >
            <div className="container-page">
                {/* Section Heading */}
                <h2 className="font-display text-3xl md:text-4xl">
                    {project.name} Amenities
                </h2>

                {/* Amenity Groups */}
                <div className="mt-14 space-y-14">
                    {project.amenities.map((group) => (
                        <div key={group.category}>
                            {/* Category */}
                            <h3 className="mb-6 text-sm tracking-wide text-stone-50/70">
                                {group.category}
                            </h3>

                            {/* Amenities */}
                            <div className="grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-3 lg:grid-cols-4">
                                {group.items.map((item) => {
                                    const Icon =
                                        amenityIcons[
                                            item.icon as keyof typeof amenityIcons
                                        ];

                                    return (
                                        <div
                                            key={item.title}
                                            className="group flex flex-col items-center text-center"
                                        >
                                            {/* React Icon */}
                                            <div className="flex h-10 items-center justify-center">
                                                {Icon ? (
                                                    <Icon
                                                        size={30}
                                                        strokeWidth={1.5}
                                                        className="text-stone-50 transition-transform duration-300 group-hover:scale-110"
                                                    />
                                                ) : (
                                                    <IoHome
                                                        size={30}
                                                        className="text-stone-50 transition-transform duration-300 group-hover:scale-110"
                                                    />
                                                )}
                                            </div>

                                            {/* Amenity Title */}
                                            <p className="mt-3 text-sm font-medium text-stone-50/90 transition-colors duration-300 group-hover:text-stone-50">
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
