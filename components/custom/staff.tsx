"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  ANIMATION_DELAY_1,
  ANIMATION_DELAY_2,
  ANIMATION_DELAY_3,
  ANIMATION_DURATION,
} from "@/lib/globals";
import MotionDiv from "./motionDiv";
import Image from "next/image";

const staffMembers = [
  {
    name: "Eileen Fitzgerald",
    position: "Director & Teacher",
    bio: [
      "Eileen Fitzgerald A.I.B.S.D., L.T.C.L. runs a very successful Speech and Drama School which was established in 1992. Eileen has been involved in and studied speech & drama from a young age. She teaches all aspects of communication skills and drama from 4-year olds to 85-year olds!",
      "Eileen studied with Trinity College London attaining a Licentiate Teachers Diploma. She has an Associate Diploma with the Irish Board of Speech & Drama.",
      "In 1995 she was appointed an examiner with the Irish Board of Speech & Drama and travels throughout the country examining students. Eileen also examines diploma students with the Board.",
      "Eileen was the former President of the 75th Feile Luimnigh, the largest voluntary festival of its kind in the North Munster area.",
      "Along with her colleague Ailbhe Donnelly Flanagan, Eileen has also ran the popular and friendly Cratloe Speechfest for the last eight years. She has adjudicated at feiseanna throughout the Island of Ireland.",
      "In 2023, Eileen was invited to adjudicate at the 75th Hong Kong Schools Speech Festival. The Hong Kong Schools Speech Festival is one of Hong Kong's largest inter-school competitions. It is known as one of the prime events in which primary through secondary school students have the chance to challenge themselves in spoken English. Eileen will join the adjudicating panel again in 2024.",
    ],
  },
];

const StaffMembers = () => {
  return (
    <div className="space-y-10 py-10">
      {staffMembers.map((member, i) => {
        return (
          <React.Fragment key={`${member.name}_${i}`}>
            <div className="flex flex-col justify-center">
              <div className="space-y-10">
                {/* Image and name div */}
                <div className="flex flex-col sm:flex-row justify-center space-y-5 md:space-y-0 md:space-x-10">
                  {/* Image div */}
                  <MotionDiv className="w-full sm:w-2/5">
                    <div className="border-zinc-900 border-2 w-1/2 md:w-1/2 relative mx-auto">
                      <div className="absolute bottom-0 right-0 w-full h-full dark-gradient-radial z-10"></div>
                      <Image
                        width={225}
                        height={318}
                        loading="eager"
                        src={`/staff/${member.name
                          .split(" ")[0]
                          .toLocaleLowerCase()}2.png`}
                        alt={member.name}
                        className="object-contain w-full h-auto mx-auto border-zinc-900 border-2"
                      />
                    </div>
                  </MotionDiv>
                  {/* Name div */}
                  <div className="flex flex-col justify-center w-full sm:w-3/5">
                    <div className="w-full h-28 md:h-4/5 flex flex-col justify-center">
                      <motion.h2
                        initial={{ opacity: 0, translateY: "-6rem" }}
                        whileInView={{ opacity: 1, translateY: "0" }}
                        exit={{ opacity: 0, translateY: "6rem" }}
                        transition={{
                          duration: ANIMATION_DURATION,
                          delay: ANIMATION_DELAY_1,
                        }}
                        className="font-heading text-4xl sm:text-5xl lg:text-6xl text-left"
                      >
                        {member.name}
                      </motion.h2>{" "}
                      <motion.h2
                        initial={{ opacity: 0, translateY: "6rem" }}
                        whileInView={{ opacity: 1, translateY: "0" }}
                        exit={{ opacity: 0, translateY: "-6rem" }}
                        transition={{
                          duration: ANIMATION_DURATION,
                          delay: ANIMATION_DELAY_2,
                        }}
                        className="font-heading text-violet-500 text-4xl sm:text-5xl lg:text-6xl text-right"
                      >
                        {member.position}
                      </motion.h2>
                    </div>
                  </div>
                </div>
                {/* Bio paragraphs div */}
                <div id="bio-container">
                  {member?.bio.map((paragraph, i) => {
                    return (
                      <motion.p
                        key={i}
                        initial={{ opacity: 0, translateY: "-6rem" }}
                        whileInView={{ opacity: 1, translateY: "0" }}
                        exit={{ opacity: 0, translateY: "6rem" }}
                        transition={{
                          duration: ANIMATION_DURATION,
                          delay: ANIMATION_DELAY_3,
                        }}
                        className="mb-5 last:mb-0"
                      >
                        {paragraph}
                      </motion.p>
                    );
                  })}
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

const Staff = () => {
  return (
    <>
      <StaffMembers />
    </>
  );
};

export default Staff;
