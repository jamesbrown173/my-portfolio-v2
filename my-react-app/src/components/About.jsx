import AboutMeText from "./AboutMeText.jsx";
import GitHubStats from "./apiIntergrations/GitHubStats.jsx";
import { motion } from "framer-motion";

function About() {
  return (
    <div
      id="about"
      className="m-auto pt-[10rem] px-10 [100dvh] max-w-[90dvw] grid lg:grid-cols-4 lg:grid-rows-[1fr,1fr,2fr] sm:grid-cols-4 grid-cols-1 gap-7"
    >
      <div className="bg-[#F7F7F7] rounded-md lg:col-span-2 lg:row-span-3 col-span-4 ">
        <AboutMeText />
      </div>
      <div className="bg-[#F7F7F7] rounded-md lg:col-span-2 col-span-4 sm:flex flex-col justify-evenly hidden">
        <GitHubStats />
      </div>
      <div className="bg-[#F7F7F7] rounded-md          lg:row-span-2 lg:col-span-1       sm:col-span-2 sm:block hidden">
        images / personal section
      </div>
      <div className="bg-[#F7F7F7] rounded-md sm:block hidden">
        spotify stats
      </div>
      <div className="bg-[#F7F7F7] rounded-md sm:block hidden">
        strava stats
      </div>
    </div>
  );
}

export default About;
