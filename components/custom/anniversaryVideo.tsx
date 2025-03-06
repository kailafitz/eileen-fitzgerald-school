"use client";
import React, { useState } from "react";
import { Skeleton } from "../ui/skeleton";

const AnniversaryVideo = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoadedData = () => {
    setIsLoaded(true); // Video is ready to be displayed
  };

  return (
    <>
      {!isLoaded && (
        <Skeleton className="w-full h-[500px] xl:w-[500px] xl:h-full mx-auto" />
      )}
      <video
        controls
        playsInline
        className={`object-contain object-top mx-auto ${
          isLoaded ? "block" : "hidden"
        }`}
        poster=""
        onLoadedData={handleLoadedData}
      >
        <source
          src="/video.mp4"
          type="video/mp4"
          height={480}
          width={480}
        ></source>
      </video>
    </>
  );
};

export default AnniversaryVideo;
