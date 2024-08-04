"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Container from "./container";
import MobileMenu from "./mobileMenu";
import Image from "next/image";

export const links = [
  { label: "Home", link: "/" },
  { label: "About", link: "about" },
  { label: "Classes", link: "classes" },
  { label: "Resources", link: "resources" },
  { label: "Contact", link: "contact" },
  { label: "Announcements '24", link: "announcements" },
];

const NavigationBar = () => {
  return (
    <NavigationMenu>
      <Container className="flex flex-row md:flex-col w-full items-center justify-between md:justify-center p-5 md:space-y-7">
        <Link href="/">
          <Image
            width={128}
            height={128}
            src="/logo.png"
            className="w-16 md:w-32"
            alt="logo"
          />
        </Link>
        <MobileMenu />
        <div className="md:w-4/5 lg:w-3/5 hidden md:block">
          <NavigationMenuList>
            {links.map((link, i) => (
              <NavigationMenuItem key={link.label} className="relative">
                <Link
                  href={link.link}
                  className="after:w-full after:h-0.5 after:absolute after:block after:-bottom-0.5 after:left-0 after:bg-primary after:scale-x-0 after:transition-all hover:after:scale-x-100"
                >
                  {link.label}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </div>
      </Container>
    </NavigationMenu>
  );
};

export default NavigationBar;
