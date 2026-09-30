import { Link, Outlet } from "@tanstack/react-router";

export function Layout() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="brand">
            SEAN KING<span>.</span>
          </Link>

          <nav className="nav" aria-label="Main navigation">
            <Link to="/work" className="nav__work">
              Work
            </Link>

            <div className="nav-dropdown">
              <button
                type="button"
                className="nav-dropdown__trigger"
                aria-haspopup="true"
              >
                Work <span>↓</span>
              </button>

              {/* <div className="nav-dropdown__menu">
                <Link to="/work">All Work</Link>
                <Link to="/atfs">Landing Pages</Link>
                <Link to="/logo">Logofolio</Link>
                <Link to="/web">Websites</Link>
              </div> */}
            </div>

            <Link to="/about">About</Link>
            <Link to="/technical">Technical</Link>

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