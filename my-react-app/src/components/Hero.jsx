import {
  easeIn,
  motion,
  spring, // Import motion component for Framer Motion animations
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion"; // Import animation utilities from Framer Motion library
import React, { useRef } from "react"; // Import React library components

// Define animation parameters for each programming language
const languageAnimations = {
  vsCode: { x: "-20000%", y: "-50000%", rotateStart: -40, rotateEnd: -7000 },
  python: { x: "20000%", y: "-50000%", rotateStart: 35, rotateEnd: 7000 },
  nodeJS: { x: "-10000%", y: "-100000%", rotateStart: 20, rotateEnd: -10000 },
  react: { x: "-30000%", y: "-100000%", rotateStart: -45, rotateEnd: -10000 },
  // expressJS: {
  //   x: "-30000%",
  //   y: "-100000%",
  //   rotateStart: 60,
  //   rotateEnd: -10000,
  // },
  // framer: { x: "-20000%", y: "-100000%", rotateStart: 10, rotateEnd: -10000 },
  // mySQL: { x: "-20000%", y: "-100000%", rotateStart: 40, rotateEnd: -10000 },
  // tailwind: { x: "-20000%", y: "-100000%", rotateStart: 90, rotateEnd: -10000 },
};
function Hero({ forwardedRef }) {
  const ref = useRef(null); // Create a reference to a DOM element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"], // Set scroll offset for animation
  });

  // This is an example of a code comment
  // Expose the ref to the parent component using React.useImperativeHandle
  React.useImperativeHandle(forwardedRef, () => ref.current);

  // Function to generate motion styles based on language and scroll position
  const getLanguageMotionStyles = (language) => {
    const { x, y, rotateStart, rotateEnd } = languageAnimations[language];

    return {
      // Map scrollYProgress to interpolate animation values
      y: useTransform(scrollYProgress, [0, 1], ["-0%", y]),
      x: useTransform(scrollYProgress, [0, 1], ["0", x]),
      rotate: useTransform(scrollYProgress, [0, 1], [rotateStart, rotateEnd]),
    };
  };

  return (
    <div
      id="hero"
      className="h-[70dvh] flex items-center flex-col justify-evenly"
    >
      <h1 className="font-mono text-2xl leading-10 px-5">
        Hi! I'm James! I'm a web developer working with ...
      </h1>

      <div className="languagesAndSkills-container flex flex-row flex-wrap gap-2 justify-center">
        {/* Map through languageAnimations to render motion divs for each language */}
        {Object.keys(languageAnimations).map((language) => (
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
              {language} {/* Display the language name */}
            </h1>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
