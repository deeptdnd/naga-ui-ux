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
          <p className="font-mono text-7xl font-medium text-blue">404</p>
          <p className="mt-4 text-lg font-semibold uppercase tracking-tight">
            Case study not found
          </p>
          <p className="mt-2 text-muted-foreground">That case study doesn&apos;t exist.</p>
          <Link
            to="/"
            className="mt-8 inline-flex bg-ink px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-widest text-paper transition-colors hover:bg-blue"
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
      <header className="border-b-2 border-ink">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 sm:px-10">
          <Link to="/" className="text-xl font-extrabold uppercase tracking-tight">
            Deepthi Doddaka<span className="text-blue">.</span>
          </Link>
          <nav className="hidden items-center gap-10 font-mono text-xs font-medium uppercase tracking-widest md:flex">
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
            className="bg-ink px-5 py-2 font-mono text-xs font-medium uppercase tracking-widest text-paper transition-colors hover:bg-blue"
          >
            ← All work
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-[1100px] px-6 pt-12 pb-16 sm:px-10">
        <div className="flex items-center justify-between font-mono text-xs font-medium uppercase tracking-widest text-ink/60">
          <span>
            {String(index + 1).padStart(2, "0")} / {project.category} · {project.year}
          </span>
          <span>Case study</span>
        </div>
        <h1 className="mt-8 max-w-[20ch] text-[clamp(2.5rem,7vw,5rem)] font-extrabold uppercase leading-[0.92] tracking-tighter text-balance">
          {project.title}
        </h1>
        <p className="mt-8 max-w-[56ch] text-lg font-light leading-relaxed text-pretty sm:text-xl">
          {project.summary}
        </p>
        <div className="mt-12 grid grid-cols-2 gap-6 border-y-2 border-ink py-6 sm:grid-cols-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50">Role</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-tight">{project.role}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50">Timeline</p>
            <p className="mt-2 font-mono text-xs">{project.timeline}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50">Outcome</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-tight">
              {project.outcomes[0]?.value}
            </p>
          </div>
        </div>
        <img
          src={project.image}
          alt={project.title}
          width={1024}
          height={640}
          className={`mt-12 w-full object-cover ${project.tint}`}
        />
      </section>

      {/* PROBLEM */}
      <section className="mx-auto max-w-[760px] px-6 pb-16 sm:px-10">
        <p className="font-mono text-xs font-medium uppercase tracking-widest text-blue">
          The problem
        </p>
        <p className="mt-5 text-lg leading-relaxed text-pretty sm:text-xl">{project.problem}</p>
      </section>

      {/* APPROACH */}
      <section className="mx-auto max-w-[1100px] px-6 pb-16 sm:px-10">
        <div className="mb-10 flex items-end justify-between border-b-2 border-ink pb-4">
          <h2 className="text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
            My approach
          </h2>
          <span className="font-mono text-sm text-ink/60">[0{project.approach.length}]</span>
        </div>
        <div className="grid gap-px bg-ink md:grid-cols-3">
          {project.approach.map((step, i) => (
            <div key={step.heading} className="bg-paper p-8">
              <div className="font-mono text-sm font-medium text-blue">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-4 text-lg font-extrabold uppercase leading-snug tracking-tight">
                {step.heading}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-pretty">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1100px] px-6 py-20 sm:px-10">
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-paper/50">
            Outcomes
          </p>
          <h2 className="mt-4 max-w-[20ch] text-3xl font-extrabold uppercase leading-tight tracking-tighter text-balance sm:text-4xl">
            What changed after shipping.
          </h2>
          <div className="mt-12 grid gap-10 border-t border-paper/20 pt-10 sm:grid-cols-3">
            {project.outcomes.map((o) => (
              <div key={o.label}>
                <div className="text-3xl font-extrabold uppercase leading-none tracking-tight text-blue sm:text-4xl">
                  {o.value}
                </div>
                <p className="mt-3 max-w-[24ch] font-mono text-xs uppercase leading-relaxed tracking-widest text-paper/70">
                  {o.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEXT PROJECT */}
      <section className="mx-auto max-w-[1100px] px-6 py-20 sm:px-10">
        <p className="font-mono text-xs font-medium uppercase tracking-widest text-ink/50">
          Next case study
        </p>
        <Link to="/work/$slug" params={{ slug: next.slug }} className="group mt-4 block">
          <h2 className="text-4xl font-extrabold uppercase leading-none tracking-tighter text-balance transition-colors group-hover:text-blue sm:text-6xl">
            {next.title}
          </h2>
          <span className="link-underline mt-4 inline-block font-mono text-xs font-medium uppercase tracking-widest">
            Read the case study →
          </span>
        </Link>
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
