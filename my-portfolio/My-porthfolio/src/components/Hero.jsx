import { useEffect, useRef, useState } from "react";

const roles = ["Computer Science Student", "Intern", "Problem Solver", "Tech Enthusiast"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const canvasRef = useRef(null);

  // Typewriter
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }, 0);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      o: Math.random() * 0.5 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 210, 190, ${p.o})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > W) p.dx *= -1;
        if (p.y < 0 || p.y > H) p.dy *= -1;
      });
      // draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99, 210, 190, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };

    draw();
    const resize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section id="home" className="hero">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-content">
        <div className="hero-badge">👋 Hello, World!</div>
        <h1 className="hero-name">
          I'm <span className="name-highlight">Sihath Rathnayake</span>
        </h1>
        <div className="hero-role">
          <span className="role-prefix">{"< "}</span>
          <span className="role-text">{displayed}</span>
          <span className="cursor-blink">|</span>
          <span className="role-suffix">{" />"}</span>
        </div>
        <p className="hero-bio">
          I am seeking an opportunity within a reputable organization where I can apply my skills and knowledge to contribute to organizational success while achieving professional excellence.
          A highly motivated intern with strong commitment to quality, continuous improvement, and fast learning.
        </p>
        <div className="hero-actions">
          <button className="btn-primary hoverable" onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}>
            View Projects
          </button>
          <a href="/resume.pdf" className="btn-outline hoverable" download>
            Download CV
          </a>
        </div>
        <div className="hero-socials">
          {[
            { label: "GitHub", href: "https://github.com/Sihathnithijaya", icon: "⌨" },
            { label: "Email", href: "mailto:Sihathnithijaya@gmail.com", icon: "✉" },
          ].map((s) => (
            <a key={s.label} href={s.href} className="social-chip hoverable" target="_blank" rel="noopener noreferrer">
              <span>{s.icon}</span> {s.label}
            </a>
          ))}
        </div>
      </div>
      <div className="hero-scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
