import React from "react";
import Container from "./container";
import Link from "next/link";
import Script from "next/script";

type Props = {
  label: string;
  num: number;
};

const ServiceCard = (props: Props) => {
  return (
    <Link
      href={`/${props.label.toLowerCase().replace(/ /g, "-")}`}
      className={`group flex flex-col justify-center w-full sm:w-1/3 h-24 bg-primary border-primary hover:bg-violet-800 hover:border-violet-800 hide-down text-center text-gray-200 z-20 transition-delay-${
        props.num - 1
      }`}
    >
      {props.label}
    </Link>
  );
};

const labels = ["Classes", "About", "Contact"];

const Services = () => {
  // services-container
  return (
    <>
      <Script src="/animations.js" type="text/javascript" />
      <Container className="flex flex-col space-y-10 py-10 min-h-screen justify-around">
        {/* <div className="w-1/2 h-3/4 relative">
          <img
            src="service-2.jpg"
            alt="About Us image"
            className="w-3/5 h-3/5 object-cover opacity-40"
          />
          <img
            src="service-1.jpg"
            alt="Classes image"
            className="absolute bottom-0 right-0 w-3/5 h-3/5 object-cover"
          />
        </div> */}
        <p className="text-base md:text-xl">
          Browse our website to get a glimpse into what we do and we hope you
          join us in celebrating the art that is Speech & Drama. We post all our
          latest news and updates on our social media pages. For queries
          relating to enrolments and fees, please contact us directly{" "}
          <Link href="/contact" className="relative">
            <span className="before:w-full before:h-0.5 before:absolute before:block before:-bottom-0.5 before:left-0 before:bg-white before:scale-x-100 after:w-full after:h-0.5 after:absolute after:block after:-bottom-0.5 after:left-0 after:bg-primary after:scale-x-0 after:transition-all hover:after:scale-x-100">
              here
            </span>
          </Link>
          .
        </p>
        <div className="flex flex-col space-y-10 md:justify-center sm:space-y-0 sm:space-x-6 sm:flex-row justify-between items-center">
          {labels.map((label, i) => (
            <ServiceCard key={i} num={i + 1} label={label} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Services;
