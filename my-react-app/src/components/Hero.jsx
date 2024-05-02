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
  vsCode: { x: "200%", y: "-200%", rotateStart: -40, rotateEnd: 90 },
  python: { x: "300%", y: "-100%", rotateStart: 35, rotateEnd: 70 },
  nodeJS: { x: "-900%", y: "-100%", rotateStart: 20, rotateEnd: -10 },
  react: { x: "-700%", y: "-400%", rotateStart: -45, rotateEnd: -10 },
  expressJS: {
    x: "400%",
    y: "-100%",
    rotateStart: -40,
    rotateEnd: 150,
  },
  tailwind: { x: "-300%", y: "-400%", rotateStart: 30, rotateEnd: -100 },
  mySQL: { x: "700%", y: "-10%", rotateStart: 40, rotateEnd: 100 },
};
function Hero() {
  const ref = useRef(null); // Create a reference to a DOM element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end", "start"], // Set scroll offset for animation
  });

  // Function to generate motion styles based on language and scroll position
  const getLanguageMotionStyles = (language) => {
    const { x, y, rotateStart, rotateEnd } = languageAnimations[language];

    const dampAmount = 5;
    const stiffAmount = 50;

    // HEY CHATGPT. Currently this scroll animation takes effect too quickly and is over when the user has just scrolled 1% down the page, how can I make the effect last longer?

    return {
      // Map scrollYProgress to interpolate animation values
      y: useSpring(useTransform(scrollYProgress, [0, 1], ["-0%", y]), {
        damping: dampAmount,
        stiffness: stiffAmount,
      }),
      x: useSpring(useTransform(scrollYProgress, [0, 1], ["0", x]), {
        damping: dampAmount,
        stiffness: stiffAmount,
      }),
      rotate: useSpring(
        useTransform(scrollYProgress, [0, 1], [rotateStart, rotateEnd]),
        {
          damping: dampAmount,
          stiffness: stiffAmount,
        }
      ),
    };
  };

  return (
    <div
      id="hero"
      className="h-[70dvh] flex items-center flex-col justify-evenly"
      ref={ref}
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

// At the moment the scroll effect is very fast, like if the use scrolls down just 1cm, then the cards have already jumped out of the screen, how to make the scroll effect less dramatic, make it last longer, for a longer scroll time?
