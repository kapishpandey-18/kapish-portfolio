import { profile } from '../data/profile'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="mt-3 text-neutral-400 max-w-2xl mx-auto">
          Building scalable solutions and crafting digital experiences
        </p>
      </div>

      <div className="card-overlay rounded-xl p-8 md:p-12 max-w-4xl mx-auto">
        <div className="space-y-6 text-neutral-300 leading-relaxed">
          <p className="text-lg">
            Hi! I'm <span className="text-blue-500 font-semibold">{profile.name}</span>, a Senior Software Engineer with 8+ years of experience 
            specializing in <span className="text-purple-400">JavaScript, React, and Node.js</span>. 
            I focus on building environment-configurable SDKs and scalable architectures for large-scale platforms.
          </p>

          <p>
            Currently working at <span className="text-cyan-400 font-semibold">Quest Global (Jio Platforms Ltd)</span>, 
            where I've been driving SDK development and integration efforts across Web and KaiOS platforms. 
            I collaborate with cross-functional teams to deliver robust, production-ready solutions that enhance integration speed and reliability.
          </p>

          <p>
            My expertise spans the full stack — from building pixel-perfect React frontends with Tailwind CSS to designing 
            RESTful APIs with Node.js and MongoDB. I'm passionate about creating <span className="text-blue-400">developer-friendly SDKs</span>, 
            writing clean documentation, and leveraging AI tools like GitHub Copilot to accelerate development workflows.
          </p>

          <p>
            Beyond my day job, I build <span className="text-purple-400">SaaS platforms for startups</span> and local businesses — 
            including salon management systems, car cleaning apps, and custom automation tools. 
            I enjoy turning ideas into reality with rapid prototyping and agile development.
          </p>

          <p className="text-lg border-l-4 border-blue-500 pl-4 italic">
            "I believe in documentation-first development, scalable architectures, and building products that solve real problems."
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-blue-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center gap-2 text-purple-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>8+ years experience</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <span>Available for freelance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
