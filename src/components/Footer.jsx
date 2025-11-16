export default function Footer() {
  return (
    <footer className="border-t border-neutral-800">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-neutral-500 flex items-center justify-between">
        <p>© {new Date().getFullYear()} Kapish Pandey</p>
        <p className="hidden sm:block">Built with React + Tailwind, deployed on Vercel</p>
      </div>
    </footer>
  );
}
