import React from "react";
import { journey, education } from "../data/resumeData";
import useReveal from "../hooks/useReveal";
import "./Journey.scss";

export default function Journey() {
  const headRef = useReveal();

  return (
    <section id="journey" className="journey">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <span className="section-num">02</span>
          <h2 className="section-title">
            my <span>journey</span>
          </h2>
          <p className="section-sub">
            {education.school} — {education.degree}, {education.period} ·{" "}
            {education.cgpa}
          </p>
        </div>

        <ol className="timeline">
          {journey.map((step, i) => (
            <TimelineItem key={step.year} step={step} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function TimelineItem({ step, index }) {
  const ref = useReveal();
  return (
    <li className="timeline__item reveal" ref={ref} style={{ transitionDelay: `${index * 80}ms` }}>
      <span className="timeline__year">{step.year}</span>
      <span className="timeline__dot" />
      <div className="timeline__content">
        <h3>{step.title}</h3>
        <p>{step.detail}</p>
      </div>
    </li>
  );
}
