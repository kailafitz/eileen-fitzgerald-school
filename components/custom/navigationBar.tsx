import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Container from "./container";
import MobileMenu from "./mobileMenu";
import Image from "next/image";
import LinkAnimation from "./linkAnimation";

export const links = [
  { label: "Home", link: "/" },
  { label: "About", link: "about" },
  { label: "Classes", link: "classes" },
  { label: "Resources", link: "resources" },
  { label: "Gallery", link: "gallery" },
  { label: "Contact", link: "contact" },
];

const NavigationBar = () => {
  return (
    //  <NavigationMenu className="animate-navbar overflow-hidden">
    <NavigationMenu>
      <Container className="flex flex-row md:flex-col w-full items-center justify-between md:justify-center p-5 md:space-y-7">
        <Link href="/" className="animate-stationary-logo">
          {/* <Link href="/"> */}
          <Image
            width={128}
            height={128}
            src="/logo.png"
            className="w-16 md:w-32"
            alt="logo"
          />
        </Link>
        <MobileMenu />
        <div className="md:w-4/5 lg:w-3/5 hidden md:block animate-navbar overflow-hidden">
          <NavigationMenuList>
            {links.map((link, i) => (
              <NavigationMenuItem
                key={`${link.label}_${i}`}
                className="relative"
              >
                <Link href={link.link} className="relative">
                  <LinkAnimation>{link.label}</LinkAnimation>
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
