import CaseStudyLayout from "../../components/CaseStudyLayout";

export default function CSJioAds() {
  const sections = [
    {
      title: "Problem",
      content: (
        <div>
          <h2 className="text-2xl font-semibold text-purple-400 mb-4">
            Problem
          </h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            Large-scale apps (OTT, news, games, telecom apps) require:
          </p>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4 mb-4">
            <li>Low-latency ad delivery</li>
            <li>Reliable SDK integration</li>
            <li>High fill-rate and revenue performance</li>
            <li>Audience segmentation</li>
            <li>Real-time analytics</li>
            <li>Multi-device support (Android, iOS, TV, Web, STB)</li>
          </ul>
          <p className="text-neutral-300 leading-relaxed mb-4">
            Existing ad SDKs did not offer:
          </p>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>Deep India-specific audience targeting</li>
            <li>Unified dashboard across multiple devices</li>
            <li>Telecom-scale audience personalization</li>
            <li>Low latency on low bandwidth networks</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Goal",
      content: (
        <div>
          <h2 className="text-2xl font-semibold text-purple-400 mb-4">Goal</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            To build a robust ad platform that delivers:
          </p>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>High-performing ad experiences across devices</li>
            <li>Real-time bidding and personalization</li>
            <li>Rich analytics for advertisers and publishers</li>
            <li>Unified SDK with minimal integration effort</li>
            <li>Revenue optimization and transparency</li>
          </ul>
        </div>
      ),
    },
    {
      title: "My Role",
      content: (
        <div>
          <h2 className="text-2xl font-semibold text-purple-400 mb-4">
            My Role – Software Engineer & Product Builder
          </h2>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>SDK development for web & smart devices</li>
            <li>Ad rendering optimization for performance</li>
            <li>Custom event tracking & analytics</li>
            <li>Error handling, fault tolerance, and caching</li>
            <li>Cross-team collaboration with backend & campaign teams</li>
            <li>Debugging and regression testing across OEM / browsers</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Solution",
      content: (
        <div>
          <h2 className="text-2xl font-semibold text-purple-400 mb-4">
            Solution / Features
          </h2>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>Plug-and-play JavaScript SDK with &lt; 200ms render time</li>
            <li>Custom ad units: banner, interstitial, native, video</li>
            <li>Real-time targeting (age, gender, category, interests)</li>
            <li>Caching & preloading techniques to prevent blank ads</li>
            <li>Debug mode for QA & integration teams</li>
            <li>Performance metrics and viewability tracking</li>
            <li>Fallback logic for network drops & fill-rate optimization</li>
            <li>Cross-environment config: dev, stg, preprod, prod</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Tech Stack",
      content: (
        <div>
          <h2 className="text-2xl font-semibold text-purple-400 mb-4">
            Tech Stack
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-neutral-700 rounded-lg">
              <thead className="bg-neutral-800">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-purple-400">
                    Area
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-purple-400">
                    Technology
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-700">
                <tr>
                  <td className="px-6 py-3 text-neutral-300">SDK</td>
                  <td className="px-6 py-3 text-neutral-300">
                    JavaScript / TypeScript
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-neutral-300">Backend</td>
                  <td className="px-6 py-3 text-neutral-300">
                    Microservices (integrated)
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-neutral-300">Build System</td>
                  <td className="px-6 py-3 text-neutral-300">
                    Webpack / Babel
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-neutral-300">Logging</td>
                  <td className="px-6 py-3 text-neutral-300">
                    Custom event emitters + analytics pipelines
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-neutral-300">Testing</td>
                  <td className="px-6 py-3 text-neutral-300">
                    Playwright, BrowserStack, Postman
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-neutral-300">Deployment</td>
                  <td className="px-6 py-3 text-neutral-300">
                    CI/CD pipeline with versioning
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-neutral-300">Documentation</td>
                  <td className="px-6 py-3 text-neutral-300">
                    Markdown + Confluence
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      title: "Outcomes",
      content: (
        <div>
          <h2 className="text-2xl font-semibold text-purple-400 mb-4">
            Outcomes
          </h2>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>Reduced ad render failures and blank ads</li>
            <li>Improved average ad load time from &gt;1.2s to ~250ms</li>
            <li>Increased fill-rate through optimized fallback sequence</li>
            <li>
              Accelerated onboarding of partner apps through simplified SDK
              integration
            </li>
            <li>
              Reduced support queries through Debug Mode & detailed error logs
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Challenges",
      content: (
        <div>
          <h2 className="text-2xl font-semibold text-purple-400 mb-4">
            Challenges
          </h2>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>
              Rendering consistency across smart TVs, browsers & OEM variations
            </li>
            <li>Handling autoplay restrictions for muted/unmuted ads</li>
            <li>
              Size/layout mismatch across responsive and full-screen placements
            </li>
            <li>Backward compatibility with legacy SDK versions</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Learnings",
      content: (
        <div>
          <h2 className="text-2xl font-semibold text-purple-400 mb-4">
            Learnings
          </h2>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>SDK success depends on reliability, not just features</li>
            <li>
              Better debugging tools reduce developer onboarding time
              drastically
            </li>
            <li>Performance optimization has the highest business ROI</li>
            <li>
              Error logging should be developer-friendly, not just internal
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Future Roadmap",
      content: (
        <div>
          <h2 className="text-2xl font-semibold text-purple-400 mb-4">
            Future Roadmap
          </h2>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>Programmatic bidding improvements</li>
            <li>ML-powered ad recommendation</li>
            <li>Automated fraud detection & click anomaly monitoring</li>
            <li>In-app acquisition / re-targeting tools</li>
            <li>Publisher revenue forecasting using AI</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Summary",
      content: (
        <div className="p-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-500/30">
          <h2 className="text-xl font-semibold text-purple-300 mb-4">
            Summary
          </h2>
          <p className="text-neutral-300 leading-relaxed">
            JioAds empowers advertisers and app developers through a
            high-performance SDK focused on speed, reliability, deep analytics,
            and seamless multi-device monetization. By addressing the unique
            challenges of large-scale Indian apps, it drives better ad
            experiences and maximizes revenue potential.
          </p>
        </div>
      ),
    },
  ];

  return (
    <CaseStudyLayout
      title="JioAds – Enterprise Advertising & Monetization SDK Platform"
      subtitle="An enterprise-grade advertising and monetization SDK ecosystem built for high-volume apps across Android, iOS, Web, and Smart Devices, enabling targeted campaigns and programmatic advertising."
      gradientColors="from-purple-400 to-pink-500"
      sections={sections}
    />
  );
}
