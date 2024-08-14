import React from "react";
import Container from "./container";
import SectionHeading from "./sectionHeading";

const WhatIsSpeechAndDrama = () => {
  return (
    <div
      className="custom-vh-xs flex flex-col justify-center bg-primary"
      id="what-is-speech-and-drama"
    >
      <Container className="pb-10">
        <SectionHeading title="What is Speech and Drama?" />
        <p>
          This is a weekly class to introduce students to all aspects of Speech
          and Drama, to develop creativity, build confidence, and enhance the
          technique of public performance. We all develop at various rates and
          with this in mind we aim to hone and develop the skills of every
          student at an optimal pace to suit their emotional and developmental
          well-being.
          <br />
          <br />
          Classes focus on acting, improvisation, role play, characterisation,
          effective communication, theatre games, mime, puppetry, public
          speaking, speech work, storytelling and much more.
          <br />
          <br />
          Our classes equip each student with many important tools to help them
          achieve their full potential which will support them throughout their
          lives. While learning a range of techniques, students develop their
          personality, learn to work in a team, interact with peers, make
          decisions and most importantly have fun.
        </p>
      </Container>
    </div>
  );
};

export default WhatIsSpeechAndDrama;
