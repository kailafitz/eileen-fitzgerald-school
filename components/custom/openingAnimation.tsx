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

    if (animationActivate) {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

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
            <div className="bg-white absolute rounded-full animate-opening-spotlight-mobile md:animate-opening-spotlight z-[60]"></div>
            <img
              src="/logo.png"
              className="w-52 h-52 mx-auto animate-logo-mobile sm:animate-logo-sm md:animate-logo z-[60] absolute"
              alt="logo"
            />
            <p className="absolute top-[68%] text-2xl opening-animation-text text-center text-foreground opacity-0 z-[60] font-heading animate-opening-text">
              The Eileen Fitzgerald <br />
              School of Speech & Drama
            </p>
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
