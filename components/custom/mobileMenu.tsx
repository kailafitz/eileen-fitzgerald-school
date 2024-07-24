import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import FacebookIcon from "./facebook";
import InstagramIcon from "./instagram";

const links = [
  { label: "Home", link: "/" },
  { label: "About", link: "about" },
  { label: "Classes", link: "classes" },
  { label: "Gallery", link: "gallery" },
  { label: "Resources", link: "resources" },
  { label: "Contact", link: "contact" },
];

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="block md:hidden">
        <div className="w-10 space-y-2">
          <span className="h-1 w-full bg-gray-200 block"></span>
          <span className="h-1 w-full bg-gray-200 block"></span>
          <span className="h-1 w-full bg-gray-200 block"></span>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col justify-start space-y-4 p-5">
          {links.map((link, i) => (
            <SheetClose asChild key={`${link.label}_${i}_mobile`}>
              <Link href={link.link} className="text-2xl hover:underline">
                {link.label}
              </Link>
            </SheetClose>
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
