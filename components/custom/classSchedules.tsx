import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Container from "./container";

type Props = {};

const schedules = [
  {
    school: "Barefield National School",
    classes: [
      { ageGroup: "4 - 6 years", day: "Tuesday", time: "2:00pm" },
      { ageGroup: "6 - 7 years", day: "Monday", time: "2:50pm" },
      { ageGroup: "7 - 8 years", day: "Tuesday", time: "2:50pm" },
      { ageGroup: "8 - 10 years", day: "Tuesday", time: "3:50pm" },
      { ageGroup: "10 - 12 years", day: "Tuesday", time: "4:50pm" },
    ],
  },
  {
    school: "Clarecastle National School",
    classes: [
      { ageGroup: "Junior Mix Age", day: "Thursday", time: "2:40pm" },
      { ageGroup: "Junior Mix Age", day: "Thursday", time: "3:40pm" },
      { ageGroup: "Junior Mix Age", day: "Thursday", time: "4:40pm" },
    ],
  },
  {
    school: "Burns Study Center Schedule",
    classes: [
      { ageGroup: "Senior Mix Age", day: "Monday", time: "4:30pm" },
      { ageGroup: "Junior Mix Age", day: "Monday", time: "5:30pm" },
      { ageGroup: "Senior Mix Age", day: "Monday", time: "6:30pm" },
    ],
  },
];

const ScheduleTables = () => {
  return (
    <>
      {/* className="mb-10 flex flex-col md:flex-row md:justify-start space-y-10 md:space-y-0 md:space-x-10" */}
      <div className="mb-10 flex flex-col space-y-10">
        {schedules.map((school, i) => {
          return (
            <div
              key={`${school.school}_${i}`}
              className="flex flex-col w-full"
              // className="flex flex-col w-full md:w-1/3"
            >
              <h4 className="text-gray-200 text-left mb-3">{school.school}</h4>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Age Group</TableHead>
                    <TableHead>Day & Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {school.classes.map((details, i) => {
                    return (
                      <TableRow
                        key={`${school.school}_${details.time}_${details.day}_${i}`}
                      >
                        <TableCell>{details.ageGroup}</TableCell>
                        <TableCell className="flex flex-col sm:flex-row space-x-0 sm:space-x-2">
                          <span>{details.day}</span> <span>{details.time}</span>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          );
        })}
      </div>
    </>
  );
};

const ClassSchedules = (props: Props) => {
  return (
    <Container id="class-schedules" className="text-gray-200">
      <h1 className="text-center text-2xl md:text-4xl mt-10 mb-2">
        Our Speech and Drama Classes
      </h1>
      <p className="text-center text-base mb-5 md:w-1/2 mx-auto">
        Our class schedules are based on our locations and age groups
      </p>
      <p className="mb-10">
        With almost 30 years of experience, Eileen Fitzgerald teaches a wide
        range of acting and speech classes. Classes are offered for beginners,
        children, teenagers and adults focusing on developing public speaking
        skills, and performance technique training.
      </p>
      <ScheduleTables />
    </Container>
  );
};

export default ClassSchedules;
