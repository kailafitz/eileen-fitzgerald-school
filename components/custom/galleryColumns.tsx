"use client";
import React from "react";
import { motion } from "framer-motion";
import MotionDiv from "./motionDiv";

const col1 = [
  { imageName: 1, alt: "4th Class @ Cratloe Speechfest 2019!" },
  { imageName: 2, alt: "The boys!" },
  { imageName: 3, alt: "Feile Luimnigh winners!" },
  { imageName: 16, alt: "Annual Showcase individual performances!" },
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
  { imageName: 17, alt: "Lots of wins at Feile Luimnigh!" },
];

const col4 = [
  { imageName: 13, alt: "Annual Showcase awards presentation!" },
  { imageName: 14, alt: "Exam results from the Irish Board!" },
  { imageName: 15, alt: "Annual Showcase awards presentation!" },
  { imageName: 4, alt: "Senior class photo!" },
];

const cols = [col1, col2, col3, col4];

const GalleryColumns = () => {
  return (
    <>
      {cols.map((col, i) => {
        return (
          <div key={`photo_col_${i}`} className="grid grid-row-2 gap-y-4">
            {col.map((img, i) => {
              return (
                <MotionDiv
                  key={`${img.imageName}_${i}`}
                  className="group relative flex flex-col justify-between"
                >
                  <img
                    key={`${img.imageName}_${i}`}
                    src={`/gallery/${img.imageName}.jpg`}
                    alt={img.alt}
                    className="object-cover w-full group brightness-105 hue-rotate-15 h-full"
                  />
                  <p className="group p-5 min-h-10 flex md:absolute w-full bottom-0 md:h-0 flex-col text-gray-200 text-center justify-center transition-all bg-primary group-hover:h-full group-hover:transition-all group-hover:flex group-hover:p-5 md:opacity-0 group-hover:opacity-100">
                    {img.alt}
                  </p>
                </MotionDiv>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default GalleryColumns;