import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import feather from "feather-icons";
import FacebookIcon from "./facebook";
import InstagramIcon from "./instagram";

type Props = {};

const links = [
  { label: "Home", link: "home" },
  { label: "About", link: "about" },
  { label: "Classes", link: "classes" },
  { label: "Gallery", link: "gallery" },
  { label: "Resources", link: "resources" },
  { label: "Content", link: "content" },
];

const MobileMenu = (props: Props) => {
  return (
    <Sheet>
      <SheetTrigger className="block md:hidden">
        <div className="w-10 space-y-2">
          <span className="h-1 w-full bg-white block"></span>
          <span className="h-1 w-full bg-white block"></span>
          <span className="h-1 w-full bg-white block"></span>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col justify-start space-y-4 p-5">
          {links.map((link, i) => (
            <Link href={link.link} className="text-2xl hover:underline">
              {link.label}
            </Link>
          ))}
          <hr className="h-1 w-full bg-black my-5" />
          <Link
            href="/about/#testimonials"
            className="text-2xl hover:underline"
          >
            Testimonials
          </Link>
          <Link href="/gallery" className="text-2xl hover:underline">
            Gallery
          </Link>
          <Link href="/contact/locations" className="text-2xl hover:underline">
            Locations
          </Link>
          <hr className="h-1 w-full bg-black my-5" />
          <div className="flex flex-row space-x-5">
            <FacebookIcon size={40} />
            <InstagramIcon size={40} />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
