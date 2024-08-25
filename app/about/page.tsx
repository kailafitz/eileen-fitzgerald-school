import React from "react";
import Staff from "@/components/custom/staff";
import Testimonials from "@/components/custom/testimonials";
import { Metadata } from "next";
import Container from "@/components/custom/container";
import ScrollToTop from "@/components/custom/scrollToTop";
import Link from "next/link";

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
      <div className="bg-primary py-10">
        <Container className="flex flex-col md:flex-row justify-center items-center space-y-5 md:space-x-5 md:space-y-0">
          <p className="text-foreground">
            Do you want to join us? Get in touch to secure you place for the
            coming school year!
          </p>
          <Link
            href="contact"
            className="flex flex-col justify-center bg-background capitalize p-3 w-full sm:w-64 text-center relative after:block after:absolute after:border-l-2 after:border-r-2 after:border-white after:h-0 after:top-0 after:left-0 after:w-full hover:after:h-full after:z-10 after:transition-all after:hover:transition-all after:duration-500 after:hover:duration-500 after:hover:delay-75 before:block before:absolute before:border-t-2 before:border-b-2 before:border-white before:h-full before:top-0 before:left-0 before:w-0 hover:before:w-full before:z-10 before:transition-all before:hover:transition-all before:duration-500 before:hover:duration-500"
          >
            <div className="block absolute top-0 left-0 h-full w-full border-2 border-primary"></div>
            Contact
          </Link>
        </Container>
      </div>
    </>
  );
};

export default About;
