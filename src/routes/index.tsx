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

const spans = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7"];

function Index() {
  return (
    <div className="min-h-screen bg-paper font-body text-ink antialiased">
      {/* NAV */}
      <header className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 sm:px-10">
        <Link to="/" className="font-display text-xl font-semibold tracking-tight">
          Deepthi Doddaka<span className="text-coral">.</span>
        </Link>
        <nav className="hidden items-center gap-9 text-sm font-medium md:flex">
          <a href="#work" className="link-underline">
            Work
          </a>
          <a href="#about" className="link-underline">
            About
          </a>
          <a href="#contact" className="link-underline">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-ink py-2 pl-4 pr-4 text-sm font-medium text-cream ring-1 ring-ink transition-colors hover:bg-coral hover:text-ink"
        >
          Let&apos;s talk
          <span className="grid size-4 place-items-center rounded-full bg-coral text-[11px] font-semibold text-ink">
            ↗
          </span>
        </a>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-[1440px] px-6 pt-10 pb-20 sm:px-10">
        <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-ink/60">
          <span className="size-2 rounded-full bg-coral"></span>
          UI/UX Designer · Columbus, Ohio
        </div>
        <h1 className="mt-8 max-w-[16ch] font-display text-[clamp(3.5rem,13vw,11rem)] font-semibold leading-[0.92] text-balance text-ink">
          Deepthi Doddaka
        </h1>
        <div className="mt-10 grid grid-cols-12 items-end gap-6">
          <p className="col-span-12 max-w-[24ch] font-display text-2xl leading-tight text-balance text-ink sm:text-3xl md:col-span-5 md:col-start-1">
            UI/UX designer with 5+ years crafting <span className="italic text-coral">clear</span>,
            accessible experiences for web, mobile and enterprise.
          </p>
          <div className="col-span-12 md:col-span-4 md:col-start-8 md:col-end-13">
            <div className="rounded-xl bg-cream p-6 ring-1 ring-black/5">
              <p className="mb-4 text-xs uppercase tracking-[0.18em] text-ink/50">Currently</p>
              <p className="font-display text-lg leading-snug">
                Senior Product Designer at <span className="text-sage">Ohio Health</span> —
                designing responsive care experiences and design systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section id="work" className="mx-auto max-w-[1440px] scroll-mt-16 px-6 pb-24 sm:px-10">
        <div className="mb-10 flex items-end justify-between border-b border-ink/15 pb-5">
          <h2 className="max-w-[20ch] font-display text-4xl font-semibold leading-none text-balance sm:text-5xl">
            Selected work
          </h2>
          <span className="text-sm font-medium text-ink/50">5+ years · 4 roles</span>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {projects.map((project, i) => (
            <Link
              key={project.slug}
              to="/work/$slug"
              params={{ slug: project.slug }}
              className={`card-lift group overflow-hidden rounded-xl bg-cream ring-1 ring-black/5 ${spans[i]}`}
            >
              <div className="overflow-hidden">
                <div className={`w-full ${project.tint}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    width={1024}
                    height={640}
                    loading="lazy"
                    className="card-img aspect-[16/10] w-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.15em] text-ink/50">
                  <span>
                    {project.category} · {project.year}
                  </span>
                  <span>Case study</span>
                </div>
                <h3 className="mt-3 max-w-[22ch] font-display text-2xl font-semibold leading-tight text-balance sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-[46ch] text-sm text-pretty text-ink/70 sm:text-base">
                  {project.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-16 bg-ink text-cream">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-10 px-6 py-24 sm:px-10">
          <div className="col-span-12 md:col-span-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cream/50">About</p>
            <img
              src={portrait}
              alt="Portrait of Deepthi Doddaka"
              width={800}
              height={1008}
              loading="lazy"
              className="mt-6 aspect-[4/5] w-full rounded-xl object-cover"
            />
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <h2 className="max-w-[20ch] font-display text-4xl font-semibold leading-tight text-balance sm:text-5xl">
              Pixel-precise, user-first, built to scale.
            </h2>
            <p className="mt-6 max-w-[52ch] text-pretty text-base text-cream/75 sm:text-lg">
              For 5+ years I&apos;ve designed responsive web, mobile, dashboard and enterprise
              experiences — translating requirements into user-friendly interfaces with Product,
              Engineering and UX Research. M.S. in Computer Science, Wright State University. Google
              UX Design and Professional Figma UI/UX certified.
            </p>
            <div className="mt-10 flex flex-wrap gap-2">
              {[
                "Figma",
                "Design systems",
                "Prototyping",
                "User research",
                "Usability testing",
                "Accessibility",
                "Dashboards",
                "A/B testing",
                "Information architecture",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-cream/10 px-4 py-2 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-[1440px] scroll-mt-16 px-6 py-24 sm:px-10">
        <div className="rounded-2xl bg-coral p-8 text-ink ring-1 ring-black/5 sm:p-14">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink/60">Contact</p>
          <h2 className="mt-5 max-w-[18ch] font-display text-4xl font-semibold leading-[0.95] text-balance sm:text-6xl">
            Have a product that needs a designer?
          </h2>
          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <a
              href="mailto:doddakanagadeepthi7@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-ink py-3 pl-5 pr-5 text-base font-medium text-cream ring-1 ring-ink transition-colors hover:bg-cream hover:text-ink"
            >
              doddakanagadeepthi7@gmail.com
              <span className="grid size-4 place-items-center rounded-full bg-coral text-[11px] font-semibold text-ink">
                ↗
              </span>
            </a>
            <a href="tel:+19375143839" className="link-underline text-base font-medium">
              +1 (937) 514-3839
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-3 px-6 pb-10 text-sm text-ink/50 sm:flex-row sm:items-center sm:px-10">
        <span>© 2026 Deepthi Doddaka — Designed &amp; built by hand.</span>
        <span>Portfolio · v2</span>
      </footer>
    </div>
  );
}
