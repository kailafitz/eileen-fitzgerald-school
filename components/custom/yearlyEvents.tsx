import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Container from "./container";

const yearlyEvents = [
  {
    months: "October",
    event: "Cratloe Speechfest",
    description:
      "A one-day festival for primary school children where they can partake in events that will enhance their language and creative skills. 'A speech festival for primary school to encourage clear, expressive speaking, develop creativity and enhance communication skills'",
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
      "The Irish Board of Speech & Drama are the favoured body in Ireland for speech & drama examinations. Each grade has a structured syllabus and includes elements of performance and theory.",
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
    <Container className="text-gray-200" id="yearly-events">
      <h1 className="text-center text-2xl md:text-4xl mt-10 mb-2">
        Yearly Events
      </h1>
      <p className="text-center text-base mb-10 md:w-1/2 mx-auto">
        There are multiple events throughout the year that our students can get
        involved in through our school
      </p>
      <div className="mb-10 flex flex-col space-y-10">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Month(s)</TableHead>
              <TableHead>Event</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {yearlyEvents.map((event, i) => {
              return (
                <TableRow key={`${event.event}_${i}`}>
                  <TableCell>{event.months}</TableCell>
                  <TableCell>{event.event}</TableCell>
                  <TableCell>{event.description}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </Container>
  );
};

export default YearlyEvents;
