import { motion } from "framer-motion";
function Hero() {
  return (
    <div
      id="hero"
      className="h-[88dvh] flex items-center  flex-col justify-evenly"
    >
      <motion.h1
        whileInView={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        className="font-mono text-2xl leading-10 px-5"
      >
        Hi! I'm James! I'm a web developer working with ...
      </motion.h1>

      <div className="languagesAndSkills-container flex flex-row flex-wrap gap-2 justify-center">
        <div id="card-vscode" className="languagesAndSkills-card">
          <h1 id="card-text-vscode" className="languagesAndSkills-card-text">
            vs code
          </h1>
        </div>
        <div id="card-python" className="languagesAndSkills-card">
          <h1 id="card-text-python" className="languagesAndSkills-card-text">
            python
          </h1>
        </div>
        <div id="card-nodejs" className="languagesAndSkills-card">
          <h1 id="card-text-nodejs" className="languagesAndSkills-card-text">
            nodejs
          </h1>
        </div>
        <div id="card-react" className="languagesAndSkills-card">
          <h1 id="card-text-react" className="languagesAndSkills-card-text">
            react
          </h1>
        </div>
        <div id="card-expressjs" className="languagesAndSkills-card">
          <h1 id="card-text-expressjs" className="languagesAndSkills-card-text">
            expressjs
          </h1>
        </div>
        <div id="card-framer" className="languagesAndSkills-card">
          <h1 id="card-text-framer" className="languagesAndSkills-card-text">
            framer
          </h1>
        </div>
        <div id="card-mysql" className="languagesAndSkills-card">
          <h1 id="card-text-mysql" className="languagesAndSkills-card-text">
            mySQL
          </h1>
        </div>
        <div id="card-tailwind" className="languagesAndSkills-card">
          <h1 id="card-text-tailwind" className="languagesAndSkills-card-text">
            tailwind
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;

// The language and skills buttons are styling in the main.css. I couldn't write the styling in tailwind.
