import AboutMeText from "./AboutMeText.jsx";

function About() {
  return (
    // <div className="px-10 h-dvh w-dvw grid  gap-4 sm:grid-cols-1 md:grid-cols-2">
    <div className="px-10 h-dvh w-dvw grid gap-4 lg:grid-cols-4 lg:grid-rows-3 sm:grid-cols-2 grid-cols-1 gap-4   ">
      <div className="bg-[#F7F7F7] rounded-md">
        <AboutMeText />
      </div>
      <div className="bg-[#F7F7F7] rounded-md sm:block hidden">
        github section
      </div>
      <div className="bg-[#F7F7F7] rounded-md sm:block hidden">
        images / personal section
      </div>
      <div className="bg-[#F7F7F7] rounded-md sm:block hidden">
        spotify stats{" "}
      </div>
      <div className="bg-[#F7F7F7] rounded-md sm:block hidden">
        strava stats
      </div>
    </div>
  );
}

export default About;
