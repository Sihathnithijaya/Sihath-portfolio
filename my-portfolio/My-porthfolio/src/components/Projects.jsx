import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  Layers3,
} from "lucide-react";

const projects = [
  {
    title: "AI-Powered Multilingual LMS",
    desc: "An intelligent learning platform designed to support Sinhala, Tamil, and English learners with AI-assisted evaluation, interactive quizzes, analytics dashboards, and personalized educational experiences.",
    tags: [
      "React",
      "FastAPI",
      "PostgreSQL",
      "AI",
      "Education",
    ],
    gradient: "from-violet-600 to-blue-500",
    glow: "bg-violet-500/20",
    icon: "🌐",
    links: {
      live: "#",
      github: "#",
    },
  },

  {
    title: "MYQUOTE Web Platform",
    desc: "A modern quote management platform with secure authentication, category management, visibility control, and powerful administrative capabilities built using Ruby on Rails.",
    tags: [
      "Ruby on Rails",
      "Authentication",
      "Admin Panel",
      "Web App",
    ],
    gradient: "from-cyan-500 to-blue-500",
    glow: "bg-cyan-500/20",
    icon: "📝",
    links: {
      live: "#",
      github: "#",
    },
  },

  {
    title: "NULlDLE Mobile Game",
    desc: "A Wordle-inspired mobile experience developed using Flutter with MVVM architecture, interactive gameplay, custom keyboard logic, and real-time game statistics.",
    tags: [
      "Flutter",
      "MVVM",
      "Mobile",
      "Game Development",
    ],
    gradient: "from-pink-500 to-violet-500",
    glow: "bg-pink-500/20",
    icon: "🧠",
    links: {
      live: "#",
      github: "#",
    },
  },

  {
    title: "Tic-Tac-Toe Flutter App",
    desc: "A polished multiplayer Tic-Tac-Toe mobile application featuring dynamic game logic, multiple difficulty levels, and seamless cross-platform gameplay.",
    tags: [
      "Flutter",
      "Dart",
      "Mobile App",
      "UI Design",
    ],
    gradient: "from-orange-400 to-pink-500",
    glow: "bg-orange-500/20",
    icon: "🎮",
    links: {
      live: "#",
      github: "#",
    },
  },
];

export default function Projects() {
  const ref = useRef(null);

  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) =>
          e.target.classList.toggle("visible", e.isIntersecting)
        ),
      { threshold: 0.1 }
    );

    const els = ref.current?.querySelectorAll(".reveal");

    els?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/20 blur-[140px]" />

      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-[140px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* SECTION HEADER */}
        <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-violet-300 text-sm font-medium mb-6">
          <Layers3 size={16} />
          Featured Work
        </div>

        <h2 className="reveal text-5xl md:text-6xl font-black text-white leading-tight">
          Selected
          <span className="block bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <p className="reveal mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
          A collection of projects focused on modern web applications, mobile
          experiences, intelligent systems, and scalable digital solutions.
        </p>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="reveal group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:border-violet-400/20"
            >
              {/* GLOW */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 blur-3xl ${project.glow}`}
              />

              {/* TOP */}
              <div className="relative p-8">
                {/* ICON */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-gradient-to-r ${project.gradient} text-3xl shadow-2xl`}
                >
                  {project.icon}
                </div>

                {/* TITLE */}
                <h3 className="mt-8 text-3xl font-bold text-white leading-tight">
                  {project.title}
                </h3>

                {/* DESC */}
                <p className="mt-5 text-slate-400 leading-relaxed text-[15px]">
                  {project.desc}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-3 mt-7">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="flex items-center gap-4 mt-8">
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/link inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r ${project.gradient} px-5 py-3 text-sm font-semibold text-white shadow-xl transition duration-300 hover:scale-[1.04]`}
                  >
                    Live Preview

                    <ArrowUpRight
                      size={16}
                      className="transition group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
                    />
                  </a>

                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-3 text-sm font-semibold text-white hover:border-violet-400/30 transition duration-300"
                  >
                    <ExternalLink size={16} />

                    Source Code
                  </a>
                </div>
              </div>

              {/* HOVER LINE */}
              <div
                className={`absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r ${project.gradient} transition-all duration-700 group-hover:w-full`}
              />

              {/* FLOATING ELEMENT */}
              <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition duration-500">
                <Sparkles className="text-violet-300" size={20} />
              </div>

              {/* BACKGROUND SHAPE */}
              <div className="absolute -bottom-20 -right-20 w-56 h-56 rounded-full bg-white/[0.03]" />

              {/* ACTIVE EFFECT */}
              {hovered === index && (
                <div className="absolute inset-0 border border-violet-400/20 rounded-[32px] pointer-events-none" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}