const groups = {
  Frontend: [
    "React",
    "TypeScript",
    "JavaScript",
    "Vite",
    "TanStack",
    "HTML",
    "CSS / Sass",
  ],
  Backend: [
    "PHP",
    "Laravel",
    "Node.js",
    "Express",
    "Python",
    "FastAPI",
    "Flask",
    "Django",
  ],
  Platforms: ["MODX", "WordPress", "Sanity"],
  Data: ["MySQL", "SQL", "SQLite"],
  Engineering: ["Git", "Docker", "REST APIs", "JWT", "CLI tooling", "CI/CD"],
};
export function Technical() {
  return (
    <div className="container page">
      <div className="page-intro">
        <p className="eyebrow">TECHNICAL</p>
        <h1>Tools and technologies I work with.</h1>
      </div>
      <div className="tech-grid">
        {Object.entries(groups).map(([name, items]) => (
          <section key={name} className="tech-group">
            <h2>{name}</h2>
            <ul>
              {items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
