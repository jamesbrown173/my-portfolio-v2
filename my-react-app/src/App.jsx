import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";
import { useRef, useState, useEffect } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("");
  const [time, setTime] = useState("");
  const [dots, setDots] = useState(1);

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

  useEffect(() => {
    const timer = setInterval(() => {
      const hcmcTime = new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Ho_Chi_Minh",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(hcmcTime);
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const dotTimer = setInterval(() => {
      setDots((prev) => (prev === 4 ? 1 : prev + 1));
    }, 1000);

    return () => clearInterval(dotTimer);
  }, []);

  return (
    <div className="flex flex-col">
      {/* <div className="fixed top-0 left-0 w-full h-full z-50 bg-[url('/public/bg-1.png')] bg-cover bg-center text-white">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 origin-center">
          <div className="relative font-hedvig text-base tracking-[0px] -top-[10px] origin-center flex items-center justify-center">
            <div className="absolute w-fit text-nowrap text-gray-200 origin-center flex items-center justify-center">
              work in progress{" "}
              <div className="ml-[1px] w-[20px] flex">{".".repeat(dots)}</div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-2 right-2 font-hedvig text-sm tracking-[0px] text-gray-500">
          James Brown © 2025
        </div>
      </div> */}
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
