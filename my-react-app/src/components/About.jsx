import AboutMeText from "./AboutMeText.jsx";
import GitHubStats from "./apiIntergrations/GitHubStats.jsx";
import { motion } from "framer-motion";
import SpotifyPlaylist from "./apiIntergrations/SpotifyPlaylist.jsx";
import StravaStats1 from "./apiIntergrations/StravaStats.jsx";
import StravaStats2 from "./apiIntergrations/StravaStats2.jsx";
import OuraStats from "./apiIntergrations/OuraStats.jsx";

function About() {
  return (
    <div className="flex flex-col justify-between items-center pt-[10rem] pb-[10rem]">
      <h1 className="mb-10 font-mono text-3xl leading-10 px-5 w-full text-left pl-10">
        Here's a little about me ...
      </h1>

      <div
        id="about"
        className=" px-10 h-full max-w-[90dvw] grid lg:grid-cols-4 lg:grid-rows-[1fr,1.1fr,1fr] sm:grid-cols-4 sm:grid-rows-[auto,auto,auto,auto] gap-10 "
      >
        <div className=" lg:col-span-2 lg:row-span-3 col-span-4 drop-shadow-sm container flex flex-col h-full justify-evenly gap-3 relative bottom-4">
          <AboutMeText />
        </div>
        <div className="bg-[#F7F7F7]  rounded-md lg:col-span-2 col-span-4  flex-col justify-evenly drop-shadow-sm">
          <GitHubStats />
        </div>
        <div className=" border-[#F7F7F7] border-2  rounded-md flex items-center md:col-span-1 sm:col-span-2 col-span-3">
          <StravaStats1 />
        </div>
        <div className=" rounded-md flex items-center md:col-span-1 sm:col-span-2 col-span-1">
          <OuraStats />
        </div>
        <div className="bg-[#F7F7F7] rounded-md drop-shadow-sm md:row-start-2 md:col-start-4 md:col-span-1 md:row-span-2 sm:col-span-4 sm:row-span-1 col-span-4">
          <SpotifyPlaylist />
        </div>
      </div>
    </div>
  );
}

export default About;
