import { profile } from "../data/profile";
import { useState } from "react";
import PhoneIcon from "../assets/icons/phone.svg?react";
import MailIcon from "../assets/icons/mail.svg?react";
import GithubIcon from "../assets/icons/github.svg?react";
import LinkedinIcon from "../assets/icons/linkedin.svg?react";
import LocationIcon from "../assets/icons/location.svg?react";

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
            <p className="flex items-center gap-3 text-neutral-400 mt-4 pt-4 border-t border-neutral-700">
              <LocationIcon className="w-5 h-5 text-cyan-400" aria-hidden="true" />
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
              placeholder="Name"
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
              placeholder="email"
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
