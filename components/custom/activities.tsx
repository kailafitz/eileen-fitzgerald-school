import React from "react";
import Container from "./container";

const activities = [
  {
    ageGroup: "Junior & Senior Infant",
    activities: [
      {
        main: "Fostering a love and enjoyment in the spoken word",
      },
      {
        main: "Developing the ability to express themselves clearly while improving memorisation and recall",
      },
      {
        main: "Building self-confidence through theatre games",
      },
      {
        main: "Developing skills in voice and diction",
      },
      {
        main: "Storytelling through acting and puppetry",
      },
      {
        main: "Learning to work as part of a group",
      },
      {
        main: "Show & Tell, an introduction to speaking before a group",
      },
    ],
  },
  {
    ageGroup: "Junior",
    activities: [
      {
        main: "Poetry and the spoken word",
      },
      {
        main: "Voice work & speech exercises concentrating on clarity, diction, audibility and expression",
      },
      {
        main: "Drama and devising a character",
      },
      {
        main: "Monologue and duologue work",
      },
      {
        main: "Mime and movement",
      },
      {
        main: "Public speaking and learning how to present to an audience",
      },
      {
        main: "Characterisation and improvisation",
      },
      {
        main: "Sight-reading",
      },
    ],
  },
  {
    ageGroup: "Senior",
    activities: [
      {
        main: "Acting:",
        breakdown: [
          "to perform with fluency",
          "focus and naturalness",
          "using the acting space appropriately",
          "use of gesture",
          "developing a character",
        ],
      },
      {
        main: "Further development of vocal work and modulation",
      },
      {
        main: "Performance/audition technique",
      },
      {
        main: "Mime and movement",
      },
      {
        main: "Sight-reading and prose reading",
      },
      {
        main: "Shakespeare, an introduction to his plays and sonnets",
      },
      {
        main: "Poetry appreciation and verse speaking",
      },
      {
        main: "Improvisation and scene building",
      },
      {
        main: "Public speaking and presentations",
      },
    ],
  },
];

const Activities = () => {
  return (
    <Container id="activities" className="text-gray-200 pt-10">
      <h1 className="text-center text-2xl md:text-4xl mt-10 mb-2">
        Class Activities
      </h1>
      <p className="text-center text-base mb-10 lg:w-1/2 mx-auto">
        See the different programs in place for our students
      </p>
      <div className="flex flex-col space-y-10">
        {activities.map((group, i) => {
          return (
            <div key={`${group.ageGroup}_${i}`} className="w-full">
              <h4 className="text-xl text-left mb-3">
                {group.ageGroup} Activities
              </h4>
              {group.ageGroup === "Senior" && (
                <p className="mb-3">
                  Theses classes are designed to develop you physically, vocally
                  and imaginatively whilst encouraging an independent and
                  in-depth approach to the work.
                </p>
              )}
              <hr className="h-0.5 bg-primary border-none w-full my-5" />
              <ul>
                {group.activities.map((activity, i) => {
                  return (
                    <React.Fragment key={`${activity.main}_${i}`}>
                      <li className="list-disc marker:text-primary">
                        {activity.main}
                      </li>
                      {activity.breakdown?.map((listItem, i) => {
                        return (
                          <li
                            key={`${listItem}_${i}`}
                            className="list-disc ml-8 marker:text-primary"
                          >
                            {listItem}
                          </li>
                        );
                      })}
                    </React.Fragment>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Activities;
