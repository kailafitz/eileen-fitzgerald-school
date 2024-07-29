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
        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-20 md:justify-between">
          <div className="flex flex-col justify-center w-full md:w-2/3">
            <h1 className="text-xl md:text-3xl mb-3 hide-down transition-delay-0">
              Empowering voices: Where the art of drama meets the impact of
              expressive speech
            </h1>
            <p className="mb-10 hide-down transition-delay-1">
              Here at The Eileen Fitzgerald School, various classes are on offer
              for pupils of all ages. Whether you&#39;re interested in
              expressing yourself through the arts or if you&#39;re looking to
              vastly improve your confidence and communication skills for an
              important presentation at work, speech and drama is an empowering
              discipline.
            </p>
            <Link
              href={`/classes`}
              className="flex flex-col justify-center p-3 w-full sm:w-fit bg-primary border-primary hover:bg-violet-800 hover:border-violet-800 text-center text-gray-200 hide-down transition-delay-3"
            >
              View Classes
            </Link>
          </div>
          <div className="relative w-full md:w-1/3 ">
            <div className="absolute bottom-0 right-0 w-full h-full dark-gradient z-10 "></div>
            <img
              src="actress-3.png"
              alt="actress"
              className="w-full h-auto object-contain border-zinc-900 border-2"
            />
          </div>
        </div>
      </Container>

      <Container className="min-h-screen py-10 flex flex-col justify-center text-gray-200">
        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-20 md:justify-between">
          <div className="relative w-full md:w-1/3">
            <div className="absolute bottom-0 right-0 w-full h-full dark-gradient z-10 "></div>
            <img
              src="actor-3.png"
              alt="actor"
              className="w-full h-auto object-contain border-zinc-900 border-2 flip"
            />
          </div>
          <div className="flex flex-col justify-center w-full md:w-2/3">
            <h1 className="text-xl md:text-3xl mb-3 hide-down transition-delay-0">
              Established in Co. Clare in 1992, our school continues to foster a
              love of drama, communications and clear speech in our students
            </h1>
            <p className="mb-10 hide-down transition-delay-1">
              Learn more about Eileen Fitzgerald and her achievements as a
              teacher, mentor and advocate for the art of Speech and Drama over
              the years of her long and successful career. As a successful
              teacher and mentor, so many students have been shaped by the power
              of Speech and Drama at the school of Eileen Fitzgerald. Read more
              about Eileen and what her students have to say by visiting our
              About page.
            </p>
            <Link
              href={`/about`}
              className="flex flex-col justify-center p-3 w-full sm:w-fit bg-primary border-primary hover:bg-violet-800 hover:border-violet-800 text-center text-gray-200 hide-down transition-delay-3"
            >
              About Us
            </Link>
          </div>
        </div>
      </Container>
      <Container className="min-h-screen py-10 flex flex-col justify-center text-gray-200">
        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-20 md:justify-between">
          <div className="flex flex-col justify-center w-full md:w-2/3">
            <h1 className="text-xl md:text-3xl mb-3 hide-down transition-delay-0">
              For queries relating to enrolments and fees, please contact us
              directly
            </h1>
            <p className="mb-10 hide-down transition-delay-1">
              Browse our website to get a glimpse into what we do and we hope
              you join us in celebrating the art that is Speech & Drama.
              <br />
              <br />
              If you would like to keep up to date with all our latest news and
              updates, please follow us on our social media pages. You can
              follow us or get in touch by visiting our Contact page which has
              all of our contact information. We look forward to hearing from
              you!
            </p>
            <Link
              href={`/contact`}
              className="flex flex-col justify-center p-3 w-full sm:w-fit bg-primary border-primary hover:bg-violet-800 hover:border-violet-800 text-center text-gray-200 hide-down transition-delay-3"
            >
              Contact
            </Link>
          </div>
          <div className="relative w-full md:w-1/3 ">
            <div className="absolute bottom-0 right-0 w-full h-full dark-gradient z-10 "></div>
            <img
              src="pupil-girl2.png"
              alt="actor"
              className="w-full h-auto object-contain border-zinc-900 border-2"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Intro;
