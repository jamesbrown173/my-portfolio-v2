function Hero() {
  return (
    <div className="h-[80dvh] flex items-center  flex-col justify-evenly">
      <h1 className="font-mono text-2xl leading-10">
        Hi! I'm James! I'm a web developer working with ...
      </h1>

      {/* The language and skills buttons are styling in the main.css. I couldn't write the styling in tailwind. */}

      <div className="languagesAndSkills-container flex flex-col border-none">
        <div id="languagesAndSkills-card" className={`bg-[#CDF7FF]`}>
          <h1 className="languagesAndSkills-card-text">vs code</h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
