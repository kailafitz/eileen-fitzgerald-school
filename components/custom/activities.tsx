import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Container from "./container";

const activities = [
  {
    ageGroup: "Junior & Senior Infant",
    activities: [
      "Fostering a love and enjoyment in the spoken word",
      "Developing the ability to express themselves clearly while improving memorisation and recall",
      "Building self-confidence through theatre games",
      "Developing skills in voice and diction",
      "Storytelling through acting and puppetry",
      "Learning to work as part of a group",
      "Show & Tell, an introduction to speaking before a group",
    ],
  },
  {
    ageGroup: "Junior",
    activities: [
      "Poetry and the spoken word",
      "Voice work & speech exercises concentrating on clarity, diction, audibility and expression",
      "Drama and devising a character",
      "Monologue and duologue work",
      "Mime and movement",
      "Public speaking and learning how to present to an audience",
      "Characterisation and improvisation",
      "Sight-reading",
    ],
  },
  {
    ageGroup: "Senior",
    activities: [
      "Acting; to perform with fluency, focus and naturalness, using the acting space appropriately, use of gesture, developing a character",
      "Further development of vocal work and modulation",
      "Performance/audition technique",
      "Mime and movement",
      "Sight-reading and prose reading",
      "Shakespeare, an introduction to his plays and sonnets",
      "Poetry appreciation and verse speaking",
      "Improvisation and scene building",
      "Public speaking and presentations",
    ],
  },
];

const Activities = () => {
  return (
    <Container id="activities" className="text-gray-200 ">
      <h1 className="text-center text-2xl md:text-4xl mt-10 mb-2">
        Class Activities
      </h1>
      <p className="text-center text-base mb-10">
        See the Different Programs in Place for our Students
      </p>
      <div className="mb-10 flex flex-col space-y-10">
        {activities.map((group, i) => {
          return (
            <div key={`${group.ageGroup}_${i}`} className="w-full">
              <h4 className="text-left mb-3">{group.ageGroup} Activities</h4>
              <Table>
                <TableBody>
                  {group.activities.map((activity, i) => {
                    return (
                      <TableRow key={`${activity}_${i}`}>
                        <TableCell>{activity}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Activities;
