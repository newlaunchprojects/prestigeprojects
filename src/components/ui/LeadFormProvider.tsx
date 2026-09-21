"use client";

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import { createPortal } from "react-dom";
import { ArrowRight, Check, X } from "lucide-react";
import { track } from "@/lib/analytics";
import Link from "next/link";

type LeadFormRequest = {
    source: string;
    projectName?: string;
    configName?: string;
};

type LeadFormContextValue = {
    open: (req: LeadFormRequest) => void;
};

type LeadFormProviderProps = {
    children: React.ReactNode;
    autoOpenProjectName?: string;
};

const LeadFormContext = createContext<LeadFormContextValue | null>(null);

export function useLeadForm() {
    const ctx = useContext(LeadFormContext);

    if (!ctx) {
        throw new Error("useLeadForm must be used within LeadFormProvider");
    }

    return ctx;
}

export function LeadFormProvider({
    children,
    autoOpenProjectName = "Indiabulls Projects",
}: LeadFormProviderProps) {
    const [request, setRequest] = useState<LeadFormRequest | null>(null);
    const [isClosing, setIsClosing] = useState(false);
    const [status, setStatus] = useState<"idle" | "submitted">("idle");
    const [startedTracked, setStartedTracked] = useState(false);
    const [mounted, setMounted] = useState(false);

    const firstFieldRef = useRef<HTMLInputElement>(null);
    const closeTimerRef = useRef<number | null>(null);

    /*
     * Client mount
     */
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    /*
     * Open form
     *
     * Any manual interaction with a CTA also marks the
     * automatic popup as already handled.
     */
    const open = useCallback((req: LeadFormRequest) => {
        if (closeTimerRef.current) {
            window.clearTimeout(closeTimerRef.current);
            closeTimerRef.current = null;
        }

        // Prevent the automatic popup from appearing later
        // after the visitor has already interacted with the form.
        try {
            localStorage.setItem("lead-form-auto-opened", "true");
        } catch {
            // Ignore storage errors.
        }

        setIsClosing(false);
        setStatus("idle");
        setStartedTracked(false);
        setRequest(req);
    }, []);

    /*
     * Close form with animation
     */
    const close = useCallback(() => {
        if (!request || isClosing) return;

        setIsClosing(true);

        closeTimerRef.current = window.setTimeout(() => {
            setRequest(null);
            setIsClosing(false);
            closeTimerRef.current = null;
        }, 350);
    }, [request, isClosing]);

    /*
     * Cleanup close timer
     */
    useEffect(() => {
        return () => {
            if (closeTimerRef.current) {
                window.clearTimeout(closeTimerRef.current);
            }
        };
    }, []);

    /*
     * Automatically open form after 5 seconds
     *
     * Only happens once per browser.
     */
    useEffect(() => {
        if (!mounted) return;

        let hasOpenedAutomatically = false;

        try {
            hasOpenedAutomatically =
                localStorage.getItem("lead-form-auto-opened") === "true";
        } catch {
            // If localStorage is unavailable, continue normally.
        }

        if (hasOpenedAutomatically) return;

        const timer = window.setTimeout(() => {
            // Don't interrupt hidden tabs.
            if (document.visibilityState !== "visible") {
                return;
            }

            try {
                localStorage.setItem("lead-form-auto-opened", "true");
            } catch {
                // Ignore storage errors.
            }

            setIsClosing(false);
            setStatus("idle");
            setStartedTracked(false);

            setRequest({
                source: "auto_open",
                projectName: autoOpenProjectName,
            });
        }, 5000);

        return () => {
            window.clearTimeout(timer);
        };
    }, [mounted, autoOpenProjectName]);

    /*
     * Focus first field after opening
     */
    useEffect(() => {
        if (!request) return;

        const timer = window.setTimeout(() => {
            firstFieldRef.current?.focus();
        }, 450);

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                close();
            }
        };

        document.addEventListener("keydown", onKey);

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            window.clearTimeout(timer);
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = previousOverflow;
        };
    }, [request, close]);

    /*
     * Submit
     */
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!request || isSubmitting) return;

        setIsSubmitting(true);
        setSubmitError(null);

        const form = e.currentTarget;
        const formData = new FormData(form);

        const payload = {
            name: String(formData.get("name") ?? "").trim(),
            phone: String(formData.get("phone") ?? "").trim(),
            email: String(formData.get("email") ?? "").trim(),
            projectName: request.projectName,
            configName: request.configName,
            source: request.source,
        };

        try {
            const response = await fetch("/api/leads", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(
                    result.error || "Unable to submit your request.",
                );
            }

            track("form_submit", {
                source: request.source,
                project: request.projectName,
                config: request.configName,
            });

            setStatus("submitted");
            form.reset();
        } catch (error) {
            console.error("Lead submission failed:", error);

            setSubmitError(
                "We couldn't submit your request. Please try again.",
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <LeadFormContext.Provider value={{ open }}>
            {children}

            {mounted &&
                request &&
                createPortal(
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="lead-form-title"
                        className={`
                            fixed inset-0 z-50
                            flex items-end justify-center
                            bg-ink-900/60
                            backdrop-blur-[3px]
                            sm:items-center

                            ${
                                isClosing
                                    ? "animate-[leadBackdropOut_350ms_ease-in_forwards]"
                                    : "animate-[leadBackdropIn_350ms_ease-out_forwards]"
                            }
                        `}
                        onClick={close}
                    >
                        <div
                            className={`
                                relative w-full overflow-hidden
                                bg-stone-50
                                shadow-2xl

                                sm:max-w-lg
                                sm:rounded-sm
                                md:max-w-2xl

                                ${
                                    isClosing
                                        ? "animate-[leadFormOut_350ms_cubic-bezier(.4,0,1,1)_forwards]"
                                        : "animate-[leadFormIn_450ms_cubic-bezier(.22,1,.36,1)_forwards]"
                                }
                            `}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Bronze top accent */}
                            <div className="h-1 w-full bg-bronze-600" />

                            <div className="grid md:grid-cols-[0.8fr_1.2fr]">
                                {/* =========================
                                    LEFT INTRO PANEL
                                ========================== */}
                                <div className="hidden bg-ink-900 p-8 text-stone-50 md:flex md:flex-col md:justify-between lg:p-10">
                                    <div>
                                        <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-bronze-400">
                                            Private Enquiry
                                        </p>

                                        <h2 className="mt-5 max-w-xs font-display text-3xl leading-tight lg:text-4xl">
                                            Let&apos;s find the right residence
                                            for you.
                                        </h2>
                                    </div>

                                    <div>
                                        <div className="mb-5 h-px w-12 bg-bronze-500" />

                                        <p className="max-w-xs text-sm leading-6 text-stone-300">
                                            Share your details and our team will
                                            help you with availability, pricing
                                            and site visits.
                                        </p>

                                        <p className="mt-8 text-xs uppercase tracking-[0.16em] text-stone-500">
                                            Confidential · No obligation
                                        </p>
                                    </div>
                                </div>

                                {/* =========================
                                    RIGHT FORM PANEL
                                ========================== */}
                                <div className="p-6 sm:p-8 lg:p-10">
                                    {/* Header */}
                                    <div className="mb-7 flex items-start justify-between">
                                        <div>
                                            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-bronze-600 md:hidden">
                                                Private Enquiry
                                            </p>

                                            <h2
                                                id="lead-form-title"
                                                className="mt-1 font-display text-2xl text-ink-900"
                                            >
                                                {status === "submitted"
                                                    ? "Thank you"
                                                    : "Get in touch"}
                                            </h2>

                                            {status !== "submitted" && (
                                                <p className="mt-1.5 text-sm text-ink-500">
                                                    {request.projectName ??
                                                        "Indiabulls Projects"}

                                                    {request.configName
                                                        ? ` · ${request.configName}`
                                                        : ""}
                                                </p>
                                            )}
                                        </div>

                                        {/* Close */}
                                        <button
                                            type="button"
                                            onClick={close}
                                            aria-label="Close form"
                                            className="
                                                group flex h-9 w-9
                                                items-center justify-center
                                                rounded-full cursor-pointer
                                                border border-stone-200
                                                text-ink-500
                                                transition-all duration-200
                                                hover:border-ink-900
                                                hover:bg-ink-900
                                                hover:text-white
                                            "
                                        >
                                            <X
                                                size={17}
                                                strokeWidth={1.5}
                                                className="
                                                    transition-transform
                                                    duration-200
                                                    group-hover:rotate-90
                                                "
                                            />
                                        </button>
                                    </div>

                                    {/* =========================
                                        SUCCESS
                                    ========================== */}
                                    {status === "submitted" ? (
                                        <div className="animate-[leadContentIn_400ms_ease-out_forwards] py-8 text-center">
                                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-bronze-200 text-bronze-600">
                                                <Check
                                                    size={24}
                                                    strokeWidth={1.5}
                                                />
                                            </div>

                                            <h3 className="mt-6 font-display text-2xl text-ink-900">
                                                Request received
                                            </h3>

                                            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-ink-500">
                                                Thank you for your interest. Our
                                                team will get back to you
                                                shortly.
                                            </p>

                                            <button
                                                type="button"
                                                onClick={close}
                                                className="
                                                    mt-8
                                                    inline-flex
                                                    items-center
                                                    gap-2
                                                    border-b
                                                    border-ink-900
                                                    pb-2
                                                    text-[11px]
                                                    font-medium
                                                    uppercase
                                                    tracking-[0.18em]
                                                    text-ink-900 cursor-pointer
                                                    transition-colors
                                                    hover:border-bronze-600
                                                    hover:text-bronze-600
                                                "
                                            >
                                                Close
                                                <ArrowRight size={14} />
                                            </button>
                                        </div>
                                    ) : (
                                        /* =========================
                                           FORM
                                        ========================== */
                                        <form
                                            onSubmit={handleSubmit}
                                            className="space-y-5"
                                        >
                                            {/* Name */}
                                            <div>
                                                <label
                                                    htmlFor="lead-name"
                                                    className="
                                                        mb-2 block
                                                        text-[11px]
                                                        font-medium
                                                        uppercase
                                                        tracking-[0.14em]
                                                        text-ink-600
                                                    "
                                                >
                                                    Name{" "}
                                                    <span className="text-bronze-600">
                                                        *
                                                    </span>
                                                </label>

                                                <input
                                                    ref={firstFieldRef}
                                                    id="lead-name"
                                                    name="name"
                                                    required
                                                    autoComplete="name"
                                                    onFocus={() => {
                                                        if (!startedTracked) {
                                                            track(
                                                                "form_start",
                                                                {
                                                                    source: request.source,
                                                                },
                                                            );

                                                            setStartedTracked(
                                                                true,
                                                            );
                                                        }
                                                    }}
                                                    className="
                                                        w-full
                                                        border-0
                                                        border-b
                                                        border-stone-300
                                                        bg-transparent
                                                        px-0
                                                        py-3
                                                        text-ink-900
                                                        outline-none
                                                        transition-colors
                                                        placeholder:text-stone-400
                                                        focus:border-bronze-600
                                                    "
                                                    placeholder="Your full name"
                                                />
                                            </div>

                                            {/* Phone */}
                                            <div>
                                                <label
                                                    htmlFor="lead-phone"
                                                    className="
                                                        mb-2 block
                                                        text-[11px]
                                                        font-medium
                                                        uppercase
                                                        tracking-[0.14em]
                                                        text-ink-600
                                                    "
                                                >
                                                    Phone{" "}
                                                    <span className="text-bronze-600">
                                                        *
                                                    </span>
                                                </label>

                                                <input
                                                    id="lead-phone"
                                                    name="phone"
                                                    type="tel"
                                                    required
                                                    autoComplete="tel"
                                                    className="
                                                        w-full
                                                        border-0
                                                        border-b
                                                        border-stone-300
                                                        bg-transparent
                                                        px-0
                                                        py-3
                                                        text-ink-900
                                                        outline-none
                                                        transition-colors
                                                        placeholder:text-stone-400
                                                        focus:border-bronze-600
                                                    "
                                                    placeholder="+91 XXXXX XXXXX"
                                                />
                                            </div>

                                            {/* Email */}
                                            <div>
                                                <label
                                                    htmlFor="lead-email"
                                                    className="
                                                        mb-2 block
                                                        text-[11px]
                                                        font-medium
                                                        uppercase
                                                        tracking-[0.14em]
                                                        text-ink-600
                                                    "
                                                >
                                                    Email{" "}
                                                    <span className="font-normal normal-case tracking-normal text-ink-400">
                                                        (optional)
                                                    </span>
                                                </label>

                                                <input
                                                    id="lead-email"
                                                    name="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    className="
                                                        w-full
                                                        border-0
                                                        border-b
                                                        border-stone-300
                                                        bg-transparent
                                                        px-0
                                                        py-3
                                                        text-ink-900
                                                        outline-none
                                                        transition-colors
                                                        placeholder:text-stone-400
                                                        focus:border-bronze-600
                                                    "
                                                    placeholder="you@example.com"
                                                />
                                            </div>

                                            {/* Privacy */}
                                            <p className="pt-1 text-[11px] leading-5 text-ink-400">
                                                By submitting, you agree to be
                                                contacted by phone, WhatsApp or
                                                email about this project. See
                                                our{" "}
                                                <Link
                                                    href="/privacy"
                                                    className="
                                                        text-ink-600
                                                        underline
                                                        underline-offset-2
                                                        transition-colors
                                                        hover:text-bronze-600
                                                    "
                                                >
                                                    Privacy Policy
                                                </Link>
                                                .
                                            </p>

                                            {/* Submit */}
                                            {submitError && (
                                                <p
                                                    role="alert"
                                                    className="text-xs leading-5 text-red-600"
                                                >
                                                    {submitError}
                                                </p>
                                            )}
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="
        group mt-2
        flex w-full cursor-pointer
        items-center justify-between
        border border-ink-900
        bg-ink-900
        px-5 py-4
        text-[11px]
        font-medium
        uppercase
        tracking-[0.18em]
        text-white
        transition-all
        duration-300
        hover:border-bronze-600
        hover:bg-bronze-600
        disabled:cursor-not-allowed
        disabled:opacity-60
    "
                                            >
                                                <span>
                                                    {isSubmitting
                                                        ? "Sending..."
                                                        : "Submit Enquiry"}
                                                </span>

                                                <ArrowRight
                                                    size={16}
                                                    className={
                                                        isSubmitting
                                                            ? "animate-pulse"
                                                            : "transition-transform duration-300 group-hover:translate-x-1"
                                                    }
                                                />
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>,
                    document.body,
                )}
        </LeadFormContext.Provider>
    );
}
