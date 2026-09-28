import { createClient } from '@sanity/client';
import type { Project } from '../types/content';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || '2026-01-01';

export const sanityEnabled = Boolean(projectId);
export const sanity = sanityEnabled ? createClient({projectId,dataset,apiVersion,useCdn:true}) : null;

export const projectsQuery = `*[_type == "project"]|order(featured desc, year desc){_id,title,"slug":slug.current,summary,description,company,year,role,technologies,url,github,featured,"imageUrl":image.asset->url}`;
export const projectQuery = `*[_type == "project" && slug.current == $slug][0]{_id,title,"slug":slug.current,summary,description,company,year,role,technologies,url,github,featured,"imageUrl":image.asset->url}`;

export async function getProjects(): Promise<Project[]> { if (!sanity) return []; return sanity.fetch<Project[]>(projectsQuery); }
export async function getProject(slug:string): Promise<Project|null> { if (!sanity) return null; return sanity.fetch<Project|null>(projectQuery,{slug}); }
