import React from "react";
import Container from "./container";
import Link from "next/link";
import FacebookIcon from "./facebook";
import InstagramIcon from "./instagram";

type Props = {};

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
    <p className="flex flex-row items-center justify-center text-white text-xs opacity-60 pt-5">
      <CopyrightIcon />
      copyright {new Date().getFullYear()}
    </p>
  );
};

const Footer = (props: Props) => {
  return (
    <div className="border-t-2 border-t-violet-500 pt-10 pb-3 md:py-5">
      <Container className="flex flex-col sm:flex-row justify-between items-start space-y-10 sm:space-y-0">
        <div className="w-full sm:w-fit space-y-10 sm:space-y-5">
          <p className="text-white text-center md:text-left text-1xl sm:text-base">
            The Eileen School of Speech & Drama
          </p>
          <img src="/logo.png" className="w-36 md:w-24 mx-auto sm:mx-0" />
        </div>
        <div className="text-white text-center sm:text-right text-1xl sm:text-base flex flex-col space-y-3 sm:space-y-2 mx-auto sm:mx-0 pb-10">
          <Link href={"/gallery"} className="hover:underline">
            Gallery
          </Link>
          <Link href={"/testimonials"} className="hover:underline">
            Testimonials
          </Link>
          <Link href={"/locations"} className="hover:underline">
            Locations
          </Link>
          {/* <hr className="w-full bg-white" /> */}
          <div className="flex flex-row justify-center md:justify-end space-x-5">
            <Link
              href="https://www.facebook.com/eileenfitzgeraldschoolofspeechanddrama"
              target="_blank"
            >
              <FacebookIcon size={25} />
            </Link>
            <Link
              href="https://www.instagram.com/eileenfitzgerald_drama/"
              target="_blank"
            >
              <InstagramIcon size={25} />
            </Link>
          </div>
        </div>
      </Container>
      <Copyright />
    </div>
  );
};

export default Footer;
