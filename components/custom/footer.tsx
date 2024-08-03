import React from "react";
import Container from "./container";
import Link from "next/link";
import FacebookIcon from "./svgs/facebook";
import InstagramIcon from "./svgs/instagram";
import PhoneIcon from "./svgs/phone";
import EmailIcon from "./svgs/email";
import Image from "next/image";

const CopyrightIcon = () => (
  <svg
    className="mr-1 w-3"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="31" cy="31" r="29" stroke="currentColor" strokeWidth="4" />
    <path
      d="M45.6648 25H41.2614C41.0009 23.7334 40.5452 22.6207 39.8942 21.6619C39.255 20.7031 38.4737 19.8982 37.5504 19.2472C36.639 18.5843 35.6269 18.0871 34.5142 17.7557C33.4015 17.4242 32.2415 17.2585 31.0341 17.2585C28.8324 17.2585 26.8378 17.8149 25.0504 18.9276C23.2749 20.0402 21.8603 21.6797 20.8068 23.8459C19.7652 26.0121 19.2443 28.6695 19.2443 31.8182C19.2443 34.9669 19.7652 37.6243 20.8068 39.7905C21.8603 41.9567 23.2749 43.5961 25.0504 44.7088C26.8378 45.8215 28.8324 46.3778 31.0341 46.3778C32.2415 46.3778 33.4015 46.2121 34.5142 45.8807C35.6269 45.5492 36.639 45.058 37.5504 44.407C38.4737 43.7441 39.255 42.9332 39.8942 41.9744C40.5452 41.0038 41.0009 39.8911 41.2614 38.6364H45.6648C45.3333 40.4948 44.7296 42.1579 43.8537 43.6257C42.9777 45.0935 41.8887 46.3423 40.5866 47.3722C39.2846 48.3902 37.8227 49.1655 36.201 49.6982C34.5911 50.2308 32.8688 50.4972 31.0341 50.4972C27.9328 50.4972 25.1747 49.7396 22.7599 48.2244C20.3452 46.7093 18.4453 44.5549 17.0604 41.7614C15.6754 38.9678 14.983 35.6534 14.983 31.8182C14.983 27.983 15.6754 24.6686 17.0604 21.875C18.4453 19.0814 20.3452 16.9271 22.7599 15.4119C25.1747 13.8968 27.9328 13.1392 31.0341 13.1392C32.8688 13.1392 34.5911 13.4055 36.201 13.9382C37.8227 14.4709 39.2846 15.2521 40.5866 16.282C41.8887 17.3 42.9777 18.5428 43.8537 20.0107C44.7296 21.4666 45.3333 23.1297 45.6648 25Z"
      fill="currentColor"
    />
  </svg>
);

const Copyright = () => {
  return (
    <Container className="text-gray-200 text-xs pt-10 opacity-60 text-center flex flex-col justify-center md:flex-row md:space-x-1">
      <span className="flex flex-row items-center justify-center">
        <CopyrightIcon />
        copyright {new Date().getFullYear()}
      </span>
      <span>The Eileen Fitzgerald School of Speech & Drama.</span>
      <span>All rights reserved.</span>
    </Container>
  );
};

const Footer = () => {
  return (
    <div className="border-t-2 border-t-primary pt-10 pb-3 md:py-5 bg-zinc-900 z-30">
      <Container className="flex flex-col sm:flex-row justify-between items-start space-y-10 sm:space-y-0">
        <div className="w-full space-y-10 sm:space-y-5">
          <p className="font-heading text-gray-200 text-center sm:text-left text-xl">
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
              <PhoneIcon size={25} className="text-gray-200 hidden sm:block" />
              <span className="relative text-gray-200">
                <span className="after:w-full after:h-0.5 after:absolute after:block after:-bottom-0.5 after:left-0 after:bg-primary after:scale-x-0 after:transition-all hover:after:scale-x-100">
                  (+353) 86 818 7549
                </span>
              </span>
            </Link>
            <Link
              href="mailto:eileen.fitzgerald.school@gmail.com"
              className="flex flex-row items-center gap-x-5 hover:cursor-pointer justify-center sm:justify-start"
            >
              <EmailIcon size={25} className="text-gray-200 hidden sm:block" />
              <span className="relative text-gray-200">
                <span className="after:w-full after:h-0.5 after:absolute after:block after:-bottom-0.5 after:left-0 after:bg-primary after:scale-x-0 after:transition-all hover:after:scale-x-100">
                  eileen.fitzgerald.school@gmail.com
                </span>
              </span>
            </Link>
          </div>
        </div>
        <div className="text-gray-200 text-center sm:text-right text-base flex flex-col items-center sm:items-end space-y-3 sm:space-y-2 mx-auto sm:mx-0">
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
