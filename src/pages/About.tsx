export function About() {
  return (
    <div className="container page">
      <div className="page-intro">
        <p className="eyebrow">ABOUT</p>
        <h1>
          Software development across frontend, backend and platform
          engineering.
        </h1>
      </div>
      <div className="content-grid">
        <div>
          <p>
            I am a software developer based in East Sussex, working across web
            applications, content management platforms, APIs, databases and
            development tooling.
          </p>
          <p>
            My current work combines long-running PHP/MODX systems with modern
            frontend development and internal engineering tools. I also build
            independent applications to explore React, TypeScript, Python and
            full-stack architecture.
          </p>
        </div>
        <aside>
          <div className="fact">
            <span>Based</span>
            <strong>East Sussex, UK</strong>
          </div>
          <div className="fact">
            <span>Work</span>
            <strong>Remote / East Sussex</strong>
          </div>
          <div className="fact">
            <span>Experience</span>
            <strong>Web development since 2015</strong>
          </div>
        </aside>
      </div>
    </div>
  );
}
