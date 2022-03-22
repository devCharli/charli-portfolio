import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-scroll";
import { GiTigerHead } from "react-icons/gi";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 500) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBackground);
  }

  return (
    <nav className={navbar ? "navbar active" : "navbar"}>
      <h1 className="title">
        <GiTigerHead />
        <Link to="home" spy={true} smooth={true} duration={500}>
          <span>Dev Charli</span>
        </Link>
      </h1>
      <ul className="nav-links">
        <Link to="home" spy={true} smooth={true} duration={500}>
          Home
        </Link>
        <Link to="about" spy={true} smooth={true} duration={500}>
          Skills
        </Link>
        <Link to="projects" spy={true} smooth={true} duration={500}>
          Projects
        </Link>
        <Link to="contact" spy={true} smooth={true} duration={500}>
          Contact
        </Link>
      </ul>
    </nav>
  );
}
