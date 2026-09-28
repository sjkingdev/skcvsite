import { Link, Outlet } from "@tanstack/react-router";
export function Layout() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="brand">
            SEAN KING<span>.</span>
          </Link>
          <nav className="nav">
            <Link to="/work">Work</Link>
            <Link to="/about">About</Link>
            <Link to="/technical">Technical</Link>
            {/* <Link to="/cv">CV</Link> */}
            <Link to="/contact" className="nav__contact">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Sean King</span>
          <span>Software Developer · East Sussex / Remote</span>
        </div>
      </footer>
    </>
  );
}
