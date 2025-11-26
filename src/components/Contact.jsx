import { profile } from "../data/profile";
import { useState } from "react";
import PhoneIcon from "../assets/icons/phone.svg?react";
import MailIcon from "../assets/icons/mail.svg?react";
import GithubIcon from "../assets/icons/github.svg?react";
import LinkedinIcon from "../assets/icons/linkedin.svg?react";
import LocationIcon from "../assets/icons/location.svg?react";
import GlobeIcon from "../assets/icons/globe.svg?react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mnnwjqwv";

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
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

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
                <PhoneIcon className="w-5 h-5 text-cyan-400" aria-hidden="true" />
                <a
                  className="underline underline-offset-4 hover:text-blue-500 transition-colors"
                  href={`tel:${profile.phone}`}
                >
                  {profile.phone}
                </a>
              </p>
            )}
            <p className="flex items-center gap-3 text-neutral-300">
              <MailIcon className="w-5 h-5 text-cyan-400" aria-hidden="true" />
              <a
                className="underline underline-offset-4 hover:text-blue-500 transition-colors"
                href={`mailto:${profile.email}`}
              >
                {profile.email}
              </a>
            </p>
            <p className="flex items-center gap-3 text-neutral-300">
              <GithubIcon className="w-5 h-5 text-cyan-400" aria-hidden="true" />
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
              <LinkedinIcon className="w-5 h-5 text-cyan-400" aria-hidden="true" />
              <a
                className="underline underline-offset-4 hover:text-blue-500 transition-colors"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </p>
            {profile.portfolio && (
              <p className="flex items-center gap-3 text-neutral-300">
                <GlobeIcon className="w-5 h-5 text-cyan-400" aria-hidden="true" />
                <a
                  className="underline underline-offset-4 hover:text-blue-500 transition-colors"
                  href={profile.portfolio}
                  target="_blank"
                  rel="noreferrer"
                >
                  Portfolio
                </a>
              </p>
            )}
            <p className="flex items-center gap-3 text-neutral-400 mt-4 pt-4 border-t border-neutral-700">
              <LocationIcon className="w-5 h-5 text-cyan-400" aria-hidden="true" />
              {profile.location}
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate
          className="card-overlay rounded-xl p-6 md:p-8 space-y-6"
          aria-describedby="contact-form-status"
        >
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-2">Send a Message</h3>
            <p className="text-sm text-neutral-400">
              Have a project in mind? Let's discuss how I can help bring your ideas to life.
            </p>
          </div>

          <div>
            <label
              htmlFor="contact-name"
              className="block text-sm font-medium text-neutral-200 mb-2"
            >
              Your Name <span className="text-red-400">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-neutral-700 bg-slate-900/50 px-4 py-3 text-neutral-100 placeholder:text-neutral-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all"
              placeholder="John Doe"
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
            <label
              htmlFor="contact-email"
              className="block text-sm font-medium text-neutral-200 mb-2"
            >
              Email Address <span className="text-red-400">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-neutral-700 bg-slate-900/50 px-4 py-3 text-neutral-100 placeholder:text-neutral-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all"
              placeholder="john@example.com"
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
            <label
              htmlFor="contact-message"
              className="block text-sm font-medium text-neutral-200 mb-2"
            >
              Your Message <span className="text-red-400">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={6}
              required
              className="w-full rounded-lg border border-neutral-700 bg-slate-900/50 px-4 py-3 text-neutral-100 placeholder:text-neutral-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all resize-none"
              placeholder="Tell me about your project, requirements, or how we can collaborate..."
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "contact-message-error" : undefined}
            />
            {errors.message && (
              <p id="contact-message-error" className="mt-1 text-sm text-red-400">
                {errors.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <button
              type="submit"
              disabled={formStatus === "loading"}
              className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3.5 font-semibold text-white hover:from-blue-600 hover:to-purple-700 disabled:cursor-not-allowed disabled:opacity-70 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              {formStatus === "loading" ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
            <p
              id="contact-form-status"
              role="status"
              aria-live="polite"
              className="text-sm text-center min-h-[20px]"
            >
              {formStatus === "success" && (
                <span className="text-green-400 font-medium">
                  ✓ Message sent successfully! I'll get back to you within 24 hours.
                </span>
              )}
              {formStatus === "error" && (
                <span className="text-red-400">
                  ✗ Something went wrong. Please try again or email me directly at {profile.email}
                </span>
              )}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
