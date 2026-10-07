const groups = {
  Frontend: [
    "React",
    "TypeScript",
    "JavaScript",
    "Vite",
    "Next.js",
    "Vue",
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
    "Django",
    "Ruby",
    "Sinatra",
    ".NET",
    "C#",
  ],

  "CMS / Platforms": [
    "MODX",
    "WordPress",
    "Sanity",
    "Headless CMS",
    "JAMstack",
  ],

  Data: [
    "MySQL",
    "SQL",
    "SQLite",
    "PDO",
    "SQLAlchemy",
    "Sequel",
  ],

  Engineering: [
    "Git",
    "Docker",
    "REST APIs",
    "JWT",
    "CLI tooling",
    "CI/CD",
  ],

  "Libraries / Tools": [
    "Leaflet",
    "mPDF",
  ],
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