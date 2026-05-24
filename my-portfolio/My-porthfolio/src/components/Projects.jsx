import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "MYQUOTE Web Application",
    desc: "Developed a full-stack quote management web application using Ruby on Rails with authentication, categorization, admin controls, and quote visibility management.",
    tags: ["Ruby on Rails", "Authentication", "Admin", "Quotes"],
    color: "#63D2BE",
    emoji: "📝",
    links: { live: "#", github: "#" },
  },
  {
    title: "Tic-Tac-Toe Flutter Application",
    desc: "Built a mobile Tic-Tac-Toe app with turn handling, result checking, difficulty levels, and game history tracking.",
    tags: ["Flutter", "Dart", "Mobile", "Game"],
    color: "#F2A65A",
    emoji: "🎮",
    links: { live: "#", github: "#" },
  },
  {
    title: "NULlDLE Word Game",
    desc: "Created a Wordle-style mobile game using Flutter with MVVM architecture, custom keyboard, statistics, and state management improvements.",
    tags: ["Flutter", "Dart", "MVVM", "Game"],
    color: "#A78BFA",
    emoji: "🧠",
    links: { live: "#", github: "#" },
  },
  {
    title: "AI-Powered Multilingual LMS",
    desc: "Developed a multilingual learning platform supporting Sinhala, Tamil, and English with interactive quizzes, AI-assisted evaluation, React frontend, and backend API integration.",
    tags: ["React", "AI", "Multilingual", "Education"],
    color: "#38BDF8",
    emoji: "🌐",
    links: { live: "#", github: "#" },
  },
];

export default function Projects() {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("visible", e.isIntersecting)),
      { threshold: 0.1 }
    );
    const els = ref.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="section-inner">
        <div className="section-label reveal">Work</div>
        <h2 className="section-title reveal">
          Featured <span className="accent">Projects</span>
        </h2>
        <p className="section-sub reveal">Things I've built — from ideas to living, breathing products</p>

        <div className="projects-grid reveal">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`project-card ${hovered === i ? "hovered" : ""} hoverable`}
              style={{ "--card-accent": p.color, animationDelay: `${i * 0.08}s` }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="project-emoji">{p.emoji}</div>
              <div className="project-glow" />
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t} className="project-tag">{t}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={p.links.live} className="project-link hoverable" target="_blank" rel="noopener noreferrer">
                  Live ↗
                </a>
                <a href={p.links.github} className="project-link project-link-gh hoverable" target="_blank" rel="noopener noreferrer">
                  GitHub ⌨
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
