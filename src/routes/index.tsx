import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Skills } from "@/components/portfolio/Skills";
import { Experiences } from "@/components/portfolio/Experiences";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Drobert Alsid S. Palces — Designer · Developer · Creator" },
      {
        name: "description",
        content:
          "Personal portfolio of Alex Mercer — minimal, refined digital design and development.",
      },
      { property: "og:title", content: "Alex Mercer — Portfolio" },
      {
        property: "og:description",
        content: "Selected work in design, development, and brand systems.",
      },
      { property: "og:image", content: "/light logo.png" },
    ],
    links: [
      {
        rel: 'icon',
        href: '/light.png',
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experiences />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
