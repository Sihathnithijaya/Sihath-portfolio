import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <div className={`app ${loaded ? "loaded" : ""}`}>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <p>© 2026 Sihath Rathnayake · Built with passion & React</p>
      </footer>
    </div>
  );
}
