import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import FacebookIcon from "./svgs/facebook";
import InstagramIcon from "./svgs/instagram";
import { links } from "./navigationBar";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="block md:hidden">
        <div className="w-10 space-y-2">
          <span className="h-0.5 w-full bg-gray-200 block"></span>
          <span className="h-0.5 w-full bg-gray-200 block"></span>
          <span className="h-0.5 w-full bg-gray-200 block"></span>
        </div>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col justify-start space-y-4 text-secondary-foreground pt-5">
          {links.map((link, i) => (
            <SheetClose asChild key={`${link.label}_${i}_mobile`}>
              <Link href={link.link} className="text-2xl hover:underline">
                {link.label}
              </Link>
            </SheetClose>
          ))}
          <hr className="h-0.5 w-full bg-zinc-900 my-5" />
          <SheetClose asChild>
            <Link
              href="/about/#testimonials"
              className="text-2xl hover:underline"
            >
              Testimonials
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/gallery" className="text-2xl hover:underline">
              Gallery
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="/contact#locations"
              className="text-2xl hover:underline"
            >
              Locations
            </Link>
          </SheetClose>
          <hr className="h-0.5 w-full bg-zinc-900 my-5" />
          <div className="flex flex-row space-x-5">
            <SheetClose asChild>
              <FacebookIcon size={40} />
            </SheetClose>
            <SheetClose asChild>
              <InstagramIcon size={40} />
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
