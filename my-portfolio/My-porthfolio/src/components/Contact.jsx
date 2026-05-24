import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("visible", e.isIntersecting)),
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
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="section-inner">
        <div className="section-label reveal">Contact</div>
        <h2 className="section-title reveal">
          Let's <span className="accent">Connect</span>
        </h2>
        <p className="section-sub reveal">
          Open to internships, collaborations, or new opportunities in software development.
        </p>

        <div className="contact-grid reveal">
          <div className="contact-info">
            <div className="contact-card">
              <span className="contact-icon">📞</span>
              <div>
                <div className="contact-label">Phone</div>
                <div className="contact-value">(+94) 77 588 1990</div>
              </div>
            </div>
            <div className="contact-card">
              <span className="contact-icon">✉️</span>
              <div>
                <div className="contact-label">Email</div>
                <a href="mailto:Sihathnithijaya@gmail.com" className="contact-value hoverable">Sihathnithijaya@gmail.com</a>
              </div>
            </div>
            <div className="contact-card">
              <span className="contact-icon">📍</span>
              <div>
                <div className="contact-label">Location</div>
                <div className="contact-value">Paligedara, Piliyandala, Sri Lanka</div>
              </div>
            </div>
            <div className="contact-card">
              <span className="contact-icon">⌨️</span>
              <div>
                <div className="contact-label">GitHub</div>
                <a href="https://github.com/Sihathnithijaya" className="contact-value hoverable" target="_blank" rel="noopener noreferrer">github.com/Sihathnithijaya</a>
              </div>
            </div>
            <div className="availability-badge">
              <span className="avail-dot" />
              Available for internships and collaborations
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {sent && <div className="form-success">✅ Message sent! I'll get back to you soon.</div>}
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                placeholder="Let's build something amazing together..."
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="form-input"
              />
            </div>
            <button type="submit" className="btn-primary full hoverable">
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
