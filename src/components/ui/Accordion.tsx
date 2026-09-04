"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Accordion({
    items,
    onOpen,
}: {
    items: { question: string; answer: string }[];
    onOpen?: (question: string) => void;
}) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="divide-y divide-stone-200 border-t border-b border-stone-200">
            {items.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                    <div key={item.question}>
                        <button
                            type="button"
                            className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left"
                            aria-expanded={isOpen}
                            onClick={() => {
                                const next = isOpen ? null : i;
                                setOpenIndex(next);
                                if (next !== null) onOpen?.(item.question);
                            }}
                        >
                            <span className="font-medium text-ink-900">
                                {item.question}
                            </span>
                            <ChevronDown
                                size={18}
                                className={cn(
                                    "shrink-0 text-ink-500 transition-transform duration-200",
                                    isOpen && "rotate-180",
                                )}
                            />
                        </button>
                        <div
                            className={cn(
                                "grid overflow-hidden transition-all duration-200 ease-out",
                                isOpen
                                    ? "grid-rows-[1fr] pb-5"
                                    : "grid-rows-[0fr]",
                            )}
                        >
                            <div className="min-h-0 overflow-hidden">
                                <p className="max-w-[70ch] text-ink-500 leading-relaxed">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
