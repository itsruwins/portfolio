/**
 * Mock content for the portfolio homepage.
 *
 * Real: name, email, GitHub handle. Everything else is invented.
 */

export const profile = {
  name: "Roince Jumao-as",
  greeting: "Hi, I'm Roince Jumao\u2011as", // non-breaking hyphen
  email: "roincejumaoas.prsnl@gmail.com",
  github: "itsruwins",
  githubUrl: "https://github.com/itsruwins",
  blurb: [
    "Full Stack Developer & Systems Tinkerer. Building end-to-end products with TypeScript, Go, and whatever the problem actually needs.",
    "I care about the unglamorous parts — data models, latency budgets, and error states — because that is where products quietly succeed or fail.",
  ],
};

export type Role = {
  year: string;
  title: string;
  company: string;
};

export const experience: Role[] = [
  { year: "2026", title: "Senior Frontend Engineer", company: "Meridian Labs" },
  { year: "2025", title: "Full Stack Developer", company: "Northbay Systems" },
  { year: "2024", title: "Software Engineer", company: "Cordelia Interactive" },
];

export const education = {
  years: "2019 — 2023",
  degree: "Bachelor of Science in Computer Science",
  school: "Westmark Institute of Technology",
};

export const stack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Go",
  "PostgreSQL",
  "Redis",
  "Docker",
  "TailwindCSS",
  "Prisma",
  "tRPC",
];

export type Project = {
  index: string;
  year: string;
  kind: string;
  initials: string;
  name: string;
  summary: string;
  tags: string[];
  status: "IN DEVELOPMENT" | "SHIPPED" | "ARCHIVED";
};

/**
 * Array order is slot order in the fan — left, centre, right — so the featured
 * build sits at index 1, not index 0. PROJECT 01 is therefore the middle entry.
 * All three are real builds.
 */
export const projects: Project[] = [
  {
    index: "PROJECT 03",
    year: "2026",
    kind: "FINTECH",
    initials: "TJ",
    name: "Trading Journal",
    summary:
      "Logs forex trades and breaks performance down by setup and session, so the edge that actually pays is obvious.",
    tags: ["Next.js", "Analytics"],
    status: "IN DEVELOPMENT",
  },
  {
    index: "PROJECT 01",
    year: "2026",
    kind: "GOVTECH",
    initials: "LM",
    name: "LGU Manito Portal",
    summary:
      "Public hiring portal for a municipal government — departmental vacancies, applicant accounts, and status tracking.",
    tags: ["Next.js", "Supabase"],
    status: "IN DEVELOPMENT",
  },
  {
    index: "PROJECT 02",
    year: "2026",
    kind: "EDTECH",
    initials: "AC",
    name: "Achi",
    summary:
      "Turns notes and lecture files into flashcards, then schedules each card's review by recall.",
    tags: ["Next.js", "AI"],
    status: "IN DEVELOPMENT",
  },
];

export type Certification = {
  name: string;
  issuer: string;
  /** Selects the brand mark drawn in the card's logo tile. */
  mark: "html5" | "gemini" | "ibm";
  href: string;
};

/**
 * The first entry is a real credential and its href is the live verification
 * page. The second is still a placeholder carried over from the reference
 * layout — it names a real IBM programme and its Verify link goes nowhere, so
 * replace or drop it before this goes public.
 *
 * A "gemini" mark is also registered in certification-card.tsx if a Google
 * credential is ever added back.
 */
export const certifications: Certification[] = [
  {
    name: "HTML Fundamentals",
    issuer: "CodeCred",
    mark: "html5",
    href: "https://www.codecred.dev/verify/6e8312cf-e987-4a5f-8cb3-7d694dab284a",
  },
  { name: "Data Science Tools", issuer: "IBM", mark: "ibm", href: "#" },
];

/* ------------------------------------------------------------------ *
 * Sub-page content. Mock, like the rest of this file.
 * ------------------------------------------------------------------ */

export type Position = {
  title: string;
  period: string;
  /** Employment type · location · arrangement. */
  meta: string;
  summary: string;
  tags: string[];
};

export type Company = {
  name: string;
  /** Shown under the company name; not a working link on mock data. */
  site: string;
  /** Monogram for the logo tile — these companies have no real marks. */
  initials: string;
  roles: Position[];
};

export const workHistory: Company[] = [
  {
    name: "Meridian Labs",
    site: "meridianlabs.example",
    initials: "ML",
    roles: [
      {
        title: "Senior Frontend Engineer",
        period: "February 2026 — Present",
        meta: "Full-time · Remote",
        summary:
          "Lead the design-system rewrite and the migration to the App Router — partnering with design to ship accessible components, cut bundle weight, and keep interaction latency inside budget.",
        tags: ["TypeScript", "Next.js", "Design systems"],
      },
      {
        title: "Frontend Engineer",
        period: "March 2025 — February 2026",
        meta: "Full-time · Remote",
        summary:
          "Built the customer-facing dashboard and the charting layer behind it, and set up the visual-regression suite the team still gates releases on.",
        tags: ["React", "Testing", "Data visualisation"],
      },
    ],
  },
  {
    name: "Northbay Systems",
    site: "northbaysystems.example",
    initials: "NB",
    roles: [
      {
        title: "Full Stack Developer",
        period: "January 2025 — March 2025",
        meta: "Contract · Hybrid",
        summary:
          "Shipped the billing integration end to end — schema, webhooks, retries, and the reconciliation job that made the finance team's month-end close survivable.",
        tags: ["Go", "PostgreSQL", "Stripe"],
      },
    ],
  },
  {
    name: "Cordelia Interactive",
    site: "cordelia.example",
    initials: "CI",
    roles: [
      {
        title: "Software Engineer",
        period: "June 2024 — December 2024",
        meta: "Full-time · On-site",
        summary:
          "Maintained the realtime multiplayer layer, chased down desync bugs across three clients, and brought p99 message latency under 80ms.",
        tags: ["Node.js", "WebSockets", "Redis"],
      },
      {
        title: "Junior Developer",
        period: "August 2023 — June 2024",
        meta: "Full-time · On-site",
        summary:
          "Built internal tools for the content team and took over the release pipeline, trimming a manual deploy from forty minutes to four.",
        tags: ["Docker", "CI/CD", "Internal tools"],
      },
    ],
  },
];

export type StackGroup = { label: string; items: string[] };

export const stackGroups: StackGroup[] = [
  {
    label: "Web",
    items: ["TypeScript", "React", "Next.js", "TailwindCSS", "Vite", "Zustand"],
  },
  {
    label: "Databases & backend",
    items: [
      "Node.js",
      "Go",
      "PostgreSQL",
      "Redis",
      "Prisma",
      "tRPC",
      "REST",
      "GraphQL",
    ],
  },
  { label: "Mobile", items: ["React Native", "Expo", "Swift"] },
  { label: "Cloud & tooling", items: ["Docker", "Vercel", "Fly.io", "GitHub Actions", "Terraform"] },
  { label: "Testing", items: ["Vitest", "Playwright", "Testing Library"] },
];

export const operations = {
  eyebrow: "Beyond development",
  title: "Operations",
  summary:
    "The unglamorous systems I keep running so the engineering work has somewhere to land.",
  items: [
    "Release management",
    "Incident response",
    "Technical writing",
    "Onboarding docs",
    "Mentoring",
  ],
};

export type ArchivedProject = {
  name: string;
  kind: string;
  summary: string;
  /** Live URL. Rows without one keep the reference's inert `#` link. */
  href?: string;
};

export const projectArchive: ArchivedProject[] = [
  {
    name: "LGU Manito Portal",
    kind: "Govtech",
    summary:
      "Official job portal for the Municipality of Manito, Albay. Applicants browse vacancies, apply, and track each application from one dashboard.",
    href: "https://lgumanitoportal.vercel.app",
  },
  {
    name: "Achi",
    kind: "Edtech",
    summary:
      "Study app that generates flashcards from notes, PDFs, and slide decks, then spaces each review by how well you recall the card.",
    href: "https://achimura.vercel.app",
  },
  {
    name: "Trading Journal",
    kind: "Fintech",
    summary:
      "Journal for forex and prop-firm traders. Logs each trade with its setup, session, and risk, then reports equity curves, profit factor, and per-setup win rates across multiple accounts.",
    href: "https://tradingjournalv1.vercel.app",
  },
];
