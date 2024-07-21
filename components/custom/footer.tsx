import React from "react";
import Container from "./container";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="border-t-2 border-t-violet-500 py-5">
      <Container className="flex flex-row justify-between items-center">
        <div className="space-y-5">
          <p className="text-white">The Eileen School of Speech & Drama</p>
          <img src="/logo.png" className="w-24" />
        </div>
        <div className="text-white flex flex-col">
          <Link href={"/gallery"}>Gallery</Link>
          <Link href={"/testimonials"}>Testimonials</Link>
          <Link href={"/locations"}>Locations</Link>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
