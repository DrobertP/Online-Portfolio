const stats = [
  { value: "10+", label: "Tools" },
  { value: "4+", label: "Years of Exploration" },
  { value: "100%", label: "Curiosity" },
];

export function About() {
  return (
    <section id="about" className="px-6 py-32">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center text-center">
        <div className="reveal mb-16">
          <span className="section-label">01 — About</span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            A Quiet Obesssion <span className="metallic-text"> <br/> With the Details.</span>
          </h2>
        </div>

        <div className="flex w-full flex-col items-center gap-12">
          {/* Photo placeholder */}
          <div className="reveal w-full max-w-[340px]">
            <div className="metallic-border-bright aspect-square w-full overflow-hidden rounded-full p-1">
              <img
              src="/dro.jpg"
              alt="Drobert Alsid S. Palces"
              className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="reveal flex max-w-[680px] flex-col items-center text-center">
            <p className="text-lg font-light leading-relaxed text-muted-foreground sm:text-xl">
              {/* [PLACEHOLDER] bio */}
              I'm a multidisciplinary designer and developer crafting refined digital
              experiences at the intersection of art and engineering. With nearly a
              couple years of practice, I help brands articulate their identity through
              minimal interfaces, considered typography, and motion that feels
              inevitable.
            </p>
            <p className="mt-6 text-base font-light leading-relaxed text-muted-foreground/80">
              {/* [PLACEHOLDER] secondary bio */}
              Currently based in the Philippines, working with a company related to digital design and founders nationwide.
              Always interested in the new, the strange, and the beautifully made.
            </p>
          </div>

          <div className="reveal mt-4 grid w-full max-w-[680px] grid-cols-3 gap-3 sm:gap-5">
            {stats.map((s) => (
              <div
                key={s.label}
                className="metallic-border rounded-lg p-4 text-center transition-all duration-500 hover:metallic-border-bright sm:p-6"
              >
                <div className="metallic-text text-2xl font-light sm:text-3xl">
                  {s.value}
                </div>
                <div className="mt-2 text-[10px] tracking-[0.25em] uppercase text-muted-foreground sm:text-xs">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
