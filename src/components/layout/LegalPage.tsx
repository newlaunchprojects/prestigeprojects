export function LegalPage({
    title,
    updated,
    children,
}: {
    title: string;
    updated: string;
    children: React.ReactNode;
}) {
    return (
        <main className="container-page text-justify max-w-3xl py-20 md:py-28">
            <h1 className="font-display text-4xl text-ink-900">{title}</h1>
            <p className="mt-3 text-sm text-ink-500">Last updated: {updated}</p>
            <div className="prose-legal mt-10 space-y-6 leading-relaxed text-ink-700 [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:font-display [&_h2]:text-xl [&_h2]:text-ink-900">
                {children}
            </div>
        </main>
    );
}
