import type { Project } from "@/data/projects";

export function QuickFacts({ project }: { project: Project }) {
  const facts = project.facts.filter((f) => f.value && f.value.trim().length > 0);
  if (facts.length === 0) return null;

  return (
    <section className="border-b border-stone-200 bg-stone-100/60">
      <div className="container-page grid grid-cols-2 gap-x-6 gap-y-6 py-10 md:grid-cols-3 lg:grid-cols-6">
        {facts.map((fact) => (
          <div key={fact.label}>
            <p className="text-xs tracking-wide text-ink-500">{fact.label}</p>
            <p className="mt-1 font-display text-lg text-ink-900">{fact.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
