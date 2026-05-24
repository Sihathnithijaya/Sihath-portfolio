import { useEffect, useRef } from "react";

const stats = [
  { value: "2nd", label: "Year Student" },
  { value: "10+", label: "Technical Skills" },
  { value: "4", label: "Academic Programs" },
  { value: "∞", label: "Curiosity" },
];

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("visible", e.isIntersecting)),
      { threshold: 0.15 }
    );
    const els = ref.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={ref}>
      <div className="section-inner">
        <div className="section-label reveal">About Me</div>
        <div className="about-grid">
          <div className="about-img-wrap reveal">
            <div className="about-img-frame">
              <div className="about-img-placeholder">
                <span className="img-initials">OW</span>
                <div className="img-ring ring1" />
                <div className="img-ring ring2" />
              </div>
            </div>
            <div className="about-img-deco" />
          </div>

          <div className="about-text">
            <h2 className="section-title reveal">
              Building <span className="accent">Impactful Systems</span>
            </h2>
            <p className="about-para reveal">
              I am seeking an opportunity within a reputable organization where I can effectively apply my skills and knowledge to contribute to organizational success while achieving professional excellence.
            </p>
            <p className="about-para reveal">
              I am a highly motivated intern with a strong commitment to quality and continuous improvement. As a fast learner, I take on challenges, work diligently, and adapt quickly to new environments.
            </p>
            <p className="about-para reveal">
              Currently pursuing a BSc in Computer Science at Edith Cowan University Sri Lanka, I have strong foundations in programming, project management, communication, and system design.
            </p>
            <div className="about-stats reveal">
              {stats.map((s) => (
                <div key={s.label} className="stat-card">
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
