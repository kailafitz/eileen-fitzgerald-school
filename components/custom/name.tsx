import React from "react";
import Container from "./container";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const Name = () => {
  return (
    <div className="bg-primary w-full py-10 custom-vh-xs custom-vh-md flex flex-col text-gray-200">
      <Container className="text-center flex-1 flex flex-col justify-evenly">
        <div>
          <p className="text-lg mb-5">Welcome to the home of the</p>
          <h1 className="text-3xl sm:text-6xl md:text-7xl xl:text-8xl">
            Eileen Fitzgerald <br />
            School of Speech & Drama
          </h1>
        </div>
      </Container>
      <Link href="#intro" className="w-fit mx-auto">
        <ChevronDown
          className="text-white block mx-auto bouncing-arrow"
          size="40"
        />
      </Link>
    </div>
  );
};

export default Name;
