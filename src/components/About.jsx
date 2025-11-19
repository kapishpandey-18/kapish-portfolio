import { profile } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
          About Me
        </h2>
      </div>

      <div className="card-overlay rounded-xl p-8 md:p-12 max-w-4xl mx-auto">
        <div className="space-y-6 text-neutral-300 leading-relaxed">
          <p className="text-lg">
            Senior Software Engineer with 8+ years of experience in React, Node.js, MongoDB, SDK
            engineering, and mobile apps using Capacitor. I build full products end-to-end —
            architecture, backend, UI/UX, mobile, and testing.
          </p>

          <p>
            I’ve created engineering POCs like{" "}
            <span className="text-blue-400 font-semibold">SalonMind</span> (SaaS platform) and{" "}
            <span className="text-cyan-400 font-semibold">MyCar</span> (subscription + mobile
            ecosystem) to strengthen my skills in system design, workflows, automation, and product
            engineering.
          </p>

          <p>
            I enjoy building clean, scalable systems and contributing to modern product teams
            globally.
          </p>
        </div>
      </div>
    </section>
  );
}
