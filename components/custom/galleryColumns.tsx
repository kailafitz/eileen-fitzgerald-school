import React, { Fragment } from "react";

const col1 = [
  { imageName: 22, alt: "" },
  { imageName: 2, alt: "" },
  { imageName: 26, alt: "Feile Luimnigh winners!" },
  { imageName: 16, alt: "Annual Showcase individual performances!" },
  { imageName: 20, alt: "" },
  { imageName: 3, alt: "The boys!" },
  { imageName: 1, alt: "" },
];

const col2 = [
  { imageName: 5, alt: "Annual Showcase showdown!" },
  { imageName: 21, alt: "" },
  { imageName: 6, alt: "Feile Luimnigh winners!" },
  { imageName: 7, alt: "Feile Luimnigh winners!" },
  { imageName: 25, alt: "" },
  { imageName: 8, alt: "Feile Luimnigh winners!" },
  { imageName: 19, alt: "" },
];

const col3 = [
  { imageName: 24, alt: "" },
  { imageName: 9, alt: "Feile Luimnigh winners!" },
  { imageName: 10, alt: "Senior Feile Luimnigh winners!" },
  { imageName: 11, alt: "Senior class photo!" },
  { imageName: 12, alt: "Class projects!" },
  { imageName: 17, alt: "Lots of wins at Feile Luimnigh!" },
];

const col4 = [
  { imageName: 13, alt: "Annual Showcase awards presentation!" },
  { imageName: 23, alt: "" },
  { imageName: 14, alt: "Exam results from the Irish Board!" },
  { imageName: 15, alt: "Annual Showcase awards presentation!" },
  { imageName: 27, alt: "" },
  { imageName: 4, alt: "Senior class photo!" },
  { imageName: 18, alt: "" },
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
                <picture
                  className="group relative flex flex-col justify-between"
                  key={`${img.imageName}_${i}`}
                >
                  <source
                    srcSet={`/gallery/${img.imageName}.webp`}
                    type="image/webp"
                  />
                  <source
                    srcSet={`/gallery/${img.imageName}.jpg`}
                    type="image/jpg"
                  />
                  <img
                    key={`${img.imageName}_${i}`}
                    src={`/gallery/${img.imageName}.jpg`}
                    alt={
                      img.alt === "" ? "Eileen Fitzgerald students" : img.alt
                    }
                    className="object-cover w-full group brightness-105 hue-rotate-15 h-full saturate-[1.3]"
                  />
                  {img.alt && (
                    <p className="group p-5 min-h-10 flex md:absolute w-full bottom-0 md:h-0 flex-col text-center justify-center transition-all bg-primary group-hover:h-full group-hover:transition-all group-hover:flex group-hover:p-5 md:opacity-0 group-hover:opacity-100">
                      {img.alt}
                    </p>
                  )}
                </picture>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default GalleryColumns;
