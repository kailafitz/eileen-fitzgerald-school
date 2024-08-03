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
      <SelectTrigger className="md:hidden bg-zinc-900 text-left">
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
      className="flex flex-col space-y-8 mb-10 md:mb-5 transition-all border-primary bg-primary border-2 p-5 sm:py-10"
      id="benefit-container"
    >
      <div className="mx-auto p-6 md:p-10 rounded-full bg-white text-primary">
        {benefit?.icon}
      </div>
      <div>
        <h6 className="min-h-11 mb-3 md:min-h-0 text-xl md:text-2xl text-center mx-auto md:mb-5">
          {benefit?.label}
        </h6>
        <p className="sm:min-h-20 md:min-h-20 w-full mx-auto text-center flex flex-col justify-center">
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
        subtitle="What are the benefits of speech and drama for my child?"
      />
      <div className="flex flex-col justify-between">
        <Benefit label={currentBenefit} />
        <MobileBenefitMenu settingValue={setCurrentBenefit} />
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-3">
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
