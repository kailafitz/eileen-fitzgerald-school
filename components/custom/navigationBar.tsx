"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Container from "./container";

const links = [
  { label: "Home", link: "home" },
  { label: "About", link: "about" },
  { label: "Classes", link: "classes" },
  { label: "Gallery", link: "gallery" },
  { label: "Resources", link: "resources" },
  { label: "Content", link: "content" },
];

const NavigationBar = () => {
  return (
    <NavigationMenu>
      <Container className="flex flex-col w-full items-center justify-center p-5 space-y-7">
        <img src="/logo.png" className="w-32" />
        <div className="w-3/5">
          <NavigationMenuList>
            {links.map((link, i) => (
              <NavigationMenuItem key={i}>
                <NavigationMenuLink>
                  <Link href={link.link} className="text-white hover:underline">
                    {link.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </div>
      </Container>
    </NavigationMenu>
  );
};

export default NavigationBar;
