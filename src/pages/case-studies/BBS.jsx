import CaseStudyLayout from "../../components/CaseStudyLayout";

export default function CSBBS() {
  const sections = [
    {
      title: "Problem",
      content: (
        <div>
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Problem</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            Most salons rely on manual registers or WhatsApp for appointments,
            leading to:
          </p>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>Missed bookings</li>
            <li>No client history or loyalty tracking</li>
            <li>Manual revenue & commission calculation</li>
            <li>Zero analytics to understand business trends</li>
            <li>Staff salary & incentives managed manually</li>
            <li>No centralized system across branches</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Goal",
      content: (
        <div>
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Goal</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            To create a fully automated system that helps salons:
          </p>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>Increase returning clients via CRM automation</li>
            <li>Reduce manual effort in managing bookings & billing</li>
            <li>Track inventory usage & stock levels</li>
            <li>Maintain transparent payouts to staff</li>
            <li>Access real-time insights on business performance</li>
          </ul>
        </div>
      ),
    },
    {
      title: "My Role",
      content: (
        <div>
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            My Role – Software Engineer & Product Builder
          </h2>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>Product & feature planning</li>
            <li>UI/UX design (React + Tailwind)</li>
            <li>Backend development (Node.js + MongoDB)</li>
            <li>API architecture & documentation</li>
            <li>DB schema & deployment structure</li>
            <li>Payment automation with Razorpay subscriptions</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Solution",
      content: (
        <div>
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            Solution / Features
          </h2>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>15-day free trial onboarding → upgrade via Razorpay</li>
            <li>Smart appointment calendar with auto reminders</li>
            <li>Client history & visit insights</li>
            <li>Staff commissions & automated salary calculation</li>
            <li>Digital membership plans with auto discount</li>
            <li>Product & inventory tracking with low-stock alerts</li>
            <li>Daily / Monthly / Yearly KPI dashboard</li>
            <li>Multi-branch support (future)</li>
            <li>iOS + Android app (via Capacitor)</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Tech Stack",
      content: (
        <div>
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            Tech Stack
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-neutral-700 rounded-lg">
              <thead className="bg-neutral-800">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-blue-400">
                    Layer
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-blue-400">
                    Technology
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-700">
                <tr>
                  <td className="px-6 py-3 text-neutral-300">Frontend</td>
                  <td className="px-6 py-3 text-neutral-300">
                    React.js, Tailwind CSS
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-neutral-300">Backend</td>
                  <td className="px-6 py-3 text-neutral-300">
                    Node.js, Express.js
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-neutral-300">Database</td>
                  <td className="px-6 py-3 text-neutral-300">MongoDB</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-neutral-300">Authentication</td>
                  <td className="px-6 py-3 text-neutral-300">JWT + OTP</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-neutral-300">Payments</td>
                  <td className="px-6 py-3 text-neutral-300">
                    Razorpay Subscriptions
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-neutral-300">Notifications</td>
                  <td className="px-6 py-3 text-neutral-300">Email + SMS</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-neutral-300">Mobile App</td>
                  <td className="px-6 py-3 text-neutral-300">
                    Capacitor (Web → Android & iOS)
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-neutral-300">Deployment</td>
                  <td className="px-6 py-3 text-neutral-300">Vercel / AWS</td>
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
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            Outcomes
          </h2>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>Eliminates manual registers & calculations</li>
            <li>Reduces appointment drop-off by reminders</li>
            <li>Boosts returning customers via CRM automation</li>
            <li>Saves 3–5 hours/day of admin work</li>
            <li>Provides 100% transparent revenue & staff payout tracking</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Challenges",
      content: (
        <div>
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            Challenges
          </h2>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>Designing the DB to support multi-branch future</li>
            <li>Handling dynamic service pricing by gender & package</li>
            <li>
              Syncing appointment, billing, membership, and CRM modules together
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Learnings",
      content: (
        <div>
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            Learnings
          </h2>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>Real-world salons need automation more than UI</li>
            <li>CRM + reminders have more impact than just billing</li>
            <li>SaaS subscription & trial lock flow must be designed early</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Future Roadmap",
      content: (
        <div>
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            Future Roadmap
          </h2>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>WhatsApp and SMS automation for follow-ups</li>
            <li>AI-based smart rebooking recommendations</li>
            <li>Automated ads targeting for lost clients</li>
            <li>Marketplace for buying salon products</li>
            <li>Franchise/Branch analytics module</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Summary",
      content: (
        <div className="p-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl border border-blue-500/30">
          <h2 className="text-xl font-semibold text-blue-300 mb-4">Summary</h2>
          <p className="text-neutral-300 leading-relaxed">
            SalonMind transforms manual salon operations into a fully automated
            SaaS ecosystem powered by AI, CRM, analytics, and digital payments.
            By centralizing all salon management tasks, it saves time, boosts
            client retention, and provides actionable business insights.
          </p>
        </div>
      ),
    },
  ];

  return (
    <CaseStudyLayout
      title="SalonMind – AI-Powered Salon Management Platform"
      subtitle="An AI-powered salon management SaaS platform designed to digitalize daily salon operations, centralizing appointments, billing, memberships, and analytics into one smart ecosystem."
      gradientColors="from-blue-400 to-purple-500"
      sections={sections}
    />
  );
}
