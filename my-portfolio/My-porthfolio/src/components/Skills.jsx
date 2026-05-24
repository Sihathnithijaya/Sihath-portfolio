import { useEffect, useRef } from "react";

const skillGroups = [
  {
    category: "Programming",
    icon: "💻",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 88 },
      { name: "JavaScript", level: 84 },
      { name: "Dart", level: 80 },
      { name: "Ruby", level: 78 },
      { name: "SQL", level: 82 },
    ],
  },
  {
    category: "Frameworks & Tools",
    icon: "🛠",
    skills: [
      { name: "Flutter", level: 85 },
      { name: "React", level: 80 },
      { name: "HTML", level: 92 },
      { name: "Linux", level: 78 },
      { name: "Git", level: 85 },
    ],
  },
  {
    category: "Professional Skills",
    icon: "🤝",
    skills: [
      { name: "Teamwork", level: 90 },
      { name: "Communication", level: 88 },
      { name: "Problem Solving", level: 92 },
      { name: "Collaboration", level: 86 },
      { name: "Fast Learning", level: 90 },
    ],
  },
];

const techBadges = ["Java", "SQL", "Python", "Dart", "Ruby", "JavaScript", "HTML", "Linux", "Flutter", "React"];

export default function Skills() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            const bars = e.target.querySelectorAll(".skill-fill");
            bars.forEach((bar) => {
              const level = bar.getAttribute("data-level");
              bar.style.width = level + "%";
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    const els = ref.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="section-inner">
        <div className="section-label reveal">Skills</div>
        <h2 className="section-title reveal">
          My <span className="accent">Toolbox</span>
        </h2>
        <p className="section-sub reveal">Technologies I work with to bring ideas to life</p>

        <div className="skills-grid reveal">
          {skillGroups.map((group) => (
            <div key={group.category} className="skill-card">
              <div className="skill-card-header">
                <span className="skill-icon">{group.icon}</span>
                <h3>{group.category}</h3>
              </div>
              <div className="skill-bars">
                {group.skills.map((s) => (
                  <div key={s.name} className="skill-row">
                    <div className="skill-meta">
                      <span className="skill-name">{s.name}</span>
                      <span className="skill-pct">{s.level}%</span>
                    </div>
                    <div className="skill-track">
                      <div className="skill-fill" data-level={s.level} style={{ width: 0 }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tech-badges reveal">
          {techBadges.map((t) => (
            <span key={t} className="tech-badge hoverable">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
