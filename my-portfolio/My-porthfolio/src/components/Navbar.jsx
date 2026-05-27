import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

const links = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Contact",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const [active, setActive] = useState("Home");

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = links.map((item) =>
        document.getElementById(item.toLowerCase())
      );

      const scrollPosition = window.scrollY + 200;

      sections.forEach((section, index) => {
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActive(links[index]);
        }
      });
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }

    setActive(id);

    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050816]/80 backdrop-blur-2xl border-b border-white/5 shadow-2xl shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <button
            onClick={() => scrollTo("Home")}
            className="group relative flex items-center gap-2"
          >
            <div className="absolute inset-0 bg-violet-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

            <span className="relative text-2xl font-black tracking-tight text-white">
              Sihath
            </span>

            <span className="relative text-2xl font-black bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              .
            </span>
          </button>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-3">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className={`relative px-5 py-3 rounded-2xl text-sm font-medium transition-all duration-300 ${
                  active === link
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {/* ACTIVE BG */}
                {active === link && (
                  <div className="absolute inset-0 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl" />
                )}

                {/* HOVER GLOW */}
                <div className="absolute inset-0 rounded-2xl bg-violet-500/0 hover:bg-violet-500/10 transition duration-300" />

                <span className="relative z-10">
                  {link}
                </span>
              </button>
            ))}

            {/* CTA */}
            <button
              onClick={() => scrollTo("Contact")}
              className="group relative ml-3 inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-violet-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-2xl shadow-violet-500/20 transition duration-300 hover:scale-[1.04]"
            >
              <span className="relative z-10">
                Let’s Talk
              </span>

              <ArrowUpRight
                size={17}
                className="relative z-10 transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />

              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300" />
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative w-12 h-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 border-t border-white/5 ${
          menuOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#050816]/95 backdrop-blur-2xl px-4 py-6 space-y-2">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`w-full flex items-center justify-between rounded-xl px-5 py-3 text-base font-medium transition duration-300 ${
                active === link
                  ? "bg-gradient-to-r from-violet-600/30 to-blue-500/30 border border-violet-400/30 text-white"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span>{link}</span>

                {active === link && (
                <div className="w-2 h-2 rounded-full bg-violet-400" />
              )}
            </button>
          ))}

          {/* MOBILE CTA */}
          <button
            onClick={() => scrollTo("Contact")}
            className="w-full mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-6 py-3 text-white font-semibold shadow-lg shadow-violet-500/20 transition hover:scale-[1.02]"
          >
            Let's Connect

            <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}