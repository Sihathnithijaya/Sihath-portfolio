import { useEffect, useRef } from "react";
import {
  Code2,
  Database,
  BrainCircuit,
  Wrench,
  Sparkles,
} from "lucide-react";

const skillGroups = [
  {
    category: "Programming Languages",
    icon: <Code2 size={22} />,
    gradient: "from-violet-600 to-blue-500",
    glow: "shadow-violet-500/20",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 88 },
      { name: "JavaScript", level: 84 },
      { name: "Dart", level: 82 },
      { name: "Ruby", level: 78 },
      { name: "SQL", level: 86 },
    ],
  },

  {
    category: "Frameworks & Tools",
    icon: <Wrench size={22} />,
    gradient: "from-cyan-500 to-blue-500",
    glow: "shadow-cyan-500/20",
    skills: [
      { name: "React", level: 85 },
      { name: "Flutter", level: 88 },
      { name: "FastAPI", level: 80 },
      { name: "Git", level: 86 },
      { name: "Linux", level: 78 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },

  {
    category: "Professional Skills",
    icon: <BrainCircuit size={22} />,
    gradient: "from-pink-500 to-violet-500",
    glow: "shadow-pink-500/20",
    skills: [
      { name: "Problem Solving", level: 92 },
      { name: "Communication", level: 88 },
      { name: "Team Collaboration", level: 90 },
      { name: "Leadership", level: 82 },
      { name: "Adaptability", level: 91 },
      { name: "Creativity", level: 87 },
    ],
  },
];

const techBadges = [
  "React",
  "FastAPI",
  "Flutter",
  "Tailwind CSS",
  "PostgreSQL",
  "Java",
  "Python",
  "JavaScript",
  "Git",
  "Linux",
  "Ruby on Rails",
  "UI/UX",
];

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

              setTimeout(() => {
                bar.style.width = level + "%";
              }, 200);
            });
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const els = ref.current?.querySelectorAll(".reveal");

    els?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-600/20 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[140px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* SECTION LABEL */}
        <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-violet-300 text-sm font-medium mb-6">
          <Sparkles size={16} />
          Technical Expertise
        </div>

        {/* TITLE */}
        <h2 className="reveal text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
          Skills &
          <span className="block bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        {/* DESC */}
        <p className="reveal mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
          A versatile toolkit focused on building scalable applications,
          engaging interfaces, and modern digital experiences using
          industry-standard technologies.
        </p>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {skillGroups.map((group, index) => (
            <div
              key={group.category}
              className="reveal group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 transition duration-500 hover:-translate-y-2 hover:border-violet-400/20"
              style={{
                animationDelay: `${index * 120}ms`,
              }}
            >
              {/* GLOW */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 blur-3xl ${group.glow}`}
              />

              {/* TOP */}
              <div className="relative z-10">
                {/* ICON */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r ${group.gradient} text-white shadow-2xl mb-6`}
                >
                  {group.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-bold text-white">
                  {group.category}
                </h3>

                {/* SKILLS */}
                <div className="mt-8 space-y-6">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      {/* LABEL */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-slate-300 font-medium">
                          {skill.name}
                        </span>

                        <span className="text-sm text-slate-500">
                          {skill.level}%
                        </span>
                      </div>

                      {/* TRACK */}
                      <div className="relative h-3 rounded-full bg-white/5 overflow-hidden">
                        {/* BAR */}
                        <div
                          data-level={skill.level}
                          className={`skill-fill h-full rounded-full bg-gradient-to-r ${group.gradient} transition-all duration-[1800ms] ease-out shadow-lg`}
                          style={{
                            width: "0%",
                          }}
                        />

                        {/* SHINE */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-40" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* BG SHAPE */}
              <div className="absolute -bottom-20 -right-20 w-56 h-56 rounded-full bg-white/[0.03]" />
            </div>
          ))}
        </div>

        {/* TECH STACK */}
        <div className="reveal mt-20">
          <div className="flex items-center gap-3 mb-8">
            <Database className="text-violet-300" />

            <h3 className="text-2xl font-bold text-white">
              Tech Stack
            </h3>
          </div>

          <div className="flex flex-wrap gap-4">
            {techBadges.map((tech, index) => (
              <div
                key={tech}
                className="group relative overflow-hidden"
                style={{
                  animationDelay: `${index * 60}ms`,
                }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-600/20 to-blue-500/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

                <div className="relative px-6 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-slate-300 font-medium hover:text-white hover:border-violet-400/30 hover:-translate-y-1 transition duration-300">
                  {tech}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}