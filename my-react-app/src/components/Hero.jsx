import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useRef } from "react";

function Hero({ forwardedRef }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Set the forwarded ref to the root div
  React.useImperativeHandle(forwardedRef, () => ref.current);

  // Defining where the items should move to and how they rotate

  // VS CODE
  const vsCodeCardY = useTransform(
    scrollYProgress,
    [0, 1],
    ["-0%", "-100000%"]
  );
  const vsCodeCardX = useTransform(scrollYProgress, [0, 1], ["0%", "10000%"]);
  const vsCodeCardRotate = useTransform(scrollYProgress, [0, 1], [40, 10000]); // Rotate from 0 degrees to 360 degrees

  // PYTHON
  const pythonCardY = useTransform(
    scrollYProgress,
    [0, 1],
    ["-0%", "-100000%"]
  );
  const pythonCardX = useTransform(scrollYProgress, [0, 1], ["0", "-20000%"]);
  const pythonCardRotate = useTransform(scrollYProgress, [0, 1], [-40, -10000]); // Rotate from 0 degrees to 360 degrees

  // PYTHON
  const nodeJSCardY = useTransform(
    scrollYProgress,
    [0, 1],
    ["-0%", "-100000%"]
  );
  const nodeJSCardX = useTransform(scrollYProgress, [0, 1], ["0", "-10000%"]);
  const nodeJSCardRotate = useTransform(scrollYProgress, [0, 1], [0, -10000]); // Rotate from 0 degrees to 360 degrees

  return (
    <div
      id="hero"
      className="h-[70dvh] flex items-center  flex-col justify-evenly"
    >
      <h1 className="font-mono text-2xl leading-10 px-5">
        Hi! I'm James! I'm a web developer working with ...
      </h1>

      <div className="languagesAndSkills-container flex flex-row flex-wrap gap-2 justify-center">
        <motion.div
          style={{ y: vsCodeCardY, x: vsCodeCardX, rotate: vsCodeCardRotate }}
          id="card-vscode"
          className="languagesAndSkills-card absolute"
        >
          <h1 id="card-text-vscode" className="languagesAndSkills-card-text">
            vs code
          </h1>
        </motion.div>
        <motion.div
          style={{ y: pythonCardY, x: pythonCardX, rotate: pythonCardRotate }}
          id="card-python"
          className="languagesAndSkills-card absolute"
        >
          <h1 id="card-text-python" className="languagesAndSkills-card-text">
            python
          </h1>
        </motion.div>

        <motion.div
          style={{ y: nodeJSCardY, x: nodeJSCardX, rotate: nodeJSCardRotate }}
          id="card-nodejs"
          className="languagesAndSkills-card"
        >
          <h1 id="card-text-nodejs" className="languagesAndSkills-card-text">
            nodejs
          </h1>
        </motion.div>
        {/* 
        <motion.div
          style={{ y: item1Y, x: item1X, rotate: item1Rotate }}
          id="card-react"
          className="languagesAndSkills-card"
        >
          <h1 id="card-text-react" className="languagesAndSkills-card-text">
            react
          </h1>
        </motion.div>
        <motion.div
          style={{ y: item1Y, x: item1X, rotate: item1Rotate }}
          id="card-expressjs"
          className="languagesAndSkills-card"
        >
          <h1 id="card-text-expressjs" className="languagesAndSkills-card-text">
            expressjs
          </h1>
        </motion.div>
        <motion.div
          style={{ y: item1Y, x: item1X, rotate: item1Rotate }}
          id="card-framer"
          className="languagesAndSkills-card"
        >
          <h1 id="card-text-framer" className="languagesAndSkills-card-text">
            framer
          </h1>
        </motion.div>
        <motion.div
          style={{ y: item1Y, x: item1X, rotate: item1Rotate }}
          id="card-mysql"
          className="languagesAndSkills-card"
        >
          <h1 id="card-text-mysql" className="languagesAndSkills-card-text">
            mySQL
          </h1>
        </motion.div>
        <motion.div
          style={{ y: item1Y, x: item1X, rotate: item1Rotate }}
          id="card-tailwind"
          className="languagesAndSkills-card"
        >
          <h1 id="card-text-tailwind" className="languagesAndSkills-card-text">
            tailwind
          </h1>
        </motion.div> */}
      </div>
    </div>
  );
}

export default Hero;

// The language and skills buttons are styling in the main.css. I couldn't write the styling in tailwind.
