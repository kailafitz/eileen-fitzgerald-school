import React from "react";

const OpeningAnimation = () => {
  return (
    <div className="bg-zinc-900 z-50 fixed top-0 left-0 h-screen w-screen flex flex-col justify-center animate-slide-out-container">
      <div className="bg-white absolute rounded-full animate-spotlight"></div>
      <img
        src="/logo.png"
        className="w-52 h-52 mx-auto animate-logo"
        alt="logo"
      />
      <h1 className="font-heading animate-logo text-center text-2xl w-full absolute top-[65%]">
        The Eileen Fitzgerald <br /> School of Speech and Drama
      </h1>
    </div>
  );
};

export default OpeningAnimation;
