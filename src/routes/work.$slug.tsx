import { createFileRoute, Link } from "@tanstack/react-router";
import { projects, getProject } from "@/lib/projects";

export const Route = createFileRoute("/work/$slug")({
  head: ({ params }) => {
    const project = getProject(params.slug);
    return {
      meta: [
        { title: project ? `${project.title} — Case study` : "Case study" },
        {
          name: "description",
          content: project?.summary ?? "UX case study by Deepthi Doddaka.",
        },
        { property: "og:title", content: project ? `${project.title} — Case study` : "Case study" },
        { property: "og:description", content: project?.summary ?? "UX case study." },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: CaseStudy,
});

function CaseStudy() {
  const { slug } = Route.useParams();
  const project = getProject(slug);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-paper font-body text-ink">
        <div className="text-center">
          <p className="font-display text-6xl font-semibold">404</p>
          <p className="mt-3 text-muted-foreground">That case study doesn&apos;t exist.</p>
          <Link
            to="/"
            className="mt-6 inline-flex rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-cream hover:bg-coral hover:text-ink"
          >
            Back to work
          </Link>
        </div>
      </div>
    );
  }

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length] ?? projects[0]!;


  return (
    <div className="min-h-screen bg-paper font-body text-ink antialiased">
      {/* NAV */}
      <header className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 sm:px-10">
        <Link to="/" className="font-display text-xl font-semibold tracking-tight">
          Deepthi Doddaka<span className="text-coral">.</span>
        </Link>
        <nav className="hidden items-center gap-9 text-sm font-medium md:flex">
          <Link to="/" className="link-underline">
            Work
          </Link>
          <Link to="/" className="link-underline">
            About
          </Link>
          <Link to="/" className="link-underline">
            Contact
          </Link>
        </nav>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-ink py-2 pl-4 pr-4 text-sm font-medium text-cream ring-1 ring-ink transition-colors hover:bg-coral hover:text-ink"
        >
          ← All work
        </Link>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-[1100px] px-6 pt-10 pb-16 sm:px-10">
        <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.15em] text-ink/50">
          <span>
            {project.category} · {project.year}
          </span>
          <span>Case study</span>
        </div>
        <h1 className="mt-6 max-w-[20ch] font-display text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[1.02] text-balance">
          {project.title}
        </h1>
        <p className="mt-6 max-w-[56ch] font-display text-xl leading-snug text-pretty sm:text-2xl">
          {project.summary}
        </p>
        <div className="mt-10 grid grid-cols-2 gap-6 border-y border-ink/15 py-6 text-sm sm:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-ink/50">Role</p>
            <p className="mt-1 font-medium">{project.role}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-ink/50">Timeline</p>
            <p className="mt-1 font-medium">{project.timeline}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-ink/50">Outcome</p>
            <p className="mt-1 font-medium">{project.outcomes[0]?.value}</p>
          </div>
        </div>
        <img
          src={project.image}
          alt={project.title}
          width={1024}
          height={640}
          className={`mt-10 w-full rounded-xl object-cover ${project.tint}`}
        />
      </section>

      {/* PROBLEM */}
      <section className="mx-auto max-w-[760px] px-6 pb-16 sm:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-coral">The problem</p>
        <p className="mt-5 text-lg leading-relaxed text-pretty text-ink/85 sm:text-xl">
          {project.problem}
        </p>
      </section>

      {/* APPROACH */}
      <section className="mx-auto max-w-[1100px] px-6 pb-16 sm:px-10">
        <div className="mb-10 flex items-end justify-between border-b border-ink/15 pb-5">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">My approach</h2>
          <span className="text-sm font-medium text-ink/50">
            0{project.approach.length} moves
          </span>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {project.approach.map((step, i) => (
            <div key={step.heading} className="rounded-xl bg-cream p-6 ring-1 ring-black/5">
              <div className="font-display text-4xl font-semibold text-coral">
                0{i + 1}
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold leading-snug">
                {step.heading}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-pretty text-ink/70">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-[1100px] px-6 py-20 sm:px-10">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cream/50">Outcomes</p>
          <h2 className="mt-4 max-w-[20ch] font-display text-3xl font-semibold leading-tight text-balance sm:text-4xl">
            What changed after shipping.
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {project.outcomes.map((o) => (
              <div key={o.label}>
                <div className="font-display text-4xl font-semibold text-coral sm:text-5xl">
                  {o.value}
                </div>
                <p className="mt-2 text-sm text-cream/70">{o.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEXT PROJECT */}
      <section className="mx-auto max-w-[1100px] px-6 py-20 sm:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink/50">Next case study</p>
        <Link
          to="/work/$slug"
          params={{ slug: next.slug }}
          className="group mt-4 block"
        >
          <h2 className="font-display text-3xl font-semibold leading-tight text-balance transition-colors group-hover:text-coral sm:text-5xl">
            {next.title}
          </h2>
          <span className="link-underline mt-3 inline-block text-base font-medium">
            Read the case study →
          </span>
        </Link>
      </section>

      <footer className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-3 px-6 pb-10 text-sm text-ink/50 sm:flex-row sm:items-center sm:px-10">
        <span>© 2026 Deepthi Doddaka — Designed &amp; built by hand.</span>
        <span>Portfolio · v2</span>
      </footer>
    </div>
  );
}
