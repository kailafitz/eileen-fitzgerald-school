"use client";
import React, { useState } from "react";
const members = [
  {
    name: "Eileen Fitzgerald",
    position: "Director & Teacher",
    bio: [
      "Eileen Fitzgerald A.I.B.S.D., L.T.C.L. runs a very successful Speech & Drama School which was established in 1992. Eileen has been involved in and studied speech & drama from a young age. She teaches all aspects of communication skills and drama from 4-year olds to 85-year olds!",
      "Eileen studied with Trinity College London attaining a Licentiate Teachers Diploma. She has an Associate Diploma with the Irish Board of Speech & Drama.",
      "In 1995 she was appointed an examiner with the Irish Board of Speech & Drama and travels throughout the country examining students. Eileen also examines diploma students with the Board.",
      " Currently President of the 75th Feile Luimnigh, the largest voluntary festival of its kind in the North Munster area, Eileen (together with her team) are presently organising 7000 competitors between Instrumental, Vocal, Speech & Drama and Roinn na Gaeilge.",
      "Along with her colleague Ailbhe Donnelly Flanagan, Eileen has also en running the popular and friendly Cratloe Speechfest for the last eight years. She has adjudicated at feiseanna throughout the Island of Ireland.",
    ],
  },
  {
    name: "Ciara Felle",
    position: "Student Teacher",
    bio: [
      "Ciara Felle began her speech & drama training at a very young age.",
      "In her final year in primary school she moved to the Eileen Fitzgerald School to complete her studies. After finishing her secondary & university years, Ciara spent a number of years living and teaching in Edinburgh. Her passion is travel and at last count Ciara has travelled to 60 countries.",
      "In 2010 Ciara returned to Ennis to live and studied for her Speech & Drama diploma. She has been an integral part of the school since 2011 and loves teaching drama.",
    ],
  },
];

const Members = () => {
  // const [currentMember, setCurrentMember] = useState("Eileen Fitzgerald");

  // const member = members.find((member) => currentMember === member.name);

  // const resetAnimation = () => {
  //   const benefitContainer = document.getElementById("bio-container");
  //   benefitContainer?.classList.add("animate-fade-in");

  //   setTimeout(() => {
  //     benefitContainer?.classList.remove("animate-fade-in");
  //   }, 600);
  // };

  return (
    <div className="space-y-10 pb-10">
      {members.map((member, i) => {
        return (
          <React.Fragment key={`${member.name}_${i}`}>
            <div className="flex flex-col justify-center md:min-h-screen">
              <div className="space-y-10">
                {/* Image and name div */}
                <div className="flex flex-col md:flex-row justify-center space-y-5 md:space-y-0 md:space-x-10">
                  {/* Image div */}
                  <div>
                    <div className="border-zinc-900 border-2 w-1/2 md:w-1/2 relative mx-auto">
                      <div className="absolute bottom-0 right-0 w-full h-full dark-gradient-radial z-10"></div>
                      <img
                        src={`/${member.name.split(" ")[0]}2.png`}
                        alt={member.name}
                        className="object-contain w-full h-auto mx-auto border-zinc-900 border-2"
                      />
                    </div>
                  </div>
                  {/* Name div */}
                  <div className="bg-primary border-primary border-2 w-full h-28 md:h-auto flex flex-col justify-between">
                    <h2 className="text-zinc-900 text-xl md:text-6xl text-left">
                      {member.name}
                    </h2>{" "}
                    <h2 className="text-zinc-900 text-xl md:text-6xl text-right">
                      {member.position}
                    </h2>
                  </div>
                </div>
                {/* Bio paragraphs div */}
                <div id="bio-container">
                  {member?.bio.map((paragraph, i) => {
                    return (
                      <p key={i} className="text-gray-200 mb-5">
                        {paragraph}
                      </p>
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

const Team = () => {
  return (
    <>
      <h1 className="text-gray-200 text-center my-10 text-2xl md:text-4xl">
        Meet our Teachers
      </h1>
      <Members />
    </>
  );
};

export default Team;
