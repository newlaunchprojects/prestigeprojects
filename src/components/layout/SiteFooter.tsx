import Link from "next/link";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import Image from "next/image";

export function SiteFooter({ minimal = false }: { minimal?: boolean }) {
    return (
        <footer
            className={
                minimal
                    ? "relative z-10 border-t border-stone-50/20 bg-transparent text-stone-50"
                    : "border-t border-stone-200 bg-stone-50 text-ink-900"
            }
        >
            <div className="container-page flex flex-col gap-6 py-8 text-sm md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col gap-1">
                    <Image
                        src="/indiabulls.svg"
                        alt="Indiabulls Logo"
                        width={150}
                        height={50}
                    />
                    <span
                        className={
                            minimal ? "text-stone-50/70" : "text-ink-500"
                        }
                    >
                        {projects.map((p) => p.shortName).join(" · ")}
                    </span>
                </div>

                <nav
                    aria-label="Footer"
                    className="flex flex-wrap gap-x-6 gap-y-2"
                >
                    <Link href="/privacy" className="hover:underline">
                        Privacy Policy
                    </Link>
                    <Link href="/terms" className="hover:underline">
                        Terms & Conditions
                    </Link>
                    <Link href="/disclaimer" className="hover:underline">
                        Disclaimer
                    </Link>
                </nav>

                <div className="flex flex-col gap-1">
                    <a href={site.phoneHref} className="hover:underline">
                        {site.phone}
                    </a>
                    <span
                        className={
                            minimal ? "text-stone-50/70" : "text-ink-500"
                        }
                    >
                        Call · WhatsApp
                    </span>
                </div>
            </div>
            <div
                className={
                    "container-page pb-6 text-xs " +
                    (minimal ? "text-stone-50/50" : "text-ink-500")
                }
            >
                Disclaimer : All information on this website is for general
                purposes only; while Indiabulls for accuracy, we make no
                guarantees on completeness or reliability, and any reliance is
                at your own risk project details, approvals, and specifications
                may change per regulatory norms and are binding only as stated
                in the final buyer–company agreement.
            </div>
        </footer>
    );
}
