import React from "react";
import Container from "./container";
import Link from "next/link";
import SectionHeading from "./sectionHeading";
import LinkAnimation from "./linkAnimation";

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
      <div className="flex flex-col justify-between items-start space-y-10">
        {schedules.map((school, i) => {
          return (
            <div key={`${school.school}_${i}`} className="flex flex-col w-full">
              <h4 className="text-left mb-3">{school.school}</h4>
              {/* Wrapper */}
              <div className="space-y-2 lg:space-y-0 lg:grid lg:gap-x-2 lg:grid-cols-6">
                {/* Headings */}
                <div className="flex flex-row space-x-2 lg:space-x-0 lg:grid lg:grid-rows-2 lg:gap-y-2">
                  <div className="border-primary border-2 p-2 w-full flex flex-col justify-center">
                    Age Group
                  </div>
                  <div className="border-primary border-2 p-2 w-full flex flex-col justify-center">
                    Day & Time
                  </div>
                </div>
                {/* Schedule */}
                {school.classes.map((details, i) => {
                  return (
                    <div
                      key={`${school.school}_${details.time}_${details.day}_${i}`}
                      className="flex flex-row space-x-2 lg:space-x-0 lg:grid lg:grid-rows-2 lg:gap-y-2"
                    >
                      <div className="bg-primary border-primary border-2 p-2 w-full flex flex-col justify-center">
                        {details.ageGroup}
                      </div>
                      <div className="bg-primary border-primary border-2 p-2 w-full flex flex-col justify-center">
                        <span>{details.day}</span> <span>{details.time}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const ClassSchedules = () => {
  return (
    <Container id="class-schedules" className="pt-10">
      <SectionHeading
        title="Our Speech and Drama Classes"
        subtitle="Our class schedules are based on our locations and age groups"
      />
      <p className="mb-3">
        With over 30 years of experience, Eileen Fitzgerald teaches a wide range
        of acting and speech classes. Classes are offered for beginners,
        children, teenagers and adults focusing on developing public speaking
        skills, and performance technique training. Class schedules are subject
        to change each year along with our class locations.
        <br />
        <br />
        This year&#39;s classes will take place at the following{" "}
        <Link href="/contact#locations" className="relative">
          <LinkAnimation underline>locations</LinkAnimation>
        </Link>
        :
      </p>
      <ul className="mb-5">
        <li className="list-disc ml-8 marker:text-primary">
          Clarecastle National School Library
        </li>
        <li className="list-disc ml-8 marker:text-primary">
          Maria Assumpta Hall
        </li>
      </ul>
      <p>
        To enroll for any of our classes, please get in touch for availability
        and prices. Visit our{" "}
        <Link href="/classes" className="relative">
          <LinkAnimation underline>Contact</LinkAnimation>
        </Link>{" "}
        page for our contact information and location co-ordinates.
        <br />
        <br />
        <em>
          Professionals looking for one-to-one sessions are by appointment at a
          time to be agreed.
        </em>
      </p>
    </Container>
  );
};

export default ClassSchedules;
