function AboutMeText() {
  return (
    <>
      <div className="whereImFromContainer flex flex-col  p-0 grow">
        <p className="text-left text-sm text font-bold ">🏡 Where I'm from</p>
        <p className=" flex items-center justify-center text-justify font-normal text-sm p-4 bg-[#F7F7F7] rounded-md grow">
          I was born and raised in the north of the UK, My father was a concrete
          worker and my mother was a nurse. From a young age I’ve always been
          interested in computers. I can remember playing Asteroid on MS Dos in
          my father’s work office, alongside Indiana Jones on Windows 2000.
        </p>
      </div>
      <div className="titleAndParagraphContainer flex flex-col justify-evenly grow">
        <p className="text-left text-sm text font-bold">👨‍🏫 What I used to do</p>
        <p className=" flex items-center justify-center text-justify font-light text-sm p-4 bg-[#F7F7F7] rounded-md grow">
          I got my first job aged 16 as a glass collector. I then graduated from
          Manchester Metropolitan University with a degree in International
          Business aged 21 at before working in the automotive sector before
          transitioning into education.
        </p>
      </div>

      <div className="titleAndParagraphContainer flex flex-col justify-evenly grow">
        <h1 className="text-left text-sm text font-bold">💻 What I do now</h1>
        <p className="flex items-center justify-center text-justify font-light text-sm p-4 bg-[#F7F7F7] rounded-md grow">
          Today, I’m emersed in web development and improving my coding skills.
          I'm working with an stack of technologies such as Node.js, Express,
          and Python amongst others.
        </p>
      </div>

      <div className="titleAndParagraphContainer flex flex-col justify-evenly grow">
        <h1 className="text-left text-sm text font-bold pb-2">
          🇻🇳 Where I'm at now
        </h1>
        <p className="tflex items-center justify-center text-justify font-light text-sm p-4 bg-[#F7F7F7] rounded-md grow">
          Today, I live in Ho Chi Minh City. When I'm not engrossed in lines of
          code, you can find me exploring the vibrant cityscape or finding the
          secret running routes.
        </p>
      </div>

      <div className="titleAndParagraphContainer flex flex-col justify-evenly grow">
        <h1 className="text-left text-sm text font-bold pb-2">
          🔎 What I'm looking for
        </h1>
        <p className=" flex items-center justify-center text-justify font-light text-sm p-4 bg-[#F7F7F7] rounded-md grow h-full">
          I’m looking to collaborate with like-minded individuals and contribute
          my skills in your team.
        </p>
      </div>
    </>
  );
}

export default AboutMeText;
