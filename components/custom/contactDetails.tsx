import React from "react";
import Container from "./container";
import FacebookIcon from "./facebook";
import EmailIcon from "./email";
import PhoneIcon from "./phone";
import InstagramIcon from "./instagram";
import Link from "next/link";

const size = 30;

const details = [
  {
    icon: <PhoneIcon size={size} />,
    label: "+353 86 818 7549",
    link: "tel:+353 86 818 7549",
  },
  {
    icon: <EmailIcon size={size} />,
    label: "eileen.fitzgerald.school@gmail.com",
    link: "mailto:eileen.fitzgerald.school@gmail.com",
  },
  {
    icon: <FacebookIcon size={size} />,
    label: "Eileen Fitzgerald School of Speech & Drama",
    link: "https://www.facebook.com/eileenfitzgeraldschoolofspeechanddrama",
  },
  {
    icon: <InstagramIcon size={size} />,
    label: "eileenfitzgerald_drama",
    link: "https://www.instagram.com/eileenfitzgerald_drama/",
  },
];

const ContactDetails = () => {
  return (
    <div className="text-gray-200 w-full sm:w-7/12 lg:w-1/2 mx-auto space-y-10">
      {details.map((contactMethod) => {
        return (
          <Link
            href={contactMethod.link}
            target="_blank"
            className="flex flex-row items-center gap-x-5"
          >
            {contactMethod.icon}
            {contactMethod.label}
          </Link>
        );
      })}
    </div>
  );
};

export default ContactDetails;
