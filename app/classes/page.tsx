import React from "react";
import Benefits from "@/components/custom/benefits";
import ClassSchedules from "@/components/custom/classSchedules";
import WhatIsSpeechAndDrama from "@/components/custom/whatIsSpeechAndDrama";
import Link from "next/link";
import Activities from "@/components/custom/activities";
import YearlyEvents from "@/components/custom/yearlyEvents";
import PublicSpeaking from "@/components/custom/publicSpeaking";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classes | Eileen Fitzgerald",
  description:
    "Classes ran by The Eileen Fitzgerald School of Speech and Drama. Read through details on classes held around Ennis, Co.Clare, for various age groups. Details are provided on class activities for each age group, from 4 year olds to adults. The Eileen Fitzgerald School of Speech and Drama gets involved in many events around Ireland whilst holding events of their own to keep students simulated and engaged whilst practising the arts of Speech and Drama. Public speaking classes are also offered by Eileen.",
};

// [&_div:nth-child(2)]:justify-end

const Classes = () => {
  return (
    <>
      <div className="fixed h-screen z-10 fixed-col p-5 bg-white fixed-col-content hidden md:block">
        <p className="text-2xl mb-5">Contents</p>
        <Link
          href="/classes/#what-is-speech-and-drama"
          className="relative w-fit mb-2 block"
        >
          <span className="after:w-full after:h-0.5 after:absolute after:block after:-bottom-1 after:left-0 after:bg-primary after:scale-x-0 after:transition-all hover:after:scale-x-100">
            What is Speech and Drama?
          </span>
        </Link>
        <Link href="/classes/#benefits" className="relative w-fit mb-2 block">
          <span className="after:w-full after:h-0.5 after:absolute after:block after:-bottom-1 after:left-0 after:bg-primary after:scale-x-0 after:transition-all hover:after:scale-x-100">
            Benefits of Speech and Drama
          </span>
        </Link>
        <Link
          href="/classes/#class-schedules"
          className="relative w-fit mb-2 block"
        >
          <span className="after:w-full after:h-0.5 after:absolute after:block after:-bottom-1 after:left-0 after:bg-primary after:scale-x-0 after:transition-all hover:after:scale-x-100">
            Class Schedules
          </span>
        </Link>
        <Link href="/classes/#activities" className="relative w-fit mb-2 block">
          <span className="after:w-full after:h-0.5 after:absolute after:block after:-bottom-1 after:left-0 after:bg-primary after:scale-x-0 after:transition-all hover:after:scale-x-100">
            Class Activities
          </span>
        </Link>
        <Link
          href="/classes/#yearly-events"
          className="relative w-fit mb-2 block"
        >
          <span className="after:w-full after:h-0.5 after:absolute after:block after:-bottom-1 after:left-0 after:bg-primary after:scale-x-0 after:transition-all hover:after:scale-x-100">
            Yearly Events
          </span>
        </Link>
        <Link
          href="/classes/#public-speaking"
          className="relative w-fit mb-2 block"
        >
          <span className="after:w-full after:h-0.5 after:absolute after:block after:-bottom-1 after:left-0 after:bg-primary after:scale-x-0 after:transition-all hover:after:scale-x-100">
            Public Speaking
          </span>
        </Link>
      </div>
      <div className="scrollable-col">
        <WhatIsSpeechAndDrama />
        <Benefits />
        <ClassSchedules />
        <Activities />
        <YearlyEvents />
        <PublicSpeaking />
      </div>
    </>
  );
};

export default Classes;
