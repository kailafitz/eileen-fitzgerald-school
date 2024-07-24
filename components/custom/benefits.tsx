"use client";
import React, { useState } from "react";
import ConfidanceIcon from "./confidance";
import CreativityIcon from "./creativity";
import SpeechIcon from "./speech";
import EmpathyIcon from "./empathy";
import InterpersonalSkillIcon from "./interpersonalSkills";
import BodyLanguageIcon from "./bodyLanguage";
import Container from "./container";

let size = 100;

const benefits = [
  {
    icon: <ConfidanceIcon size={size} />,
    label: "Increases Self-Confidence",
    description:
      "We create a safe environment for students to express themselves without feeling judged, building their confidence and developing new skills.",
  },
  {
    icon: <CreativityIcon size={size} />,
    label: "Inspires and Unlocks Creativity and Imagination",
    description:
      "By encouraging the student to think outside the box, we analyse how to look at situations from all points of view.",
  },
  {
    icon: <InterpersonalSkillIcon size={size} />,
    label: "Develops Interpersonal Skills",
    description:
      "Both verbal & non-verbal communication, teamwork, conflict resolution and active listening is focused on.",
  },
  {
    icon: <BodyLanguageIcon size={size} />,
    label: "Use of Positive Body Language",
    description:
      "We create a safe environment for students to express themselves without feeling judged, building their confidence and developing new skills.",
  },
  {
    icon: <SpeechIcon size={size} />,
    label: "Clear, Expressive, Articulate Speech",
    description:
      "We use a variety of speech exercises and theatre games to work on the voice.",
  },
  {
    icon: <EmpathyIcon size={size} />,
    label: "Practise Empathy and Respect",
    description:
      "We encourage the process of discussion, brainstorming, making choices and negotiating to stimulate the student to develop a greater empathy with people they meet in their daily lives.",
  },
];

type Props = {
  label: string;
};

const Benefit = (props: Props) => {
  const benefit = benefits.find(
    (benefitLabel) => props.label === benefitLabel.label
  );
  return (
    <div
      className="flex flex-col space-y-8 mb-10 md:mb-5 transition-all"
      id="benefitContainer"
    >
      <div className="mx-auto bg-primary p-10 rounded-full">
        {benefit?.icon}
      </div>
      <div>
        <h6 className="min-h-11 md:min-h-0 text-2xl text-center mx-auto mb-5">
          {benefit?.label}
        </h6>
        <p className="sm:min-h-36 md:min-h-24 w-full sm:w-3/4 xl:w-7/12 mx-auto text-center">
          {benefit?.description}
        </p>
      </div>
    </div>
  );
};

const Benefits = () => {
  const [currentBenefit, setCurrentBenefit] = useState(
    "Increases Self-Confidence"
  );

  const resetAnimation = () => {
    const benefitContainer = document.getElementById("benefitContainer");
    benefitContainer?.classList.add("fade-in-animation");

    setTimeout(() => {
      benefitContainer?.classList.remove("fade-in-animation");
    }, 600);
  };

  return (
    <Container className="text-gray-200 py-10">
      <h1 className="text-center text-2xl md:text-4xl mt-10 mb-2" id="benefits">
        Benefits of Speech and Drama
      </h1>
      <p className="text-center text-base mb-10 md:w-1/2 mx-auto">
        What are the benefits of speech and drama for my child?
      </p>
      <div className="flex flex-col justify-between">
        <Benefit label={currentBenefit} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-3">
          {benefits.map((benefit) => {
            return (
              <button
                className={`p-5 transition-all border-2 hover:bg-violet-800 hover:border-violet-800 ${
                  currentBenefit === benefit.label
                    ? "bg-black border-primary"
                    : "bg-primary border-primary"
                }`}
                onClick={() => {
                  setCurrentBenefit(benefit.label);
                  resetAnimation();
                }}
              >
                {benefit.label}
              </button>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Benefits;
