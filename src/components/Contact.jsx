import { profile } from "../data/profile";
import { useState } from "react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState("idle"); // idle | loading | success | error
  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    const newErrors = {};
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!message || message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Validate
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setFormStatus("loading");

    try {
      const response = await fetch(
        import.meta.env.VITE_FORMSPREE_ENDPOINT || "https://formspree.io/f/mwkgoqel",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setFormStatus("success");
        e.target.reset();
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
      }
    } catch (err) {
      console.error("Contact form submission failed", err);
      setFormStatus("error");
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
      </div>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="card-overlay rounded-xl p-5">
          <h3 className="text-lg font-semibold text-blue-500 mb-4">Contact Information</h3>
          <div className="space-y-3">
            {profile.phone && (
              <p className="flex items-center gap-3 text-neutral-300">
                <svg
                  className="w-5 h-5 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  className="underline underline-offset-4 hover:text-blue-500 transition-colors"
                  href={`tel:${profile.phone}`}
                >
                  {profile.phone}
                </a>
              </p>
            )}
            <p className="flex items-center gap-3 text-neutral-300">
              <svg
                className="w-5 h-5 text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a
                className="underline underline-offset-4 hover:text-blue-500 transition-colors"
                href={`mailto:${profile.email}`}
              >
                {profile.email}
              </a>
            </p>
            <p className="flex items-center gap-3 text-neutral-300">
              <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <a
                className="underline underline-offset-4 hover:text-blue-500 transition-colors"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </p>
            <p className="flex items-center gap-3 text-neutral-300">
              <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <a
                className="underline underline-offset-4 hover:text-blue-500 transition-colors"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </p>
            <p className="flex items-center gap-3 text-neutral-400 mt-4 pt-4 border-t border-neutral-700">
              <svg
                className="w-5 h-5 text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {profile.location}
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate
          className="card-overlay rounded-xl p-5 space-y-5"
          aria-describedby="contact-form-status"
        >
          <h3 className="text-lg font-semibold text-blue-500">Send a Message</h3>
          <div>
            <label htmlFor="contact-name" className="text-sm font-medium text-neutral-200">
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              className="mt-2 w-full rounded-lg border border-neutral-700 bg-transparent px-4 py-3 focus:border-cyan-400 focus:outline-none"
              placeholder="Jane Doe"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
            />
            {errors.name && (
              <p id="contact-name-error" className="mt-1 text-sm text-red-400">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="contact-email" className="text-sm font-medium text-neutral-200">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              className="mt-2 w-full rounded-lg border border-neutral-700 bg-transparent px-4 py-3 focus:border-cyan-400 focus:outline-none"
              placeholder="you@company.com"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
            />
            {errors.email && (
              <p id="contact-email-error" className="mt-1 text-sm text-red-400">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="contact-message" className="text-sm font-medium text-neutral-200">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              required
              className="mt-2 w-full rounded-lg border border-neutral-700 bg-transparent px-4 py-3 focus:border-cyan-400 focus:outline-none"
              placeholder="Tell me about your project, role, or idea."
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "contact-message-error" : undefined}
            />
            {errors.message && (
              <p id="contact-message-error" className="mt-1 text-sm text-red-400">
                {errors.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <button
              type="submit"
              disabled={formStatus === "loading"}
              className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
            >
              {formStatus === "loading" ? "Sending..." : "Send Message"}
            </button>
            <p id="contact-form-status" role="status" aria-live="polite" className="text-sm">
              {formStatus === "success" && (
                <span className="text-green-400">Thanks! I’ll reply within 24 hours.</span>
              )}
              {formStatus === "error" && (
                <span className="text-red-400">
                  Something went wrong. Please try again or email me directly.
                </span>
              )}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
