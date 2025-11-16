import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import PropTypes from "prop-types";

function CaseStudyLayout({ title, subtitle, sections, gradientColors }) {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = sections.map((section) => section.title);

  return (
    <article className="mx-auto max-w-5xl px-4 py-8">
      {/* Back Button */}
      <Link
        to="/case-studies"
        className="inline-flex items-center gap-2 text-neutral-400 hover:text-cyan-400 transition-colors mb-6 group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span>Back to Case Studies</span>
      </Link>

      {/* Header */}
      <div className="mb-8">
        <h1
          className={`text-4xl font-bold bg-gradient-to-r ${gradientColors} bg-clip-text text-transparent`}
        >
          {title}
        </h1>
        <p className="mt-4 text-lg text-neutral-300">{subtitle}</p>
      </div>

      {/* Tabs Navigation with rounded border and icons */}
      <div className="mb-8">
        <div
          className="relative flex items-center gap-2 p-2 bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 shadow-lg"
          style={{ borderRadius: "1.75rem" }}
        >
          {/* Left Navigation Arrow */}
          <button
            onClick={() => setActiveTab(Math.max(0, activeTab - 1))}
            disabled={activeTab === 0}
            className="flex-shrink-0 p-2 bg-neutral-700/50 text-neutral-400 hover:text-white hover:bg-neutral-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            style={{ borderRadius: "1.75rem" }}
            aria-label="Previous section"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Tabs with horizontal scroll */}
          <div className="flex-1 overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 min-w-max px-1">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  style={{ borderRadius: "1.75rem" }}
                  className={`px-4 text-sm font-medium transition-all whitespace-nowrap ${
                    activeTab === index
                      ? `bg-gradient-to-r ${gradientColors} text-white shadow-lg`
                      : "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-700/50 border border-transparent hover:border-neutral-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Right Navigation Arrow */}
          <button
            onClick={() => setActiveTab(Math.min(sections.length - 1, activeTab + 1))}
            disabled={activeTab === sections.length - 1}
            className="flex-shrink-0 p-2 bg-neutral-700/50 text-neutral-400 hover:text-white hover:bg-neutral-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            style={{ borderRadius: "1.75rem" }}
            aria-label="Next section"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Progress indicator */}
        <div className="mt-2 text-center">
          <span className="text-xs text-neutral-500">
            Section {activeTab + 1} of {sections.length}
          </span>
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">{sections[activeTab].content}</div>

      {/* Navigation Buttons */}
      <div className="mt-8 flex justify-between items-center">
        <button
          onClick={() => setActiveTab(Math.max(0, activeTab - 1))}
          disabled={activeTab === 0}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all shadow-md"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </button>

        <span className="text-sm text-neutral-400 font-medium">
          {activeTab + 1} of {sections.length}
        </span>

        <button
          onClick={() => setActiveTab(Math.min(sections.length - 1, activeTab + 1))}
          disabled={activeTab === sections.length - 1}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all shadow-md"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </article>
  );
}

CaseStudyLayout.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  gradientColors: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default CaseStudyLayout;
