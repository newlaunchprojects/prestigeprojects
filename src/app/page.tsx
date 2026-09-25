import Link from "next/link";
import Image from "next/image";

import { HeroBackground } from "@/components/home/HeroBackground";
import { ProjectSelector } from "@/components/home/ProjectSelector";
import { DeveloperSection } from "@/components/home/DeveloperSection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ContactActions } from "@/components/ui/ContactActions";
import { projects } from "@/data/projects";

export default function HomePage() {
    return (
        <div className="relative flex min-h-screen flex-col overflow-hidden">
            <HeroBackground src="/main.avif" alt="Gurgaon skyline at dusk" />

            <div className="relative z-10 flex flex-1 flex-col">
                {/* Header */}
                <header className="container-page flex w-full items-center justify-between py-6">
                    <Link
                        href="/"
                        className="shrink-0"
                        aria-label="Prestige Projects"
                    >
                        <Image
                            src="/Prestige.svg"
                            alt="Prestige Logo"
                            title="Prestige Logo"
                            width={150}
                            height={50}
                            priority
                            className="h-25 w-30 md:w-37.5"
                        />
                    </Link>

                    <div className="ml-auto">
                        <ContactActions dark />
                    </div>
                </header>

                <ProjectSelector projects={projects} />

                <DeveloperSection />
            </div>

            <div className="relative z-10">
                <SiteFooter minimal />
            </div>
        </div>
    );
}
