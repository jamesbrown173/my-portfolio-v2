import WorksCardButton from "./WorksCardButton.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function WorksCard(props) {
  console.log(props.skills[1]);

  if (!props.isEmpty) {
    return (
      // Remove the h-30rem after the image has been added in.
      <div className="bg-[#F7F7F7] rounded-3xl flex flex-col p-5 justify-end">
        <div className="works-card-top flex justify-center items-center m-auto md:w-[30rem] md:h-[20rem]">
          image
        </div>
        <div className="works-card-mid">
          <h1 className="text-3xl text-left item my-2">{props.projectTitle}</h1>
        </div>
        <div className="works-card-lower flex gap-3">
          {props.skills.map((skillItem, index) => (
            <WorksCardButton skill={skillItem} key={index} id={index} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full h-[20rem] bg-[#ffffff] border-dashed border-2 border-[#e4e4e4f9] rounded-3xl flex flex-col justify-center m-auto md:w-[30rem] md:h-[25rem]">
        <h1 className="text-6xl opacity-10">
          <FontAwesomeIcon icon={faPlus} />
        </h1>
      </div>
    );
  }
}

export default WorksCard;
