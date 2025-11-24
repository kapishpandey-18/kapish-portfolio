import { useMemo, useState } from "react";
import Seo from "../components/Seo";
import { dsaTopics } from "../data/dsaTopicsData";

const STATUS_STYLES = {
  Planning: "bg-amber-500/10 text-amber-300 border border-amber-400/40",
  Learning: "bg-blue-500/10 text-blue-300 border border-blue-400/40",
  Practicing: "bg-purple-500/10 text-purple-300 border border-purple-400/40",
  Confident: "bg-emerald-500/10 text-emerald-300 border border-emerald-400/40",
};

export default function DsaPage() {
  const [selectedTopicId, setSelectedTopicId] = useState(dsaTopics[0]?.id || "");

  const selectedTopic = useMemo(
    () => dsaTopics.find((topic) => topic.id === selectedTopicId) || dsaTopics[0],
    [selectedTopicId]
  );

  return (
    <>
      <Seo
        title="DSA & Problem Solving Journey"
        description="Tracking Kapish's 2025 DSA preparation plan across 11 core topics with JavaScript."
        pathname="/dsa"
      />
      <section className="mx-auto max-w-6xl px-4 py-16 space-y-10">
        <header className="space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-neutral-500">Interview Prep</p>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-emerald-200 bg-clip-text text-transparent">
              DSA & Problem Solving Journey – 2025
            </h1>
            <p className="mt-4 text-lg text-neutral-400 max-w-3xl">
              Preparing for global product-based roles by mastering 11 core topics in JavaScript. The goal is to focus on
              patterns, write clean reusable utilities, and make system-oriented decisions during coding rounds.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full border border-neutral-700 text-sm text-neutral-200">11 core topics</span>
            <span className="px-4 py-2 rounded-full border border-neutral-700 text-sm text-neutral-200">
              JavaScript (Node + Browser)
            </span>
            <span className="px-4 py-2 rounded-full border border-neutral-700 text-sm text-neutral-200">
              Focus: Patterns over memorization
            </span>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-[260px,1fr]">
          {/* Topics */}
          <div className="card-overlay rounded-xl border border-neutral-800 divide-y divide-neutral-800 overflow-hidden">
            {dsaTopics.map((topic) => {
              const isActive = topic.id === selectedTopicId;
              return (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopicId(topic.id)}
                  className={`w-full text-left px-4 py-4 transition-colors ${
                    isActive ? "bg-neutral-900/70 border-l-2 border-emerald-400" : "hover:bg-neutral-900/40"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-neutral-100">{topic.title}</p>
                      <p className="text-xs text-neutral-500 mt-1">{topic.problemsSolved} problems solved</p>
                    </div>
                    <span
                      className={`text-[11px] px-2 py-1 rounded-full font-medium ${STATUS_STYLES[topic.status] || ""}`}
                    >
                      {topic.status}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Details */}
          <div className="card-overlay rounded-xl border border-neutral-800 p-6 space-y-6">
            <div>
              <p className="text-sm text-neutral-500 uppercase tracking-[0.2em]">Selected Topic</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">{selectedTopic.title}</h2>
              <p className="mt-3 text-neutral-300 min-h-[60px]">{selectedTopic.summary}</p>
            </div>

            <div>
              <p className="text-sm font-semibold text-neutral-400 uppercase tracking-[0.3em] mb-3">Key Patterns</p>
              <div className="flex flex-wrap gap-2">
                {selectedTopic.keyPatterns.map((pattern) => (
                  <span key={pattern} className="px-3 py-1 rounded-full text-xs bg-blue-500/10 text-blue-200">
                    {pattern}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-400">
              <span className="font-medium text-white">Problems solved:</span>
              <span className="px-3 py-1 rounded-md border border-neutral-700 text-neutral-200">{selectedTopic.problemsSolved}</span>
              <span className="px-3 py-1 rounded-md border border-neutral-700 text-neutral-200">Status: {selectedTopic.status}</span>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-neutral-400 uppercase tracking-[0.3em]">Links</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={selectedTopic.notesLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg border border-blue-500/40 text-blue-300 hover:bg-blue-500/10 transition"
                >
                  View Notes (Markdown)
                </a>
                <a
                  href={selectedTopic.codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/10 transition"
                >
                  View Code on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
