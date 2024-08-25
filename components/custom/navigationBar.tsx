import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Container from "./container";
import MobileMenu from "./mobileMenu";
import Image from "next/image";
import NavLink from "./navLink";

export const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "about" },
  { label: "Classes", href: "classes" },
  { label: "Resources", href: "resources" },
  { label: "Gallery", href: "gallery" },
  { label: "Contact", href: "contact" },
];

const NavigationBar = () => {
  return (
    <NavigationMenu id="nav">
      <Container
        id="navbar"
        className="flex flex-row md:flex-col w-full items-center justify-between md:justify-center p-5 md:space-y-7"
      >
        <Link href="/" id="logo">
          <Image
            width={128}
            height={128}
            src="/logo.png"
            className="w-16 md:w-32"
            alt="logo"
          />
        </Link>
        <MobileMenu />
        <div
          id="links"
          className={`md:w-4/5 lg:w-3/5 hidden md:block overflow-hidden`}
        >
          <NavigationMenuList>
            {links.map((link, i) => (
              <NavLink key={`${link.label}_${i}`} link={link} />
            ))}
          </NavigationMenuList>
        </div>
      </Container>
    </NavigationMenu>
  );
};

export default NavigationBar;
