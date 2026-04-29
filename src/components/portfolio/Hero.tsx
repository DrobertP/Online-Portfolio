export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16"
    >
      <div className="pointer-events-none absolute inset-0 purple-haze" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, transparent 55%, var(--color-background) 100%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto flex w-full max-w-[1100px] flex-col items-center text-center">
        

        <h1 className="reveal text-[clamp(3rem,12vw,9rem)] font-bold leading-[0.95] tracking-tight">
          <span className="metallic-text block">
            Drobert Alsid S. Palces
          </span>
        </h1>

        <div className="reveal mt-8 flex items-center gap-2 text-sm font-light tracking-[0.2em] text-muted-foreground sm:text-base">
          <span className="uppercase">
            Designer · UI/UX Specialist · Creator
          </span>
        </div>

        <div className="reveal mt-14 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#work"
            className="purple-metal-fill group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md px-8 text-sm font-light tracking-[0.15em] uppercase text-white transition-all duration-500 hover:-translate-y-0.5"
          >
            <span className="relative z-10">View My Work</span>
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-md border border-border px-8 text-sm font-light tracking-[0.15em] uppercase text-muted-foreground transition-all duration-300 hover:border-border-bright hover:text-foreground"
          >
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
}
