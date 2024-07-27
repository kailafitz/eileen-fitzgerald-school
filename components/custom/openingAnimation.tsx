"use client";
import React from "react";

const OpeningAnimation = () => {
  return (
    <div className="bg-zinc-900 z-40 fixed top-0 left-0 h-screen w-screen flex flex-col justify-center animate-slide-out-container">
      <div className="bg-white absolute rounded-full z-40 animate-circle"></div>
      <img src="/logo.png" className="w-52 h-52 mx-auto animate-logo z-50" />
      <h1 className="text-zinc-900 animate-name text-center text-xl w-full absolute z-40 top-[65%]">
        The Eileen Fitzgerald School
        <br />
        of Speech and Drama
      </h1>
    </div>
  );
};

export default OpeningAnimation;
