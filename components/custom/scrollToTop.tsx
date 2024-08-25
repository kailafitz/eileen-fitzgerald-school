"use client";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [visibility, setVisibility] = useState<string>(
    "opacity-0 translate-y-4"
  );

  function scrollFunction() {
    if (
      document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 40
    ) {
      setVisibility("opacity-1 translate-y-0");
    } else {
      setVisibility("opacity-0 translate-y-4");
    }
  }

  return (
    <Link
      href="#navbar"
      className={`fixed bottom-6 right-6 w-fit mx-auto z-50 transition-all duration-200 ${visibility}`}
    >
      <div className="group bg-gray-200 rounded-full p-0.5 md:hover:bg-primary transition-all duration-200">
        <ChevronDown
          className="text-zinc-900 group-hover:text-grey-200 block mx-auto rotate-180 transition-all duration-200"
          size="40"
          strokeWidth={1.2}
        />
      </div>
    </Link>
  );
};

export default ScrollToTop;
