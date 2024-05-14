import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";
import { useRef, useState, useEffect } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "hero", ref: useRef(null) },
    { id: "about", ref: useRef(null) },
    { id: "works", ref: useRef(null) },
    { id: "connect", ref: useRef(null) },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, [sections]);

  return (
    <div className="flex flex-col">
      <Navbar activeSection={activeSection} />
      <div id="hero" ref={sections[0].ref}>
        <Hero />
      </div>
      <div id="about" ref={sections[1].ref}>
        <About />
      </div>
      <div id="works" ref={sections[2].ref}>
        <Works />
      </div>
      <div id="connect" ref={sections[3].ref}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
