import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

function MenuItem({ text, link }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="text-[#878787]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <a href={link}>{text}</a>
        <div
          className={`absolute top-6 left-1/2 transform -translate-x-1/2 bg-yellow-400 w-2 h-2 rounded-full transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      </div>
    </div>
  );
}

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`mt-6 place-self-center max-w-[72rem] sticky top-[30px] bg-white z-10 flex justify-between items-center px-5 py-4 border-4 border-[#ebebeb5b] border-solid rounded-full shadow-md ${
        isMobile ? "w-[20rem]" : "w-[80dvw]"
      }`}
    >
      <div className="left-items flex-grow flex items-center space-x-4">
        <div className="bg-[#FFE965] rounded-full border-2 border-solid border-[#00000010] flex p-0.5 justify-center items-center h-10 w-10">
          <FontAwesomeIcon className="text-xl" icon={faCircleHalfStroke} />
        </div>
        {!isMobile ? (
          <>
            <div className="font-semibold">
              <a href="#hero">James</a>
            </div>
            <MenuItem text="|" />
            <MenuItem text="About" link="#about" />
            <MenuItem text="Works" link="#works" />
            <MenuItem text="Connect" link="#connect" />{" "}
          </>
        ) : null}
      </div>
      <div className="right-items flex-grow flex items-center space-x-4 justify-end">
        <button
          onClick={() => sendEmail()}
          id="custom-button-border"
          className="border-[solid #c0c0c0 1px] bg-black text-white h-[40px] w-[120px] rounded-full shadow-customButton pb-1  hover:shadow-black  hover:pb-0 transition-all ease-in delay-75 duration-100 hover:border-black"
        >
          <h1 className="">Say "Hello!"</h1>
        </button>
      </div>
    </nav>
  );
}

function sendEmail() {
  window.location.assign("mailto:jamesbrown173@gmail.com");
}

export default Navbar;
