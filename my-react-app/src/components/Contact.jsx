import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div id="connect" className=" h-[100vh] flex flex-col text-left ">
      <div className="bg-white bg-gradient-to-tr from-white from-20% via-amber-50 via-80% to-slate-100  rounded-3xl m-auto p-10 w-10/12 h-[20rem] flex flex-col justify-evenly border-gray-200 border-2 flex gap-2">
        <h1 className="font-medium text-xl">
          Ready to connect? Let's make it happen...
        </h1>
        <button
          onClick={() => sendEmail()}
          id="custom-button-border"
          className="bg-black text-white  rounded-full w-28 border-[solid #c0c0c0 1px] bg-black text-white h-[40px] w-[120px] rounded-full shadow-customButton pb-1  hover:shadow-black  hover:pb-0 transition-all ease-in delay-75 duration-100 hover:border-black"
        >
          Let's talk!
        </button>
        <hr />
        <div className="bottom-container flex justify-start flex-wrap">
          <div className="bottom-left text-left w-full md:w-1/2 flex flex-col gap-2 ">
            <h2 className="text-[#878787]">Connect</h2>
            <p>jamesbrown173@gmail.com</p>
          </div>
          <div className="bottom-right text-left w-full md:w-1/2 flex flex-col gap-2">
            <h2 className="text-[#878787]">Follow</h2>
            <div className="flex gap-2">
              <FontAwesomeIcon
                onClick={() =>
                  (location.href = "https://twitter.com/JamesMiBr")
                }
                icon={faTwitter}
                className="cursor-pointer text-[#878787] border-2 border-[#cccccc] border-solid rounded-full p-1 h-4 w-4"
              />

              <FontAwesomeIcon
                onClick={() =>
                  (location.href = "https://linkedin.com/in/jbrown20/")
                }
                icon={faLinkedinIn}
                className="cursor-pointer text-[#878787] border-2 border-[#cccccc] border-solid rounded-full p-1 h-4 w-4"
              />

              <FontAwesomeIcon
                onClick={() =>
                  (location.href = "https://github.com/jamesbrown173")
                }
                icon={faGithub}
                className="cursor-pointer text-[#878787] border-2 border-[#cccccc] border-solid rounded-full p-1 h-4 w-4"
              />

              <FontAwesomeIcon
                onClick={() => sendEmail()}
                icon={faEnvelope}
                className="cursor-pointer text-[#878787] border-2 border-[#cccccc] border-solid rounded-full p-1 h-4 w-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function sendEmail() {
  window.location.assign("mailto:jamesbrown173@gmail.com");
}

export default Contact;
