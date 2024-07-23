import React from "react";

let iframeClassName = "w-full h-60 border-none border-0";

const locations = [
  {
    title: "Barefield National School",
    iframe: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2407.2115969032525!2d-8.94607778398007!3d52.8906131164488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b7287bed43779%3A0x43400a9db535b8c7!2sBarefield%20National%20School%2C%20Drumquin%2C%20Ennis%2C%20Co.%20Clare!5e0!3m2!1sen!2sie!4v1600092620116!5m2!1sen!2sie"
        // width="400"
        // height="300"
        // frameborder="0"
        // style="border:0;"
        // allowfullscreen=""
        aria-hidden="false"
        // tabindex="0"
        className={iframeClassName}
      ></iframe>
    ),
  },
  {
    title: "Clarecastle National School",
    iframe: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2411.294847984253!2d-8.972625183982041!3d52.817049321924394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b6cca4b0bf569%3A0x637dc17d46794146!2sClarecastle%20National%20School%2C%20Ennis%20Rd%2C%20Clare%20Commons%2C%20Ennis%2C%20Co.%20Clare!5e0!3m2!1sen!2sie!4v1600092676270!5m2!1sen!2sie"
        // width="400"
        // height="300"
        // frameborder="0"
        // style="border:0;"
        // allowfullscreen=""
        aria-hidden="false"
        // tabindex="0"
        className={iframeClassName}
      ></iframe>
    ),
  },
  {
    title: "Burns Study Centre",
    iframe: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2410.515105590674!2d-8.999307584072515!3d52.831102679874256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b13264c3666ef%3A0x685b26feaa9893fc!2sWestgate%20Business%20Park%2C%20Kilrush%20Rd%2C%20Cahircalla%20Beg%2C%20Ennis%2C%20Co.%20Clare!5e0!3m2!1sen!2sie!4v1629460491861!5m2!1sen!2sie"
        // width="400"
        // height="300"
        // style="border:0;"
        // allowfullscreen=""
        loading="lazy"
        className={iframeClassName}
      ></iframe>
    ),
  },
];

const Locations = () => {
  return (
    <div className="mb-10">
      <h1 className="text-center text-2xl md:text-4xl my-10">Our Locations</h1>
      <div className="flex flex-col justify-center space-y-10 md:flex-row md:justify-between md:space-y-0 md:space-x-10">
        {locations.map((location) => {
          return (
            <div className="flex flex-col w-full md:w-1/3 justify-between">
              <h4 className="mb-5">{location.title}</h4>
              {location.iframe}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Locations;