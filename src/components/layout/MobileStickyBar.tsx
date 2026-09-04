"use client";

import { Phone, Mail } from "lucide-react";
import { site } from "@/data/site";
import { track } from "@/lib/analytics";
import { useLeadForm } from "@/components/ui/LeadFormProvider";
import { FaWhatsapp } from "react-icons/fa6";

export function MobileStickyBar({ projectName }: { projectName: string }) {
    const { open } = useLeadForm();

    return (
        <div
            className="fixed inset-x-0 bottom-0 z-30 flex border-t border-stone-200 bg-stone-50/95 backdrop-blur lg:hidden"
            style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
            <a
                href={site.phoneHref}
                onClick={() => track("call_click")}
                className="flex flex-1 flex-col items-center gap-1 py-3 text-xs text-ink-900"
            >
                <Phone size={18} />
                Call
            </a>
            <a
                href={site.whatsappHref}
                onClick={() => track("whatsapp_click")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 flex-col items-center gap-1 border-x border-stone-200 py-3 text-xs text-ink-900"
            >
                <FaWhatsapp size={18} />
                WhatsApp
            </a>
            <button
                type="button"
                onClick={() => {
                    track("enquire_now_click", { source: "sticky_bar" });
                    open({ source: "sticky_bar_enquire", projectName });
                }}
                className="flex flex-1 flex-col items-center gap-1 py-3 text-xs text-ink-900"
            >
                <Mail size={18} />
                Enquire
            </button>
        </div>
    );
}
