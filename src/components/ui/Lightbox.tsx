"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type LightboxImage = { src: string; alt: string };

/**
 * Accessible image lightbox/viewer. No download affordance — used for
 * gallery images, floor plans and master plan, which must be viewable
 * but not downloadable per spec.
 */
export function Lightbox({
    images,
    index,
    onClose,
    onNavigate,
}: {
    images: LightboxImage[];
    index: number | null;
    onClose: () => void;
    onNavigate: (nextIndex: number) => void;
}) {
    const [mounted, setMounted] = useState(false);
    const closeRef = useRef<HTMLButtonElement>(null);
    const isOpen = index !== null;

    // eslint-disable-next-line react-hooks/set-state-in-effect -- required to avoid SSR/client portal mismatch
    useEffect(() => setMounted(true), []);

    const go = useCallback(
        (delta: number) => {
            if (index === null) return;
            const next = (index + delta + images.length) % images.length;
            onNavigate(next);
        },
        [index, images.length, onNavigate],
    );

    useEffect(() => {
        if (!isOpen) return;
        closeRef.current?.focus();
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight") go(1);
            if (e.key === "ArrowLeft") go(-1);
        };
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [isOpen, onClose, go]);

    if (!mounted || !isOpen || index === null) return null;

    const current = images[index];

    return createPortal(
        <div
            role="dialog"
            aria-modal="true"
            aria-label={current.alt}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/95 p-4 select-none"
            onClick={onClose}
        >
            <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close viewer"
                className="absolute cursor-pointer right-4 top-4 z-10 rounded-full p-2 text-stone-50 hover:bg-stone-50/10 focus-visible:outline-stone-50"
            >
                <X size={24} />
            </button>

            {images.length > 1 && (
                <>
                    <button
                        type="button"
                        aria-label="Previous image"
                        onClick={(e) => {
                            e.stopPropagation();
                            go(-1);
                        }}
                        className="absolute cursor-pointer left-2 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 text-stone-50 hover:bg-stone-50/10 focus-visible:outline-stone-50 md:left-6"
                    >
                        <ChevronLeft size={28} />
                    </button>
                    <button
                        type="button"
                        aria-label="Next image"
                        onClick={(e) => {
                            e.stopPropagation();
                            go(1);
                        }}
                        className="absolute cursor-pointer right-2 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 text-stone-50 hover:bg-stone-50/10 focus-visible:outline-stone-50 md:right-6"
                    >
                        <ChevronRight size={28} />
                    </button>
                </>
            )}

            <div
                className="relative h-[80vh] w-full max-w-5xl"
                onClick={(e) => e.stopPropagation()}
                onContextMenu={(e) => e.preventDefault()}
            >
                <Image
                    src={current.src}
                    alt={current.alt}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    draggable={false}
                />
            </div>
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-stone-50/70">
                {current.alt} · {index + 1} / {images.length}
            </p>
        </div>,
        document.body,
    );
}
