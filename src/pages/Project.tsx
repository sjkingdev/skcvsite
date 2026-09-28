import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getProject } from "../lib/sanity";
import { fallbackProjects } from "../data/projects";
export function Project({ slug }: { slug: string }) {
  const { data } = useQuery({
    queryKey: ["project", slug],
    queryFn: () => getProject(slug),
  });
  const p = data ?? fallbackProjects.find((x) => x.slug === slug);
  if (!p)
    return (
      <div className="container page">
        <h1>Project not found.</h1>
        <Link to="/work">← Back to work</Link>
      </div>
    );
  return (
    <div className="container page project">
      <Link to="/work" className="back">
        ← All work
      </Link>
      <p className="eyebrow">
        {p.company || "SELECTED PROJECT"} · {p.year || ""}
      </p>
      <h1>{p.title}</h1>
      <p className="project__lead">{p.summary}</p>
      <div className="project__meta">
        <div>
          <span>ROLE</span>
          <strong>{p.role || "Software development"}</strong>
        </div>
        <div>
          <span>TECHNOLOGIES</span>
          <div className="tags">
            {p.technologies.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>
      {p.description ? (
        <div className="rich-text">
          <p>{p.description}</p>
        </div>
      ) : (
        <div className="rich-text">
          <p>
            This project is part of a broader body of work covering frontend
            development, backend services, content platforms, databases and
            development tooling.
          </p>
        </div>
      )}
      {p.url && (
        <a href={p.url} className="text-link">
          Visit project ↗
        </a>
      )}
    </div>
  );
}
