import React from "react";
import { skills } from "../data/resumeData";
import useReveal from "../hooks/useReveal";
import "./Skills.scss";

export default function Skills() {
  const headRef = useReveal();

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <span className="section-num">03</span>
          <h2 className="section-title">
            skills &amp; <span>expertise</span>
          </h2>
          <p className="section-sub">
            A few of the things I reach for when turning an idea into a
            working product.
          </p>
        </div>

        <div className="skills__grid">
          {skills.map((s, i) => (
            <SkillCard key={s.group} skill={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill, index }) {
  const ref = useReveal();
  return (
    <div
      className="skill-card reveal"
      ref={ref}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="skill-card__head">
        <h3>{skill.group}</h3>
        <span>{skill.level}%</span>
      </div>
      <div className="skill-card__bar">
        <span
          className="skill-card__bar-fill"
          style={{ "--target": `${skill.level}%` }}
        />
      </div>
      <div className="skill-card__tags">
        {skill.items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}
