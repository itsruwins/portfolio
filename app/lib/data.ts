/**
 * Content for the portfolio homepage.
 *
 * Real: profile, experience, education, projects. The stack lists and the
 * second certification are still placeholders from the reference layout.
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

/** Condensed view of `workHistory` below — the full periods live there. */
export const experience: Role[] = [
  { year: "2025", title: "Lead Developer", company: "Municipality of Manito" },
];

export const education = {
  years: "2023 — Present",
  degree: "Bachelor of Science in Information Technology",
  school: "Computer Arts and Technological College, Inc.",
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
    kind: "ECOMMERCE",
    initials: "JD",
    name: "Jeyd",
    summary:
      "Storefront for a Mobile Legends account reseller \u2014 every listing documented down to rank, skins, and heroes before a supervised handover.",
    tags: ["Next.js", "Commerce"],
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
 * Sub-page content. Mixed — `workHistory` and `projectArchive` are real;
 * the rest is still carried over from the reference layout.
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
  /** Shown under the company name; rendered as text, not a link. */
  site: string;
  /** Monogram for the logo tile — stands in for a real mark. */
  initials: string;
  roles: Position[];
};

/**
 * Real engagement. The portal itself is PROJECT 01 in `projects` — the two
 * share the LM monogram so they read as the same body of work.
 */
export const workHistory: Company[] = [
  {
    name: "Municipality of Manito",
    site: "Manito, Albay · Local Government Unit",
    initials: "LM",
    roles: [
      {
        title: "Lead Developer",
        period: "2025 — Present",
        meta: "Capstone engagement · Remote",
        summary:
          "Leading a team of three on the municipality's official job portal, built under a memorandum of agreement with the LGU — departmental vacancies, applicant accounts, and end-to-end application tracking from one dashboard.",
        tags: ["Next.js", "Supabase", "GovTech"],
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
    name: "Jeyd",
    kind: "Ecommerce",
    summary:
      "Storefront for a Mobile Legends account reseller. Every listing is documented end to end — rank, collection level, skins, and heroes — so buyers can price an account before they message, then complete a supervised handover.",
    href: "https://jeydmlbbshop.vercel.app",
  },
];
