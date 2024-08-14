import React from "react";
import Container from "@/components/custom/container";
import { Metadata } from "next";
import GalleryColumns from "@/components/custom/galleryColumns";
import SectionHeading from "@/components/custom/sectionHeading";

export const metadata: Metadata = {
  title: "Gallery | Eileen Fitzgerald",
  description:
    "A photo gallery showcasing the events, siverlware and activities of The Eileen Fitzgerald School of Speech and Drama.",
};

const Gallery = () => {
  return (
    <Container>
      <SectionHeading
        title="Our Gallery"
        subtitle="We take pride in our students&#39; achievements and the fun and memories
        they make at our school during classtime. Here is a taste of all the
        smiles we&#39;ve seen over the years. More photos and updates over on
        our Instagram and Facebook communities!"
      />
      <p className="text-center text-base mb-10 sm:w-4/5 lg:w-1/2 mx-auto"></p>
      <div className="mb-10 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4 md:grid-cols-4">
        <GalleryColumns />
      </div>
    </Container>
  );
};

export default Gallery;
