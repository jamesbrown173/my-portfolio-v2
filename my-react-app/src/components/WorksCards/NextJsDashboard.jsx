import React from "react";

const NextJsDashboard = () => {
  return (
    <div className="mainCard md:flex-row flex-col justify-center items-center gap-4 p-3 flex h-auto w-auto bg-gradient-to-tr  from-[#FBFBFB] to-white border-[#E8E8E8] border-solid border-2 rounded-[2rem] drop-shadow-sm">
      <div className="leftContainer md:order-1 order-2 basis-1/3 flex flex-col justify-between h-auto  self-stretch">
        <div className="leftInnerContainerTop  flex flex-col gap-3 justify-around p-2">
          <h1 className="font-normal text-2xl text-left">Next Js Dashboard</h1>
          <p className="font-normal text-sm text-left">
            📊 Finance and Customer Management
          </p>
          <p className="font-normal text-sm text-left">
            This is a financial dashboard that allows you to add, read and
            update invoices for customers. It was built with next.js.
          </p>
          <p className="font-normal text-sm text-left">
            If you'd like to try the application out you can log in using the{" "}
            <i>user@nextmail.com</i> as the username and <i>123456</i> for the
            password.
          </p>
        </div>
        <div className="leftInnerContainerLower flex flex-col w-auto h-auto gap-4 ">
          <a
            href="https://learning-nextjs-sable-six.vercel.app/login"
            target="_blank"
          >
            <div className="LiveDemoButton text-zinc-500  flex justify-between p-2 basis-1/2 bg-gradient-to-tr  from-[#FBFBFB] to-white border-[#E8E8E8] border-solid border-2 rounded-2xl drop-shadow-sm hover:scale-[99%] active:scale-[98%] cursor-pointer transition-all ease-in-out duration-300">
              <p>Live Demo</p>
              <p>{">"}</p>
            </div>
          </a>
          <a
            href="https://github.com/jamesbrown173/next.js-dashboard"
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
            src="nextjsdashboard.png"
            alt="placehodlerimage"
          />
        </div>
      </div>
    </div>
  );
};

export default NextJsDashboard;
