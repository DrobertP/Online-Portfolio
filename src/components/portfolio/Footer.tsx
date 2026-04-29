import { useTheme } from "@/hooks/use-theme.ts";

const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Projects" },
  { href: "#experiences", label: "Experiences" },
  { href: "#skills", label: "Skills" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 10v8M8 7v.01M12 18v-5a2 2 0 014 0v5M12 13v5" strokeLinecap="round" />
    </svg>
  );
}
function IconGitHub() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.5">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.33 4.69-4.56 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z"
      />
    </svg>
  );
}
function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}
function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const socials = [
  { href: "https://www.facebook.com/droisdead/", label: "Facebook", Icon: IconFacebook },
  { href: "https://www.linkedin.com/in/drobert-palces-698838348/", label: "LinkedIn", Icon: IconLinkedIn },
  { href: "https://www.instagram.com/_tddrowsg/", label: "Instagram", Icon: IconInstagram },
  { href: "mailto:drobertalsidpalces@gmail.com", label: "Email", Icon: IconMail },
  { href: "https://github.com/DrobertP", label: "GitHub", Icon: IconGitHub },
];

export function Footer() {
  const { theme } = useTheme();
  console.log("Footer theme:", theme);

  return (
    <footer className="border-t border-border px-6 pt-16 pb-8">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Brand */}
          <div>
          <a href="#top" className="group flex items-center gap-2">
            <span>
            <img 
              key={theme}
              src={theme === "dark" ? "/light.png" : "/dark.png"} 
              alt="logo" 
              className="h-8 w-auto" 
            />
            </span>
          </a>
            <p className="mt-5 max-w-sm text-sm font-light leading-relaxed text-muted-foreground">
              Building intelligent, custom systems that solve real business problems.
              Let's collaborate to turn your vision into a high-performance reality.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-border-bright hover:text-foreground"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground">
              Navigation
            </h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-xs font-light tracking-[0.2em] uppercase text-foreground/80 transition-colors hover:text-chrome"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground">
              Contact
            </h4>
            <ul className="mt-5 space-y-3 text-sm font-light text-foreground/80">
              <li>drobertalsidpalces@gmail.com</li>
              <li>+63 906 474 8508</li>
              <li>Panabo City, Philippines</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-6 text-center text-xs font-light tracking-wide text-muted-foreground">
          © {new Date().getFullYear()} Drobert Alsid S. Palces. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
