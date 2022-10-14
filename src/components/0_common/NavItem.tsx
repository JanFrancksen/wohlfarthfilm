import Link from "next/link";
import React from "react";

const NavItem = ({ name, link, active }: any) => {
  return (
    <Link href={link}>
      <a className={`navItem ${active ? "active" : ""}`}>{name}</a>
    </Link>
  );
};

export default NavItem;
