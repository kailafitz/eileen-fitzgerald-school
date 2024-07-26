import React from "react";
import Container from "./container";

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
      <div className="mb-10 flex flex-col justify-between items-start space-y-10">
        {schedules.map((school, i) => {
          return (
            <div key={`${school.school}_${i}`} className="flex flex-col w-full">
              <h4 className="text-gray-200 text-left mb-3">{school.school}</h4>
              {/* Wrapper */}
              <div className="space-y-2 lg:space-y-0 lg:grid lg:gap-x-2 lg:grid-cols-6">
                {/* Headings */}
                <div className="flex flex-row space-x-2 lg:space-x-0 lg:grid lg:grid-rows-2 lg:gap-y-2">
                  <div className="border-primary border-2 p-2 w-full">
                    Age Group
                  </div>
                  <div className="border-primary border-2 p-2 w-full">
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
                      <div className="bg-primary border-primary border-2 p-2 w-full">
                        {details.ageGroup}
                      </div>
                      <div className="bg-primary border-primary border-2 p-2 w-full">
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
    <Container id="class-schedules" className="text-gray-200">
      <h1 className="text-center text-2xl md:text-4xl mt-10 mb-2">
        Our Speech and Drama Classes
      </h1>
      <p className="text-center text-base mb-5 lg:w-1/2 mx-auto">
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
