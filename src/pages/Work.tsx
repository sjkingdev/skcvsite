import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../lib/sanity";
import { fallbackProjects } from "../data/projects";
export function Work() {
  const { data } = useQuery({ queryKey: ["projects"], queryFn: getProjects });
  const projects = data?.length ? data : fallbackProjects;
  return (
    <div className="container page">
      <div className="page-intro">
        <p className="eyebrow">WORK</p>
        <h1>Selected projects and professional work.</h1>
      </div>
      <div className="work-list">
        {projects.map((p, i) => (
          <Link
            key={p._id}
            to="/work/$slug"
            params={{ slug: p.slug }}
            className="work-row"
          >
            <span>0{i + 1}</span>
            <div>
              <h2>{p.title}</h2>
              <p>{p.summary}</p>
            </div>
            <span className="arrow">↗</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
