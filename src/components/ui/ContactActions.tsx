"use client";

import { useState } from "react";
import { Phone, Mail, X } from "lucide-react";

import { site } from "@/data/site";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { useLeadForm } from "@/components/ui/LeadFormProvider";
import { FaWhatsapp } from "react-icons/fa";

export function ContactActions({
    className,
    compact = false,
    dark = false,
    projectName,
}: {
    className?: string;
    compact?: boolean;
    dark?: boolean;
    projectName?: string;
}) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { open } = useLeadForm();

    const handleEnquire = () => {
        track("enquire_now_click");

        setMobileOpen(false);

        open({
            source: "enquire_now",
            projectName: projectName ?? "Prestige Projects",
        });
    };

    return (
        <>
            {/* =====================================================
                DESKTOP
            ====================================================== */}
            <div className={cn("hidden items-center gap-3 md:flex", className)}>
                <a
                    href={site.phoneHref}
                    onClick={() => track("call_click")}
                    aria-label="Call now"
                    className={cn(
                        "inline-flex items-center justify-center gap-2 rounded-[3px] border transition-colors",
                        dark
                            ? "border-stone-50/40 text-stone-50 hover:border-stone-50"
                            : "border-ink-900/30 text-ink-900 hover:border-ink-900",
                        compact ? "h-11 w-11" : "h-11 px-4 text-sm",
                    )}
                >
                    <Phone size={16} />
                    {!compact && <span>Call</span>}
                </a>

                <a
                    href={site.whatsappHref}
                    onClick={() => track("whatsapp_click")}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp us"
                    className={cn(
                        "inline-flex items-center justify-center gap-2 rounded-[3px] border border-ink-900 bg-ink-900 duration-300 hover:border-bronze-600 hover:bg-bronze-600 text-stone-50",
                        compact ? "h-11 w-11" : "h-11 px-4 text-sm",
                    )}
                >
                    <FaWhatsapp size={16} />
                    {!compact && <span>WhatsApp</span>}
                </a>
            </div>

            {/* =====================================================
                MOBILE CONTACT BUTTON
            ====================================================== */}
            <div className={cn("md:hidden", className)}>
                <button
                    type="button"
                    onClick={() => setMobileOpen(true)}
                    aria-label="Open contact options"
                    className={cn(
                        "inline-flex h-10 items-center gap-2 rounded-full border px-4",
                        "text-[11px] font-medium uppercase tracking-[0.16em]",
                        "transition-all duration-300",
                        dark
                            ? "border-stone-50/50 bg-ink-900/20 text-stone-50 hover:bg-stone-50 hover:text-ink-900"
                            : "border-ink-900/20 bg-white text-ink-900 hover:bg-ink-900 hover:text-white",
                    )}
                >
                    <Phone size={14} strokeWidth={1.7} />
                    <span>Contact</span>
                </button>
            </div>

            {/* =====================================================
                MOBILE CONTACT SHEET
            ====================================================== */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 z-60 flex items-end bg-ink-900/50 backdrop-blur-[2px] animate-[contactBackdropIn_250ms_ease-out]"
                    onClick={() => setMobileOpen(false)}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-label="Contact options"
                        className="w-full rounded-t-2xl bg-stone-50 p-5 shadow-2xl animate-[contactSheetIn_350ms_cubic-bezier(.22,1,.36,1)]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="mb-5 flex items-start justify-between">
                            <div>
                                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-bronze-600">
                                    Get in touch
                                </p>

                                <h2 className="mt-1 font-display text-2xl text-ink-900">
                                    Contact us
                                </h2>
                            </div>

                            <button
                                type="button"
                                onClick={() => setMobileOpen(false)}
                                aria-label="Close contact options"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-200 text-ink-500 transition-all hover:border-ink-900 hover:bg-ink-900 hover:text-white"
                            >
                                <X size={17} strokeWidth={1.5} />
                            </button>
                        </div>

                        {/* Contact options */}
                        <div className="grid grid-cols-3 overflow-hidden border border-stone-200 bg-white">
                            {/* Call */}
                            <a
                                href={site.phoneHref}
                                onClick={() => {
                                    track("call_click");
                                    setMobileOpen(false);
                                }}
                                className="group flex flex-col items-center justify-center gap-3 border-r border-stone-200 py-6 text-ink-900 transition-colors hover:bg-stone-50"
                            >
                                <Phone
                                    size={22}
                                    strokeWidth={1.5}
                                    className="transition-transform duration-300 group-hover:-translate-y-0.5"
                                />

                                <span className="text-xs font-medium">
                                    Call
                                </span>
                            </a>

                            {/* WhatsApp */}
                            <a
                                href={site.whatsappHref}
                                onClick={() => {
                                    track("whatsapp_click");
                                    setMobileOpen(false);
                                }}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col items-center justify-center gap-3 border-r border-stone-200 py-6 text-ink-900 transition-colors hover:bg-stone-50"
                            >
                                <FaWhatsapp
                                    size={22}
                                    strokeWidth={1.5}
                                    className="transition-transform duration-300 group-hover:-translate-y-0.5"
                                />

                                <span className="text-xs font-medium">
                                    WhatsApp
                                </span>
                            </a>

                            {/* Enquire */}
                            <button
                                type="button"
                                onClick={handleEnquire}
                                className="group flex flex-col items-center justify-center gap-3 py-6 text-ink-900 transition-colors hover:bg-stone-50"
                            >
                                <Mail
                                    size={22}
                                    strokeWidth={1.5}
                                    className="transition-transform duration-300 group-hover:-translate-y-0.5"
                                />

                                <span className="text-xs font-medium">
                                    Enquire
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
