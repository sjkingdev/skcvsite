import type { Project } from "../types/content";

export const fallbackProjects: Project[] = [
  {
    _id: "kings",
    title: "Kings Education",
    slug: "kings-education",
    summary:
      "Web platform engineering across MODX, PHP, JavaScript and Sass, alongside internal development tooling, database diagnostics and ongoing platform modernisation.",
    company: "Kings Education",
    year: "2023–Present",
    role: "Software Developer",
    technologies: [
      "PHP",
      "MODX",
      "MySQL",
      "JavaScript",
      "Sass",
      "mPDF",
    ],
    featured: true,
  },

  {
    _id: "modx-web-monitor",
    title: "MODX Web Monitor",
    slug: "modx-web-monitor",
    summary:
      "A suite of PHP diagnostic and monitoring tools for interrogating MODX installations, analysing database queries, inspecting configuration and resources, and investigating performance issues.",
    year: "2024–Present",
    role: "Internal tooling & platform engineering",
    technologies: [
      "PHP",
      "MODX",
      "MySQL",
      "SQL",
      "PDO",
      "Performance Analysis",
      "Database Diagnostics",
    ],
    featured: true,
  },

  {
    _id: "custom-web-platforms",
    title: "Custom Web Platforms",
    slug: "custom-web-platforms",
    summary:
      "Custom marketing websites, CMS platforms and web applications developed across traditional, headless and JAMstack architectures, selecting frontend, backend and content technologies around the requirements of each project.",
    year: "2015–Present",
    role: "Web Development & Platform Engineering",
    technologies: [
      "React",
      "Next.js",
      "Vite",
      "Vue",
      "PHP",
      "Laravel",
      "WordPress",
      "MODX",
      "Node.js",
      "Express",
      "Python",
      "FastAPI",
      "Django",
      "MySQL",
      "REST APIs",
      "Headless CMS",
      "JAMstack",
    ],
    featured: true,
  },

  {
    _id: "ecommerce-starter",
    title: "Ecommerce Starter",
    slug: "ecommerce-starter",
    summary:
      "A modular full-stack foundation for ecommerce and marketing platforms, designed around interchangeable frontend and backend architectures.",
    year: "2026",
    role: "Full-stack Development",
    technologies: [
      "React",
      "Vite",
      "TanStack",
      "Node.js",
      "Express",
      "Python",
      "FastAPI",
      "Django",
      ".NET",
      "C#",
      "MySQL",
      "REST API",
      "JWT",
      "Docker",
    ],
    featured: true,
  },

  {
    _id: "website-template",
    title: "Website CMS",
    slug: "website-cms",
    summary:
      "A reusable white-label CMS platform combining a React frontend with a Node.js and MySQL backend, designed as a foundation for content-driven marketing websites.",
    year: "2026",
    role: "Full-stack Development",
    technologies: [
      "React",
      "Vite",
      "TanStack",
      "Node.js",
      "Express",
      "MySQL",
      "JWT",
    ],
    featured: false,
  },

  {
    _id: "veritas",
    title: "Veritas Security Monitor",
    slug: "veritas-security-monitor",
    summary:
      "A React-based monitoring and reporting application exploring structured data collection, API integration and security-oriented workflows.",
    year: "2026",
    role: "Full-stack Development",
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "REST APIs",
    ],
    featured: false,
  },

  {
    _id: "state-of-mind",
    title: "State of Mind",
    slug: "state-of-mind",
    summary:
      "A journal and calendar application exploring structured personal reflection, temporal data and data-driven interface design.",
    year: "2026",
    role: "Full-stack Development",
    technologies: [
      "React",
      "Vite",
      "TanStack",
      "TypeScript",
    ],
    featured: false,
  },

  {
    _id: "timeblock",
    title: "Time Block",
    slug: "time-block",
    summary:
      "A weekly planning application combining a React interface with a Python API and relational database backend.",
    year: "2026",
    role: "Full-stack Development",
    technologies: [
      "React",
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "MySQL",
    ],
    featured: false,
  },
];