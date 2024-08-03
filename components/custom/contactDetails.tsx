import React, { ReactNode } from "react";
import FacebookIcon from "./svgs/facebook";
import EmailIcon from "./svgs/email";
import PhoneIcon from "./svgs/phone";
import InstagramIcon from "./svgs/instagram";
import Link from "next/link";
import MotionDiv from "./motionDiv";
import MessengerIcon from "./svgs/messenger";

const classes = "text-primary w-5";

const contactDetails = [
  {
    icon: <PhoneIcon className={classes} />,
    label: "+353 86 818 7549",
    link: "tel:+353 86 818 7549",
  },
  {
    icon: <EmailIcon className={classes} />,
    label: "eileen.fitzgerald.school@gmail.com",
    link: "mailto:eileen.fitzgerald.school@gmail.com",
  },
  {
    icon: <MessengerIcon className={classes} />,
    label: "Eileen Fitzgerald School of Speech & Drama",
    link: "m.me/611752942268562",
  },
];

const socialMediaDetails = [
  {
    icon: <InstagramIcon className={classes} />,
    label: "eileenfitzgerald_drama",
    link: "https://www.instagram.com/eileenfitzgerald_drama/",
  },
  {
    icon: <FacebookIcon className={classes} />,
    label: "Eileen Fitzgerald School of Speech & Drama",
    link: "https://www.facebook.com/eileenfitzgeraldschoolofspeechanddrama",
  },
];

type Props = {
  label: string;
  link: string;
  icon: ReactNode;
};

const ContactDetail = (props: Props) => {
  return (
    <MotionDiv delay={1}>
      <Link
        href={props.link}
        target="_blank"
        className="flex flex-row items-center gap-x-5 w-fit hover:cursor-pointer"
      >
        <div className="bg-gray-200 p-2 rounded-full">{props.icon}</div>
        <span className="relative">
          <span className="after:w-full after:h-0.5 after:absolute after:block after:-bottom-0.5 after:left-0 after:bg-primary after:scale-x-0 after:transition-all hover:after:scale-x-100">
            {props.label}
          </span>
        </span>
      </Link>
    </MotionDiv>
  );
};

const ContactDetails = () => {
  return (
    <>
      <img
        src="/logo.png"
        alt="logo"
        className="absolute top-56 w-screen md:w-3/5 md:-top-6 md:-right-48 opacity-10 rotate-12 -z-10"
      />
      <div className="flex flex-col space-y-10">
        <div className="w-full md:w-1/2 text-left">
          <h1 className="text-2xl md:text-4xl my-10">Contact Us</h1>
          <p className="text-base mb-10">
            If you&#39;re interested in enrolling in any of our classes or wish
            to find out more information, please get in touch with us.
          </p>
          <div className="w-fit space-y-5">
            {contactDetails.map((detail, i) => {
              return (
                <ContactDetail
                  key={`${detail.label}_${i}`}
                  label={detail.label}
                  link={detail.link}
                  icon={detail.icon}
                />
              );
            })}
          </div>
        </div>
        <div className="w-full md:w-1/2 text-left">
          <h1 className="text-2xl md:text-4xl mb-10">Follow Us</h1>
          <p className="text-base mb-10">
            Get to know our school even further by following us on our social
            media platforms where we post the latest news and updates!
          </p>
          <div className="w-fit space-y-5">
            {socialMediaDetails.map((detail, i) => {
              return (
                <ContactDetail
                  key={`${detail.label}_${i}`}
                  label={detail.label}
                  link={detail.link}
                  icon={detail.icon}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
