import { Asterisk } from "lucide-react";
import React, { ReactNode } from "react";

type Props = {
  heading: string;
  info: ReactNode;
};

const Announcement = (props: Props) => {
  return (
    <div>
      <h6 className="text-2xl mb-2 flex flex-row items-center space-x-2">
        <Asterisk className="text-primary" />
        {props.heading}
      </h6>
      <p>{props.info}</p>
    </div>
  );
};

export default Announcement;
