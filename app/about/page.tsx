import React from "react";
import Staff from "@/components/custom/staff";
import Testimonials from "@/components/custom/testimonials";
import { Metadata } from "next";
import Container from "@/components/custom/container";
import ScrollToTop from "@/components/custom/scrollToTop";
import Link from "next/link";
import ActionBanner from "@/components/custom/actionBanner";

export const metadata: Metadata = {
  title: "About | Eileen Fitzgerald",
  description:
    "About The Eileen Fitzgerald School of Speech and Drama. Meet the team and see what past students say about the school.",
};

const About = () => {
  return (
    <>
      <Container>
        <Staff />
        <Testimonials />
        <ScrollToTop />
      </Container>
      <ActionBanner />
    </>
  );
};

export default About;
