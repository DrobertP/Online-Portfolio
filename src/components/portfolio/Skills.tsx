const groups = [
  {
    title: "Design",
    items: ["UI / UX", "Brand Identity", "Typography", "Design System", "Motion", "Prototyping", "Information Architecture"],
  },
  {
    title: "Development",
    items: ["React", "Flutter", "Python", "PHP", "SQL", "Java"],
  },
  {
    title: "Tools",
    items: ["Typescale", "Figma", "Stitch", "Lovable", "Claude", "ChatGPT", "Deepseek"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="px-6 py-32">
      <div className="mx-auto max-w-[1100px]">
        <div className="reveal mb-16 flex flex-col items-center text-center">
          <span className="section-label">04 — Skills</span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Craft & toolkit
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title} className="reveal flex flex-col items-center text-center">
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-gradient-to-r from-transparent to-silver" />
                <h3 className="text-xs font-light tracking-[0.3em] uppercase text-foreground">
                  {g.title}
                </h3>
                <span className="h-px w-8 bg-gradient-to-r from-silver to-transparent" />
              </div>
              <ul className="mt-6 flex flex-wrap justify-center gap-2">
                {g.items.map((s) => (
                  <li key={s}>
                    <span className="inline-flex items-center rounded-full border border-border bg-surface px-4 py-2 text-xs font-light tracking-wide text-muted-foreground transition-all duration-300 hover:border-border-bright hover:text-foreground">
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
