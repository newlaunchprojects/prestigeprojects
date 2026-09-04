"use client";

import { useRef, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { track } from "@/lib/analytics";

type LeadFormProps = {
    projectName: string;
    source: string;
    configName?: string;
    className?: string;
};

export function LeadForm({
    projectName,
    source,
    configName,
    className = "",
}: LeadFormProps) {
    const firstFieldRef = useRef<HTMLInputElement>(null);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [startedTracked, setStartedTracked] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isSubmitting) return;

        setIsSubmitting(true);
        setSubmitError(null);

        const form = e.currentTarget;
        const formData = new FormData(form);

        const payload = {
            name: String(formData.get("name") ?? "").trim(),
            phone: String(formData.get("phone") ?? "").trim(),
            email: String(formData.get("email") ?? "").trim(),
            projectName,
            configName,
            source,
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
                source,
                project: projectName,
                config: configName,
            });

            setSubmitted(true);
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

    if (submitted) {
        return (
            <div className={`py-8 text-center ${className}`}>
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-bronze-200 text-bronze-600">
                    <Check size={24} strokeWidth={1.5} />
                </div>

                <h3 className="mt-6 font-display text-2xl text-ink-900">
                    Request received
                </h3>

                <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-ink-500">
                    Thank you for your interest. Our team will get back to you
                    shortly.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className={`space-y-5 ${className}`}>
            {/* Name */}
            <div>
                <label
                    htmlFor={`lead-name-${source}`}
                    className="mb-2 block text-[11px] font-medium uppercase tracking-[0.14em] text-ink-600"
                >
                    Name <span className="text-bronze-600">*</span>
                </label>

                <input
                    ref={firstFieldRef}
                    id={`lead-name-${source}`}
                    name="name"
                    required
                    autoComplete="name"
                    onFocus={() => {
                        if (!startedTracked) {
                            track("form_start", {
                                source,
                            });

                            setStartedTracked(true);
                        }
                    }}
                    placeholder="Your full name"
                    className="w-full border-0 border-b border-stone-300 bg-transparent px-0 py-3 text-ink-900 outline-none transition-colors placeholder:text-stone-400 focus:border-bronze-600"
                />
            </div>

            {/* Phone */}
            <div>
                <label
                    htmlFor={`lead-phone-${source}`}
                    className="mb-2 block text-[11px] font-medium uppercase tracking-[0.14em] text-ink-600"
                >
                    Phone <span className="text-bronze-600">*</span>
                </label>

                <input
                    id={`lead-phone-${source}`}
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full border-0 border-b border-stone-300 bg-transparent px-0 py-3 text-ink-900 outline-none transition-colors placeholder:text-stone-400 focus:border-bronze-600"
                />
            </div>

            {/* Email */}
            <div>
                <label
                    htmlFor={`lead-email-${source}`}
                    className="mb-2 block text-[11px] font-medium uppercase tracking-[0.14em] text-ink-600"
                >
                    Email{" "}
                    <span className="font-normal normal-case tracking-normal text-ink-400">
                        (optional)
                    </span>
                </label>

                <input
                    id={`lead-email-${source}`}
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="w-full border-0 border-b border-stone-300 bg-transparent px-0 py-3 text-ink-900 outline-none transition-colors placeholder:text-stone-400 focus:border-bronze-600"
                />
            </div>

            {/* Privacy */}
            <p className="pt-1 text-[11px] leading-5 text-ink-400">
                By submitting, you agree to be contacted by phone, WhatsApp or
                email about this project. See our{" "}
                <a
                    href="/privacy"
                    className="text-ink-600 underline underline-offset-2 transition-colors hover:text-bronze-600"
                >
                    Privacy Policy
                </a>
                .
            </p>

            {/* Error */}
            {submitError && (
                <p role="alert" className="text-xs leading-5 text-red-600">
                    {submitError}
                </p>
            )}

            {/* Submit */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="group mt-2 flex w-full cursor-pointer items-center justify-between border border-ink-900 bg-ink-900 px-5 py-4 text-[11px] font-medium uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-bronze-600 hover:bg-bronze-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
                <span>{isSubmitting ? "Sending..." : "Submit Enquiry"}</span>

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
    );
}
