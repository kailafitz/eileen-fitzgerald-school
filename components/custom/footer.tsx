import React from "react";
import Container from "./container";
import Link from "next/link";
import FacebookIcon from "./svgs/facebook";
import InstagramIcon from "./svgs/instagram";
import PhoneIcon from "./svgs/phone";
import EmailIcon from "./svgs/email";
import Image from "next/image";
import CopyrightIcon from "./svgs/copyright";

const Copyright = () => {
  return (
    <Container className="text-xs pt-10 opacity-60 text-center justify-center space-x-1">
      <span>
        <CopyrightIcon className="w-3 inline" />
      </span>
      <span>copyright {new Date().getFullYear()}</span>
      <span>The Eileen Fitzgerald School of Speech & Drama.</span>
      <span>All rights reserved.</span>
    </Container>
  );
};

const Footer = () => {
  return (
    <div className="border-t-2 border-t-primary pt-10 pb-3 md:py-5 bg-zinc-900 z-30 text-gray-200 ">
      <Container className="flex flex-col sm:flex-row justify-between items-start space-y-10 sm:space-y-0">
        <div className="w-full space-y-10 sm:space-y-5">
          <p className="font-heading text-center sm:text-left text-xl">
            The Eileen School of Speech & Drama
          </p>
          <Image
            width={100}
            height={100}
            src="/logo.png"
            className="w-36 md:w-24 mx-auto sm:mx-0 pb-5"
            alt="logo"
          />
          <div className="flex flex-col space-y-2">
            <Link
              href="tel:+353 86 818 7549"
              className="flex flex-row items-center gap-x-5 hover:cursor-pointer justify-center sm:justify-start"
            >
              <PhoneIcon size={25} className="hidden sm:block" />
              <span className="relative">
                <span className="after:w-full after:h-0.5 after:absolute after:block after:-bottom-0.5 after:left-0 after:bg-primary after:scale-x-0 after:transition-all hover:after:scale-x-100">
                  (+353) 86 818 7549
                </span>
              </span>
            </Link>
            <Link
              href="mailto:eileen.fitzgerald.school@gmail.com"
              className="flex flex-row items-center gap-x-5 hover:cursor-pointer justify-center sm:justify-start"
            >
              <EmailIcon size={25} className="hidden sm:block" />
              <span className="relative">
                <span className="after:w-full after:h-0.5 after:absolute after:block after:-bottom-0.5 after:left-0 after:bg-primary after:scale-x-0 after:transition-all hover:after:scale-x-100">
                  eileen.fitzgerald.school@gmail.com
                </span>
              </span>
            </Link>
          </div>
        </div>
        <div className="text-center sm:text-right text-base flex flex-col items-center sm:items-end space-y-3 sm:space-y-2 mx-auto sm:mx-0">
          {/* Other useful links */}
          <Link href={"/gallery"} className="w-fit relative">
            <span className="after:w-full after:h-0.5 after:absolute after:block after:-bottom-0.5 after:left-0 after:bg-primary after:scale-x-0 after:transition-all hover:after:scale-x-100">
              Gallery
            </span>
          </Link>
          <Link href={"/testimonials"} className="w-fit relative">
            <span className="after:w-full after:h-0.5 after:absolute after:block after:-bottom-0.5 after:left-0 after:bg-primary after:scale-x-0 after:transition-all hover:after:scale-x-100">
              Testimonials
            </span>
          </Link>
          <Link href={"/locations"} className="w-fit relative">
            <span className="after:w-full after:h-0.5 after:absolute after:block after:-bottom-0.5 after:left-0 after:bg-primary after:scale-x-0 after:transition-all hover:after:scale-x-100">
              Locations
            </span>
          </Link>
          {/* Social media icons */}
          <div className="flex flex-row justify-center md:justify-end space-x-5">
            <Link
              href="https://www.facebook.com/eileenfitzgeraldschoolofspeechanddrama"
              target="_blank"
              className="w-fit relative"
            >
              <span className="after:w-full after:h-0.5 after:absolute after:block after:-bottom-2 after:left-0 after:bg-primary after:scale-x-0 after:transition-all hover:after:scale-x-100">
                <FacebookIcon size={25} />
              </span>
            </Link>
            <Link
              href="https://www.instagram.com/eileenfitzgerald_drama/"
              target="_blank"
              className="w-fit relative"
            >
              <span className="after:w-full after:h-0.5 after:absolute after:block after:-bottom-2 after:left-0 after:bg-primary after:scale-x-0 after:transition-all hover:after:scale-x-100">
                <InstagramIcon size={25} />
              </span>
            </Link>
          </div>
        </div>
      </Container>
      <Copyright />
    </div>
  );
};

export default Footer;
