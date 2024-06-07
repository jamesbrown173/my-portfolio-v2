import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPagelines } from "@fortawesome/free-brands-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";

const OuraStats = () => {
  //State variables to hold API response data
  const [activityScore, setActivityScore] = useState(null);
  const [readinessScore, setReadinessScore] = useState(null);
  const [sleepScore, setSleepScore] = useState(null);

  const getOuraData = async () => {
    try {
      // Fetch the daily activity from proxy server
      const activityResponse = await axios.get(
        "https://my-portfolio-v2-bice.vercel.app/dailyactivity",
      );
      var tempActivityScore = activityResponse.data.data[0]?.score;
      // console.log(`The activity score is ${tempActivityScore}`);
      setActivityScore(tempActivityScore);

      // Fetch the sleep data from proxy server
      const sleepResponse = await axios.get(
        "https://my-portfolio-v2-bice.vercel.app/sleepscore",
      );
      var tempSleepScore = sleepResponse.data.data[0]?.score;
      // console.log(`The sleep score is ${tempSleepScore}`);
      setSleepScore(tempSleepScore);

      // Fetch the readiness data from proxy server
      const readinessResponse = await axios.get(
        "https://my-portfolio-v2-bice.vercel.app/readinessscore",
      );
      var tempReadinessScore = readinessResponse.data.data[0]?.score;
      // console.log(`The readiness score is ${tempReadinessScore}`);
      setReadinessScore(tempReadinessScore);
    } catch (error) {
      console.error("Error fetching data from proxy server:", error);
      return null;
    }
  };

  // Temporary values to prevent many API requests during testing
  // const activityScore = 99;
  // const readinessScore = 99;
  // const sleepScore = 99;

  // Background gradient of component
  const backgroundGradient = "bg-gradient-to-br from-blue-700 to-black";

  // The current date
  const todaysDate = new Date().toDateString();

  return (
    <div
      onLoad={getOuraData}
      className="card bg-gradient-to-tr from-blue-950 to-black text-white w-full h-5/6 rounded-lg flex justify-between items-center flex-col drop-shadow-sm"
    >
      <div className="containerUpper flex justify-end w-full h-[7%] ">
        <div className="stravaIconContainer w-9 h-9 flex items-center justify-center">
          <img
            src="ouraLogo.jpeg"
            alt="ouralogo"
            className="relative w-9 rounded-full bottom-5 right-2 rotate-[40deg] cursor-pointer hover:w-8 active:w-7 transition-all ease-in-out duration-300 "
          ></img>
        </div>
      </div>
      <div className="containerMid w-full flex h-[60%]">
        <div className="basis-1/3 flex justify-center flex-col items-center gap-3 h-full">
          <FontAwesomeIcon
            className="text-[#7BCA36] text-3xl"
            icon={faPagelines}
          />
          <h1 className="text-2xl">{readinessScore}</h1>
        </div>
        <div className="basis-1/3 flex justify-center flex-col items-center border-x-2 border-x-[#797979] h-full gap-3">
          <FontAwesomeIcon className="text-[#62C0F7] text-3xl" icon={faMoon} />
          <h1 className="text-2xl">{sleepScore}</h1>
        </div>
        <div className="basis-1/3 flex justify-center flex-col items-center h-full gap-3">
          <FontAwesomeIcon className="text-[#FA5B51] text-3xl" icon={faFire} />
          <h1 className="text-2xl">{activityScore}</h1>
        </div>
      </div>
      <div className="containerLower flex w-full basis-1/12">
        <div className=" rounded-lg text-slate-400 italic  text-[0.7rem] font-light relative bottom-2 left-3">
          {todaysDate}
        </div>
      </div>
    </div>
  );
};

export default OuraStats;
