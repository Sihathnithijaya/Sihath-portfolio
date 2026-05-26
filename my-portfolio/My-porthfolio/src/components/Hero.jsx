import { useEffect, useRef, useState } from "react";
import {
  ExternalLink,
  Mail,
  ArrowDown,
  Download,
  Sparkles,
} from "lucide-react";

const roles = [
  "Full Stack Developer",
  "Software Engineering Student",
  "UI/UX Enthusiast",
  "Creative Problem Solver",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  const [displayed, setDisplayed] = useState("");

  const [deleting, setDeleting] = useState(false);

  const canvasRef = useRef(null);

  /* TYPEWRITER */
  useEffect(() => {
    const current = roles[roleIndex];

    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, 70);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => {
        setDeleting(true);
      }, 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(displayed.slice(0, -1));
      }, 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);

      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  /* PARTICLE BACKGROUND */
  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let animationFrame;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        ctx.beginPath();

        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(139,92,246,${p.opacity})`;

        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > width) p.dx *= -1;

        if (p.y < 0 || p.y > height) p.dy *= -1;
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;

          const dy = particles[i].y - particles[j].y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 130) {
            ctx.beginPath();

            ctx.moveTo(particles[i].x, particles[i].y);

            ctx.lineTo(particles[j].x, particles[j].y);

            ctx.strokeStyle = `rgba(139,92,246,${
              0.08 * (1 - distance / 130)
            })`;

            ctx.lineWidth = 0.6;

            ctx.stroke();
          }
        }
      }

      animationFrame = requestAnimationFrame(draw);
    };

    draw();

    const resize = () => {
      width = canvas.width = window.innerWidth;

      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center justify-center px-6"
    >
      {/* PARTICLE CANVAS */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-70"
      />

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-600/20 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[140px]" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <div>
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-violet-300 text-sm font-medium mb-8 shadow-lg shadow-violet-500/10">
              <Sparkles size={16} />
              Designing & Building Digital Experiences
            </div>

            {/* TITLE */}
            <h1 className="text-5xl md:text-7xl font-black leading-tight text-white">
              Sihath
              <span className="block bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Rathnayake
              </span>
            </h1>

            {/* TYPEWRITER */}
            <div className="mt-6 flex items-center flex-wrap gap-2 text-xl md:text-2xl font-medium text-slate-300">
              <span className="text-violet-400">{`<`}</span>

              <span>{displayed}</span>

              <span className="animate-pulse text-violet-400">|</span>

              <span className="text-violet-400">{`/>`}</span>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400">
              Passionate about building scalable applications, intuitive user
              experiences, and modern digital products that combine clean
              design, performance, and innovation.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5 mt-10">
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-500 px-7 py-4 text-white font-semibold shadow-2xl shadow-violet-500/20 hover:scale-[1.03] transition duration-300"
              >
                View Projects

                <ArrowDown
                  size={18}
                  className="group-hover:translate-y-1 transition"
                />
              </button>

              <a
                href="/resume.pdf"
                download
                className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-7 py-4 text-white font-semibold hover:border-violet-400/30 hover:bg-violet-500/10 transition duration-300"
              >
                Download CV

                <Download
                  size={18}
                  className="group-hover:translate-y-1 transition"
                />
              </a>
            </div>

            {/* SOCIALS */}
            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="https://github.com/Sihathnithijaya"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4 hover:border-violet-400/30 hover:-translate-y-1 transition duration-300"
              >
                <ExternalLink className="text-white group-hover:text-violet-300 transition" />

                <span className="text-slate-300 group-hover:text-white">
                  GitHub
                </span>
              </a>

              <a
                href="mailto:Sihathnithijaya@gmail.com"
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4 hover:border-blue-400/30 hover:-translate-y-1 transition duration-300"
              >
                <Mail className="text-white group-hover:text-blue-300 transition" />

                <span className="text-slate-300 group-hover:text-white">
                  Email
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative hidden lg:flex items-center justify-center">
            {/* GLOW */}
            <div className="absolute w-[420px] h-[420px] rounded-full bg-gradient-to-r from-violet-600/30 to-blue-500/20 blur-[100px]" />

            {/* MAIN CARD */}
            <div className="relative w-[380px] h-[460px] rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden shadow-2xl shadow-violet-500/10">
              {/* TOP BAR */}
              <div className="flex items-center gap-2 px-6 py-5 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-400" />

                <div className="w-3 h-3 rounded-full bg-yellow-400" />

                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>

              {/* CONTENT */}
              <div className="p-8 flex flex-col h-full">
                <div className="flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center text-6xl font-black text-white shadow-2xl shadow-violet-500/30">
                    SN
                  </div>
                </div>

                <div className="mt-10 space-y-5">
                  <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-5">
                    <div className="text-slate-500 text-sm">
                      Primary Focus
                    </div>

                    <div className="text-white mt-1 font-medium">
                      Full Stack Development
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-5">
                    <div className="text-slate-500 text-sm">
                      Current Interests
                    </div>

                    <div className="text-white mt-1 font-medium">
                      AI • Web Apps • UI/UX • APIs
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-5">
                    <div className="text-slate-500 text-sm">Mindset</div>

                    <div className="text-white mt-1 font-medium">
                      Build. Learn. Improve.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}