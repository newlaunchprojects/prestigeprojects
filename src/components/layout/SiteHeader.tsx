"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { ContactActions } from "@/components/ui/ContactActions";

const sections = [
    { id: "hero", label: "Home" },
    { id: "overview", label: "Overview" },
    { id: "highlights", label: "Highlights" },
    { id: "pricing", label: "Pricing" },
    { id: "amenities", label: "Amenities" },
    { id: "floor-plans", label: "Floor Plans" },
    { id: "gallery", label: "Gallery" },
    { id: "location", label: "Location" },
    { id: "why-this-project", label: "Why This Project" },
    { id: "faq", label: "FAQ" },
];

export function SiteHeader() {
    const [activeSection, setActiveSection] = useState("hero");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 140;

            let currentSection = sections[0].id;

            for (const section of sections) {
                const element = document.getElementById(section.id);

                if (!element) continue;

                const sectionTop =
                    element.getBoundingClientRect().top + window.scrollY;

                if (scrollPosition >= sectionTop) {
                    currentSection = section.id;
                } else {
                    break;
                }
            }

            setActiveSection(currentSection);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);

        if (!element) return;

        const headerOffset =
            document.querySelector("header")?.offsetHeight || 0;

        const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
            top: elementPosition - headerOffset,
            behavior: "smooth",
        });

        setMobileMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 border-b border-stone-200 bg-stone-50/95 backdrop-blur-xl">
            <div className="container-page">
                {/* Main header */}
                <div className="flex h-17 items-center justify-between md:h-19">
                    {/* Logo */}
                    <Link
                        href="/"
                        aria-label="Prestige Projects"
                        className="shrink-0"
                    >
                        <Image
                            src="/Prestige.svg"
                            alt="Prestige"
                            title="Prestige"
                            width={150}
                            height={50}
                            priority
                            className="h-15 w-26.25 md:w-31.25"
                        />
                    </Link>

                    {/* Desktop navigation */}
                    <nav className="hidden min-w-0 flex-1 lg:block">
                        <div className="flex items-center justify-center gap-5">
                            {sections.map((section) => {
                                const isActive = activeSection === section.id;

                                return (
                                    <button
                                        key={section.id}
                                        type="button"
                                        onClick={() =>
                                            scrollToSection(section.id)
                                        }
                                        className={`
                                            group
                                            relative
                                            shrink-0
                                            cursor-pointer
                                            py-1
                                            text-[10px]
                                            font-medium
                                            uppercase
                                            tracking-[0.06em]
                                            transition-colors
                                            ${
                                                isActive
                                                    ? "text-ink-900"
                                                    : "text-ink-400 hover:text-ink-900"
                                            }
                                        `}
                                    >
                                        {section.label}

                                        <span
                                            className={`
                                                absolute
                                                -bottom-px
                                                left-0
                                                h-px
                                                bg-bronze-600
                                                transition-all
                                                duration-300
                                                ${
                                                    isActive
                                                        ? "w-full"
                                                        : "w-0 group-hover:w-full"
                                                }
                                            `}
                                        />
                                    </button>
                                );
                            })}
                        </div>
                    </nav>

                    {/* Desktop contact */}
                    <div className="hidden lg:block">
                        <ContactActions />
                    </div>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen((prev) => !prev)}
                        aria-label={
                            mobileMenuOpen
                                ? "Close navigation"
                                : "Open navigation"
                        }
                        aria-expanded={mobileMenuOpen}
                        className="flex h-10 w-10 cursor-pointer items-center justify-center lg:hidden"
                    >
                        {mobileMenuOpen ? (
                            <X
                                size={23}
                                strokeWidth={1.3}
                                className="text-ink-900"
                            />
                        ) : (
                            <span className="flex flex-col gap-1.25">
                                <span className="block h-px w-7 bg-ink-900" />
                                <span className="block h-px w-7 bg-ink-900" />
                                <span className="block h-px w-7 bg-ink-900" />
                            </span>
                        )}
                    </button>
                </div>

                {/* Mobile navigation */}
                <div
                    className={`
                        overflow-hidden
                        border-t
                        border-stone-200
                        transition-all
                        duration-300
                        lg:hidden
                        ${
                            mobileMenuOpen
                                ? "max-h-150 opacity-100"
                                : "max-h-0 border-t-0 opacity-0"
                        }
                    `}
                >
                    <nav className="py-2">
                        {sections.map((section, index) => {
                            const isActive = activeSection === section.id;

                            return (
                                <button
                                    key={section.id}
                                    type="button"
                                    onClick={() => scrollToSection(section.id)}
                                    className={`
                                        group
                                        flex
                                        w-full
                                        cursor-pointer
                                        items-center
                                        justify-between
                                        border-b
                                        border-stone-200
                                        py-4
                                        text-left
                                        last:border-0
                                        transition-colors
                                        ${
                                            isActive
                                                ? "text-ink-900"
                                                : "text-ink-500"
                                        }
                                    `}
                                >
                                    <span className="flex items-center gap-4">
                                        <span
                                            className={`
                                                w-5
                                                text-[9px]
                                                tabular-nums
                                                tracking-[0.15em]
                                                ${
                                                    isActive
                                                        ? "text-bronze-600"
                                                        : "text-ink-300"
                                                }
                                            `}
                                        >
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <span className="text-[11px] font-medium uppercase tracking-[0.16em]">
                                            {section.label}
                                        </span>
                                    </span>

                                    <span
                                        className={`
                                            h-px
                                            transition-all
                                            duration-300
                                            ${
                                                isActive
                                                    ? "w-8 bg-bronze-600"
                                                    : "w-0"
                                            }
                                        `}
                                    />
                                </button>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </header>
    );
}
