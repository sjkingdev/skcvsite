export interface Project {
  _id: string;
  type?: "experience" | "project";
  title: string;
  slug: string;
  summary: string;
  company?: string;
  year: string;
  role: string;
  technologies: string[];
  featured?: boolean;
}