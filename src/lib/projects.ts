import northwind from "@/assets/work-northwind.jpg";
import pulse from "@/assets/work-pulse.jpg";
import loom from "@/assets/work-loom.jpg";
import haven from "@/assets/work-haven.jpg";

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
    slug: "northwind",
    category: "Fintech",
    year: "2024",
    title: "Northwind — onboarding that people finish",
    summary:
      "Rebuilt a 14-step signup into a 3-step flow with progressive disclosure and a live progress model.",
    image: northwind,
    tint: "bg-sun/30",
    role: "Lead Product Designer",
    timeline: "6 months · 2024",
    problem:
      "Northwind's signup asked for everything up front: fourteen steps of forms before a new customer saw a single useful screen. Completion sat near 40%, support tickets were dominated by identity-check confusion, and the team had no shared picture of where people were leaving.",
    approach: [
      {
        heading: "Research before redesign",
        body: "Ran 18 moderated sessions and instrumented the existing funnel. The data showed 61% of drop-offs happened in two steps that duplicated information the app already had.",
      },
      {
        heading: "Progressive disclosure",
        body: "Rebuilt the flow into three steps: account, verification, first goal. Every field earns its place — nothing is asked until the user has a reason to give it.",
      },
      {
        heading: "A live progress model",
        body: "Replaced the linear progress bar with an honest, stateful model that never resets, shows what verification actually checks, and recovers gracefully from errors.",
      },
    ],
    outcomes: [
      { value: "38%", label: "Reduction in onboarding drop-off" },
      { value: "14 → 3", label: "Steps in the signup flow" },
      { value: "-52%", label: "Identity-check support tickets" },
    ],
  },
  {
    slug: "pulse",
    category: "Health",
    year: "2024",
    title: "Pulse — a calmer health dashboard",
    summary:
      "Turned a data-dense clinic tool into a readable daily summary for patients.",
    image: pulse,
    tint: "bg-sage/20",
    role: "Product Designer",
    timeline: "4 months · 2024",
    problem:
      "Pulse's clinical dashboard was designed for practitioners, but patients were its main audience. Charts, acronyms and 30+ metrics on one screen left people anxious and calling the clinic to interpret their own results.",
    approach: [
      {
        heading: "Separate the two audiences",
        body: "Mapped practitioner tasks against patient needs, then split the surface: a full clinical view for staff, a calm daily summary for patients.",
      },
      {
        heading: "One number at a time",
        body: "Designed a card system where each metric leads with plain language ('Your heart is resting well') and only reveals the chart on intent.",
      },
      {
        heading: "Plain-language system",
        body: "Wrote and tested a vocabulary of 40 labels with real patients, cutting comprehension time from minutes to seconds in usability testing.",
      },
    ],
    outcomes: [
      { value: "-64%", label: "Clinic calls about test results" },
      { value: "92%", label: "Patients who read their summary weekly" },
      { value: "40+", label: "Plain-language labels validated" },
    ],
  },
  {
    slug: "loom-and-co",
    category: "Commerce",
    year: "2023",
    title: "Loom & Co — checkout without friction",
    summary:
      "A one-page checkout that lifted conversion and cut support tickets.",
    image: loom,
    tint: "bg-plum/15",
    role: "UX Designer",
    timeline: "3 months · 2023",
    problem:
      "A five-page checkout with re-entered addresses, surprise shipping costs on the last step, and no way to edit earlier answers. Cart abandonment ran 15 points above the category benchmark.",
    approach: [
      {
        heading: "Audit the funnel",
        body: "Session recordings and funnel analysis showed the shipping-cost reveal caused a third of all abandonment. Trust, not effort, was the bottleneck.",
      },
      {
        heading: "One honest page",
        body: "Collapsed the flow into a single page with always-visible totals, editable summaries per section, and shipping costs calculated before checkout begins.",
      },
      {
        heading: "Detail by detail",
        body: "Autofill-first inputs, inline validation written like a person, and a wallet-first payment order cut median completion time from 4.5 to 1.6 minutes.",
      },
    ],
    outcomes: [
      { value: "+18%", label: "Checkout conversion" },
      { value: "4.5 → 1.6 min", label: "Median completion time" },
      { value: "-31%", label: "Checkout support tickets" },
    ],
  },
  {
    slug: "haven",
    category: "Mobile",
    year: "2023",
    title: "Haven — banking that reads like a note",
    summary:
      "A mobile bank redesigned around plain language and a single, honest balance.",
    image: haven,
    tint: "bg-coral/15",
    role: "Design Lead",
    timeline: "8 months · 2023",
    problem:
      "Haven's app showed balances across five accounts, used bank jargon everywhere, and buried the two questions people actually ask: 'what do I have?' and 'what's safe to spend?'",
    approach: [
      {
        heading: "Language first",
        body: "Started with copy, not screens. Rewrote every label into plain language, then designed interfaces simple enough to carry it.",
      },
      {
        heading: "One honest balance",
        body: "Introduced a single 'safe to spend' number that accounts for upcoming bills, with the full account detail one swipe away.",
      },
      {
        heading: "Calm by default",
        body: "Reordered the home screen around one primary action per session and cut visible nav items from nine to four.",
      },
    ],
    outcomes: [
      { value: "+27%", label: "Weekly active usage" },
      { value: "9 → 4", label: "Nav items on the home screen" },
      { value: "4.8★", label: "App Store rating after relaunch" },
    ],
  },
];

export function getProject(slug: string | undefined) {
  return projects.find((p) => p.slug === slug);
}
