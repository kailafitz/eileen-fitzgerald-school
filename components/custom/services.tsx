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
      className="w-full sm:w-1/3 h-72 group relative"
    >
      <Link
        href={`/${props.label.toLowerCase().replace(/ /g, "-")}`}
        className="group text-center text-gray-200 w-full h-full relative z-20 flex flex-col justify-center hover:backdrop-blur-sm"
      >
        {props.label}
      </Link>
      <div className="bg-violet-500 opacity-65 absolute bottom-0 left-0 h-0 w-full transition-all group-hover:h-full z-10 saturate-100"></div>
    </div>
  );
};

const labels = ["Classes", "About", "Contact"];

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
