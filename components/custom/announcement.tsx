import { Asterisk } from "lucide-react";
import React, { ReactNode } from "react";

type Props = {
  heading: string;
  info: ReactNode;
};

const Announcement = (props: Props) => {
  return (
    <div>
      <h6 className="text-2xl mb-5">
        <Asterisk className="text-primary inline" />
        <span>{props.heading}</span>
      </h6>
      {props.info}
    </div>
  );
};

export default Announcement;
