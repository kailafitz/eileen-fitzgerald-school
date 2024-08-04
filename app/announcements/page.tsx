import Announcement from "@/components/custom/announcement";
import Container from "@/components/custom/container";
import SectionHeading from "@/components/custom/sectionHeading";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Announcements | Eileen Fitzgerald",
  description:
    "Each year, there are announcements regarding school classes, holidays and any other important changes to the school operations.",
};

const announcements = [
  {
    heading: "New Ennis Centre",
    information: (
      <>
        We are delighted to say that this year, we will be holding classes in
        the new BURNS STUDY CENTRE, Kilrush Road, Ennis. See location
        co-ordinates <Link href="/contact#locations">here</Link>.
      </>
    ),
  },
  {
    heading: "Announcing a new Public Speaking class!",
    information: (
      <>
        Do you have an upcoming presentation? Do you have a fear of speaking in
        public? Is there an interview you really want to succeed at? Have you a
        wedding speech to present? Need help in presenting a CBA? Would you like
        to improve your communication skills and deliver a more effective
        message to your audience?
        <br />
        <br />
        We are delighted to announce that a new course will now be available
        upon arrangement with Eileen at{" "}
        <Link href="mailto: eileen.fitzgerald.school@gmail.com">
          eileen.fitzgerald.school@gmail.com
        </Link>
        ! Find more details <Link href="/classes#public-speaking">here</Link>.
      </>
    ),
  },
];

const Announcements = () => {
  return (
    <Container className="pb-10">
      <SectionHeading title={`${new Date().getFullYear()} Announcements`} />
      <div className="flex flex-col space-y-10">
        {announcements.map((announcement, i) => {
          return (
            <Announcement
              key={`${announcement.heading}_${i}`}
              heading={announcement.heading}
              info={announcement.information}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default Announcements;
