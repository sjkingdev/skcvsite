export interface Project {
  _id: string;
  type?: "experience" | "project";
  title: string;
  slug: string;
  summary: string;
  description?: string;
  company?: string;
  year: string;
  role: string;
  technologies: string[];
  url?: string;
  featured?: boolean;
}