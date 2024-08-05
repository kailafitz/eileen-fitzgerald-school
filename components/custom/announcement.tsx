import { Asterisk } from "lucide-react";
import React from "react";
import Link from "next/link";
import LinkAnimation from "@/components/custom/linkAnimation";

const holidays = [
  { name: "Autumn Midterm", dates: "October 26th - November 1st" },
  { name: "Exams Session 1", dates: "December 7th - December 11th" },
  { name: "Christmas Holidays", dates: "December 12th - January 10th" },
  { name: "Spring Midterm", dates: "February 15th - February 21st" },
  { name: "Exams Session 2", dates: "March 15th - March 19th" },
  { name: "Easter Holidays", dates: "March 26th" },
];

const announcements = [
  {
    heading: "New Ennis Centre",
    information: (
      <>
        We are delighted to say that this year, we will be holding classes in
        the new BURNS STUDY CENTRE, Kilrush Road, Ennis. See location
        co-ordinates{" "}
        <Link href="/contact#locations" className="relative">
          <LinkAnimation underline>here</LinkAnimation>
        </Link>
        .
      </>
    ),
  },
  {
    heading: "Announcing a new Public Speaking class!",
    information: (
      <>
        We are delighted to announce that a new Public Speaking course will now
        be available upon arrangement with Eileen! Find more details{" "}
        <Link href="/classes#public-speaking" className="relative">
          <LinkAnimation underline>here</LinkAnimation>
        </Link>
        .
      </>
    ),
  },
  {
    heading: "Holiday Schedule",
    information: (
      <div className="flex flex-col space-y-5">
        {holidays.map((holiday, i) => {
          return (
            <div
              key={`${holiday.name}_${i}`}
              className="grid grid-cols-2 gap-2 md:w-10/12 lg:w-3/5 xl:w-1/2"
            >
              <div className="border-primary border-2 p-2 flex flex-col justify-center">
                {holiday.name}
              </div>
              <div className="border-primary border-2 bg-primary p-2">
                {holiday.dates}
              </div>
            </div>
          );
        })}
      </div>
    ),
  },
];

const Announcement = () => {
  return (
    <>
      {announcements.map((announcement, i) => {
        return (
          <div>
            <h6 className="text-2xl mb-5">
              <Asterisk className="text-primary inline" />
              <span>{announcement.heading}</span>
            </h6>
            {announcement.information}
          </div>
        );
      })}
    </>
  );
};

export default Announcement;
