import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projects";
import portrait from "@/assets/portrait.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Deepthi Doddaka — UI/UX Designer" },
      { name: "description", content: "Deepthi Doddaka — UI/UX designer with 5+ years crafting responsive web, mobile and enterprise experiences." },
      { property: "og:title", content: "Deepthi Doddaka — UI/UX Designer" },
      { property: "og:description", content: "Explore Deepthi Doddaka's UX design work across healthcare, financial services and enterprise products." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const skills = ["Figma", "Design systems", "Prototyping", "User research", "Usability testing", "Accessibility", "Dashboards", "A/B testing", "Information architecture"];
const principles = [
  { title: "Research first", body: "Interviews, usability testing and data turn assumptions into clear design decisions." },
  { title: "Systems that scale", body: "Reusable components and design-system patterns keep teams fast and products consistent." },
  { title: "Accessible by default", body: "WCAG-minded layouts, contrast and interaction so every user can get the job done." },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-ink font-body text-paper antialiased">
      <header className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-5 py-6 sm:px-10">
        <Link to="/" className="text-[22px] font-extrabold leading-none" aria-label="Deepthi Doddaka home">DD<span className="text-blue">.</span></Link>
        <nav aria-label="Main navigation" className={`${menuOpen ? "flex" : "hidden"} absolute inset-x-0 top-0 z-10 min-h-dvh flex-col items-center justify-center gap-9 bg-ink text-xl font-medium uppercase sm:static sm:flex sm:min-h-0 sm:flex-row sm:gap-9 sm:bg-transparent sm:text-xs sm:font-normal sm:tracking-widest`}>
          <a onClick={closeMenu} href="#about" className="text-paper/70 transition-colors hover:text-paper">About</a>
          <a onClick={closeMenu} href="#work" className="text-paper/70 transition-colors hover:text-paper">Work</a>
          <a onClick={closeMenu} href="#contact" className="text-paper/70 transition-colors hover:text-paper">Contact</a>
        </nav>
        <Button variant="ghost" size="icon" className="relative z-20 text-paper hover:bg-paper/10 hover:text-paper sm:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </header>

      <main>
        <section className="flex min-h-[84svh] flex-col items-center justify-center overflow-hidden px-5 pb-16 pt-32 text-center sm:min-h-[90svh] sm:px-10">
          <div className="relative mb-7 flex w-full items-center justify-center">
            <span aria-hidden="true" className="hero-outline pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[clamp(5rem,19vw,16rem)] font-extrabold leading-none">DEEPTHI</span>
            <div className="relative z-10 size-40 overflow-hidden rounded-full border-4 border-ink bg-fog ring-1 ring-paper/15 sm:size-52">
              <img src={portrait.url} alt="Portrait of Deepthi Doddaka" className="hero-portrait h-full w-full object-cover" />
            </div>
          </div>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.08]">Hello,<br />I&apos;m Deepthi Doddaka</h1>
          <p className="mt-6 max-w-[560px] text-base leading-relaxed text-paper/70 sm:text-lg">UI/UX designer with 5+ years crafting responsive web, mobile and enterprise experiences.</p>
        </section>

        <div className="overflow-hidden border-y border-paper/15 py-4" aria-hidden="true">
          <div className="marquee-track flex w-max whitespace-nowrap">
            {[0, 1].map((i) => <span key={i} className="marquee-outline text-[clamp(3rem,8vw,6rem)] font-bold leading-none">UI/UX Designer — Product Designer — UI/UX Designer — Product Designer —&nbsp;</span>)}
          </div>
        </div>

        <section id="about" className="scroll-mt-10 py-20 sm:py-28">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 sm:px-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
            <div>
              <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight">About me</h2>
              <p className="mt-7 max-w-[60ch] text-base leading-relaxed text-paper/70 sm:text-lg">For 5+ years I&apos;ve designed responsive web, mobile, dashboard and enterprise experiences — translating requirements into user-friendly interfaces alongside Product, Engineering and UX Research. M.S. in Computer Science from Wright State University; Google UX Design and Professional Figma UI/UX certified.</p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {skills.map((skill) => <li key={skill} className="rounded-full border border-paper/25 px-3 py-1 text-[13px] text-paper/85">{skill}</li>)}
              </ul>
            </div>
            <div className="max-w-[480px] overflow-hidden rounded-lg bg-fog">
              <img src={portrait.url} alt="Deepthi Doddaka outdoors" loading="lazy" className="aspect-[4/5] w-full object-cover object-top" />
            </div>
          </div>
        </section>

        <section id="work" className="scroll-mt-10 bg-fog py-20 text-ink sm:py-28">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
            <h2 className="mb-12 text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight">Recent Projects</h2>
            <div>
              {projects.map((project) => {
                const brand = project.title.split(" — ")[0];
                return (
                  <Link key={project.slug} to="/work/$slug" params={{ slug: project.slug }} className="group grid gap-5 border-b border-ink/10 py-8 first:pt-0 last:border-b-0 md:grid-cols-[minmax(0,1fr)_200px_minmax(0,1.2fr)] md:items-center md:gap-6">
                    <div className="min-w-0">
                      <h3 className="text-[clamp(1.6rem,3vw,2rem)] font-semibold leading-tight transition-colors group-hover:text-blue">{brand}</h3>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {[project.category, project.year, "Figma"].map((tag) => <li key={tag} className="rounded-full border border-ink/20 px-3 py-1 text-xs text-ink/70">{tag}</li>)}
                      </ul>
                    </div>
                    <div className="overflow-hidden rounded-md bg-paper">
                      <img src={project.image} alt={`Illustrative interface concept for ${project.category.toLowerCase()} work`} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <p className="max-w-[58ch] text-base leading-relaxed text-ink/70">{project.summary}</p>
                  </Link>
                );
              })}
            </div>
            <p className="mt-3 text-xs text-ink/50">Project visuals are illustrative concepts, not product screenshots.</p>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight">How I work</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {principles.map((item) => <div key={item.title} className="flex min-h-52 flex-col rounded-lg border border-paper/15 bg-paper/5 p-8">
                <span className="font-serif text-5xl leading-none text-blue" aria-hidden="true">“</span>
                <p className="mt-3 text-base leading-relaxed text-paper/70">{item.body}</p>
                <h3 className="mt-auto pt-7 text-sm font-semibold">{item.title}</h3>
              </div>)}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-10 border-t border-paper/15 py-20 sm:py-28">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
            <h2 className="text-[clamp(2.5rem,6vw,4.75rem)] font-bold leading-tight">Wanna book a project?</h2>
            <div className="mt-7 flex flex-wrap gap-x-10 gap-y-4 text-base sm:text-lg">
              <a className="break-all underline-offset-4 hover:underline" href="mailto:doddakanagadeepthi7@gmail.com">doddakanagadeepthi7@gmail.com</a>
              <a className="text-paper/50 underline-offset-4 hover:underline" href="tel:+19375143839">+1 (937) 514-3839</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-wrap justify-between gap-2 border-t border-paper/15 px-5 py-6 text-[13px] text-paper/50 sm:px-10">
        <span>© 2026 Deepthi Doddaka</span><span>UI/UX Designer · Columbus, OH</span>
      </footer>
    </div>
  );
}
