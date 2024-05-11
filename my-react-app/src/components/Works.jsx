import WorksCardBloggingApp from "./WorksCardBloggingApp";

function Works() {
  return (
    <div id="works" className=" flex flex-col justify-evenly gap-4">
      <h1 className="font-mono text-2xl text-left pl-10">
        Here's what I've been working on ...
      </h1>
      <WorksCardBloggingApp />
      <WorksCardBloggingApp />
      <WorksCardBloggingApp />
    </div>
  );
}

export default Works;

// OLD WORDS CARDS
// <WorksCard
//           projectTitle="Scoopy"
//           skills={["node.js", "react", "vite"]}
//           imgUrl="/Bloggy.png"
//         />
//         <WorksCard
//           projectTitle="Bloggy"
//           skills={["express.js", "node.js", "html5", "css3"]}
//           imgUrl="/Scoopy.png"
//         />
//         <WorksCard isEmpty={true} projectTitle="" skills="" />
//         <WorksCard isEmpty={true} projectTitle="" skills="" />
