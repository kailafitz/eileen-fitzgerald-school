import React, { ReactNode } from "react";

type Props = {
  children: string | ReactNode;
  underline?: boolean;
  mb?: boolean;
};

const LinkAnimation = (props: Props) => {
  return (
    <span
      className={`${
        props.underline
          ? "before:w-full before:h-0.5 before:absolute before:block before:-bottom-0.5 before:left-0 before:bg-gray-200 before:scale-x-100"
          : ""
      } after:w-full after:h-0.5 after:absolute after:block after:${
        props.mb ? "mt-2" : "-bottom-0.5"
      } after:left-0 after:bg-primary after:scale-x-0 after:transition-all hover:after:scale-x-100`}
    >
      {props.children}
    </span>
  );
};

export default LinkAnimation;
