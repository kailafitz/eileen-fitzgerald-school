import React from "react";
import Container from "./container";

type Props = {};

const benefits = [
  {
    label: "Increases Self-Confidence",
    description:
      "We create a safe environment for students to express themselves without feeling judged, building their confidence and developing new skills.",
  },
  {
    label: "Inspires and Unlocks Creativity and Imagination",
    description:
      "By encouraging the student to think outside the box, we analyse how to look at situations from all points of view.",
  },
  {
    label: "Develops Interpersonal Skills",
    description:
      "Both verbal & non-verbal communication, teamwork, conflict resolution and active listening is focused on.",
  },
  {
    label: "Use of Positive Body Language",
    description:
      "We create a safe environment for students to express themselves without feeling judged, building their confidence and developing new skills.",
  },
  {
    label: "Clear, Expressive, Articulate Speech",
    description:
      "We use a variety of speech exercises and theatre games to work on the voice.",
  },
  {
    label: "Practise Empathy and Respect",
    description:
      "We encourage the process of discussion, brainstorming, making choices and negotiating to stimulate the student to develop a greater empathy with people they meet in their daily lives.",
  },
];

const Benefit = () => {
  return (
    <div className="flex flex-wrap">
      {benefits.map((benefit, i) => {
        return (
          <div
            key={`${benefit.label}_${i}`}
            className="group min-h-72 w-full md:w-1/2 relative flex flex-col justify-center bg-black"
          >
            <h4 className="text-center underline underline-offset-3 md:no-underline">
              {benefit.label}
            </h4>
            <div className="absolute h-0 w-full bg-violet-300 flex flex-col justify-center transition-all group-hover:h-full">
              <p className="hidden opacity-0 text-center group-hover:opacity-100 group-hover:block text-black p-5">
                {benefit.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Benefits = (props: Props) => {
  return (
    <Container className="text-gray-200 py-10">
      <h1 className="text-center text-2xl md:text-4xl mt-10 mb-2" id="benefits">
        Benefits of Speech and Drama
      </h1>
      <p className="text-center text-base mb-10 md:w-1/2 mx-auto">
        What are the benefits of speech and drama for my child?
      </p>
      <Benefit />
    </Container>
  );
};

export default Benefits;
