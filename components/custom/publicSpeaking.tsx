import React from "react";
import Container from "./container";
import Link from "next/link";
import SectionHeading from "./sectionHeading";
import LinkAnimation from "./linkAnimation";

const publicSpeaking = [
  "Engaging an audience",
  "Vocal techniques including clarity",
  "Projection and pacing",
  "Effective communication",
  "Speech exercises",
  "Speech preparation and delivery technique",
];

const PublicSpeaking = () => {
  return (
    <Container className="py-10" id="public-speaking">
      <SectionHeading title="Public Speaking" />
      <p className="mb-5">
        Do you have an upcoming presentation? Do you have a fear of speaking in
        public? Is there an interview you really want to succeed at? Have you a
        wedding speech to present? Need help in presenting a CBA? Would you like
        to improve your communication skills and deliver a more effective
        message to your audience?
      </p>
      <p className="mb-2">
        The Eileen Fitzgerald School offers a course to specifically enhance a
        range of skills to help pupils overcome these challenges.
        <br />
        The contents of the course is as follows:
      </p>
      <ul className="mb-5">
        {publicSpeaking.map((activity, i) => {
          return (
            <li
              key={`${activity}_${i}`}
              className="list-disc ml-8 marker:text-primary"
            >
              {activity}
            </li>
          );
        })}
      </ul>
      <div className="w-full md:w-fit mx-auto">
        <p className="mb-2">We have 2 options available for this course:</p>
        <div className="flex flex-col space-y-2 md:space-x-2 md:space-y-0 md:flex-row mb-2">
          <div>
            <div className="bg-primary text-center p-1 flex flex-col justify-center">
              €160
            </div>
            <ul className="border-primary border-2 p-5">
              <li className="list-disc ml-4 marker:text-primary">
                Small groups of four
              </li>
              <li className="list-disc ml-4 marker:text-primary">
                45 minutes class
              </li>
              <li className="list-disc ml-4 marker:text-primary">4 weeks</li>
            </ul>
          </div>
          <div>
            <div className="bg-primary text-center p-1 flex flex-col justify-center">
              €320
            </div>
            <ul className="border-primary border-2 p-5">
              <li className="list-disc ml-4 marker:text-primary">One-to-one</li>
              <li className="list-disc ml-4 marker:text-primary">
                30 minutes class
              </li>
              <li className="list-disc ml-4 marker:text-primary">4 weeks</li>
            </ul>
          </div>
        </div>
        <p className="text-sm mb-5 w-full text-center">
          **Room or Zoom available**
        </p>
      </div>

      <p>
        To make an arrangement or to find out more, please contact Eileen at{" "}
        <Link
          href="mailto:eileen.fitzgerald.school@gmail.com"
          className="relative"
        >
          <LinkAnimation underline>
            eileen.fitzgerald.school@gmail.com
          </LinkAnimation>
        </Link>
        .
      </p>
    </Container>
  );
};

export default PublicSpeaking;
