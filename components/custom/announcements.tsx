import React from "react";
import Container from "./container";
import SectionHeading from "./sectionHeading";

const Announcements = () => {
  return (
    <div className="bg-primary w-full py-5">
      <Container>
        <SectionHeading title="Announcements" />
      </Container>
    </div>
  );
};

export default Announcements;
