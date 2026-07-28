import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiDownload,
  FiSend,
} from "react-icons/fi";
import { profile } from "../data/resumeData";
import { emailConfig, isEmailConfigured } from "../emailConfig";
import useReveal from "../hooks/useReveal";
import "./Contact.scss";

const initialForm = { name: "", email: "", message: "" };
// status: "idle" | "sending" | "success" | "error"

export default function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isEmailConfigured) {
      setStatus("error");
      setError(
        "Email isn't set up yet — add your EmailJS keys to a .env file (see README)."
      );
      return;
    }

    setStatus("sending");
    setError("");

    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: profile.fullName,
        },
        { publicKey: emailConfig.publicKey }
      );
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setError("Something went wrong sending that — please try again.");
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__card reveal" ref={ref}>
          <span className="doodle-heart" aria-hidden="true">
            <svg viewBox="0 0 40 36" fill="#e8804a">
              <path d="M20 34 C4 24 0 14 0 8 C0 2 5 0 8 0 C13 0 18 4 20 9 C22 4 27 0 32 0 C35 0 40 2 40 8 C40 14 36 24 20 34 Z" />
            </svg>
          </span>

          <span className="section-num">08</span>
          <h2 className="contact__title">
            let&apos;s build <span>something</span> together
          </h2>
          <p className="contact__sub">
            Open to frontend &amp; full-stack roles, freelance projects, and
            good conversations about code. Drop a message below or reach out
            directly.
          </p>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-row">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="What's on your mind?"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="btn btn--primary contact__submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending…" : "Send message"} <FiSend />
            </button>

            {status === "success" && (
              <p className="contact__status contact__status--success">
                Thanks — your message is on its way! I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="contact__status contact__status--error">{error}</p>
            )}
          </form>

          <div className="contact__divider">
            <span>or reach me directly</span>
          </div>

          <div className="contact__cta-row">
            <a
              className="btn btn--ghost btn--on-dark"
              href={`${process.env.PUBLIC_URL}/resume.pdf`}
              download="Chitranshi_Maheshwari_Resume.pdf"
            >
              Download resume <FiDownload />
            </a>
          </div>

          <div className="contact__links">
            <a href={`mailto:${profile.email}`}>
              <FiMail /> {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\s+/g, "")}`}>
              <FiPhone /> {profile.phone}
            </a>
            <a href={profile.githubUrl} target="_blank" rel="noreferrer">
              <FiGithub /> {profile.github}
            </a>
            <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
              <FiLinkedin /> {profile.linkedin}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
