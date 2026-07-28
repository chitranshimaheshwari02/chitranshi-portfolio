import React, { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { navLinks } from "../data/resumeData";
import "./Navbar.scss";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner">
        <button className="nav__logo" onClick={() => handleClick("hero")}>
          chitranshi<span>.</span>
        </button>

        <nav className={`nav__links ${open ? "nav__links--open" : ""}`}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`nav__link ${active === link.id ? "is-active" : ""}`}
              onClick={() => handleClick(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="nav__actions">
          <a
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
            download="Chitranshi_Maheshwari_Resume.pdf"
            className="nav__resume"
          >
            Resume <FiDownload />
          </a>

          <button
            className={`nav__burger ${open ? "nav__burger--open" : ""}`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
