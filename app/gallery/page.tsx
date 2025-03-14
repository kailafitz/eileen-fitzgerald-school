import React from "react";
import Container from "@/components/custom/container";
import { Metadata } from "next";
import GalleryColumns from "@/components/custom/galleryColumns";
import SectionHeading from "@/components/custom/sectionHeading";
import Link from "next/link";
import { Quote } from "lucide-react";
import ScrollToTop from "@/components/custom/scrollToTop";
import ActionBanner from "@/components/custom/actionBanner";
import Script from "next/script";
import { ImageGallery, WithContext } from "schema-dts";
import AnniversaryVideo from "@/components/custom/anniversaryVideo";

const jsonLd: WithContext<ImageGallery> = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "The Eileen Fitzgerald School of Speech and Drama Gallery",
  description:
    "A curated collection of photographs from our classes and events!",
  url: "https://eileenfitzgerald-school.com/gallery",
  creator: {
    "@type": "Person",
    name: "Eileen Fitzgerald",
    url: "https://eileenfitzgerald-school.com/about",
  },
  associatedMedia: [
    {
      "@type": "ImageObject",
      name: "Students",
      caption: "Students at The Eileen Fitzgerald School of Speech and Drama",
      url: "https://www.eileenfitzgerald-school.com/_next/image?url=%2Fgallery%2F9.jpg&w=256&q=75",
      contentUrl:
        "https://www.eileenfitzgerald-school.com/_next/image?url=%2Fgallery%2F9.jpg&w=256&q=75",
      thumbnailUrl:
        "https://www.eileenfitzgerald-school.com/_next/image?url=%2Fgallery%2F9.jpg&w=256&q=75",
      creator: {
        "@type": "Person",
        name: "Eileen Fitzgerald",
        url: "https://eileenfitzgerald-school.com/about",
      },
    },
    {
      "@type": "ImageObject",
      name: "Competition Winners",
      caption:
        "Students participating at the Feile Luimnigh Speech and Drama Festival",
      url: "https://www.eileenfitzgerald-school.com/_next/image?url=%2Fgallery%2F3.jpg&w=256&q=75",
      contentUrl:
        "https://www.eileenfitzgerald-school.com/_next/image?url=%2Fgallery%2F3.jpg&w=256&q=75",
      thumbnailUrl:
        "https://www.eileenfitzgerald-school.com/_next/image?url=%2Fgallery%2F3.jpg&w=256&q=75",
      creator: {
        "@type": "Person",
        name: "Eileen Fitzgerald",
        url: "https://eileenfitzgerald-school.com/about",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Gallery | Eileen Fitzgerald",
  description:
    "A photo gallery showcasing the events, siverlware and activities of The Eileen Fitzgerald School of Speech and Drama",
  openGraph: {
    title: "Gallery | The Eileen Fitzgerald School of Speech and Drama",
    description:
      "A photo gallery showcasing the events, siverlware and activities of The Eileen Fitzgerald School of Speech and Drama",
  },
};

const Gallery = () => {
  return (
    <>
      <Script
        id="organisation-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <div className="bg-primary py-10">
        <Container className="custom-vh-xs flex flex-col justify-center">
          <div className="flex flex-col lg:flex-row justify-between space-y-10 lg:space-y-0 lg:space-x-10">
            <AnniversaryVideo />
            <div className="flex flex-col justify-between space-y-10 lg:space-y-0 w-full xl:w-1/2">
              <div>
                <h6 className="font-heading text-3xl mb-2">
                  Celebrating 30 Years
                </h6>
                <p className="mb-3">
                  In 1992, I made a decision to pursue my dream by transforming
                  my hobby into my career. In that time I&#39;ve met so many
                  inspirational, passionate & talented young people. You have
                  taught me so much! We have laughed, cried & shared some
                  emotional times together. To all the pupils (both former and
                  current) along with your families I am forever grateful that
                  you had the belief in me to guide you on a journey and
                  supported me in my vision for my school. The current students
                  have been on a journey over the last 22 months like none
                  before! You have shown your resilience and how good you are at
                  adapting to challenges. I&#39;m so proud of every one of you.
                </p>
                <p className="italic pb-10">
                  <Quote className="rotate-180 inline mr-2 opacity-50" />
                  <span>
                    People will forget what you said, people will forget what
                    you did, but people will never forget how you made them
                    feel.
                  </span>
                  <Quote className="inline ml-2 opacity-50" />
                  <span className="w-7 bg-gray-200 h-0.5 mx-2 inline-block mb-0.5"></span>
                  Maya Angelou 1928 - 2014
                </p>
              </div>
              <div className="flex justify-end">
                <div className="flex flex-row space-x-5 items-end">
                  <p className="flex flex-row items-center justify-end">
                    <span className="w-7 bg-slate-200 h-0.5 mr-2"></span>Eileen
                    Fitzgerald
                  </p>
                  <div className="">
                    <Quote
                      className="inline opacity-15 rotate-180 mb-2"
                      size={60}
                    />
                    <Quote className="inline opacity-15 -mb-2" size={60} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container className="pt-10 lg:pt-20 mb-20">
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
        <div className="mt-3 sm:mt-5 lg:mt-10 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4 md:grid-cols-4">
          <GalleryColumns />
        </div>
      </Container>
      <ActionBanner />
      <ScrollToTop />
    </>
  );
};

export default Gallery;
