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

function Index() {
  return (
    <div className="min-h-screen bg-paper font-body text-ink antialiased">
      {/* NAV */}
      <header className="border-b-2 border-ink">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 sm:px-10">
          <Link to="/" className="text-xl font-extrabold uppercase tracking-tight">
            Deepthi Doddaka<span className="text-blue">.</span>
          </Link>
          <nav className="hidden items-center gap-10 font-mono text-xs font-medium uppercase tracking-widest md:flex">
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
            className="bg-ink px-5 py-2 font-mono text-xs font-medium uppercase tracking-widest text-paper transition-colors hover:bg-blue"
          >
            Let&apos;s talk
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-[1440px] px-6 pt-16 pb-24 sm:px-10">
        <div className="flex justify-between">
          <div className="flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-widest">
            <span className="size-2 animate-pulse rounded-full bg-blue"></span>
            Available for new projects
          </div>
          <span className="hidden font-mono text-xs font-medium uppercase tracking-widest text-ink/60 sm:block">
            Based in Columbus, OH
          </span>
        </div>
        <h1 className="mt-16 text-[clamp(3.5rem,13vw,10rem)] font-extrabold uppercase leading-[0.85] tracking-tighter">
          Deepthi
          <br />
          Doddaka
        </h1>
        <div className="mt-14 grid grid-cols-12 gap-6 border-t-2 border-ink pt-8">
          <p className="col-span-12 text-xl font-medium leading-snug text-balance sm:text-2xl md:col-span-6 md:col-start-7">
            UI/UX designer with 5+ years building systematic solutions for web,
            mobile and enterprise — focused on utility, accessibility and
            precision.
          </p>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section id="work" className="scroll-mt-16">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10">
          <div className="mb-10 flex items-end justify-between border-b-2 border-ink pb-4">
            <h2 className="text-4xl font-extrabold uppercase tracking-tight sm:text-5xl">
              Selected work
            </h2>
            <span className="font-mono text-sm text-ink/60">[01–04]</span>
          </div>
        </div>
        <div className="mx-auto max-w-[1440px] px-6 pb-28 sm:px-10">
          <div className="grid grid-cols-1 gap-px bg-ink md:grid-cols-2">
            {projects.map((project, i) => {
              const [brand = project.title, tagline] = project.title.split(" — ");
              return (
                <Link
                  key={project.slug}
                  to="/work/$slug"
                  params={{ slug: project.slug }}
                  className="group bg-white"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      width={1024}
                      height={640}
                      loading="lazy"
                      className="card-img aspect-[16/10] w-full object-cover grayscale group-hover:grayscale-0"
                    />
                    <span className="absolute left-4 top-4 bg-ink/80 px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-widest text-paper backdrop-blur">
                      {String(i + 1).padStart(2, "0")} / {project.category}
                    </span>
                  </div>
                  <div className="bg-paper p-8 transition-colors duration-300 group-hover:bg-blue group-hover:text-paper">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <h3 className="text-3xl font-extrabold uppercase leading-none tracking-tight md:text-4xl">
                          {brand}
                        </h3>
                        <p className="mt-3 max-w-[36ch] font-mono text-xs font-medium uppercase leading-relaxed tracking-widest opacity-70">
                          {tagline}
                        </p>
                      </div>
                      <div className="grid size-11 shrink-0 place-items-center border border-ink transition-colors group-hover:border-paper">
                        <svg
                          className="size-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-16 bg-ink text-paper">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-10 px-6 py-24 sm:px-10">
          <div className="col-span-12 md:col-span-5">
            <img
              src={portrait.url}
              alt="Portrait of Deepthi Doddaka"
              width={1440}
              height={1920}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
            />
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <h2 className="border-b border-paper/25 pb-4 text-4xl font-extrabold uppercase tracking-tight sm:text-5xl">
              About
            </h2>
            <p className="mt-8 max-w-[52ch] text-lg font-light leading-relaxed text-pretty sm:text-xl">
              For 5+ years I&apos;ve designed responsive web, mobile, dashboard
              and enterprise experiences — translating requirements into
              user-friendly interfaces with Product, Engineering and UX
              Research. M.S. in Computer Science, Wright State University.
              Google UX Design and Professional Figma UI/UX certified.
            </p>
            <div className="mt-12 grid grid-cols-2 gap-8 font-mono text-sm uppercase">
              <div>
                <p className="mb-3 text-ink/0 text-paper/50">Design</p>
                <ul className="space-y-1.5">
                  {["Figma", "Design systems", "Prototyping", "User research", "Usability testing"].map(
                    (skill) => (
                      <li key={skill}>{skill}</li>
                    ),
                  )}
                </ul>
              </div>
              <div>
                <p className="mb-3 text-paper/50">Delivery</p>
                <ul className="space-y-1.5">
                  {["Accessibility", "Dashboards", "A/B testing", "Information architecture"].map(
                    (skill) => (
                      <li key={skill}>{skill}</li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-16">
        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10">
          <div className="border-2 border-ink p-10 sm:p-16">
            <p className="font-mono text-xs font-medium uppercase tracking-widest text-blue">
              Contact
            </p>
            <h2 className="mt-5 text-5xl font-extrabold uppercase leading-none tracking-tighter sm:text-7xl">
              Let&apos;s talk
            </h2>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-10">
              <a
                href="mailto:doddakanagadeepthi7@gmail.com"
                className="font-mono text-base underline underline-offset-8 transition-colors hover:text-blue sm:text-lg"
              >
                doddakanagadeepthi7@gmail.com
              </a>
              <a
                href="tel:+19375143839"
                className="font-mono text-base text-ink/70 underline underline-offset-8 transition-colors hover:text-blue sm:text-lg"
              >
                +1 (937) 514-3839
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t-2 border-ink">
        <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-3 px-6 py-8 font-mono text-xs uppercase tracking-widest text-ink/50 sm:flex-row sm:items-center sm:px-10">
          <span>© 2026 Deepthi Doddaka</span>
          <span>Portfolio · v3</span>
        </div>
      </footer>
    </div>
  );
}
