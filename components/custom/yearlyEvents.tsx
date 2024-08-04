import React from "react";
import Container from "./container";
import SectionHeading from "./sectionHeading";

const yearlyEvents = [
  {
    months: "October",
    event: "Cratloe Speechfest",
    description:
      "A one-day festival for primary school children where they can partake in events that will enhance their language and creative skills. 'A speech festival for primary school to encourage clear, expressive speaking, develop creativity and enhance communication skills'.",
  },
  {
    months: "January & February",
    event: "Feile Luimnigh",
    description:
      "Feile Luimnigh is an annual Arts & Culture festival based in Limerick. A variety of cultural events are held in celebration of the arts, including the arts of speech & drama. Competitions are adjudicated by established professionals in industry and students can receive feedback through competing in many of the competition categories on offer for all age groups, both children and adults!",
  },
  {
    months: "March & April",
    event: "Irish Board Examinations",
    description:
      "The Irish Board of Speech & Drama are the favoured body in Ireland for Speech and Drama examinations. Each grade has a structured syllabus and includes elements of performance and theory.",
  },
  {
    months: "April",
    event: "End of Year Showcase",
    description:
      "Each year, all pupils in each class work on a special group piece to showcase, along with their individual performances!",
  },
];

const YearlyEvents = () => {
  return (
    <Container className="pt-10" id="yearly-events">
      <SectionHeading
        title="Yearly Events"
        subtitle="There are multiple events throughout the year that our students can get
        involved in through our school"
      />
      <div className="flex flex-col space-y-10">
        {yearlyEvents.map((event, i) => {
          return (
            <div key={`${event.event}_${i}`} className="flex flex-col">
              <div className="flex flex-col space-y-2 mb-3 sm:flex-row sm:space-x-2 sm:space-y-0">
                <div className="bg-primary border-primary border-2 p-2">
                  {event.event}
                </div>
                <div className="border-primary border-2 p-2">
                  {event.months}
                </div>
              </div>
              <div>{event.description}</div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default YearlyEvents;
