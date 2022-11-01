import Link from "next/link";
import React from "react";

interface NavItemInt {
  name: string;
  link: string;
  active: boolean;
}

const NavItem = ({ name, link, active }: NavItemInt) => {
  return (
    <Link href={link}>
      <a className={`navItem ${active ? "active" : ""}`}>{name}</a>
    </Link>
  );
};

export default NavItem;
