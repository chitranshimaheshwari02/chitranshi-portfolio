import React from "react";
import { experience } from "../data/resumeData";
import useReveal from "../hooks/useReveal";
import "./Experience.scss";

export default function Experience() {
  const headRef = useReveal();

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <span className="section-num">06</span>
          <h2 className="section-title">
            work <span>experience</span>
          </h2>
        </div>

        <div className="experience__list">
          {experience.map((job, i) => (
            <ExperienceRow key={job.company} job={job} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceRow({ job, index }) {
  const ref = useReveal();
  return (
    <div
      className="exp-row reveal"
      ref={ref}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="exp-row__period">{job.period}</div>
      <div className="exp-row__body">
        <h3>{job.role}</h3>
        <p className="exp-row__company">{job.company}</p>
        <ul>
          {job.points.map((pt) => (
            <li key={pt}>{pt}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
