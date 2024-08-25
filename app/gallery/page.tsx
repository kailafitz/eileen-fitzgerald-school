import React from "react";
import Container from "@/components/custom/container";
import { Metadata } from "next";
import GalleryColumns from "@/components/custom/galleryColumns";
import SectionHeading from "@/components/custom/sectionHeading";
import Image from "next/image";
import Link from "next/link";
import ScrollToTop from "@/components/custom/scrollToTop";

export const metadata: Metadata = {
  title: "Gallery | Eileen Fitzgerald",
  description:
    "A photo gallery showcasing the events, siverlware and activities of The Eileen Fitzgerald School of Speech and Drama.",
};

const Gallery = () => {
  return (
    <>
      <div className="bg-primary py-10 xl:py-0">
        <Container className="custom-vh-xs flex flex-col justify-center">
          <div className="flex flex-col lg:flex-row justify-between items-stretch space-y-10 lg:space-y-0 md:space-x-10">
            <video controls playsInline className="object-contain mx-auto">
              <source
                src="/video.mp4"
                type="video/mp4"
                height={480}
                width={480}
              ></source>
            </video>

            <div className="flex flex-col justify-between space-y-10 lg:space-y-0">
              <div>
                <h6 className="font-heading text-3xl mb-2">
                  Celebrating 30 Years
                </h6>
                <p>
                  In 2022, we celebrated over 30 years of The Eileen Fitzgerald
                  School of Speech & Drama! Eileen has been inspired by all of
                  her students over the years for their fun, resilience and
                  passion, not to mention their talent. The support from
                  students and their families has meant so much and Eileen&#39;s
                  vision for her school would not be possible without them.
                  Here&#39;s to many more years of learning and laughing, and of
                  course, sharing the love of Speech and Drama.
                </p>
              </div>
              <div className="flex justify-end">
                <div className="flex flex-row space-x-10 items-end">
                  <p className="flex flex-row items-center justify-end">
                    <span className="w-7 bg-slate-200 h-0.5 mr-2"></span>Eileen
                    Fitzgerald
                  </p>
                  <Image
                    className="rotate-12 w-24 lg:w-36 xl:w-44"
                    src="/logo.png"
                    alt="logo"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container className="pt-20">
        <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-20 lg:pb-10">
          <div className="lg:flex flex-col space-y-10">
            <div>
              <SectionHeading left title="Our Gallery" />
              <p>
                Here is a glimpse into what we do with all of our wonderful
                pupils. We take pride in their achievements and the fun and
                memories they make with us here at the school. Check out more
                photos and updates over on our Instagram and Facebook
                communities!
              </p>
            </div>
            <div className="flex flex-col xl:items-start space-y-5 xl:space-y-0 xl:space-x-5 xl:flex-row">
              <p>
                Would you like to join in? Contact us to arrange a class that
                best accommodates you and/or your child!
              </p>
              <Link
                href="/contact"
                className="flex flex-col justify-center capitalize p-3 w-full sm:w-64 text-center relative after:block after:absolute after:border-l-2 after:border-r-2 after:border-white after:h-0 after:top-0 after:left-0 after:w-full hover:after:h-full after:z-10 after:transition-all after:hover:transition-all after:duration-500 after:hover:duration-500 after:hover:delay-75 before:block before:absolute before:border-t-2 before:border-b-2 before:border-white before:h-full before:top-0 before:left-0 before:w-0 hover:before:w-full before:z-10 before:transition-all before:hover:transition-all before:duration-500 before:hover:duration-500"
              >
                <div className="block absolute top-0 left-0 h-full w-full border-2 border-primary"></div>
                Contact
              </Link>
            </div>
          </div>
          <video controls className="lg:w-1/2 min-h-64 object-cover">
            <source src="/video-2.mp4" type="video/mp4"></source>
          </video>
        </div>
        <div className="mb-10 mt-3 sm:mt-5 lg:mt-10 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4 md:grid-cols-4">
          <GalleryColumns />
        </div>
      </Container>

      <ScrollToTop />
    </>
  );
};

export default Gallery;
