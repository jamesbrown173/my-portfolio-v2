import React from "react";

const WorksCardBloggingApp = () => {
  return (
    <div className="mainCard md:flex-row flex-col justify-center items-center gap-4 p-3 flex h-auto w-auto bg-gradient-to-tr  from-[#FBFBFB] to-white border-[#E8E8E8] border-solid border-2 rounded-[2rem] drop-shadow-sm">
      <div className="leftContainer md:order-1 order-2 basis-1/3 flex flex-col justify-between h-auto  self-stretch">
        <div className="leftInnerContainerTop  flex flex-col gap-3 justify-around p-2">
          <h1 className="font-normal text-2xl text-left">Blogging App</h1>
          <p className="font-normal text-sm text-left">🇻🇳 Vietnam, From Home</p>
          <p className="font-normal text-sm text-left">
            This is a simple website that allows you to write blog posts, save
            and edit them.
          </p>
          <p className="font-normal text-sm text-left">
            The techstack used on the reactive app was <b>React</b> and{" "}
            <b>Material UI</b>.
          </p>
        </div>
        <div className="leftInnerContainerLower flex flex-col w-auto h-auto gap-4 ">
          <a href="https://scoopy-notes-app.vercel.app/" target="_blank">
            <div className="LiveDemoButton text-zinc-500  flex justify-between p-2 basis-1/2 bg-gradient-to-tr  from-[#FBFBFB] to-white border-[#E8E8E8] border-solid border-2 rounded-2xl drop-shadow-sm hover:scale-[99%] active:scale-[98%] cursor-pointer transition-all ease-in-out duration-300">
              <p>Live Demo</p>
              <p>{">"}</p>
            </div>
          </a>
          <a
            href="https://github.com/jamesbrown173/Scoopy-Notes-App"
            target="_blank"
          >
            <div className="GitHubButton text-zinc-500  flex justify-between p-2 basis-1/2 bg-gradient-to-tr  from-[#FBFBFB] to-white border-[#E8E8E8] border-solid border-2 rounded-2xl drop-shadow-sm hover:scale-[99%] active:scale-[98%] cursor-pointer transition-all ease-in-out duration-300">
              <p>GitHub Repo</p>
              <p>{">"}</p>
            </div>
          </a>
        </div>
      </div>
      <div className="rightContainer  basis-2/3 md:order-2 order-1 cursor-pointer hover:opacity-95 transition-all ease-in-out duration-300 hover:scale-[99%] active:scale-[98%]">
        <div className="imgSizingContainer h-full">
          <img
            className="rounded-[2rem]"
            src="Scoopy-Screenshot-Desktop.png"
            alt="placehodlerimage"
          />
        </div>
      </div>
    </div>
  );
};

export default WorksCardBloggingApp;
