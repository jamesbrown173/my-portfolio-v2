import React from "react";

const WorksCardOuraJsonUploader = () => {
  return (
    <div className="mainCard md:flex-row flex-col justify-between items-center gap-4 p-3 flex h-auto w-auto bg-gradient-to-tr  from-[#FBFBFB] to-white border-[#E8E8E8] border-solid border-2 rounded-[2rem] drop-shadow-sm ">
      <div className="Container md:order-1 order-2 flex flex-row sm:flex-nowrap flex-wrap justify-between h-auto w-full">
        <div className="leftInnerContainer  flex flex-col gap-2 justify-around p-2 ">
          <div className="flex flex-col w-full">
            <h1 className="font-normal text-2xl text-left">
              Oura JSON Uploader{" "}
            </h1>
            <p className="font-normal text-sm text-left pt-2">
              🏃‍♂️ Health and Fitness
            </p>
          </div>
          <p className="font-normal text-sm text-left">
            This simple <b>Python</b> script allows you to extract data in JSON
            from the Oura API, then extract and upload the most recent data
            entries to Runalyze.
          </p>
        </div>
        <div className="rightInnerContainer flex gap-4 sm:basis-1/2 basis-1/4 border-x-sky-600 items-center pb-4">
          <div className="GitHubButton text-zinc-500 h-fit w-full min-w-[10rem]  flex justify-between p-2 bg-gradient-to-tr  from-[#FBFBFB] to-white border-[#E8E8E8] border-solid border-2 rounded-2xl drop-shadow-sm hover:scale-[99%] active:scale-[98%] cursor-pointer transition-all ease-in-out duration-300">
            <p>GitHub Repo</p>
            <p>{">"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksCardOuraJsonUploader;
