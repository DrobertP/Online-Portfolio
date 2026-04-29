import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-32">
      <div className="pointer-events-none absolute inset-0 purple-haze" aria-hidden />
      <div className="relative mx-auto max-w-[1100px]">
        <div className="reveal mb-16 text-center">
          <span className="section-label">06 — Contact</span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="metallic-text">Let's Create Something Refined</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base font-light leading-relaxed text-muted-foreground">
            Have a project in mind? I'm currently available for new partnerships.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Contact details */}
          <div className="reveal flex flex-col gap-6">
            <div className="rounded-lg border border-border bg-surface p-6">
              <div className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
                Email
              </div>
              <a
                href="mailto:drobertalsidpalces@gmail.com"
                className="mt-2 block text-base font-light text-foreground transition-colors hover:text-chrome"
              >
                drobertalsidpalces@gmail.com
              </a>
            </div>
            <div className="rounded-lg border border-border bg-surface p-6">
              <div className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
                Response time
              </div>
              <p className="mt-2 text-sm font-light leading-relaxed text-foreground">
                I typically respond within 24 hours. For urgent inquiries, please
                mention it in the subject.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-6">
              <div className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
                Location
              </div>
              <p className="mt-2 text-sm font-light text-foreground">
                Panabo City, Philippines. Open to remote work and collaborations worldwide.
              </p>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="reveal flex flex-col gap-5 rounded-lg border border-border bg-surface p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Input name="name" label="Name" />
              <Input name="email" type="email" label="Email" />
            </div>
            <Input name="message" label="Message" textarea />
            <button
              type="submit"
              className="purple-metal-fill group relative mt-2 inline-flex h-12 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-md px-8 text-sm font-light tracking-[0.2em] uppercase text-white transition-all duration-500 hover:-translate-y-0.5"
            >
              <span className="relative z-10">→</span>
              <span className="relative z-10">{sent ? "Sent · Thank you" : "Send message"}</span>
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Input({
  name,
  label,
  type = "text",
  textarea = false,
}: {
  name: string;
  label: string;
  type?: string;
  textarea?: boolean;
}) {
  const base =
    "peer w-full bg-transparent border border-border rounded-md px-4 pt-6 pb-2 text-sm font-light text-foreground placeholder-transparent outline-none transition-all duration-300 focus:border-chrome";
  return (
    <label className="relative block">
      {textarea ? (
        <textarea name={name} rows={5} placeholder={label} required className={base} />
      ) : (
        <input name={name} type={type} placeholder={label} required className={base} />
      )}
      <span className="pointer-events-none absolute left-4 top-2 text-[10px] tracking-[0.25em] uppercase text-muted-foreground transition-colors peer-focus:text-chrome">
        {label}
      </span>
    </label>
  );
}
