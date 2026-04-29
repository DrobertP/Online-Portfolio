const certifications = [
    {
      title: "Google IT Support",
      issuer: "Google · Jan 2024",
      description: "IT support foundations: networking, security, and troubleshooting.",
      initials: "G",
    },
    {
      title: "Meta Front-End Developer",
      issuer: "Meta · Mar 2024",
      description: "React, responsive design, and modern front-end practices.",
      initials: "M",
    },
    {
      title: "IBM Full Stack Developer",
      issuer: "IBM · Jun 2024",
      description: "Full stack development with cloud-native tools.",
      initials: "I",
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon · Sep 2024",
      description: "AWS cloud concepts, services, and architecture.",
      initials: "A",
    },
  ];
  
  const timeline: { year: string; items: { title: string; description: string }[] }[] = [
    {
      year: "2026",
      items: [
        {
          title: "Enterprise Systems Deployment",
          description: "Built POS, management platforms, and business websites.",
        },
      ],
    },
    {
      year: "2025",
      items: [
        {
          title: "AI-Assisted Development",
          description: "Integrated AI tools to improve workflow and efficiency.",
        },
        {
          title: "Capstone Project",
          description: "Designed and developed a complete system.",
        },
      ],
    },
    {
      year: "2024",
      items: [
        {
          title: "Facial Recognition Attendance",
          description: "Automated attendance system using Python.",
        },
        {
          title: "Car Rental System",
          description: "Full CRUD system for rentals and bookings using PHP.",
        },
      ],
    },
    {
      year: "2023",
      items: [
        {
          title: "Government Site UI/UX",
          description: "Redesigned government website interface.",
        },
        {
          title: "Water Billing System",
          description: "Java-based CRUD system for utilities.",
        },
      ],
    },
    {
      year: "2022",
      items: [
        {
          title: "Started BSIT",
          description: "Began Information Technology studies.",
        },
        {
          title: "First Hello World",
          description: "Wrote first program and learned coding basics.",
        },
        {
          title: "Grading System",
          description: "Java-based student grading application.",
        },
      ],
    },
  ];
  
  export function Journey() {
    return (
      <section id="journey" className="px-6 py-32">
        <div className="mx-auto max-w-[1100px]">
          <div className="reveal mb-16 flex flex-col items-center text-center">
            <span className="section-label">03 — Credentials</span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Credentials & Journey
            </h2>
            <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-muted-foreground">
              Certifications, projects, and milestones that reflect my growth as a developer.
            </p>
          </div>
  
          {/* Certifications */}
          <div className="reveal mb-20">
            <h3 className="mb-6 text-center text-xs font-light tracking-[0.3em] uppercase text-muted-foreground">
              Certifications
            </h3>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {certifications.map((c) => (
                <article
                  key={c.title}
                  className="group flex flex-col rounded-lg border border-border bg-surface p-5 transition-all duration-500 hover:-translate-y-1 hover:border-border-bright"
                >
                  <div className="metallic-border mb-4 flex h-12 w-12 items-center justify-center rounded-md">
                    <span className="metallic-text text-base font-light">{c.initials}</span>
                  </div>
                  <h4 className="text-sm font-bold tracking-tight text-foreground transition-colors group-hover:text-chrome">
                    {c.title}
                  </h4>
                  <p className="mt-1 text-[11px] tracking-wide text-muted-foreground">
                    {c.issuer}
                  </p>
                  <p className="mt-3 text-xs font-light leading-relaxed text-muted-foreground/80">
                    {c.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
  
          {/* Timeline */}
          <div className="reveal">
            <h3 className="mb-10 text-center text-xs font-light tracking-[0.3em] uppercase text-muted-foreground">
              My Journey
            </h3>
            <div className="relative mx-auto max-w-[760px]">
              <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border-bright to-transparent sm:left-1/2 sm:-translate-x-1/2" />
              <ol className="space-y-12">
                {timeline.map((t) => (
                  <li key={t.year} className="relative">
                    <div className="mb-4 flex items-center gap-4 sm:justify-center">
                      <span className="metallic-border relative z-10 inline-flex h-7 items-center rounded-full bg-background px-4 text-[11px] tracking-[0.25em] uppercase">
                        <span className="metallic-text font-light">{t.year}</span>
                      </span>
                    </div>
                    <div className="ml-10 space-y-4 sm:ml-0 sm:grid sm:grid-cols-1 sm:gap-4 sm:space-y-0">
                      {t.items.map((it) => (
                        <div
                          key={it.title}
                          className="rounded-lg border border-border bg-surface p-5 transition-all duration-500 hover:border-border-bright sm:mx-auto sm:max-w-[460px]"
                        >
                          <h4 className="text-sm font-bold tracking-tight text-foreground">
                            {it.title}
                          </h4>
                          <p className="mt-2 text-xs font-light leading-relaxed text-muted-foreground">
                            {it.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    );
  }
  