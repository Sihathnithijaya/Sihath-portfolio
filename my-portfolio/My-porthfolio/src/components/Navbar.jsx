import { useState, useEffect } from "react";

const links = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-logo" onClick={() => scrollTo("home")}>
        <span className="logo-bracket">&lt;</span>Owen<span className="logo-bracket">/&gt;</span>
      </div>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        {links.map((l) => (
          <button key={l} className={`nav-link hoverable ${active === l ? "active" : ""}`} onClick={() => scrollTo(l)}>
            {l}
          </button>
        ))}
        <a href="#contact" className="nav-cta hoverable" onClick={(e) => { e.preventDefault(); scrollTo("Contact"); }}>
          Hire Me
        </a>
      </div>

      <button className="hamburger hoverable" onClick={() => setMenuOpen(!menuOpen)}>
        <span className={menuOpen ? "open" : ""}></span>
        <span className={menuOpen ? "open" : ""}></span>
        <span className={menuOpen ? "open" : ""}></span>
      </button>
    </nav>
  );
}
