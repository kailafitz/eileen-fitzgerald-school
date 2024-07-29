import React from "react";
import Container from "./container";
import FacebookIcon from "./svgs/facebook";
import EmailIcon from "./svgs/email";
import PhoneIcon from "./svgs/phone";
import InstagramIcon from "./svgs/instagram";
import Link from "next/link";

const size = 28;
const classes = "text-primary";

const details = [
  {
    icon: <PhoneIcon size={size} className={classes} />,
    label: "+353 86 818 7549",
    link: "tel:+353 86 818 7549",
  },
  {
    icon: <EmailIcon size={size} className={classes} />,
    label: "eileen.fitzgerald.school@gmail.com",
    link: "mailto:eileen.fitzgerald.school@gmail.com",
  },
  {
    icon: <FacebookIcon size={size} className={classes} />,
    label: "Eileen Fitzgerald School of Speech & Drama",
    link: "https://www.facebook.com/eileenfitzgeraldschoolofspeechanddrama",
  },
  {
    icon: <InstagramIcon size={size} className={classes} />,
    label: "eileenfitzgerald_drama",
    link: "https://www.instagram.com/eileenfitzgerald_drama/",
  },
];

const ContactDetails = () => {
  return (
    <div className="text-gray-200 w-fit mx-auto space-y-10">
      {details.map((contactMethod, i) => {
        return (
          <Link
            key={`${contactMethod.label}_${i}`}
            href={contactMethod.link}
            target="_blank"
            className="flex flex-row items-center gap-x-5 w-fit hover:cursor-pointer"
          >
            <div className="bg-gray-200 p-2 rounded-full">
              {contactMethod.icon}
            </div>
            <span className="relative">
              <span className="after:w-full after:h-0.5 after:absolute after:block after:-bottom-0.5 after:left-0 after:bg-primary after:scale-x-0 after:transition-all hover:after:scale-x-100">
                {contactMethod.label}
              </span>
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default ContactDetails;
