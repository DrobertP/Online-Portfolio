import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-CxCA-dFW.js";
import { u as useTheme } from "./router-BZoRQ1Pz.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$1 = [
  [
    "path",
    {
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
      key: "kfwtm"
    }
  ]
];
const Moon = createLucideIcon("moon", __iconNode$1);
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
];
const Sun = createLucideIcon("sun", __iconNode);
const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experiences", label: "Experiences" },
  { href: "#skills", label: "Skills" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const { theme, toggle } = useTheme();
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "border-b border-border/60 bg-background/75 backdrop-blur-xl" : "border-b border-transparent bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "mx-auto flex h-16 max-w-[1100px] items-center justify-between px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#top", className: "group flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: theme === "dark" ? "/light.png" : "/dark.png",
              alt: "logo",
              className: "h-8 w-auto"
            },
            theme
          ) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden items-center gap-10 md:flex", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: l.href,
              className: "relative text-sm font-light tracking-wide text-muted-foreground transition-colors duration-300 hover:text-foreground",
              children: [
                l.label,
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-transparent via-chrome to-transparent transition-all duration-500 group-hover:w-full" })
              ]
            }
          ) }, l.href)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: toggle,
                "aria-label": theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
                className: "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-surface-elevated/60 text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-border-bright hover:text-accent",
                children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                "aria-label": "Menu",
                onClick: () => setOpen((v) => !v),
                className: "flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `h-px w-5 bg-foreground transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-px w-5 bg-foreground transition-opacity ${open ? "opacity-0" : ""}` }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `h-px w-5 bg-foreground transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`
                    }
                  )
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl transition-[max-height] duration-500 md:hidden ${open ? "max-h-80" : "max-h-0"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col px-6 py-4", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: l.href,
                onClick: () => setOpen(false),
                className: "block py-3 text-sm font-light tracking-wide text-muted-foreground transition-colors hover:text-foreground",
                children: l.label
              }
            ) }, l.href)) })
          }
        )
      ]
    }
  );
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "top",
      className: "relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 purple-haze", "aria-hidden": true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "pointer-events-none absolute inset-0 opacity-70",
            style: {
              background: "radial-gradient(ellipse at center, transparent 0%, transparent 55%, var(--color-background) 100%)"
            },
            "aria-hidden": true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto flex w-full max-w-[1100px] flex-col items-center text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "reveal text-[clamp(3rem,12vw,9rem)] font-bold leading-[0.95] tracking-tight", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "metallic-text block", children: "Drobert Alsid S. Palces" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal mt-8 flex items-center gap-2 text-sm font-light tracking-[0.2em] text-muted-foreground sm:text-base", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "uppercase", children: "Designer · UI/UX Specialist · Creator" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal mt-14 flex flex-col items-center gap-4 sm:flex-row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "#work",
                className: "purple-metal-fill group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md px-8 text-sm font-light tracking-[0.15em] uppercase text-white transition-all duration-500 hover:-translate-y-0.5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children: "View My Work" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#contact",
                className: "inline-flex h-12 items-center justify-center rounded-md border border-border px-8 text-sm font-light tracking-[0.15em] uppercase text-muted-foreground transition-all duration-300 hover:border-border-bright hover:text-foreground",
                children: "Contact Me"
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const stats = [
  { value: "10+", label: "Tools" },
  { value: "4+", label: "Years of Exploration" },
  { value: "100%", label: "Curiosity" }
];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "px-6 py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-[1100px] flex-col items-center text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-label", children: "01 — About" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-4xl font-bold tracking-tight sm:text-5xl", children: [
        "A Quiet Obesssion ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "metallic-text", children: [
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          " With the Details."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full flex-col items-center gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal w-full max-w-[340px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "metallic-border-bright aspect-square w-full overflow-hidden rounded-full p-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "/dro.jpg",
          alt: "Drobert Alsid S. Palces",
          className: "h-full w-full rounded-full object-cover"
        }
      ) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal flex max-w-[680px] flex-col items-center text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-light leading-relaxed text-muted-foreground sm:text-xl", children: "I'm a multidisciplinary designer and developer crafting refined digital experiences at the intersection of art and engineering. With nearly a couple years of practice, I help brands articulate their identity through minimal interfaces, considered typography, and motion that feels inevitable." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-base font-light leading-relaxed text-muted-foreground/80", children: "Currently based in the Philippines, working with a company related to digital design and founders nationwide. Always interested in the new, the strange, and the beautifully made." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal mt-4 grid w-full max-w-[680px] grid-cols-3 gap-3 sm:gap-5", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "metallic-border rounded-lg p-4 text-center transition-all duration-500 hover:metallic-border-bright sm:p-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "metallic-text text-2xl font-light sm:text-3xl", children: s.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-[10px] tracking-[0.25em] uppercase text-muted-foreground sm:text-xs", children: s.label })
          ]
        },
        s.label
      )) })
    ] })
  ] }) });
}
const projects = [
  {
    image: "/src/assets/papayalogo.png",
    title: "PapayaFresh",
    description: "Machine Learning application built for predicting the shelf life of papayas based on various factors such as ripeness, storage conditions, and handling practices.",
    tags: ["Machine Learning", "Data Science", "Flutter"]
  },
  {
    image: "/src/assets/student.jpg",
    title: "Basic Student Profile System",
    description: "A student profile system built using Java, allowing students to create and manage their profiles, including personal information, academic records, and extracurricular activities.",
    tags: ["Java", "CRUD", "Profiling", "MySQL"]
  },
  {
    image: "/src/assets/food.jpg",
    title: "Atlas - Food delivery reimagined",
    description: "Online Restaurant Food Delivery System built using PHP and MySQL, allowing users to browse restaurant menus, place orders, and manage deliveries efficiently.",
    tags: ["E-commerce", "Motion", "PHP", "MySQL"]
  },
  {
    image: "/src/assets/facerecog.jpg",
    title: "Face Recognition Attendance System",
    description: "A facial recognition attendance system built using Python and OpenCV, enabling automated attendance tracking by recognizing and verifying individuals based on their facial features.",
    tags: ["Python", "Computer Vision", "MySQL"]
  },
  {
    image: "/src/assets/pwd.jpg",
    title: "PWD Tulong",
    description: "An application designed to assist Persons with Disabilities (PWDs) in accessing various services and resources, providing a user-friendly interface and features tailored to their needs.",
    tags: ["Accessibility", "Mobile App", "Flutter"]
  },
  {
    image: "/src/assets/wela.jpg",
    title: "WELA - Livro Web/Mobile Applications",
    description: "Designed various web and mobile applications in Figma for WELA, such as CHURN School Manager, SPRINT Cycle, Design System, and more. These applications were built to streamline operations, enhance user experience, and provide efficient solutions for the company's needs.",
    tags: ["Branding", "E-commerce"]
  }
];
function Projects() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "work", className: "px-6 py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1100px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal mb-16 flex flex-col items-center text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-label", children: "02 — Work" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-4xl font-bold tracking-tight sm:text-5xl", children: "Selected Work" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "article",
      {
        className: "reveal group relative flex flex-col overflow-hidden rounded-lg border border-border bg-surface transition-all duration-500 hover:-translate-y-1 hover:border-border-bright",
        style: { transitionDelay: `${i % 3 * 60}ms` },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] w-full h-full overflow-hidden bg-surface-elevated", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: p.image,
                alt: p.title,
                className: "absolute inset-0 h-full w-full object-cover"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-chrome/15 to-transparent transition-transform duration-1000 group-hover:translate-x-full",
                "aria-hidden": true
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/0 transition-all duration-500 group-hover:ring-white/10" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-light tracking-tight text-foreground transition-colors duration-300 group-hover:text-chrome", children: p.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 flex-1 text-sm font-light leading-relaxed text-muted-foreground", children: p.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-wrap gap-2", children: p.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "rounded-full border border-border px-3 py-1 text-[10px] tracking-[0.15em] uppercase text-muted-foreground",
                children: t
              },
              t
            )) })
          ] })
        ]
      },
      p.title
    )) })
  ] }) });
}
const testimonials = [
  {
    initials: "BO",
    name: "Business Owner",
    quote: "Delivered exactly what we needed — a fully working system, not just a design. Everything was functional, clean, and easy to use."
  },
  {
    initials: "SF",
    name: "Startup Founder",
    quote: "I had an idea for a business website, and it was turned into a real, working product. The layout, flow, and responsiveness were all on point."
  },
  {
    initials: "CO",
    name: "Cafe Owner",
    quote: "Smooth from start to finish. Communicates clearly, delivers fast, and focuses on real results. The system saved a lot of manual work."
  },
  {
    initials: "BC",
    name: "Small Business Client",
    quote: "Different from most developers — focused on building functional systems, not just visuals. The project was ready to use immediately."
  },
  {
    initials: "PP",
    name: "Project Partner",
    quote: "If you need someone who can turn ideas into real systems quickly, this is the right person. AI-assisted workflow without sacrificing quality."
  }
];
function Card({ t }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-[340px] shrink-0 flex-col rounded-lg border border-border bg-surface p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "metallic-border flex h-10 w-10 items-center justify-center rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "metallic-text text-xs font-light tracking-widest", children: t.initials }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-light text-foreground", children: t.name })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-light leading-relaxed text-muted-foreground", children: [
      '"',
      t.quote,
      '"'
    ] })
  ] });
}
function Testimonials() {
  const rowA = [...testimonials, ...testimonials];
  const rowB = [...testimonials.slice().reverse(), ...testimonials.slice().reverse()];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "testimonials", className: "overflow-hidden px-0 py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-16 max-w-[1100px] px-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-label", children: "05 — Testimonials" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-4xl font-bold tracking-tight sm:text-5xl", children: "What Clients Say" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal marquee-mask space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-max gap-6 animate-marquee", children: rowA.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { t }, `a-${i}`)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-max gap-6 animate-marquee-reverse", children: rowB.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { t }, `b-${i}`)) })
    ] })
  ] });
}
const groups = [
  {
    title: "Design",
    items: ["UI / UX", "Brand Identity", "Typography", "Design System", "Motion", "Prototyping", "Information Architecture"]
  },
  {
    title: "Development",
    items: ["React", "Flutter", "Python", "PHP", "SQL", "Java"]
  },
  {
    title: "Tools",
    items: ["Typescale", "Figma", "Stitch", "Lovable", "Claude", "ChatGPT", "Deepseek"]
  }
];
function Skills() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "skills", className: "px-6 py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1100px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal mb-16 flex flex-col items-center text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-label", children: "04 — Skills" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-4xl font-bold tracking-tight sm:text-5xl", children: "Craft & toolkit" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-12 md:grid-cols-2 lg:grid-cols-3", children: groups.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal flex flex-col items-center text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-gradient-to-r from-transparent to-silver" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-light tracking-[0.3em] uppercase text-foreground", children: g.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-gradient-to-r from-silver to-transparent" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 flex flex-wrap justify-center gap-2", children: g.items.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-full border border-border bg-surface px-4 py-2 text-xs font-light tracking-wide text-muted-foreground transition-all duration-300 hover:border-border-bright hover:text-foreground", children: s }) }, s)) })
    ] }, g.title)) })
  ] }) });
}
const experiences = [
  {
    title: "AI Prompt Engineering",
    description: "Crafting precise, structured prompts to direct AI models for design, content, and product workflows."
  },
  {
    title: "UI / UX Design",
    description: "Designing intuitive interfaces and user journeys grounded in research, hierarchy, and accessibility."
  },
  {
    title: "Mockups & Wireframes",
    description: "Building low and high-fidelity mockups and wireframes in Figma to validate ideas before development."
  },
  {
    title: "Interactive Prototyping",
    description: "Producing clickable Figma prototypes with realistic flows, transitions, and micro-interactions."
  },
  {
    title: "Design Systems",
    description: "Defining tokens, components, and patterns that keep products consistent and scalable."
  },
  {
    title: "Visual & Brand Direction",
    description: "Shaping typography, color, and layout systems that give products a distinct, considered identity."
  }
];
function Experiences() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "experiences", className: "px-6 py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1100px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal mb-16 flex flex-col items-center text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-label", children: "03 — Experiences" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-4xl font-bold tracking-tight sm:text-5xl", children: "What I do" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-base font-light leading-relaxed text-muted-foreground", children: "A blend of design craft and AI-assisted workflows — from first sketch to polished, production-ready interfaces." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: experiences.map((x, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "article",
      {
        className: "reveal group relative flex flex-col rounded-lg border border-border bg-surface p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:border-border-bright",
        style: { transitionDelay: `${i % 3 * 60}ms` },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-5 flex h-10 w-10 items-center justify-center rounded-full metallic-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "metallic-text text-xs font-light tracking-widest", children: [
            "0",
            i + 1
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-chrome", children: x.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm font-light leading-relaxed text-muted-foreground", children: x.description })
        ]
      },
      x.title
    )) })
  ] }) });
}
function Contact() {
  const [sent, setSent] = reactExports.useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    e.currentTarget.reset();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "relative overflow-hidden px-6 py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 purple-haze", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-[1100px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal mb-16 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-label", children: "06 — Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-4xl font-bold tracking-tight sm:text-5xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "metallic-text", children: "Let's Create Something Refined" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-md text-base font-light leading-relaxed text-muted-foreground", children: "Have a project in mind? I'm currently available for new partnerships." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 lg:grid-cols-[1fr_1.2fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal flex flex-col gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-surface p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] tracking-[0.25em] uppercase text-muted-foreground", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "mailto:drobertalsidpalces@gmail.com",
                className: "mt-2 block text-base font-light text-foreground transition-colors hover:text-chrome",
                children: "drobertalsidpalces@gmail.com"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-surface p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] tracking-[0.25em] uppercase text-muted-foreground", children: "Response time" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm font-light leading-relaxed text-foreground", children: "I typically respond within 24 hours. For urgent inquiries, please mention it in the subject." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-surface p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] tracking-[0.25em] uppercase text-muted-foreground", children: "Location" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm font-light text-foreground", children: "Panabo City, Philippines. Open to remote work and collaborations worldwide." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            onSubmit,
            className: "reveal flex flex-col gap-5 rounded-lg border border-border bg-surface p-6 sm:p-8",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 sm:grid-cols-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "name", label: "Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "email", type: "email", label: "Email" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "message", label: "Message", textarea: true }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "submit",
                  className: "purple-metal-fill group relative mt-2 inline-flex h-12 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-md px-8 text-sm font-light tracking-[0.2em] uppercase text-white transition-all duration-500 hover:-translate-y-0.5",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children: "→" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children: sent ? "Sent · Thank you" : "Send message" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" })
                  ]
                }
              )
            ]
          }
        )
      ] })
    ] })
  ] });
}
function Input({
  name,
  label,
  type = "text",
  textarea = false
}) {
  const base = "peer w-full bg-transparent border border-border rounded-md px-4 pt-6 pb-2 text-sm font-light text-foreground placeholder-transparent outline-none transition-all duration-300 focus:border-chrome";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "relative block", children: [
    textarea ? /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name, rows: 5, placeholder: label, required: true, className: base }) : /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name, type, placeholder: label, required: true, className: base }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute left-4 top-2 text-[10px] tracking-[0.25em] uppercase text-muted-foreground transition-colors peer-focus:text-chrome", children: label })
  ] });
}
const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Projects" },
  { href: "#experiences", label: "Experiences" },
  { href: "#skills", label: "Skills" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" }
];
function IconLinkedIn() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", className: "h-4 w-4", stroke: "currentColor", strokeWidth: "1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 10v8M8 7v.01M12 18v-5a2 2 0 014 0v5M12 13v5", strokeLinecap: "round" })
  ] });
}
function IconGitHub() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "none", className: "h-4 w-4", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "path",
    {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.33 4.69-4.56 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z"
    }
  ) });
}
function IconMail() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", className: "h-4 w-4", stroke: "currentColor", strokeWidth: "1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "3", y: "5", width: "18", height: "14", rx: "2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 7l9 6 9-6", strokeLinecap: "round", strokeLinejoin: "round" })
  ] });
}
function IconInstagram() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", className: "h-4 w-4", stroke: "currentColor", strokeWidth: "1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "17.5", cy: "6.5", r: "0.5", fill: "currentColor" })
  ] });
}
function IconFacebook() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", className: "h-4 w-4", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" }) });
}
const socials = [
  { href: "https://www.facebook.com/droisdead/", label: "Facebook", Icon: IconFacebook },
  { href: "https://www.linkedin.com/in/drobert-palces-698838348/", label: "LinkedIn", Icon: IconLinkedIn },
  { href: "https://www.instagram.com/_tddrowsg/", label: "Instagram", Icon: IconInstagram },
  { href: "mailto:drobertalsidpalces@gmail.com", label: "Email", Icon: IconMail },
  { href: "https://github.com/DrobertP", label: "GitHub", Icon: IconGitHub }
];
function Footer() {
  const { theme } = useTheme();
  console.log("Footer theme:", theme);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border px-6 pt-16 pb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1100px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#top", className: "group flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: theme === "dark" ? "/light.png" : "/dark.png",
            alt: "logo",
            className: "h-8 w-auto"
          },
          theme
        ) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-sm text-sm font-light leading-relaxed text-muted-foreground", children: "Building intelligent, custom systems that solve real business problems. Let's collaborate to turn your vision into a high-performance reality." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex items-center gap-3", children: socials.map(({ href, label, Icon: Icon2 }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href,
            "aria-label": label,
            className: "flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-border-bright hover:text-foreground",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, {})
          },
          label
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[11px] tracking-[0.3em] uppercase text-muted-foreground", children: "Navigation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-3", children: navLinks.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: l.href,
            className: "text-xs font-light tracking-[0.2em] uppercase text-foreground/80 transition-colors hover:text-chrome",
            children: l.label
          }
        ) }, l.href)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[11px] tracking-[0.3em] uppercase text-muted-foreground", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-5 space-y-3 text-sm font-light text-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "drobertalsidpalces@gmail.com" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "+63 906 474 8508" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Panabo City, Philippines" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 border-t border-border pt-6 text-center text-xs font-light tracking-wide text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Drobert Alsid S. Palces. All rights reserved."
    ] })
  ] }) });
}
function useReveal() {
  reactExports.useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
function Index() {
  useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Projects, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Experiences, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skills, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
