import React from "react";

type Props = {
  className?: string;
  title: string;
  subtitle?: string;
};

const SectionHeading = (props: Props) => {
  return (
    <>
      <h1
        className={`text-center text-2xl md:text-4xl mt-10 ${
          props.subtitle !== "" ? "mb-2" : "mb-10"
        }`}
      >
        {props.title}
      </h1>
      {props.subtitle !== "" && (
        <p className="text-center text-base mb-10 lg:w-1/2 mx-auto">
          {props.subtitle}
        </p>
      )}
    </>
  );
};

export default SectionHeading;
