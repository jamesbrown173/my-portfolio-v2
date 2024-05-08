import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import "../index.css";

// Define animation parameters for each programming language card
const languageCardProperties = {
  vsCode: {
    x: "-10%",
    y: "-150%",
    rotateStart: -40,
    rotateEnd: -10,
    iconReferName: "fa-solid fa-code",
  },
  python: {
    x: "300%",
    y: "-100%",
    rotateStart: 35,
    rotateEnd: -30,
    iconReferName: "fa-brands fa-python",
  },
  nodeJS: {
    x: "-400%",
    y: "40%",
    rotateStart: 20,
    rotateEnd: -20,
    iconReferName: "fa-brands fa-node-js",
  },
  react: {
    x: "-300%",
    y: "200%",
    rotateStart: -45,
    rotateEnd: 20,
    iconReferName: "fa-brands fa-react",
  },
  expressJS: {
    x: "200%",
    y: "200%",
    rotateStart: -40,
    rotateEnd: -30,
    iconReferName: "fa-brands fa-js",
  },
  tailwind: {
    x: "-300%",
    y: "-150%",
    rotateStart: 30,
    rotateEnd: 20,
    iconReferName: "fa-solid fa-bolt",
  },
  mySQL: {
    x: "250%",
    y: "70%",
    rotateStart: 40,
    rotateEnd: 20,
    iconReferName: "fa-solid fa-database",
  },
};

// console.table(languageCardProperties);

function Hero() {
  const ref = useRef(null); // Create a reference to a DOM element
  const { scrollY } = useScroll({
    target: ref,
    offset: ["end", "start"],
  });

  const [typedText, setTypedText] = useState(""); // State to hold the typed text
  const textToType = "Hi! I'm James! I'm a web developer working with ..."; // Text to type

  useEffect(() => {
    // Function to simulate typing effect
    const typeText = async () => {
      for (let i = 0; i <= textToType.length; i++) {
        setTypedText(textToType.slice(0, i));
        await new Promise((resolve) => setTimeout(resolve, 60)); // Typing speed (adjust as needed)
      }
    };

    typeText(); // Trigger text typing effect when component mounts
  }, []);

  // Function to generate motion styles based on language and scroll position
  const getLanguageMotionStyles = (language) => {
    const { x, y, rotateStart, rotateEnd } = languageCardProperties[language];

    const dampAmount = 5;
    const stiffAmount = 15;

    // Apply spring animations to interpolate values based on scroll position
    const motionStyles = {
      y: useSpring(useTransform(scrollY, [25, 250], ["0%", y]), {
        damping: dampAmount,
        stiffness: stiffAmount,
      }),
      x: useSpring(useTransform(scrollY, [25, 250], ["0%", x]), {
        damping: dampAmount,
        stiffness: stiffAmount,
      }),
      rotate: useSpring(
        useTransform(scrollY, [25, 250], [rotateStart, rotateEnd]),
        { damping: dampAmount, stiffness: stiffAmount }
      ),
    };

    return motionStyles;
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });

  return (
    <div
      id="hero"
      className="h-[70vh] flex items-center flex-col justify-evenly"
      ref={ref}
    >
      <h1 className="font-mono text-3xl leading-10 px-5">{typedText}</h1>

      <div className="languagesAndSkills-container flex flex-row flex-wrap gap-2 justify-center">
        {/* Map through languageCardProperties to render motion divs for each language */}
        {Object.keys(languageCardProperties).map((language) => (
          <motion.div
            key={`card-${language}`}
            style={getLanguageMotionStyles(language)} // Apply motion styles based on language
            className="languagesAndSkills-card absolute"
            id={`card-${language}`}
          >
            <h1
              id={`card-text-${language}`}
              className="languagesAndSkills-card-text"
            >
              <i
                class={`${languageCardProperties[language].iconReferName}`}
              ></i>
              {`  ${language}`}
              {/* Display the language name */}
            </h1>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
