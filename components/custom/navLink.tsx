"use client";
import React from "react";
import { NavigationMenuItem } from "@/components/ui/navigation-menu";
import LinkAnimation from "./linkAnimation";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  link: {
    label: string;
    href: string;
  };
};

const NavLink = (props: Props) => {
  const pathname = usePathname();
  return (
    <NavigationMenuItem className="relative">
      <Link href={props.link.href} className="relative">
        <LinkAnimation underline={pathname === props.link.href}>
          {props.link.label}
        </LinkAnimation>
      </Link>
    </NavigationMenuItem>
  );
};

export default NavLink;
