import React from "react";
import Container from "./container";

type Props = {};

const Announcements = () => {
  return (
    <div className="bg-violet-500 w-full py-5">
      <Container>
        <p className="text-white">
          Welcome to the home of the Eileen Fitzgerald School of Speech & Drama
          The school was established in Co. Clare in 1992 to foster a love of
          drama, communications and clear speech in our students. Browse our
          website to get a glimpse into what we do and we hope you join us in
          celebrating the art that is Speech & Drama. We post all our latest
          news and updates on our social media pages. For queries relating to
          enrolments and fees please contact us directly here.
        </p>
      </Container>
    </div>
  );
};

export default Announcements;
