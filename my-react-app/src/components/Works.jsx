import WorksCard from "./WorksCard";

function Works() {
  return (
    <div id="works" className="pt-[10rem] flex flex-col w-inherit gap-8">
      <h1 className="font-mono text-2xl leading-10 px-5 text-left self-start pb-10">
        Here's what I've been working on ...
      </h1>
      <div className=" lg:grid-cols-2 grid gap-20 m-auto grid-cols-1">
        <WorksCard
          projectTitle="Scoopy"
          skills={["node.js", "react", "vite"]}
        />
        <WorksCard
          projectTitle="Bloggy"
          skills={["express.js", "node.js", "html5", "css3"]}
        />
        <WorksCard isEmpty={true} projectTitle="" skills="" />
        <WorksCard isEmpty={true} projectTitle="" skills="" />
      </div>
    </div>
  );
}

export default Works;
