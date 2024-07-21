import React from "react";
import Container from "./container";

const IntroInfo = () => {
  return (
    <div className="bg-violet-500 w-full py-10 intro-info flex flex-col text-white">
      <Container className="text-center flex-1 flex flex-col justify-evenly">
        <div>
          <p>Welcome to the home of the</p>
          <h1 className="text-4xl sm:text-6xl xl:text-8xl">
            Eileen Fitzgerald School of Speech & Drama
          </h1>
        </div>
        <p>
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

export default IntroInfo;
