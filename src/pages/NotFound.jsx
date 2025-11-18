import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you were searching for is unavailable. Return to Kapish Pandey's portfolio to keep exploring case studies and experience."
        pathname="/404"
      />
      <section className="mx-auto max-w-6xl px-4 py-20 min-h-[70vh] flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-blue-500">404</h1>
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold">Page Not Found</h2>
        <p className="mt-4 text-neutral-400 max-w-md">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            to="/"
            className="rounded-md bg-blue-500 px-6 py-3 text-white font-medium hover:bg-blue-500/90 transition-colors"
          >
            Go Home
          </Link>
          <Link
            to="/case-studies"
            className="rounded-md border border-neutral-700 px-6 py-3 hover:border-blue-500 hover:text-blue-500 transition-colors"
          >
            View Case Studies
          </Link>
        </div>
      </section>
    </>
  );
}
