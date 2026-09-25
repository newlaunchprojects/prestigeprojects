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
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            setIsScrolled(scrollY > 40);

            const scrollPosition = scrollY + 140;

            let currentSection = sections[0].id;

            for (const section of sections) {
                const element = document.getElementById(section.id);

                if (!element) continue;

                const sectionTop =
                    element.getBoundingClientRect().top + scrollY;

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
            document.querySelector("header")?.getBoundingClientRect().height ||
            0;

        const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
            top: elementPosition - headerOffset,
            behavior: "smooth",
        });

        setMobileMenuOpen(false);
    };

    const isHero = activeSection === "hero" && !isScrolled;

    /*
     * Header states:
     *
     * 1. Hero + menu closed
     *    → transparent
     *
     * 2. Hero + menu open
     *    → entire header becomes dark glass
     *
     * 3. Scrolled
     *    → normal light header
     */
    const headerClass =
        mobileMenuOpen && !isScrolled
            ? "border-transparent bg-ink-900/30 text-stone-50 backdrop-blur-md"
            : isHero
              ? "border-transparent bg-transparent text-stone-50"
              : "border-b border-stone-200/80 bg-stone-50/95 text-ink-900 shadow-sm backdrop-blur-xl";

    return (
        <header
            className={`
                fixed inset-x-0 top-0 z-50
                transition-all duration-500 ease-out
                ${headerClass}
            `}
        >
            <div className="container-page">
                {/* =====================================================
                    MAIN HEADER
                ====================================================== */}
                <div
                    className={`
                        flex items-center justify-between
                        transition-all duration-500 ease-out
                        ${isScrolled ? "h-15 md:h-16" : "h-18 md:h-20"}
                    `}
                >
                    {/* =================================================
                        LOGO
                    ================================================== */}
                    <Link
                        href="/"
                        aria-label="Prestige Projects"
                        className="shrink-0"
                    >
                        <div
                            className={`
                                flex shrink-0 items-center justify-center
                                transition-all duration-500 ease-out
                                ${
                                    isScrolled
                                        ? "bg-transparent px-0 py-0"
                                        : "bg-white px-3 py-4 shadow-sm md:px-4 md:py-5"
                                }
                            `}
                        >
                            <Image
                                src="/Prestige.svg"
                                alt="Prestige"
                                title="Prestige"
                                width={150}
                                height={50}
                                priority
                                className={`
                                    object-contain transition-all duration-500
                                    ${
                                        isScrolled
                                            ? "h-11 w-10 md:h-12 md:w-10"
                                            : "mt-2 h-14 w-12 md:h-18 md:w-14"
                                    }
                                `}
                            />
                        </div>
                    </Link>

                    {/* =================================================
                        DESKTOP NAVIGATION
                    ================================================== */}
                    <nav className="hidden min-w-0 flex-1 lg:block">
                        <div
                            className={`
                                flex items-center justify-center
                                transition-all duration-500
                                ${isScrolled ? "gap-6" : "gap-5"}
                            `}
                        >
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
                                            group relative shrink-0
                                            cursor-pointer py-1
                                            text-[10px] font-medium
                                            uppercase tracking-[0.06em]
                                            transition-colors duration-300
                                            ${
                                                isHero
                                                    ? isActive
                                                        ? "text-stone-50"
                                                        : "text-stone-50/70 hover:text-stone-50"
                                                    : isActive
                                                      ? "text-ink-900"
                                                      : "text-ink-400 hover:text-ink-900"
                                            }
                                        `}
                                    >
                                        {section.label}

                                        <span
                                            className={`
                                                absolute -bottom-px left-0
                                                h-px
                                                transition-all duration-300
                                                ${
                                                    isHero
                                                        ? "bg-stone-50"
                                                        : "bg-bronze-600"
                                                }
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

                    {/* =================================================
                        DESKTOP CONTACT
                    ================================================== */}
                    <div className="hidden lg:block">
                        <ContactActions />
                    </div>

                    {/* =================================================
                        MOBILE / TABLET MENU BUTTON
                    ================================================== */}
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
                                className={
                                    isHero ? "text-stone-50" : "text-ink-900"
                                }
                            />
                        ) : (
                            <span className="flex flex-col gap-1.25">
                                <span
                                    className={`block h-px w-7 ${
                                        isHero ? "bg-stone-50" : "bg-ink-900"
                                    }`}
                                />
                                <span
                                    className={`block h-px w-7 ${
                                        isHero ? "bg-stone-50" : "bg-ink-900"
                                    }`}
                                />
                                <span
                                    className={`block h-px w-7 ${
                                        isHero ? "bg-stone-50" : "bg-ink-900"
                                    }`}
                                />
                            </span>
                        )}
                    </button>
                </div>

                {/* =====================================================
                    MOBILE / TABLET NAVIGATION

                    The background is transparent here because the
                    HEADER itself provides the dark glass effect.
                ====================================================== */}
                <div
                    className={`
                        overflow-hidden
                        transition-all duration-300 ease-out
                        lg:hidden
                        ${
                            mobileMenuOpen
                                ? "max-h-162.5 opacity-100"
                                : "max-h-0 opacity-0"
                        }
                    `}
                >
                    <nav
                        className={`
                            border-t py-2
                            ${
                                isHero
                                    ? "border-stone-50/20"
                                    : "border-stone-200"
                            }
                        `}
                    >
                        {sections.map((section, index) => {
                            const isActive = activeSection === section.id;

                            return (
                                <button
                                    key={section.id}
                                    type="button"
                                    onClick={() => scrollToSection(section.id)}
                                    className={`
                                        group flex w-full cursor-pointer
                                        items-center justify-between
                                        border-b py-4 text-left
                                        last:border-0
                                        transition-colors duration-300
                                        ${
                                            isHero
                                                ? "border-stone-50/10"
                                                : "border-stone-200"
                                        }
                                        ${
                                            isActive
                                                ? isHero
                                                    ? "text-stone-50"
                                                    : "text-ink-900"
                                                : isHero
                                                  ? "text-stone-50/60"
                                                  : "text-ink-500"
                                        }
                                    `}
                                >
                                    <span className="flex items-center gap-4">
                                        <span
                                            className={`
                                                w-5 text-[9px]
                                                tabular-nums
                                                tracking-[0.15em]
                                                ${
                                                    isActive
                                                        ? "text-bronze-600"
                                                        : isHero
                                                          ? "text-stone-50/40"
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
                                            transition-all duration-300
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
