import React from "react";
import { FiAward, FiUsers } from "react-icons/fi";
import { certifications, responsibilities } from "../data/resumeData";
import useReveal from "../hooks/useReveal";
import "./Certifications.scss";

export default function Certifications() {
  const headRef = useReveal();
  const certRef = useReveal();
  const respRef = useReveal();

  return (
    <section id="certifications" className="certs">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <span className="section-num">07</span>
          <h2 className="section-title">
            certifications &amp; <span>leadership</span>
          </h2>
        </div>

        <div className="certs__grid">
          <div className="certs__col reveal" ref={certRef}>
            <h3>
              <FiAward /> Certifications
            </h3>
            <ul>
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>

          <div className="certs__col reveal" ref={respRef}>
            <h3>
              <FiUsers /> Positions of responsibility
            </h3>
            <ul>
              {responsibilities.map((r) => (
                <li key={r.role}>
                  <strong>{r.role}</strong> — {r.org}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
