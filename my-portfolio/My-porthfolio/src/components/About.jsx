import { useEffect, useRef } from "react";
import { Code2, Sparkles, Rocket, Brain } from "lucide-react";
import me from "../assets/me.jpg";

const stats = [
  { value: "2+", label: "Years Learning & Building" },
  { value: "10+", label: "Technologies Explored" },
  { value: "4+", label: "Projects Delivered" },
  { value: "∞", label: "Passion for Innovation" },
];

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) =>
          e.target.classList.toggle("visible", e.isIntersecting)
        ),
      { threshold: 0.15 }
    );

    const els = ref.current?.querySelectorAll(".reveal");

    els?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-violet-600/15 blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/15 blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* SECTION LABEL */}
        <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-violet-300 text-sm font-medium mb-8">
          <Sparkles size={16} />
          About Me
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <div className="reveal relative group">
            <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-400 opacity-30 blur-2xl group-hover:opacity-50 transition duration-700" />

            <div className="relative rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-violet-500/20 blur-3xl" />

              <div className="flex flex-col items-center text-center">
                {/* IMAGE */}
                <div className="relative group">
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-400 opacity-30 blur-2xl group-hover:opacity-50 transition duration-700" />

                  <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-violet-500/20">
                    <img
                      src={me}
                      alt="Sihath Rathnayake"
                      className="w-full h-full rounded-full object-cover object-top scale-105 group-hover:scale-110 transition duration-700"
                    />
                  </div>
                </div>

                <p className="mt-6 text-violet-300 font-medium">
                  Full Stack Developer • Software Engineering Student
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap justify-center gap-3 mt-6">
                  <span className="px-4 py-2 rounded-full bg-violet-500/10 border border-violet-400/20 text-violet-200 text-sm">
                    React
                  </span>

                  <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-200 text-sm">
                    FastAPI
                  </span>

                  <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-200 text-sm">
                    PostgreSQL
                  </span>

                  <span className="px-4 py-2 rounded-full bg-pink-500/10 border border-pink-400/20 text-pink-200 text-sm">
                    UI/UX
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8">
            <div className="reveal">
              <h2 className="text-5xl md:text-6xl font-black leading-tight text-white">
                Crafting Digital
                <span className="block bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Experiences
                </span>
              </h2>
            </div>

            <p className="reveal text-slate-300 text-lg leading-relaxed">
              I’m a passionate software engineering student focused on building
              modern, scalable, and user-centric digital solutions.
            </p>

            <p className="reveal text-slate-400 text-lg leading-relaxed">
              My experience spans across full stack development, API
              engineering, UI/UX design, and modern web technologies.
            </p>

            {/* FEATURE CARDS */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="reveal rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:-translate-y-1 transition duration-300">
                <div className="w-12 h-12 rounded-2xl bg-violet-500/15 flex items-center justify-center text-violet-300 mb-4">
                  <Code2 />
                </div>

                <h4 className="text-white font-semibold text-lg">
                  Full Stack Development
                </h4>

                <p className="text-slate-400 mt-2 text-sm leading-relaxed">
                  Developing responsive and scalable web applications.
                </p>
              </div>

              <div className="reveal rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:-translate-y-1 transition duration-300">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/15 flex items-center justify-center text-blue-300 mb-4">
                  <Rocket />
                </div>

                <h4 className="text-white font-semibold text-lg">
                  Modern Solutions
                </h4>

                <p className="text-slate-400 mt-2 text-sm leading-relaxed">
                  Building innovative systems with performance and scalability.
                </p>
              </div>

              <div className="reveal rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:-translate-y-1 transition duration-300">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 flex items-center justify-center text-cyan-300 mb-4">
                  <Brain />
                </div>

                <h4 className="text-white font-semibold text-lg">
                  Continuous Learning
                </h4>

                <p className="text-slate-400 mt-2 text-sm leading-relaxed">
                  Exploring emerging technologies and frameworks.
                </p>
              </div>

              <div className="reveal rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:-translate-y-1 transition duration-300">
                <div className="w-12 h-12 rounded-2xl bg-pink-500/15 flex items-center justify-center text-pink-300 mb-4">
                  <Sparkles />
                </div>

                <h4 className="text-white font-semibold text-lg">
                  Creative UI/UX
                </h4>

                <p className="text-slate-400 mt-2 text-sm leading-relaxed">
                  Designing visually engaging and intuitive interfaces.
                </p>
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="reveal rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 text-center hover:border-violet-400/30 transition duration-300"
                >
                  <div className="text-3xl font-black bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                    {s.value}
                  </div>

                  <div className="text-slate-400 text-sm mt-2">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}