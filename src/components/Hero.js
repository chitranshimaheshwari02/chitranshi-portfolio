import React from "react";
import { FiDownload } from "react-icons/fi";
import { profile } from "../data/resumeData";
import useReveal from "../hooks/useReveal";
import "./Hero.scss";

export default function Hero() {
  const textRef = useReveal();
  const cardRef = useReveal({ threshold: 0.1 });

  return (
    <section id="hero" className="hero">
      <div className="hero__inner">
        <div className="hero__text reveal" ref={textRef}>
          <span className="hero__badge">01</span>
          <h1 className="hero__title">
            hi, i&apos;m
            <br />
            <span>{profile.name}</span>
          </h1>
          <p className="hero__role">{profile.role}</p>
          <p className="hero__tag">{profile.tagline}</p>

          <div className="hero__cta">
            <a href="#contact" className="btn btn--primary">
              Let&apos;s talk
            </a>
            <a href="#projects" className="btn btn--ghost">
              See projects
            </a>
            <a
              href={`${process.env.PUBLIC_URL}/resume.pdf`}
              download="Chitranshi_Maheshwari_Resume.pdf"
              className="btn btn--ghost"
            >
              Download resume <FiDownload />
            </a>
          </div>
        </div>

        <div className="hero__card reveal" ref={cardRef}>
          <div className="polaroid">
            <span className="doodle doodle--star" aria-hidden="true">
              <svg viewBox="0 0 40 40" fill="none">
                <path
                  d="M20 2 L24 16 L38 16 L27 25 L31 39 L20 30 L9 39 L13 25 L2 16 L16 16 Z"
                  stroke="#17140f"
                  strokeWidth="1.6"
                  fill="none"
                />
              </svg>
            </span>

            <div className="polaroid__clip" aria-hidden="true">
              📎
            </div>

            <div className="polaroid__photo">
              <img
                src={`${process.env.PUBLIC_URL}/img.jpeg`}
                alt="Chitranshi Maheshwari"
              />
            </div>

            <span className="doodle doodle--smiley" aria-hidden="true">
              🙂
            </span>

            <svg
              className="doodle doodle--arrow"
              viewBox="0 0 90 90"
              fill="none"
              aria-hidden="true"
            >
              <path
                className="arrow-path"
                d="M8 78 C 20 40, 45 20, 78 10"
                stroke="#17140f"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M78 10 L66 12 M78 10 L74 22"
                stroke="#17140f"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>

            <span className="doodle doodle--heart" aria-hidden="true">
              <svg viewBox="0 0 40 36" fill="#e8804a">
                <path d="M20 34 C4 24 0 14 0 8 C0 2 5 0 8 0 C13 0 18 4 20 9 C22 4 27 0 32 0 C35 0 40 2 40 8 C40 14 36 24 20 34 Z" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div className="hero__blob" aria-hidden="true" />
    </section>
  );
}
