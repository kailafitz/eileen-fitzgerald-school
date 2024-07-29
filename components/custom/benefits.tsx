"use client";
import React, { useState } from "react";
import ConfidanceIcon from "./svgs/confidance";
import CreativityIcon from "./svgs/creativity";
import SpeechIcon from "./svgs/speech";
import EmpathyIcon from "./svgs/empathy";
import InterpersonalSkillIcon from "./svgs/interpersonalSkills";
import BodyLanguageIcon from "./svgs/bodyLanguage";
import Container from "./container";
import { useRouter } from "next/navigation";

let classes = "w-16 md:w-24";

const benefits = [
  {
    icon: <ConfidanceIcon className={classes} />,
    label: "Increases Self-Confidence",
    description:
      "We create a safe environment for students to express themselves without feeling judged, building their confidence and developing new skills.",
  },
  {
    icon: <CreativityIcon className={classes} />,
    label: "Inspires and Unlocks Creativity and Imagination",
    description:
      "By encouraging the student to think outside the box, we analyse how to look at situations from all points of view.",
  },
  {
    icon: <InterpersonalSkillIcon className={classes} />,
    label: "Develops Interpersonal Skills",
    description:
      "Both verbal & non-verbal communication, teamwork, conflict resolution and active listening is focused on.",
  },
  {
    icon: <BodyLanguageIcon className={classes} />,
    label: "Use of Positive Body Language",
    description:
      "We create a safe environment for students to express themselves without feeling judged, building their confidence and developing new skills.",
  },
  {
    icon: <SpeechIcon className={classes} />,
    label: "Clear, Expressive, Articulate Speech",
    description:
      "We use a variety of speech exercises and theatre games to work on the voice.",
  },
  {
    icon: <EmpathyIcon className={classes} />,
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
      id="benefit-container"
    >
      <div className="mx-auto bg-primary p-6 md:p-10 rounded-full">
        {benefit?.icon}
      </div>
      <div>
        <h6 className="min-h-11 mb-3 md:min-h-0 text-xl md:text-2xl text-center mx-auto md:mb-5">
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
  const router = useRouter();

  const resetAnimation = () => {
    const benefitContainer = document.getElementById("benefit-Container");
    benefitContainer?.classList.add("animate-fade-in");

    setTimeout(() => {
      benefitContainer?.classList.remove("animate-fade-in");
    }, 600);
  };

  return (
    <Container className="text-gray-200 pt-10" id="benefits">
      <h1 className="text-center text-2xl md:text-4xl mt-10 mb-2">
        Benefits of Speech and Drama
      </h1>
      <p className="text-center text-base mb-10 lg:w-1/2 mx-auto">
        What are the benefits of speech and drama for my child?
      </p>
      <div className="flex flex-col justify-between">
        <Benefit label={currentBenefit} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-3">
          {benefits.map((benefit, i) => {
            return (
              <button
                key={`${benefit.label}_${i}`}
                className={`p-5 transition-all border-2 hover:bg-violet-800 hover:border-violet-800 ${
                  currentBenefit === benefit.label
                    ? "bg-zinc-900 border-primary"
                    : "bg-primary border-primary"
                }`}
                onClick={() => {
                  setCurrentBenefit(benefit.label);
                  resetAnimation();
                  router.push("/classes/#benefits");
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
