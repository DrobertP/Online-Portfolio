const projects = [
  {
    image: "/public/papayalogo.png",
    title: "PapayaFresh",
    description:
      "Machine Learning application built for predicting the shelf life of papayas based on various factors such as ripeness, storage conditions, and handling practices.",
    tags: ["Machine Learning", "Data Science", "Flutter"],
  },
  {
    image: "/public/student.jpg",
    title: "Basic Student Profile System",
    description:
      "A student profile system built using Java, allowing students to create and manage their profiles, including personal information, academic records, and extracurricular activities.",
    tags: ["Java", "CRUD", "Profiling", "MySQL"],
  },
  {
    image: "/public/food.jpg",
    title: "Atlas - Food delivery reimagined",
    description:
      "Online Restaurant Food Delivery System built using PHP and MySQL, allowing users to browse restaurant menus, place orders, and manage deliveries efficiently.",
    tags: ["E-commerce", "Motion", "PHP", "MySQL"],
  },
  {
    image: "/public/facerecog.jpg",
    title: "Face Recognition Attendance System",
    description:
      "A facial recognition attendance system built using Python and OpenCV, enabling automated attendance tracking by recognizing and verifying individuals based on their facial features.",
    tags: ["Python", "Computer Vision", "MySQL"],
  },
  {
    image: "/public/pwd.jpg",
    title: "PWD Tulong",
    description:
      "An application designed to assist Persons with Disabilities (PWDs) in accessing various services and resources, providing a user-friendly interface and features tailored to their needs.",
    tags: ["Accessibility", "Mobile App", "Flutter"],
  },
  {
    image: "/public/wela.jpg",
    title: "WELA - Livro Web/Mobile Applications",
    description:
      "Designed various web and mobile applications in Figma for WELA, such as CHURN School Manager, SPRINT Cycle, Design System, and more. These applications were built to streamline operations, enhance user experience, and provide efficient solutions for the company's needs.",
    tags: ["Branding", "E-commerce"],
  },
];


export function Projects() {
  return (
    <section id="work" className="px-6 py-32">
      <div className="mx-auto max-w-[1100px]">
        <div className="reveal mb-16 flex flex-col items-center text-center">
          <span className="section-label">02 — Work</span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Selected Work
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="reveal group relative flex flex-col overflow-hidden rounded-lg border border-border bg-surface transition-all duration-500 hover:-translate-y-1 hover:border-border-bright"
              style={{ transitionDelay: `${(i % 3) * 60}ms` }}
            >
              {/* Image placeholder with shimmer overlay on hover */}
              <div className="relative aspect-[4/3] w-full h-full overflow-hidden bg-surface-elevated">
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-chrome/15 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
                  aria-hidden
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/0 transition-all duration-500 group-hover:ring-white/10" />
              </div>


              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-light tracking-tight text-foreground transition-colors duration-300 group-hover:text-chrome">
                  {/* [PLACEHOLDER] project title */}
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm font-light leading-relaxed text-muted-foreground">
                  {/* [PLACEHOLDER] project description */}
                  {p.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-3 py-1 text-[10px] tracking-[0.15em] uppercase text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
