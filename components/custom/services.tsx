import React from "react";
import Container from "./container";
import Link from "next/link";

type Props = {
  label: string;
  num: number;
};

const ServiceCard = (props: Props) => {
  return (
    <div
      style={{
        background: `url('/service-${props.num}.jpg') no-repeat center / cover`,
      }}
      className="w-full sm:w-1/3 h-72 bg-violet-500 saturate-0 "
    >
      <div className="absolute top-0 left-0 h-full w-full bg-violet-500 z-0 opacity-70"></div>
      <Link
        href={`/${props.label.toLowerCase().replace(/ /g, "-")}`}
        className="text-center text-gray-200 w-full h-full relative z-20 flex flex-col justify-center hover:backdrop-blur-sm"
      >
        {props.label}
      </Link>
    </div>
  );
};

const labels = ["Classes", "Who We Are", "Contact Us"];

const Services = () => {
  return (
    <Container className="flex flex-col space-y-10 sm:space-y-0 sm:space-x-6 sm:flex-row justify-between my-20">
      {labels.map((label, i) => (
        <ServiceCard key={i} num={i + 1} label={label} />
      ))}
    </Container>
  );
};

export default Services;
