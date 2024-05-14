function GitHub() {
  const handleGitHubClick = () => {
    window.open("https://github.com/jamesbrown173", "_blank"); // Opens GitHub in a new tab
  };

  // The first containing div has a fixed hieght of 10 rem. This is a hacky solution and could cause problems later down the line consider fixing it.

  return (
    <div className="flex flex-col p-3 h-[10rem] items-center justify-center">
      <div className="upperContainer flex w-full justify-end h-0">
        <div className="gitHubIconContainer w-9 h-9 flex items-center justify-center">
          <img
            onClick={handleGitHubClick}
            src="githublogo2.png"
            alt="githublogo2logo"
            className="relative w-9 rounded-full bottom-14 right-3 -rotate-[30deg] cursor-pointer hover:w-8 active:w-7 transition-all ease-in-out duration-300 "
          ></img>
        </div>
      </div>
      <img
        className=""
        src="https://ghchart.rshah.org/jamesbrown173"
        alt="2016rshah's Github chart"
      />
    </div>
  );
}

export default GitHub;
