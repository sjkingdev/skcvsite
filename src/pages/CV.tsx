export function CV() {
  return (
    <div className="container page">
      <div className="cv-head">
        <div>
          <p className="eyebrow">CURRICULUM VITAE</p>
          <h1>Sean King</h1>
          <p className="cv-role">Software Developer</p>
        </div>
        <a className="button" href="/sean-king-cv.pdf">
          Download CV
        </a>
      </div>
      <section className="cv-section">
        <h2>Profile</h2>
        <p>
          Software developer with experience building and maintaining web
          platforms, content management systems, frontend applications, APIs,
          database-backed tools and development scripts.
        </p>
      </section>
      <section className="cv-section">
        <h2>Experience</h2>
        <article>
          <div className="cv-date">2023 — PRESENT</div>
          <div>
            <h3>Kings Education</h3>
            <p className="muted">Software Developer</p>
            <p>
              Development and maintenance of education websites and internal
              systems using PHP, MODX, MySQL and JavaScript. Work includes
              frontend architecture, CSS/Sass migration, native JavaScript
              improvements, routing, PDF generation and database investigation
              tooling.
            </p>
            <p>
              Developed 20+ PHP utilities for interrogating MODX databases and
              supporting diagnosis, maintenance and content/platform analysis.
            </p>
          </div>
        </article>
        <article>
          <div className="cv-date">2015 — 2022</div>
          <div>
            <h3>Digital Wonderland</h3>
            <p className="muted">Web Developer</p>
            <p>
              Web development across client websites, content platforms and
              digital projects.
            </p>
          </div>
        </article>
      </section>
      <section className="cv-section">
        <h2>Core technologies</h2>
        <p>
          PHP · Laravel · MODX · React · TypeScript · JavaScript · Vite ·
          TanStack · Node.js · Python · FastAPI · MySQL · Docker · REST APIs
        </p>
      </section>
    </div>
  );
}
