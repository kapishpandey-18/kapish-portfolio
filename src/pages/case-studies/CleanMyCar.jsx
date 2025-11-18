import CaseStudyLayout from "../../components/CaseStudyLayout";
import Seo from "../../components/Seo";

export default function CSCleanMyCar() {
  const sections = [
    {
      title: "Problem",
      content: (
        <div>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Problem</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            Traditional car cleaning services lack:
          </p>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>Regular attendance and service tracking</li>
            <li>Proof of daily cleaning</li>
            <li>Transparent subscription billing</li>
            <li>Service consistency and reliability</li>
            <li>Customer support and escalation management</li>
            <li>Platform for cleaners to manage customers and earnings</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Goal",
      content: (
        <div>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Goal</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            To create a transparent and reliable subscription platform for both car owners and car
            cleaners by:
          </p>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>Digitizing daily cleaning tracking</li>
            <li>Automating subscription payments</li>
            <li>Providing proof of service with images</li>
            <li>Offering cleaner payouts and performance tracking</li>
            <li>Making customer feedback measurable</li>
          </ul>
        </div>
      ),
    },
    {
      title: "My Role",
      content: (
        <div>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
            My Role – Software Engineer & Product Builder
          </h2>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>Product concept & complete system architecture</li>
            <li>UI/UX design (mobile-first approach)</li>
            <li>Full-stack development (React, Node.js, MongoDB)</li>
            <li>API design & micro-modular backend separation</li>
            <li>Razorpay subscription automation</li>
            <li>Android/iOS app development using Capacitor</li>
            <li>Deployment & build optimization</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Solution",
      content: (
        <div>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Solution / Features</h2>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>Login with mobile number & OTP</li>
            <li>Subscription model with Mini / Sedan / SUV pricing</li>
            <li>Daily cleaning attendance + image proof</li>
            <li>Express clean and scheduled clean booking</li>
            <li>Partner dashboard for cleaner earnings and workload</li>
            <li>User dashboard for subscription, payments, and support</li>
            <li>Razorpay subscription & retry automation</li>
            <li>Support ticket handling and quick resolution</li>
            <li>PWA mobile experience + Android & iOS app</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Tech Stack",
      content: (
        <div>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Tech Stack</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-neutral-700 rounded-lg">
              <thead className="bg-neutral-800">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-cyan-400">Layer</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-cyan-400">
                    Technology
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-700">
                <tr>
                  <td className="px-6 py-3 text-neutral-300">Frontend</td>
                  <td className="px-6 py-3 text-neutral-300">React.js, Tailwind CSS</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-neutral-300">Backend</td>
                  <td className="px-6 py-3 text-neutral-300">Node.js, Express.js</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-neutral-300">Database</td>
                  <td className="px-6 py-3 text-neutral-300">MongoDB</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-neutral-300">Authentication</td>
                  <td className="px-6 py-3 text-neutral-300">OTP</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-neutral-300">Payments</td>
                  <td className="px-6 py-3 text-neutral-300">Razorpay Subscriptions</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-neutral-300">Notifications</td>
                  <td className="px-6 py-3 text-neutral-300">SMS & Push</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-neutral-300">Mobile App</td>
                  <td className="px-6 py-3 text-neutral-300">Capacitor (Web → Android/iOS)</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-neutral-300">Deployment</td>
                  <td className="px-6 py-3 text-neutral-300">Vercel / AWS / Railway</td>
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
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Outcomes</h2>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>Cleaner earnings become trackable and fair</li>
            <li>Customers receive transparent service quality</li>
            <li>Reduces customer complaints by maintaining history</li>
            <li>Improves customer retention with subscription automation</li>
            <li>Enables scaling across multiple societies without manual coordination</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Challenges",
      content: (
        <div>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Challenges</h2>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>Designing low-network image upload reliability</li>
            <li>Handling 6 AM–9 AM peak cleaning time concurrency</li>
            <li>Tracking cleaning partners across multiple housing societies</li>
            <li>Ensuring service time + car location + proof sync is smooth</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Learnings",
      content: (
        <div>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Learnings</h2>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>Operational flow is more complex than technical flow</li>
            <li>Reliability matters more than fancy UI in daily cleaning apps</li>
            <li>Push notifications dramatically reduce customer churn</li>
            <li>Payment recovery should be automated to avoid manual follow-ups</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Future Roadmap",
      content: (
        <div>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Future Roadmap</h2>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
            <li>GPS-based cleaner tracking (optional mode)</li>
            <li>WhatsApp Business bot for subscription management</li>
            <li>Partner onboarding automation + KYC</li>
            <li>Marketplace for car accessories & detailing services</li>
            <li>Car wash booking across partnered workshops</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Summary",
      content: (
        <div className="p-6 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-xl border border-cyan-500/30">
          <h2 className="text-xl font-semibold text-cyan-300 mb-4">Summary</h2>
          <p className="text-neutral-300 leading-relaxed">
            CleanMyCar introduces transparency and automation in daily car cleaning through
            subscription billing, image proof, partner performance tracking, and mobile-first
            workflow for both customers and cleaners.
          </p>
        </div>
      ),
    },
  ];

  return (
    <>
      <Seo
        title="CleanMyCar Case Study"
        description="How Kapish Pandey built CleanMyCar, a transparent subscription platform with proof-of-service, partner tools, and Razorpay automation."
        pathname="/case-studies/cleanmycar"
      />
      <CaseStudyLayout
        title="CleanMyCar – Daily Car Cleaning Subscription Platform"
        subtitle="A society-based car cleaning subscription platform designed for gated complexes, enabling transparent daily cleaning tracking, proof-of-service, and automated subscription billing."
        gradientColors="from-cyan-400 to-blue-500"
        sections={sections}
      />
    </>
  );
}
