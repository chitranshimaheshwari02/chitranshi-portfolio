import React from "react";
import { profile } from "../data/resumeData";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>
          © {new Date().getFullYear()} {profile.fullName}
        </span>
        <span>Built with React &amp; a lot of coffee ☕</span>
      </div>
    </footer>
  );
}
