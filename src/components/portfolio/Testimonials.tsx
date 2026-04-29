const testimonials = [
  {
    initials: "BO",
    name: "Business Owner",
    quote:
      "Delivered exactly what we needed — a fully working system, not just a design. Everything was functional, clean, and easy to use.",
  },
  {
    initials: "SF",
    name: "Startup Founder",
    quote:
      "I had an idea for a business website, and it was turned into a real, working product. The layout, flow, and responsiveness were all on point.",
  },
  {
    initials: "CO",
    name: "Cafe Owner",
    quote:
      "Smooth from start to finish. Communicates clearly, delivers fast, and focuses on real results. The system saved a lot of manual work.",
  },
  {
    initials: "BC",
    name: "Small Business Client",
    quote:
      "Different from most developers — focused on building functional systems, not just visuals. The project was ready to use immediately.",
  },
  {
    initials: "PP",
    name: "Project Partner",
    quote:
      "If you need someone who can turn ideas into real systems quickly, this is the right person. AI-assisted workflow without sacrificing quality.",
  },
];

function Card({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <div className="flex w-[340px] shrink-0 flex-col rounded-lg border border-border bg-surface p-6">
      <div className="mb-4 flex items-center gap-3">
        <div className="metallic-border flex h-10 w-10 items-center justify-center rounded-full">
          <span className="metallic-text text-xs font-light tracking-widest">{t.initials}</span>
        </div>
        <div className="text-sm font-light text-foreground">{t.name}</div>
      </div>
      <p className="text-sm font-light leading-relaxed text-muted-foreground">"{t.quote}"</p>
    </div>
  );
}

export function Testimonials() {
  const rowA = [...testimonials, ...testimonials];
  const rowB = [...testimonials.slice().reverse(), ...testimonials.slice().reverse()];

  return (
    <section id="testimonials" className="overflow-hidden px-0 py-32">
      <div className="mx-auto mb-16 max-w-[1100px] px-6 text-center">
        <div className="reveal">
          <span className="section-label">05 — Testimonials</span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            What Clients Say
          </h2>
        </div>
      </div>

      <div className="reveal marquee-mask space-y-6">
        <div className="flex w-max gap-6 animate-marquee">
          {rowA.map((t, i) => (
            <Card key={`a-${i}`} t={t} />
          ))}
        </div>
        <div className="flex w-max gap-6 animate-marquee-reverse">
          {rowB.map((t, i) => (
            <Card key={`b-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
