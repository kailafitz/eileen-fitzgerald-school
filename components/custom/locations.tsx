import React from "react";
import { MapPin } from "lucide-react";
import MotionDiv from "./motionDiv";
import SectionHeading from "./sectionHeading";

let iframeClassName = "w-full h-60 border-none border-0";

const locations = [
  {
    title: "Clarecastle National School Library",
    iframe: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d653.095835330632!2d-8.970640545009516!3d52.817311266649355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b6cca4b0bf471%3A0x2ba861e207f0fe48!2sBallaghafadda%20East%2C%20Ennis%2C%20Co.%20Clare%2C%20V95%20T253%2C%20Ireland!5e0!3m2!1sen!2sau!4v1723280497015!5m2!1sen!2sau"
        className={iframeClassName}
        loading="lazy"
      ></iframe>
    ),
  },
  {
    title: "Maria Assumpta Hall",
    iframe: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9639.813224588093!2d-8.992127427344302!3d52.84122641539485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b6d2ca2e85283%3A0x3b5a86f01ebed34!2sClonroad%20Beg%2C%20Ennis%2C%20Co.%20Clare%2C%20V95%20HT99%2C%20Ireland!5e0!3m2!1sen!2sau!4v1723280578193!5m2!1sen!2sau"
        className={iframeClassName}
        loading="lazy"
      ></iframe>
    ),
  },
];

const Locations = () => {
  return (
    <>
      <SectionHeading
        title="Our Locations"
        subtitle="Our locations are subject to change year on year so make sure to check back for class location updates!"
      />
      <div className="flex flex-col justify-center space-y-10 md:flex-row md:space-y-0 md:space-x-10">
        {locations.map((location, i) => {
          return (
            <MotionDiv
              key={`${location.title}_${i}`}
              className="flex flex-col w-full md:w-1/2 lg:w-1/3 justify-between"
            >
              <div className="flex flex-row items-start space-x-2">
                <MapPin />
                <h4 className="mb-5"> {location.title}</h4>
              </div>
              {location.iframe}
            </MotionDiv>
          );
        })}
      </div>
    </>
  );
};

export default Locations;
