import React from "react";
import Container from "./container";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const Name = () => {
  return (
    <div className="bg-primary w-full py-10 custom-vh-xs custom-vh-md flex flex-col text-gray-200">
      <Container className="text-center flex-1 flex flex-col justify-evenly">
        <div>
          <p className="text-lg sm:text-2xl mb-5 uppercase tracking-widest">
            Welcome to the home of
          </p>
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl xl:text-8xl">
            The Eileen Fitzgerald <br />
            School of Speech & Drama
          </h1>
        </div>
      </Container>
      <Link href="#intro" className="w-fit mx-auto">
        <div className="bg-gray-200 rounded-full p-0.5 animate-bounce">
          <ChevronDown
            className="text-zinc-900 block mx-auto"
            size="40"
            strokeWidth={1.2}
          />
        </div>
      </Link>
    </div>
  );
};

export default Name;
