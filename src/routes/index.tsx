import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/lib/projects";
import portrait from "@/assets/portrait.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Deepthi Doddaka — UI/UX Designer" },
      {
        name: "description",
        content:
          "Portfolio of Deepthi Doddaka, a UI/UX designer with 5+ years designing responsive web, mobile, dashboard and enterprise experiences.",
      },
      { property: "og:title", content: "Deepthi Doddaka — UX Designer" },
      {
        property: "og:description",
        content:
          "UI/UX designer with 5+ years across healthcare, financial services and enterprise apps.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const principles = [
  { title: "Research first", body: "Interviews, usability testing and data turn assumptions into clear design decisions." },
  { title: "Systems that scale", body: "Reusable components and design-system patterns keep teams fast and products consistent." },
  { title: "Accessible by default", body: "WCAG-minded layouts, contrast and interaction so every user can get the job done." },
];

function Index() {
  const roles = "UI/UX Designer — Product Designer — ";
  return (
    <div className="min-h-screen bg-paper font-body text-ink antialiased">
      {/* HERO (dark) */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <header className="relative z-10 mx-auto flex max-w-[1200px] items-center justify-between px-6 py-6 sm:px-10">
          <Link to="/" className="text-2xl font-extrabold tracking-tight">
            DD<span className="text-blue">.</span>
          </Link>
          <nav className="flex items-center gap-6 text-xs font-medium uppercase tracking-widest sm:gap-8">
            <a href="#about" className="link-underline">About</a>
            <a href="#work" className="link-underline">Work</a>
            <a href="#contact" className="link-underline">Contact</a>
          </nav>
        </header>

        <div className="relative mx-auto flex max-w-[1200px] flex-col items-center px-6 pt-6 text-center sm:px-10">
          <span className="pointer-events-none absolute top-10 select-none text-[clamp(6rem,22vw,18rem)] font-extrabold leading-none tracking-tighter text-outline opacity-40">
            DEEPTHI
          </span>
          <img
            src={portrait.url}
            alt="Portrait of Deepthi Doddaka"
            width={1440}
            height={1920}
            className="relative z-10 size-44 rounded-full border-4 border-paper/10 object-cover object-top sm:size-56"
          />
          <h1 className="relative z-10 mt-8 text-[clamp(2.5rem,7vw,5rem)] font-semibold leading-[1.05] tracking-tight">
            Hello,
            <br />
            I&apos;m Deepthi Doddaka
          </h1>
          <p className="relative z-10 mt-5 max-w-[52ch] text-base text-paper/70 sm:text-lg">
            UI/UX designer with 5+ years crafting responsive web, mobile and enterprise experiences.
          </p>
        </div>

        <div className="mt-16 overflow-hidden border-y border-paper/15 py-6">
          <div className="marquee-track flex w-max whitespace-nowrap text-[clamp(3rem,8vw,6.5rem)] font-bold leading-none tracking-tight text-outline">
            <span>{roles.repeat(3)}</span>
            <span>{roles.repeat(3)}</span>
          </div>
        </div>

        {/* ABOUT */}
        <div id="about" className="mx-auto grid max-w-[1200px] scroll-mt-10 items-center gap-12 px-6 py-24 sm:px-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">About me</h2>
            <p className="mt-6 max-w-[56ch] text-base leading-relaxed text-paper/75 sm:text-lg">
              For 5+ years I&apos;ve designed responsive web, mobile, dashboard and enterprise
              experiences — translating requirements into user-friendly interfaces alongside
              Product, Engineering and UX Research. M.S. in Computer Science from Wright State
              University; Google UX Design and Professional Figma UI/UX certified.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {["Figma", "Design systems", "Prototyping", "User research", "Usability testing", "Accessibility", "Dashboards", "A/B testing", "Information architecture"].map((s) => (
                <li key={s} className="rounded-full border border-paper/25 px-3 py-1 text-xs text-paper/80">{s}</li>
              ))}
            </ul>
          </div>
          <img
            src={portrait.url}
            alt="Deepthi Doddaka outdoors"
            width={1440}
            height={1920}
            loading="lazy"
            className="mx-auto aspect-[4/5] w-full max-w-sm rounded-2xl object-cover"
          />
        </div>
      </section>

      {/* RECENT PROJECTS (light) */}
      <section id="work" className="scroll-mt-10 bg-fog">
        <div className="mx-auto max-w-[1200px] px-6 py-24 sm:px-10">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Recent Projects</h2>
          <div className="mt-12 divide-y divide-ink/10">
            {projects.map((project) => {
              const [brand = project.title] = project.title.split(" — ");
              return (
                <Link
                  key={project.slug}
                  to="/work/$slug"
                  params={{ slug: project.slug }}
                  className="group grid items-center gap-6 py-8 md:grid-cols-[1fr_200px_1.3fr]"
                >
                  <div>
                    <h3 className="text-3xl font-semibold tracking-tight transition-colors group-hover:text-blue">{brand}</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {[project.category, project.year, "Figma"].map((t) => (
                        <span key={t} className="rounded-full border border-ink/20 px-3 py-0.5 text-xs text-ink/70">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={project.image}
                      alt={`Illustrative concept for ${brand}`}
                      width={1536}
                      height={1024}
                      loading="lazy"
                      className="card-img aspect-[4/3] w-full object-cover"
                    />
                  </div>
                  <p className="text-sm leading-relaxed text-ink/70 sm:text-base">{project.summary}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW I WORK (dark, testimonial-style cards) */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1200px] px-6 py-24 sm:px-10">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">How I work</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {principles.map((p) => (
              <div key={p.title} className="rounded-2xl border border-paper/15 bg-paper/5 p-8">
                <span className="text-5xl leading-none text-blue">&ldquo;</span>
                <p className="mt-2 text-base leading-relaxed text-paper/75">{p.body}</p>
                <p className="mt-6 text-sm font-semibold">{p.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <div id="contact" className="mx-auto max-w-[1200px] scroll-mt-10 border-t border-paper/15 px-6 py-24 sm:px-10">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">Wanna book a project?</h2>
          <div className="mt-6 flex flex-col gap-3 text-lg sm:flex-row sm:gap-10">
            <a href="mailto:doddakanagadeepthi7@gmail.com" className="link-underline text-paper/85">doddakanagadeepthi7@gmail.com</a>
            <a href="tel:+19375143839" className="link-underline text-paper/60">+1 (937) 514-3839</a>
          </div>
        </div>
        <footer className="border-t border-paper/15">
          <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-3 px-6 py-6 text-xs text-paper/50 sm:flex-row sm:px-10">
            <span>© 2026 Deepthi Doddaka</span>
            <span>UI/UX Designer · Columbus, OH</span>
          </div>
        </footer>
      </section>
    </div>
  );
}
