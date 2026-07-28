import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { projects } from "../data/resumeData";
import useReveal from "../hooks/useReveal";
import "./Projects.scss";

export default function Projects() {
  const headRef = useReveal();

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <span className="section-num">05</span>
          <h2 className="section-title">
            favorite <span>projects</span>
          </h2>
          <p className="section-sub">
            A few builds that shipped end-to-end — from idea to deployment.
          </p>
        </div>

        <div className="projects__list">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const ref = useReveal();
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="project-card reveal"
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="project-card__top">
        <span className="project-card__tag">{project.tag}</span>
        <span className="project-card__link">
          <FiArrowUpRight />
        </span>
      </div>

      <h3>{project.title}</h3>
      <p className="project-card__subtitle">{project.subtitle}</p>

      <ul className="project-card__points">
        {project.points.map((pt) => (
          <li key={pt}>{pt}</li>
        ))}
      </ul>

      <p className="project-card__stack">{project.stack}</p>
    </a>
  );
}
