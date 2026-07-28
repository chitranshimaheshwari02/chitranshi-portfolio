import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Skills from "./components/Skills";
import Tools from "./components/Tools";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Journey />
        <Skills />
        <Tools />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
