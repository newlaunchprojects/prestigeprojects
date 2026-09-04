import Image from "next/image";

export function HeroBackground({ src, alt }: { src: string; alt: string }) {
    return (
        <div className="absolute inset-0 -z-10">
            <Image
                src={src}
                alt={alt}
                fill
                priority
                sizes="100vw"
                className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-b from-ink-900/50 via-ink-900/20 to-ink-900/70" />
        </div>
    );
}
