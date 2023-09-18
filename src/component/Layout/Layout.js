import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import { useState } from "react";
import Footer from "../Footer/Footer";

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={`header ${menuOpen ? "open" : ""}`}>
        <div className="logo">
          <img src="your-logo.png" alt="Logo" />
        </div>
        <nav className={menuOpen ? "open" : ""}>
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/Blogs" onClick={toggleMenu}>
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Layout;
