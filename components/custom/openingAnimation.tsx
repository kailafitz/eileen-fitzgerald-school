import React from "react";

const OpeningAnimation = () => {
  return (
    <div className="bg-zinc-900 z-40 fixed top-0 left-0 h-screen w-screen flex flex-col justify-center animate-slide-out-container">
      {/* <div className="bg-white absolute rounded-full z-40 animate-spotlight"></div> */}
      <svg viewBox="0 0 444 444" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <mask id="mask">
            <circle cx="222" cy="222" r="222" fill="black" />
          </mask>
        </defs>
      </svg>
      <img
        src="/logo.png"
        className="relative w-52 h-52 mx-auto z-50 mask"
        alt="logo"
      />
      {/* <h1 className="text-gray-200 animate-logo text-center text-xl w-full absolute z-40 top-[65%]">
        The Eileen Fitzgerald <br /> School of Speech and Drama
      </h1> */}
    </div>
  );
};

export default OpeningAnimation;
