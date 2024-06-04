import WorksCardBloggingApp from "./WorksCards/WorksCardBloggingApp";
import { motion, AnimatePresence } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import WorksCardOuraJsonUploader from "./WorksCards/WorksCardOuraJsonUploader";
import NextJsDashboard from "./WorksCards/NextJsDashboard";

function Works() {
  const [typedText, setTypedText] = useState(""); // State to hold the typed text
  const textToType = "Here's what I've been working on ..."; // Text to type

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      // Function to simulate typing effect
      const typeText = async () => {
        for (let i = 0; i <= textToType.length; i++) {
          setTypedText(textToType.slice(0, i));
          await new Promise((resolve) => setTimeout(resolve, 60)); // Typing speed (adjust as needed)
        }
      };

      typeText(); // Trigger text typing effect when the element is in view
    }
  }, [isInView]);

  return (
    <div id="works" className="h-auto flex flex-col justify-evenly gap-10">
      <h1 ref={ref} className="font-mono text-2xl text-left pl-10">
        {typedText}
      </h1>
      <WorksCardBloggingApp />
      <WorksCardOuraJsonUploader />
      <NextJsDashboard />
    </div>
  );
}

export default Works;

// OLD WORDS CARDS
// <WorksCard
//           projectTitle="Scoopy"
//           skills={["node.js", "react", "vite"]}
//           imgUrl="/Bloggy.png"
//         />
//         <WorksCard
//           projectTitle="Bloggy"
//           skills={["express.js", "node.js", "html5", "css3"]}
//           imgUrl="/Scoopy.png"
//         />
//         <WorksCard isEmpty={true} projectTitle="" skills="" />
//         <WorksCard isEmpty={true} projectTitle="" skills="" />
