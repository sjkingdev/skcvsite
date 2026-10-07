import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../lib/sanity";
import { fallbackProjects } from "../data/projects";
export function Home() {
  const { data } = useQuery({ queryKey: ["projects"], queryFn: getProjects });
  const projects = (data?.length ? data : fallbackProjects)
    .filter((p) => p.featured)
    .slice(0, 4);
  return (
    <div>
      <section className="hero container">
        <p className="eyebrow">SOFTWARE DEVELOPER / WEB ENGINEER</p>
        <h1>
          Building web applications, digital platforms and development tools.
        </h1>
        <p className="hero__intro">
          Software developer working across PHP, Laravel, MODX, React,
          TypeScript, APIs and databases, with experience spanning established
          content platforms and modern full-stack applications.
        </p>
        <div className="actions">
          <Link to="/work" className="button button--primary">
            View work
          </Link>
          {/* <Link to="/cv" className="button">
            View CV
          </Link> */}
        </div>
      </section>
      <section className="section container">
        <div className="section-heading">
          <p className="eyebrow">SELECTED WORK</p>
          <Link to="/work">View all →</Link>
        </div>
        <div className="project-grid">
          {projects.map((p, i) => (
            <Link
              key={p._id}
              to="/work/$slug"
              params={{ slug: p.slug }}
              className="project-card"
            >
              <span className="project-card__number">0{i + 1}</span>
              <h2>{p.title}</h2>
              <p>{p.summary}</p>
              <div className="tags">
                {p.technologies.slice(0, 5).map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="section section--muted">
        <div className="container split">
          <div>
            <p className="eyebrow">CURRENT FOCUS</p>
            <h2>From legacy platforms to modern application architecture.</h2>
          </div>
          <p>
            Alongside day-to-day platform development, I build React and Python
            applications, REST APIs, database-backed tools and internal scripts
            for investigating and maintaining complex systems.
          </p>
        </div>
      </section>
    </div>
  );
}
