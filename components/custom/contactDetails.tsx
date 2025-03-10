import React, { ReactNode } from "react";
import FacebookIcon from "./svgs/facebook";
import EmailIcon from "./svgs/email";
import PhoneIcon from "./svgs/phone";
import InstagramIcon from "./svgs/instagram";
import Link from "next/link";
import MotionDiv from "./motionDiv";
import MessengerIcon from "./svgs/messenger";
import SectionHeading from "./sectionHeading";
import LinkAnimation from "./linkAnimation";

const classes = "text-primary w-5 md:w-6";

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
    link: "http://m.me/611752942268562",
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
        <span className="relative break-all">
          <LinkAnimation>{props.label}</LinkAnimation>
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
        className="absolute top-44 w-screen md:w-3/5 md:-top-6 md:-right-48 opacity-10 rotate-12 -z-10"
      />
      <div className="flex flex-col py-20 space-y-10">
        <div className="w-full md:w-1/2 text-left">
          <SectionHeading
            title="Contact Us"
            subtitle="If you&#39;re interested in enrolling in any of our classes or wish
            to find out more information, please get in touch with us."
            className="md:mx-0 lg:w-full"
            left
          />
          <div className="w-fit space-y-6">
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
          <SectionHeading
            title="Follow Us"
            subtitle="Get to know our school even further by following us on our social
            media platforms where we post the latest news and updates!"
            className="md:mx-0 lg:w-full"
            left
          />
          <div className="w-fit space-y-6">
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
