import React from "react";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiSass,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiMysql,
  SiVercel,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import useReveal from "../hooks/useReveal";
import "./Tools.scss";

const iconMap = [
  { Icon: SiReact, label: "React" },
  { Icon: SiJavascript, label: "JavaScript" },
  { Icon: SiHtml5, label: "HTML5" },
  { Icon: SiSass, label: "SCSS" },
  { Icon: SiNodedotjs, label: "Node.js" },
  { Icon: FaAws, label: "AWS" },
  { Icon: SiGit, label: "Git" },
  { Icon: SiGithub, label: "GitHub" },
  { Icon: SiMysql, label: "MySQL" },
  { Icon: SiVercel, label: "Vercel" },
];

export default function Tools() {
  const headRef = useReveal();
  const loop = [...iconMap, ...iconMap];

  return (
    <section id="tools" className="tools">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <span className="section-num">04</span>
          <h2 className="section-title">
            tools <span>i use</span>
          </h2>
        </div>
      </div>

      <div className="tools__marquee">
        <div className="tools__track">
          {loop.map(({ Icon, label }, i) => (
            <div className="tools__chip" key={`${label}-${i}`}>
              <Icon />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
