const experiences = [
  {
    title: "AI Prompt Engineering",
    description:
      "Crafting precise, structured prompts to direct AI models for design, content, and product workflows.",
  },
  {
    title: "UI / UX Design",
    description:
      "Designing intuitive interfaces and user journeys grounded in research, hierarchy, and accessibility.",
  },
  {
    title: "Mockups & Wireframes",
    description:
      "Building low and high-fidelity mockups and wireframes in Figma to validate ideas before development.",
  },
  {
    title: "Interactive Prototyping",
    description:
      "Producing clickable Figma prototypes with realistic flows, transitions, and micro-interactions.",
  },
  {
    title: "Design Systems",
    description:
      "Defining tokens, components, and patterns that keep products consistent and scalable.",
  },
  {
    title: "Visual & Brand Direction",
    description:
      "Shaping typography, color, and layout systems that give products a distinct, considered identity.",
  },
];

export function Experiences() {
  return (
    <section id="experiences" className="px-6 py-32">
      <div className="mx-auto max-w-[1100px]">
        <div className="reveal mb-16 flex flex-col items-center text-center">
          <span className="section-label">03 — Experiences</span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            What I do
          </h2>
          <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-muted-foreground">
            A blend of design craft and AI-assisted workflows — from first sketch
            to polished, production-ready interfaces.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((x, i) => (
            <article
              key={x.title}
              className="reveal group relative flex flex-col rounded-lg border border-border bg-surface p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:border-border-bright"
              style={{ transitionDelay: `${(i % 3) * 60}ms` }}
            >
              <div className="mx-auto mb-5 flex h-10 w-10 items-center justify-center rounded-full metallic-border">
                <span className="metallic-text text-xs font-light tracking-widest">
                  0{i + 1}
                </span>
              </div>
              <h3 className="text-lg font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-chrome">
                {x.title}
              </h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                {x.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
