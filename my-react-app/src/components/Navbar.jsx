import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

function MenuItem({ text }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="text-[#878787]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {text}
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
      className={`sticky top-[20px] bg-white z-10 flex justify-between items-center px-5 py-4 border-2 border-[#ebebeb5b] border-solid rounded-full shadow-md ${
        isMobile ? "w-[20rem]" : "w-[80dvw]"
      }`}
    >
      <div className="left-items flex-grow flex items-center space-x-4">
        <div className="bg-[#FFE965] rounded-full border-2 border-solid border-[#00000010] flex p-0.5 justify-center items-center h-10 w-10">
          <FontAwesomeIcon className="text-xl" icon={faCircleHalfStroke} />
        </div>
        {!isMobile ? (
          <>
            <div className="font-semibold">James</div>
            <MenuItem text="|" />
            <MenuItem text="About" />
            <MenuItem text="Works" />
            <MenuItem text="Connect" />{" "}
          </>
        ) : null}
      </div>
      <div className="right-items flex-grow flex items-center space-x-4 justify-end">
        <button className="bg-black text-white px-4 py-1 rounded-full">
          Say "Hello!"
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
