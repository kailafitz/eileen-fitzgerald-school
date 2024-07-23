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
          className="hover:underline"
        >
          What is Speech and Drama?
        </Link>
        <Link href="/classes/#benefits" className="hover:underline block">
          Benefits of Speech and Drama
        </Link>
        <Link
          href="/classes/#class-schedules"
          className="hover:underline block"
        >
          Class Schedules
        </Link>
        <Link href="/classes/#activities" className="hover:underline block">
          Class Activities
        </Link>
        <Link href="/classes/#yearly-events" className="hover:underline block">
          Yearly Events
        </Link>
        <Link
          href="/classes/#public-speaking"
          className="hover:underline block"
        >
          Public Speaking
        </Link>
        {/* </Container> */}
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
