import { useEffect, useState } from "react";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";

import {
  Sparkles,
  ArrowUp,
  Heart,
} from "lucide-react";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  const [showTop, setShowTop] = useState(false);

  /* PAGE LOAD */
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  /* SCROLL TOP BUTTON */
  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* LOADING SCREEN */
  if (!loaded) {
    return (
      <div className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#050816]">
        {/* GLOW */}
        <div className="absolute w-[400px] h-[400px] rounded-full bg-violet-600/20 blur-[120px]" />

        <div className="absolute w-[300px] h-[300px] rounded-full bg-blue-500/20 blur-[120px]" />

        {/* CONTENT */}
        <div className="relative flex flex-col items-center">
          {/* LOGO */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-violet-500/20 blur-3xl animate-pulse" />

            <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-violet-600 via-blue-500 to-cyan-400 flex items-center justify-center text-4xl font-black text-white shadow-2xl shadow-violet-500/30">
              SN
            </div>
          </div>

          {/* NAME */}
          <h1 className="mt-8 text-3xl md:text-4xl font-black text-white tracking-tight">
            Sihath Rathnayake
          </h1>

          {/* SUBTITLE */}
          <p className="mt-3 text-slate-400 text-center">
            Crafting modern digital experiences
          </p>

          {/* LOADER */}
          <div className="mt-8 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-violet-400 animate-bounce" />

            <span
              className="w-3 h-3 rounded-full bg-blue-400 animate-bounce"
              style={{ animationDelay: "150ms" }}
            />

            <span
              className="w-3 h-3 rounded-full bg-cyan-400 animate-bounce"
              style={{ animationDelay: "300ms" }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden bg-[#050816] text-white">
      {/* CURSOR */}
      <Cursor />

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN */}
      <main className="relative z-10">
        <Hero />

        <About />

        <Skills />

        <Projects />

        <Contact />
      </main>

      {/* FOOTER */}
      <footer className="relative border-t border-white/5 mt-24 overflow-hidden">
        {/* GLOW */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/5 via-blue-500/5 to-cyan-400/5" />

        <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* LEFT */}
            <div>
              <div className="flex items-center gap-2 text-2xl font-black">
                <span>Sihath</span>

                <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  .
                </span>
              </div>

              <p className="mt-3 text-slate-400 max-w-md leading-relaxed">
                Building modern applications and digital experiences with
                creativity, performance, and scalable technologies.
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col items-center md:items-end gap-3">
              <div className="flex items-center gap-2 text-slate-400">
                <Sparkles size={16} className="text-violet-300" />

                <span>
                  Designed & Developed with passion
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">
                © 2026 Sihath Rathnayake

                <Heart
                  size={14}
                  className="text-red-400 fill-red-400"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* SCROLL TO TOP */}
      <button
        onClick={scrollTop}
        className={`fixed bottom-8 right-8 z-50 group flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-500 text-white shadow-2xl shadow-violet-500/25 transition-all duration-500 hover:scale-110 ${
          showTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <ArrowUp
          size={20}
          className="transition group-hover:-translate-y-1"
        />

        <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300" />
      </button>
    </div>
  );
}