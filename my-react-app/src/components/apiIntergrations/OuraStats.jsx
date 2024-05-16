import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPagelines } from "@fortawesome/free-brands-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";
// import OuraRingToken from "../../../tokens";

const OuraStats = () => {
  // State variables to hold API response data
  // const [activityScore, setActivityScore] = useState(null);
  // const [readinessScore, setReadinessScore] = useState(null);
  // const [sleepScore, setSleepScore] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     // API authorization token and date range for data retrieval
  //     const token = "BKNNADUDB5H73KTPBVA3RBPPSSJBMU7Y";
  //     const startDate = "2024-05-12";
  //     const endDate = "2024-05-13";

  //     const headers = {
  //       Authorization: `Bearer ${token}`,
  //     };

  //     // API endpoints for different data types
  //     const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  //     const activityUrl =
  //       "https://api.ouraring.com/v2/usercollection/daily_activity";
  //     const readinessUrl =
  //       "https://api.ouraring.com/v2/usercollection/daily_readiness";
  //     const sleepUrl = "https://api.ouraring.com/v2/usercollection/daily_sleep";

  //     try {
  //       // Fetch daily activity data
  //       const activityResponse = await axios.get(
  //         `${activityUrl}?start_date=${startDate}&end_date=${endDate}`,
  //         { headers: headers }
  //       );

  //       // Fetch daily readiness data
  //       const readinessResponse = await axios.get(
  //         `${readinessUrl}?start_date=${startDate}&end_date=${endDate}`,
  //         { headers: headers }
  //       );

  //       // Fetch daily sleep data
  //       const sleepResponse = await axios.get(
  //         `${sleepUrl}?start_date=${startDate}&end_date=${endDate}`,
  //         { headers: headers }
  //       );

  //       // Set scores from response data
  //       setActivityScore(activityResponse.data?.data[0]?.score);
  //       setReadinessScore(readinessResponse.data?.data[0]?.score);
  //       setSleepScore(sleepResponse.data?.data[0]?.score);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData(); // Call fetchData() when component mounts
  // }, []); // Empty dependency array ensures fetchData() runs only on component mount

  // Temporary values to prevent many API requests during testing
  const activityScore = 94;
  const readinessScore = 81;
  const sleepScore = 82;

  const backgroundGradient = "bg-gradient-to-br from-blue-700 to-black";
  const todaysDate = new Date().toDateString();

  return (
    <div className="card bg-gradient-to-tr from-blue-950 to-black text-white w-full h-5/6 rounded-lg flex justify-between items-center flex-col drop-shadow-sm">
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
