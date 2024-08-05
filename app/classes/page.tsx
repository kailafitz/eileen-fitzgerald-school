import React from "react";
import Benefits from "@/components/custom/benefits";
import ClassSchedules from "@/components/custom/classSchedules";
import WhatIsSpeechAndDrama from "@/components/custom/whatIsSpeechAndDrama";
import Activities from "@/components/custom/activities";
import YearlyEvents from "@/components/custom/yearlyEvents";
import PublicSpeaking from "@/components/custom/publicSpeaking";
import { Metadata } from "next";
import MobileMenuClasses from "@/components/custom/mobileMenuClasses";
import Link from "next/link";
import MotionDiv from "@/components/custom/motionDiv";
import LinkAnimation from "@/components/custom/linkAnimation";

export const metadata: Metadata = {
  title: "Classes | Eileen Fitzgerald",
  description:
    "Classes ran by The Eileen Fitzgerald School of Speech and Drama. Read through details on classes held around Ennis, Co.Clare, for various age groups. Details are provided on class activities for each age group, from 4 year olds to adults. The Eileen Fitzgerald School of Speech and Drama gets involved in many events around Ireland whilst holding events of their own to keep students simulated and engaged whilst practising the arts of Speech and Drama. Public speaking classes are also offered by Eileen.",
};

// [&_div:nth-child(2)]:justify-end

const Classes = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="sticky top-0 bg-secondary px-12 py-3 md:p-5 block md:block md:w-1/5">
        <MobileMenuClasses />
        <div className="md:sticky md:top-5">
          <MotionDiv className="hidden md:block text-secondary-foreground">
            <p className="font-heading text-xl md:text-3xl mb-5">Contents</p>
            <Link
              href="/classes/#what-is-speech-and-drama"
              className="relative w-fit mb-2 block"
            >
              <LinkAnimation>What is Speech and Drama?</LinkAnimation>
            </Link>
            <Link
              href="/classes/#benefits"
              className="relative w-fit mb-2 block"
            >
              <LinkAnimation>Benefits of Speech and Drama</LinkAnimation>
            </Link>
            <Link
              href="/classes/#class-schedules"
              className="relative w-fit mb-2 block"
            >
              <LinkAnimation>Class Schedules</LinkAnimation>
            </Link>
            <Link
              href="/classes/#activities"
              className="relative w-fit mb-2 block"
            >
              <LinkAnimation>Class Activities</LinkAnimation>
            </Link>
            <Link
              href="/classes/#yearly-events"
              className="relative w-fit mb-2 block"
            >
              <LinkAnimation>Yearly Events</LinkAnimation>
            </Link>
            <Link
              href="/classes/#public-speaking"
              className="relative w-fit mb-2 block"
            >
              <LinkAnimation>Public Speaking</LinkAnimation>
            </Link>
          </MotionDiv>
        </div>
      </div>
      <div className="flex flex-col w-full md:w-4/5">
        <WhatIsSpeechAndDrama />
        <Benefits />
        <ClassSchedules />
        <Activities />
        <YearlyEvents />
        <PublicSpeaking />
      </div>
    </div>
  );
};

export default Classes;
