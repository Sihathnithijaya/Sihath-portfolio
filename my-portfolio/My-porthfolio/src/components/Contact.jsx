import { useEffect, useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Link2,
  Send,
} from "lucide-react";

export default function Contact() {
  const ref = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();

    setSent(true);

    setTimeout(() => setSent(false), 3500);

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-600/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[140px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* SECTION HEADER */}
        <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-violet-300 text-sm font-medium mb-6">
          <Send size={16} />
          Contact
        </div>

        <h2 className="reveal text-5xl md:text-6xl font-black text-white leading-tight">
          Let’s Build
          <span className="block bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Something Great
          </span>
        </h2>

        <p className="reveal mt-6 max-w-2xl text-lg text-slate-400 leading-relaxed">
          Whether it's collaboration, innovative ideas, or technology-driven
          solutions, I’m always open to meaningful conversations and exciting
          digital projects.
        </p>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-10 mt-16">
          {/* LEFT SIDE */}
          <div className="space-y-5">
            {/* CARD */}
            <div className="reveal group rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 hover:border-violet-400/20 transition duration-300">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-violet-500/15 flex items-center justify-center text-violet-300">
                  <Phone />
                </div>

                <div>
                  <div className="text-slate-400 text-sm">Phone</div>

                  <a
                    href="tel:+94775881990"
                    className="text-white text-lg font-medium hover:text-violet-300 transition"
                  >
                    (+94) 77 588 1990
                  </a>
                </div>
              </div>
            </div>

            {/* EMAIL */}
            <div className="reveal group rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 hover:border-blue-400/20 transition duration-300">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/15 flex items-center justify-center text-blue-300">
                  <Mail />
                </div>

                <div>
                  <div className="text-slate-400 text-sm">Email</div>

                  <a
                    href="mailto:Sihathnithijaya@gmail.com"
                    className="text-white text-lg font-medium hover:text-blue-300 transition"
                  >
                    Sihathnithijaya@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* LOCATION */}
            <div className="reveal group rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 hover:border-cyan-400/20 transition duration-300">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/15 flex items-center justify-center text-cyan-300">
                  <MapPin />
                </div>

                <div>
                  <div className="text-slate-400 text-sm">Location</div>

                  <div className="text-white text-lg font-medium">
                    Piliyandala, Sri Lanka
                  </div>
                </div>
              </div>
            </div>

            {/* SOCIALS */}
            <div className="reveal flex flex-wrap gap-4 pt-2">
              <a
                href="https://github.com/Sihathnithijaya"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-5 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-violet-400/30 hover:-translate-y-1 transition duration-300"
              >
                <ExternalLink className="text-white group-hover:text-violet-300" />

                <span className="text-slate-300 group-hover:text-white">
                  GitHub
                </span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-5 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-blue-400/30 hover:-translate-y-1 transition duration-300"
              >
                <Link2 className="text-white group-hover:text-blue-300" />

                <span className="text-slate-300 group-hover:text-white">
                  LinkedIn
                </span>
              </a>
            </div>
          </div>

          {/* CONTACT FORM */}
          <form
            onSubmit={handleSubmit}
            className="reveal relative rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 overflow-hidden"
          >
            {/* FORM GLOW */}
            <div className="absolute top-0 right-0 w-52 h-52 bg-violet-500/10 blur-3xl" />

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-2">
                Send a Message
              </h3>

              <p className="text-slate-400 mb-8">
                Have a project or idea in mind? Let’s connect and create
                something exceptional.
              </p>

              {sent && (
                <div className="mb-6 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-5 py-4 text-emerald-300">
                  ✅ Message sent successfully.
                </div>
              )}

              {/* NAME */}
              <div className="mb-5">
                <label className="block text-sm text-slate-400 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-violet-400/40 focus:ring-2 focus:ring-violet-500/20 transition"
                />
              </div>

              {/* EMAIL */}
              <div className="mb-5">
                <label className="block text-sm text-slate-400 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-blue-400/40 focus:ring-2 focus:ring-blue-500/20 transition"
                />
              </div>

              {/* MESSAGE */}
              <div className="mb-8">
                <label className="block text-sm text-slate-400 mb-2">
                  Message
                </label>

                <textarea
                  rows={6}
                  required
                  placeholder="Tell me about your project or idea..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/20 transition resize-none"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="group w-full inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-500 px-6 py-4 text-white font-semibold shadow-2xl shadow-violet-500/20 hover:scale-[1.02] transition duration-300"
              >
                Send Message

                <Send
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}