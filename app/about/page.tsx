import React from "react";
import Team from "@/components/custom/team";
import Testimonials from "@/components/custom/testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Eileen Fitzgerald",
  description:
    "About The Eileen Fitzgerald School of Speech and Drama. Meet the team and see what past students say about the school.",
};

const About = () => {
  return (
    <>
      <Team />
      <Testimonials />
    </>
  );
};

export default About;
