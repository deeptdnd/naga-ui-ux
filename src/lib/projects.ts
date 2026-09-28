import ohioHealth from "@/assets/work-ohio-health.jpg";
import wellsFargo from "@/assets/work-wells-fargo.jpg";
import hclTechnologies from "@/assets/work-hcl-technologies.jpg";
import cognizant from "@/assets/work-cognizant.jpg";

export type Project = {
  slug: string;
  category: string;
  year: string;
  title: string;
  summary: string;
  image: string;
  /** Tailwind tint used behind the card image while it loads */
  tint: string;
  role: string;
  timeline: string;
  problem: string;
  approach: { heading: string; body: string }[];
  outcomes: { value: string; label: string }[];
};

export const projects: Project[] = [
  {
    slug: "ohio-health",
    category: "Healthcare",
    year: "2025",
    title: "Ohio Health — clear care experiences across web and mobile",
    summary:
      "Responsive web and mobile product experiences built on reusable components and design-system patterns.",
    image: ohioHealth,
    tint: "bg-fog",
    role: "Senior Product Designer",
    timeline: "Jan 2025 – Present · Columbus, Ohio",
    problem:
      "Complex healthcare products need to feel simple and consistent for everyone who uses them — across devices, abilities and contexts — while giving engineering a scalable foundation to build on.",
    approach: [
      {
        heading: "Flows before pixels",
        body: "Create user flows, wireframes, high-fidelity screens and interactive prototypes in Figma, with detailed design specifications for complex product experiences.",
      },
      {
        heading: "Reusable by design",
        body: "Develop reusable UI components and scalable patterns with Auto Layout and variants to keep products consistent and speed up development.",
      },
      {
        heading: "Accessible and clear",
        body: "Apply accessibility, responsive design and visual hierarchy principles, partnering with Product, Engineering and UX Research from concept through implementation.",
      },
    ],
    outcomes: [
      { value: "Web + Mobile", label: "Responsive experiences delivered" },
      { value: "Design system", label: "Reusable components & patterns" },
      { value: "Concept → Ship", label: "End-to-end cross-functional delivery" },
    ],
  },
  {
    slug: "wells-fargo",
    category: "Financial services",
    year: "2024",
    title: "Wells Fargo — intuitive enterprise banking workflows",
    summary:
      "Turned complex financial-services requirements into intuitive navigation, workflows and responsive UI.",
    image: wellsFargo,
    tint: "bg-fog",
    role: "UI/UX Designer",
    timeline: "Nov 2023 – Dec 2024 · Cincinnati, Ohio",
    problem:
      "Enterprise financial tools carry dense requirements and high stakes. Users needed navigation and workflows that felt intuitive without hiding the detail they rely on.",
    approach: [
      {
        heading: "Research-led",
        body: "Conducted usability testing, user interviews and feedback analysis to find usability issues and prioritize improvements.",
      },
      {
        heading: "Validated with data",
        body: "Applied analytics and A/B testing insights to validate design decisions and refine the experience.",
      },
      {
        heading: "Clean handoff",
        body: "Built reusable interface patterns in Figma and prepared clear specifications and documentation to support engineering implementation.",
      },
    ],
    outcomes: [
      { value: "Usability", label: "Testing & interview-driven iteration" },
      { value: "A/B tested", label: "Data-validated design decisions" },
      { value: "Patterns", label: "Reusable enterprise UI library" },
    ],
  },
  {
    slug: "hcl-technologies",
    category: "Dashboards & apps",
    year: "2023",
    title: "HCL Technologies — interactive dashboards at scale",
    summary:
      "Application interfaces, dashboards and reusable components for complex digital experiences.",
    image: hclTechnologies,
    tint: "bg-fog",
    role: "UI/UX Designer",
    timeline: "Feb 2022 – May 2023 · Vijayawada, India",
    problem:
      "Growing application suites were drifting visually and behaviorally. Screens needed a consistent hierarchy and a component foundation that could scale.",
    approach: [
      {
        heading: "Dashboards and layouts",
        body: "Designed interactive application interfaces, dashboards, screen layouts, gameplay flows and visual assets with a consistent visual hierarchy.",
      },
      {
        heading: "Guidelines that scale",
        body: "Developed reusable components and design guidelines to improve consistency and scalability across application screens.",
      },
      {
        heading: "Feedback loops",
        body: "Analyzed user feedback and A/B test results to refine interfaces, and partnered with developers for accurate implementation.",
      },
    ],
    outcomes: [
      { value: "Dashboards", label: "Interactive app & data interfaces" },
      { value: "Guidelines", label: "Scalable component documentation" },
      { value: "A/B tested", label: "Feedback-driven refinements" },
    ],
  },
  {
    slug: "cognizant",
    category: "Responsive web",
    year: "2022",
    title: "Cognizant — responsive web from requirements to reality",
    summary:
      "Translated business and user requirements into responsive web interfaces and clear information architecture.",
    image: cognizant,
    tint: "bg-fog",
    role: "UI/UX Designer",
    timeline: "Aug 2021 – Jan 2022 · Bangalore, India",
    problem:
      "Business requirements had to become navigable, accessible web experiences — with interaction behavior clear enough for Agile teams to build confidently.",
    approach: [
      {
        heading: "Structure first",
        body: "Created user flows and structured information architectures to communicate navigation and interaction behavior.",
      },
      {
        heading: "Prototype and test",
        body: "Built interactive prototypes and ran usability testing to identify pain points and improve navigation.",
      },
      {
        heading: "Agile collaboration",
        body: "Worked in cross-functional Agile/Scrum teams, documenting design decisions and supporting implementation.",
      },
    ],
    outcomes: [
      { value: "Responsive", label: "Web interfaces & high-fidelity design" },
      { value: "IA", label: "Structured navigation & flows" },
      { value: "Agile", label: "Cross-functional Scrum delivery" },
    ],
  },
];

export function getProject(slug: string | undefined) {
  return projects.find((p) => p.slug === slug);
}
