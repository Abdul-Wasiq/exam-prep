import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
        <nav className="navbar navbar-expand navbar-dark bg-primary health-navbar"> {/* ← CHANGE: "bg-primary" to your color e.g. "bg-dark" */}
          <div className="container-fluid px-4">
            <Link className="navbar-brand fw-semibold" to="/">
              HealthPortal {/* ← CHANGE: "HealthPortal" to your project name */}
            </Link>

            <div className="navbar-nav ms-auto flex-row gap-3">
              <Link className="nav-link" to="/">
                Home {/* ← CHANGE: "Home" */}
              </Link>

              <Link className="nav-link" to="/doctors"> {/* ← CHANGE: "/doctors" */}
                Doctors {/* ← CHANGE: "Doctors" */}
              </Link>

              <Link className="nav-link" to="/register"> {/* ← CHANGE: "/register" */}
                Register {/* ← CHANGE: "Register" */}
              </Link>

              <Link className="nav-link" to="/contact"> {/* ← CHANGE: "/contact" */}
                Contact {/* ← CHANGE: "Contact" */}
              </Link>
            </div>
          </div>
        </nav>

        <style>{`
          .health-navbar {
            min-height: 48px;
          }

          .health-navbar .navbar-brand,
          .health-navbar .nav-link {
            color: #fff;
          }

          .health-navbar .nav-link {
            padding: 0.25rem 0.5rem;
            transition: opacity 0.2s ease;
          }

          .health-navbar .nav-link:hover {
            color: #fff;
            opacity: 0.8;
          }
        `}</style>
        </>
    )
}

export default Navbar