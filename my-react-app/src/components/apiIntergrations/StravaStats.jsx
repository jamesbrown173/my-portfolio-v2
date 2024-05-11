import React from "react";

const StravaStats1 = () => {
  const handleClick = () => {
    window.open("https://www.strava.com/athletes/88967946", "_blank"); // Opens GitHub in a new tab
  };

  return (
    <div className="flex flex-col drop-shadow-sm">
      <div className="upper flex justify-end h-[10%] -mt-9">
        <div className="stravaIconContainer w-9 h-9 flex items-center justify-center">
          <img
            onClick={handleClick}
            src="StravaLogo2.png"
            alt="stravalogo"
            className="relative w-9 rounded-full top-6 right-3 rotate-[40deg] cursor-pointer hover:w-8 active:w-7 transition-all ease-in-out duration-300 "
          ></img>
        </div>
      </div>
      <div className="lower h-full">
        <iframe
          height="160px"
          width="100%"
          frameborder="0"
          allowtransparency="true"
          scrolling="no"
          src="https://www.strava.com/athletes/88967946/activity-summary/b16f06fc8486244574f236a1f884c37f264e7ab0"
        ></iframe>
      </div>
    </div>
  );
};

export default StravaStats1;
