import React from "react";
import Container from "./container";
import Link from "next/link";
import Script from "next/script";

const Intro = () => {
  return (
    <>
      <Script src="/animations.js" type="text/javascript" />
      <Container
        className="min-h-screen py-10 flex flex-col justify-center text-gray-200"
        id="intro"
      >
        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-10 md:justify-between hide-down transition-delay-0">
          <div className="flex flex-col justify-center w-full md:w-2/3">
            <h1 className="text-xl md:text-3xl mb-3">
              The school was established in Co. Clare in 1992 to foster a love
              of drama, communications and clear speech in our students. Browse
              our website to get a glimpse into what we do and we hope you join
              us in celebrating the art that is Speech & Drama.
            </h1>
            <p className="text-base md:text-xl">
              We post all our latest news and updates on our social media pages.
              For queries relating to enrolments and fees, please contact us
              directly{" "}
              <Link href="/contact" className="relative">
                <span className="before:w-full before:h-0.5 before:absolute before:block before:-bottom-0.5 before:left-0 before:bg-white before:scale-x-100 after:w-full after:h-0.5 after:absolute after:block after:-bottom-0.5 after:left-0 after:bg-primary after:scale-x-0 after:transition-all hover:after:scale-x-100">
                  here
                </span>
              </Link>
              .
            </p>
          </div>
          <div className="relative w-full md:w-1/3">
            <div className="absolute bottom-0 right-0 w-full h-full dark-gradient z-10"></div>
            <img
              src="actress-2.png"
              alt="actress"
              className="w-full h-auto object-contain border-zinc-900 border-2"
            />
            <img
              src="actor-2.png"
              alt="actor"
              className="absolute bottom-0 w-3/4 h-auto opacity-100 -z-10 right-36 saturate-50 object-contain hide-down transition-delay-0"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Intro;
