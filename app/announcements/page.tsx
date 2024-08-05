import Announcement from "@/components/custom/announcement";
import Container from "@/components/custom/container";
import SectionHeading from "@/components/custom/sectionHeading";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Announcements | Eileen Fitzgerald",
  description:
    "Each year, there are announcements regarding school classes, holidays and any other important changes to the school operations.",
};

const Announcements = () => {
  return (
    <Container className="pb-10">
      <SectionHeading title={`${new Date().getFullYear()} Announcements`} />
      <div className="flex flex-col space-y-10">
        <Announcement />
      </div>
    </Container>
  );
};

export default Announcements;
