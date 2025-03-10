"use client";
import React from "react";
import Container from "./container";
import Link from "next/link";
import { motion } from "framer-motion";
import MotionDiv from "./motionDiv";
import {
  ANIMATION_DELAY_1,
  ANIMATION_DELAY_2,
  ANIMATION_DURATION,
} from "@/lib/globals";
import Image from "next/image";

const sectionInfo = [
  {
    title:
      "Empowering voices: Where the art of drama meets the impact of expressive speech",
    body: "Here at The Eileen Fitzgerald School, various classes are on offer for pupils of all ages. Whether you're interested in expressing yourself through the arts or if you're looking to vastly improve your confidence and communication skills for an important presentation at work, Speech and Drama is an empowering discipline.",
    link: "classes",
    image: "actress",
  },
  {
    title:
      "Established in Co. Clare in 1992, our school continues to foster a love of drama, communications and clear speech in our students",
    body: "Learn more about Eileen Fitzgerald and her achievements as a teacher, mentor and advocate for the art of Speech and Drama over the years of her long, successful career. As an accredited teacher and mentor, so many students have been shaped by the power of Speech and Drama at the school of Eileen Fitzgerald. Read more about Eileen and what her students have to say by visiting our About page.",
    link: "about",
    image: "actor",
  },
  {
    title:
      "For queries relating to enrolments and fees, please contact us directly",
    body: "Browse our website to get a glimpse into what we do and we hope you join us in celebrating the art that is Speech and Drama. If you would like to keep up to date with all our latest news and updates, please follow us on our social media pages. You can follow us or get in touch by visiting our Contact page which has all of our contact information. We look forward to hearing from you!",
    link: "contact",
    image: "speech-and-drama-pupil",
  },
];

const Intro = () => {
  return (
    <>
      {sectionInfo.map((info, i) => {
        return (
          <Container
            key={`${info.link}_${i}`}
            id={`${i === 0 ? "intro" : ""}`}
            className="min-h-screen py-10 flex flex-col justify-center"
          >
            <div
              className={`flex flex-col md:flex-row ${
                i % 2 !== 0 ? "" : "md:flex-row-reverse md:space-x-reverse"
              } space-y-5 md:space-y-0 md:space-x-20 md:justify-between`}
            >
              {/* Image div */}
              <MotionDiv className="relative w-full md:w-1/3">
                <div className="absolute -bottom-px -right-px w-full h-full dark-gradient z-10"></div>
                <Image
                  width={360}
                  height={610}
                  src={`/${info.image}.png`}
                  alt="Speech and Drama student"
                  className={`w-full h-auto object-contain ${
                    i % 2 !== 0 ? "scale-x-[-1]" : ""
                  }`}
                />
              </MotionDiv>
              {/* Info and link div */}
              <div className="flex flex-col justify-center w-full md:w-2/3">
                <motion.h1
                  initial={{ opacity: 0, translateY: "-6rem" }}
                  whileInView={{ opacity: 1, translateY: "0" }}
                  exit={{ opacity: 0, translateY: "6rem" }}
                  transition={{
                    duration: ANIMATION_DURATION,
                    delay: ANIMATION_DELAY_1,
                  }}
                  className="font-heading text-3xl md:text-4xl mb-3 -z-0"
                >
                  {info.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, translateY: "-6rem" }}
                  whileInView={{ opacity: 1, translateY: "0" }}
                  exit={{ opacity: 0, translateY: "6rem" }}
                  transition={{
                    duration: ANIMATION_DURATION,
                    delay: ANIMATION_DELAY_2,
                  }}
                  className="mb-10 -z-0"
                >
                  {info.body}
                </motion.p>
                <MotionDiv delay={3} className="z-30">
                  <Link
                    href={`/${info.link}`}
                    className="flex flex-col justify-center capitalize p-3 w-full sm:w-64 text-center relative after:block after:absolute after:border-l-2 after:border-r-2 after:border-white after:h-0 after:top-0 after:left-0 after:w-full hover:after:h-full after:z-10 after:transition-all after:hover:transition-all after:duration-500 after:hover:duration-500 after:hover:delay-75 before:block before:absolute before:border-t-2 before:border-b-2 before:border-white before:h-full before:top-0 before:left-0 before:w-0 hover:before:w-full before:z-10 before:transition-all before:hover:transition-all before:duration-500 before:hover:duration-500"
                  >
                    <div className="block absolute top-0 left-0 h-full w-full border-2 border-primary"></div>
                    {info.link}
                  </Link>
                </MotionDiv>
              </div>
            </div>
          </Container>
        );
      })}
    </>
  );
};

export default Intro;
