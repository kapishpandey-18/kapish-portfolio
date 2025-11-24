import { profile } from "../data/profile";
import { Link } from "react-router-dom";
import ArrowRightIcon from "../assets/icons/arrow-right.svg?react";
import DownloadIcon from "../assets/icons/download.svg?react";

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 pt-20 pb-16">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
          <div className="relative">
            <img
              src="/myprofile.jpg"
              alt={profile.name}
              className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-blue-500/20"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-400 text-sm font-medium">
              Open to Opportunities
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-neutral-100 to-neutral-300 bg-clip-text text-transparent">
            {profile.name}
          </h1>

          <p className="mt-3 text-xl md:text-2xl text-blue-500 font-medium">{profile.title}</p>

          <p className="mt-4 max-w-2xl text-neutral-400 leading-relaxed">{profile.summary}</p>

          {/* Skills */}
          <div className="mt-6 flex flex-wrap gap-2 justify-center md:justify-start">
            {profile.skills.map((s) => (
              <span
                key={s}
                className="px-4 py-2 rounded-lg bg-gradient-to-br from-blue-500/5 to-purple-600/5 border border-blue-500/20 text-sm text-neutral-200 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
              >
                {s}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              to="/#projects"
              className="group relative px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <ArrowRightIcon
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </span>
            </Link>

            <Link
              to="/#contact"
              className="px-6 py-3 rounded-lg border-2 border-cyan-400/50 text-cyan-400 font-medium hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </Link>

            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 rounded-lg border border-neutral-700 text-neutral-300 font-medium hover:border-purple-600 hover:text-purple-600 hover:bg-purple-600/5 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <DownloadIcon className="w-4 h-4" aria-hidden="true" />
                Resume
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
