"use client";
import React, { useState } from "react";
import ConfidanceIcon from "./svgs/confidance";
import CreativityIcon from "./svgs/creativity";
import SpeechIcon from "./svgs/speech";
import EmpathyIcon from "./svgs/empathy";
import InterpersonalSkillIcon from "./svgs/interpersonalSkills";
import BodyLanguageIcon from "./svgs/bodyLanguage";
import Container from "./container";
import SectionHeading from "./sectionHeading";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

let classes = "w-16 lg:w-24";

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
      "Our classes provide a trusting experience to learn and practice positive body language. Being aware of the message one’s own body sends out is a powerful way of communicating.",
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

const MobileBenefitMenu = ({ settingValue }: { settingValue: Function }) => {
  return (
    <Select
      onValueChange={(value) => {
        settingValue(value);
      }}
    >
      <SelectTrigger className="lg:hidden bg-zinc-900 text-left">
        <SelectValue placeholder={benefits[0].label} />
      </SelectTrigger>
      <SelectContent>
        {benefits.map((benefit, i) => {
          return (
            <SelectItem
              key={`${benefit.label}_${i}`}
              value={benefit.label}
              className="pl-1"
            >
              {benefit.label}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

const Benefit = (props: Props) => {
  const benefit = benefits.find(
    (benefitLabel) => props.label === benefitLabel.label
  );
  return (
    <div
      className="flex flex-col space-y-8 transition-all border-primary bg-primary border-2 p-5 sm:py-10 lg:w-full"
      id="benefit-container"
    >
      <div className="mx-auto p-6 lg:p-10 rounded-full bg-zinc-900 text-white">
        {benefit?.icon}
      </div>
      <div className="flex flex-col flex-grow">
        <h6 className="min-h-11 mb-3 lg:min-h-0 text-xl lg:text-2xl text-center mx-auto lg:mb-5">
          {benefit?.label}
        </h6>
        <p className="sm:min-h-20 lg:flex-grow w-full mx-auto text-center flex flex-col justify-center">
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
    const benefitContainer = document.getElementById("benefit-Container");
    benefitContainer?.classList.add("animate-fade-in");

    setTimeout(() => {
      benefitContainer?.classList.remove("animate-fade-in");
    }, 600);
  };

  return (
    <Container className="pt-10" id="benefits">
      <SectionHeading
        title="Benefits of Speech and Drama"
        subtitle="What are the benefits of Speech and Drama for my child?"
      />
      <p className="mb-2 lg:mb-10">Find out by more by selecting the below:</p>
      <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-14 justify-between w-full">
        <MobileBenefitMenu settingValue={setCurrentBenefit} />
        <div className="hidden lg:!ml-0 lg:grid lg:grid-cols-1 grid-rows-6 gap-3">
          {benefits.map((benefit, i) => {
            return (
              <button
                key={`${benefit.label}_${i}`}
                className={`relative px-5 py-2 after:block after:absolute after:border-l-2 after:border-r-2 after:border-white after:h-0 after:top-0 after:left-0 after:w-full hover:after:h-full after:z-10 after:transition-all after:hover:transition-all after:duration-500 after:hover:duration-500 after:hover:delay-75 before:block before:absolute before:border-t-2 before:border-b-2 before:border-white before:h-full before:top-0 before:left-0 before:w-0 hover:before:w-full before:z-10 before:transition-all before:hover:transition-all before:duration-500 before:hover:duration-500 ${
                  currentBenefit === benefit.label
                    ? "bg-primary"
                    : "border-primary"
                }`}
                onClick={() => {
                  setCurrentBenefit(benefit.label);
                  resetAnimation();
                }}
              >
                <div className="block absolute top-0 left-0 h-full w-full border-2 border-primary"></div>
                {benefit.label}
              </button>
            );
          })}
        </div>
        <Benefit label={currentBenefit} />
      </div>
    </Container>
  );
};

export default Benefits;
