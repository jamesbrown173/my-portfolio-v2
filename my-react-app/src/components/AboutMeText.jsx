function AboutMeText() {
  return (
    <div
      id="AboutMeText"
      className="px-9 py-3 flex flex-col justify-evenly align the content center h-[100%]"
    >
      <h1 className="font-medium text-xl text-left">
        📚 What I'm about <hr className="pt-1" />
      </h1>
      <div className="paragraph-container">
        <h2 className="text-base text-left mb-2">🏡 Where I'm from</h2>

        <p className="text-justify font-light">
          I was born and raised in the north of the UK, My father's was a
          concrete worker and my mother was a nurse. From a young age I’ve
          always been interested in computers. I can remember playing Asteroid
          on MS Dos in my father’s work office, alongside Indiana Jones on
          Windows XP.
        </p>
      </div>
      <div className="paragraph-container">
        <h2 className="font-medium text-base text-left mb-2">
          👨‍🏫 What I used to do
        </h2>
        <p className="text-justify font-light">
          I got my first job aged 16 as a glass collector. I then graduated from
          Manchester Metropolitan University with a degree in International
          Business aged 21 at before working in the automotive sector before
          transitioning into education.
        </p>
      </div>
      <div className="paragraph-container">
        <h2 className="font-medium text-base text-left mb-2">
          💻 What I do now
        </h2>
        <p className="text-justify font-light">
          Today, I’m emersed in web development and improving my coding skills.
          This guy’s working with an stack of technologies such as Node.js,
          Express, and Python amongst others.
        </p>
      </div>
      <div className="paragraph-container">
        <h2 className="font-medium text-base text-left mb-2">
          🇻🇳 Where I'm at now
        </h2>
        <p className="text-justify font-light">
          Today, I live in Ho Chi Minh City. When I'm not engrossed in lines of
          code, you can find me exploring the vibrant cityscape or finding the
          secret running routes.
        </p>
      </div>
      <div className="paragraph-container">
        <h2 className="font-medium text-base text-left mb-2 ">
          🔎 What I'm looking for
        </h2>
        <p className="text-justify font-light">
          I’m looking to collaborate with like-minded individuals and contribute
          my skills in your team.
        </p>
      </div>
    </div>
  );
}

export default AboutMeText;
