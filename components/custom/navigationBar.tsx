"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Container from "./container";
import MobileMenu from "./mobileMenu";

const links = [
  { label: "Home", link: "/" },
  { label: "About", link: "about" },
  { label: "Classes", link: "classes" },
  { label: "Gallery", link: "gallery" },
  { label: "Resources", link: "resources" },
  { label: "Content", link: "content" },
];

const NavigationBar = () => {
  return (
    <NavigationMenu>
      <Container className="flex flex-row md:flex-col w-full items-center justify-between md:justify-center p-5 md:space-y-7">
        <img src="/logo.png" className="w-16 md:w-32" />
        <MobileMenu />
        <div className="w-3/5 hidden md:block">
          <NavigationMenuList>
            {links.map((link, i) => (
              <NavigationMenuItem key={link.label}>
                <Link
                  href={link.link}
                  className="text-gray-200 hover:underline"
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
