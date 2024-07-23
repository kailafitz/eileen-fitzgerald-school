import React from "react";
import Container from "@/components/custom/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Eileen Fitzgerald",
  description:
    "A photo gallery showcasing the events, siverlware and activities of The Eileen Fitzgerald School of Speech and Drama.",
};

// const images = [
//   { imageName: 1, alt: "4th Class @ Cratloe Speechfest 2019!" },
//   { imageName: 2, alt: "The Boys!" },
//   { imageName: 3, alt: "Feile Luimnigh winners!" },
//   { imageName: 4, alt: "Senior class photo!" },
//   { imageName: 5, alt: "Annual Showcase showdown!" },
//   { imageName: 6, alt: "Feile Luimnigh winners!" },
//   { imageName: 7, alt: "Feile Luimnigh winners!" },
//   { imageName: 8, alt: "Feile Luimnigh winners!" },
//   { imageName: 9, alt: "Feile Luimnigh winners!" },
//   { imageName: 10, alt: "Senior Feile Luimnigh winners!" },
//   { imageName: 11, alt: "Senior class photo!" },
//   { imageName: 12, alt: "Class projects!" },
//   { imageName: 13, alt: "Annual Showcase Awards Presentation!" },
//   { imageName: 14, alt: "Exams Medalist from the Irish Board!" },
//   { imageName: 15, alt: "Annual Showcase Awards Presentation!" },
//   { imageName: 16, alt: "Annual Showcase Individual Performances!" },
//   { imageName: 17, alt: "Lots of wins at Feile Luimnigh" },
// ];

const col1 = [
  { imageName: 1, alt: "4th Class @ Cratloe Speechfest 2019!" },
  { imageName: 2, alt: "The Boys!" },
  { imageName: 3, alt: "Feile Luimnigh winners!" },
  { imageName: 16, alt: "Annual Showcase Individual Performances!" },
];

const col2 = [
  { imageName: 5, alt: "Annual Showcase showdown!" },
  { imageName: 6, alt: "Feile Luimnigh winners!" },
  { imageName: 7, alt: "Feile Luimnigh winners!" },
  { imageName: 8, alt: "Feile Luimnigh winners!" },
];

const col3 = [
  { imageName: 9, alt: "Feile Luimnigh winners!" },
  { imageName: 10, alt: "Senior Feile Luimnigh winners!" },
  { imageName: 11, alt: "Senior class photo!" },
  { imageName: 12, alt: "Class projects!" },
  { imageName: 17, alt: "Lots of wins at Feile Luimnigh" },
];

const col4 = [
  { imageName: 13, alt: "Annual Showcase Awards Presentation!" },
  { imageName: 14, alt: "Exams Medalist from the Irish Board!" },
  { imageName: 15, alt: "Annual Showcase Awards Presentation!" },
  { imageName: 4, alt: "Senior class photo!" },
];

const cols = [col1, col2, col3, col4];

const Gallery = () => {
  return (
    <Container className="text-gray-200">
      <h1 className="text-center text-2xl md:text-4xl mt-10 mb-2" id="benefits">
        Our Gallery
      </h1>
      <p className="text-center text-base mb-10 md:w-1/2 mx-auto">
        We take pride in our students' achievements and the fun and memories
        they make at our school during classtime. Here is a taste of all the
        smiles we've seen over the years. More photos and updates over on our
        Instagram and Facebook communities!
      </p>
      <div className="flex flex-row space-x-5 pb-10">
        {cols.map((col) => {
          return (
            <div className="w-1/4 flex flex-col space-y-5">
              {col.map((img, i) => {
                return (
                  <div className="group relative">
                    <img
                      key={`${img.imageName}_$i`}
                      src={`/gallery/${img.imageName}.jpg`}
                      className="object-contain group"
                    />
                    <p className="group absolute w-full bottom-0 h-0 flex-col text-gray-200 text-center justify-center transition-all bg-violet-500 group-hover:h-full  group-hover:transition-all group-hover:flex  group-hover:p-5  opacity-0 group-hover:opacity-100">
                      {img.alt}
                    </p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Gallery;
