import React from "react";

type Props = {
  className?: string;
  title: string;
  subtitle?: string;
  left?: boolean;
};

const SectionHeading = (props: Props) => {
  return (
    <>
      <h1
        className={`${
          props.left ? "text-left" : "text-center"
        } text-2xl md:text-4xl mt-10 ${props.className} ${
          props.subtitle !== "" ? "mb-2" : "mb-10"
        }`}
      >
        {props.title}
      </h1>
      {props.subtitle !== "" && (
        <p
          className={`${
            props.left ? "text-left" : "text-center"
          } text-base mb-10 lg:w-1/2 mx-auto ${props.className}`}
        >
          {props.subtitle}
        </p>
      )}
    </>
  );
};

export default SectionHeading;
