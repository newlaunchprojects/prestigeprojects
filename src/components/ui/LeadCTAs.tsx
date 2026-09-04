"use client";

import { useLeadForm } from "@/components/ui/LeadFormProvider";
import { track, type AnalyticsEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

function useCTA(
    event: AnalyticsEvent,
    source: string,
    projectName: string,
    configName?: string,
) {
    const { open } = useLeadForm();

    return () => {
        track(event, {
            source,
            project: projectName,
            config: configName,
        });

        open({
            source,
            projectName,
            configName,
        });
    };
}

type ButtonProps = {
    projectName: string;
    className?: string;
};

function EditorialButton({
    children,
    variant = "default",
    className,
    onClick,
}: {
    children: React.ReactNode;
    variant?: "default" | "bronze" | "light";
    className?: string;
    onClick: () => void;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={cn(
                "group relative inline-flex items-center cursor-pointer justify-between gap-8",
                "border-b pb-3 pt-2",
                "text-[11px] font-medium uppercase tracking-[0.18em]",
                "transition-all duration-300",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze-500 focus-visible:ring-offset-4",

                variant === "default" &&
                    "border-ink-900 text-ink-900 hover:border-bronze-600 hover:text-bronze-600",

                variant === "bronze" &&
                    "border-white/50 text-white hover:border-bronze-600 hover:text-bronze-600",

                variant === "light" &&
                    "border-white/50 text-white hover:border-white hover:text-white",

                className,
            )}
        >
            <span>{children}</span>

            <span
                aria-hidden="true"
                className="text-base leading-none transition-transform duration-300 group-hover:translate-x-1"
            >
                →
            </span>
        </button>
    );
}

export function GetLatestPriceButton({ projectName, className }: ButtonProps) {
    const onClick = useCTA(
        "get_latest_price_click",
        "get_latest_price",
        projectName,
    );

    return (
        <EditorialButton
            variant="bronze"
            className={className}
            onClick={onClick}
        >
            Get Latest Price
        </EditorialButton>
    );
}

export function EnquireNowButton({ projectName, className }: ButtonProps) {
    const onClick = useCTA("enquire_now_click", "enquire_now", projectName);

    return (
        <EditorialButton className={className} onClick={onClick}>
            Enquire Now
        </EditorialButton>
    );
}

export function RequestPriceButton({
    projectName,
    configName,
    className,
}: {
    projectName: string;
    configName: string;
    className?: string;
}) {
    const onClick = useCTA(
        "request_price_click",
        "request_price",
        projectName,
        configName,
    );

    return (
        <EditorialButton
            variant="default"
            className={cn("w-full", className)}
            onClick={onClick}
        >
            Request Price
        </EditorialButton>
    );
}

export function BrochureButton({ projectName, className }: ButtonProps) {
    const onClick = useCTA("brochure_click", "brochure", projectName);

    return (
        <EditorialButton className={className} onClick={onClick}>
            Download Brochure
        </EditorialButton>
    );
}

export function SiteVisitButton({ projectName, className }: ButtonProps) {
    const onClick = useCTA("site_visit_click", "site_visit", projectName);

    return (
        <EditorialButton
            variant="bronze"
            className={className}
            onClick={onClick}
        >
            Schedule Site Visit
        </EditorialButton>
    );
}
