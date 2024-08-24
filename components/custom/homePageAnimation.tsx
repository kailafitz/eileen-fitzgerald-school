import React from "react";

const HomePageAnimation = () => {
  return (
    <div className="home-page-animation absolute top-0 left-0 z-30 h-full w-full overflow-hidden">
      <div className="relative h-full w-full">
        <div className="absolute w-96 h-96 bg-white rounded-full opacity-10 animate-home-spotlight"></div>
      </div>
    </div>
  );
};

export default HomePageAnimation;
