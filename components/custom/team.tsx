import React from "react";
import Container from "./container";

const members = [
  {
    name: "Eileen Fitzgerald",
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
    bio: [
      "Ciara Felle began her speech & drama training at a very young age.",
      "In her final year in primary school she moved to the Eileen Fitzgerald School to complete her studies. After finishing her secondary & university years, Ciara spent a number of years living and teaching in Edinburgh. Her passion is travel and at last count Ciara has travelled to 60 countries.",
      "In 2010 Ciara returned to Ennis to live and studied for her Speech & Drama diploma. She has been an integral part of the school since 2011 and loves teaching drama.",
    ],
  },
];

const Members = () => {
  return (
    <Container className="space-y-10 pb-10">
      {members.map((member, i) => {
        return (
          <div
            key={`${member.name}_${i}`}
            className="flex flex-col lg:flex-row justify-center lg:justify-between items-center space-y-10 lg:space-y-0 lg:space-x-20"
          >
            <img
              src={`/${member.name.split(" ")[0]}.jpg`}
              className="object-contain w-full max-w-64  sm:w-3/5 lg:w-1/4 h-auto"
            />
            <div className="text-gray-200">
              {member.bio.map((paragraph, i) => {
                return (
                  <p key={i} className="mb-3">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
    </Container>
  );
};

const Team = () => {
  return (
    <>
      <Container className="py-10">
        <h1 className="text-gray-200 text-center text-2xl md:text-4xl">
          Meet our Staff
        </h1>
      </Container>
      <Members />
    </>
  );
};

export default Team;
