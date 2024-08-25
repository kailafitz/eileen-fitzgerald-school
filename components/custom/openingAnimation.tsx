"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const OpeningAnimation = () => {
  const [animationActivate, setAnimationActivate] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const body = document.getElementById("body");
    const homeContent = document.getElementById("home-content");
    const navLogo = document.getElementById("logo");
    const navLinks = document.getElementById("links");

    if (pathname === "/") {
      navLogo?.classList.add("md:animate-stationary-logo");
      navLinks?.classList.add("md:animate-nav-links");
      body?.classList.add("animate-disable-scroll");
    }
    homeContent?.classList.add("animate-home-content");
    setTimeout(() => {
      setAnimationActivate(false);
      homeContent?.classList.remove("animate-home-content");
      body?.classList.remove("animate-disable-scroll");
    }, 8000);
  }, []);

  return (
    <>
      {pathname === "/" && (
        <>
          <div
            className={`opening-animation absolute w-screen h-screen top-0 left-0 ${
              animationActivate ? "" : "-z-50 hidden"
            }`}
          >
            <div className="bg-white absolute rounded-full animate-opening-spotlight z-60"></div>
            <img
              src="/logo.png"
              className="w-52 h-52 mx-auto animate-logo-mobile md:animate-logo z-60 absolute"
              alt="logo"
            />
          </div>
          <div
            className={`bg-background z-50 fixed top-0 left-0 w-screen animate-opening-container ${
              animationActivate ? "" : "-z-50 hidden"
            }`}
          />
        </>
      )}
    </>
  );
};

export default OpeningAnimation;
