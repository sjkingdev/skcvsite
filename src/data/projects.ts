import type { Project } from "../types/content";

export const fallbackProjects: Project[] = [
  {
    _id: "kings",
    title: "Kings Education",
    slug: "kings-education",
    summary:
      "Software development across a portfolio of MODX-powered education websites and a Laravel SmartHub portal used by agents and schools. Work spans PHP, MySQL, JavaScript, frontend modernisation, APIs, document generation and ongoing platform development.",
    company: "Kings Education",
    year: "2023–Present",
    role: "Software Developer",
    technologies: [
      "PHP",
      "MODX",
      "Laravel",
      "MySQL",
      "JavaScript",
      "Sass",
      "REST APIs",
      "mPDF",
    ],
    featured: true,
  },

  {
    _id: "modx-web-monitor",
    title: "MODX Web Monitor",
    slug: "modx-web-monitor",
    summary:
      "An internal suite of PHP diagnostic tools for investigating MODX installations, interrogating databases, analysing SQL queries, inspecting resources and configuration, and identifying performance and content issues across multiple production websites.",
    year: "2024–Present",
    role: "Internal Tooling & Platform Engineering",
    technologies: [
      "PHP",
      "MODX",
      "MySQL",
      "SQL",
      "PDO",
      "REST APIs",
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
      "A body of commercial web development work spanning bespoke websites, CMS platforms and web applications. Projects have used traditional server-rendered architectures, headless CMS, JAMstack and modern JavaScript frameworks, with technology selected around the requirements of each platform.",
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
      "A modular full-stack foundation for ecommerce and marketing platforms, designed to support different frontend and backend architectures without locking projects into a single technology stack.",
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
      "REST APIs",
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
      "A reusable white-label CMS platform combining a React frontend with a Node.js and MySQL backend, providing a configurable foundation for content-driven marketing websites.",
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
      "A React-based monitoring and reporting application exploring structured data collection, API integration, event-driven interfaces and security-oriented workflows.",
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