import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../images/logo.png";
import NavItem from "./NavItem";
import NavUser from "./Navuser";
import { CgMenuRight } from "react-icons/cg";

function Navbar() {
  const navItems = [
    {
      name: "Startseite",
      link: "/",
    },
    {
      name: "Referenzen",
      link: "/referenzen",
    },
    {
      name: "Making of",
      link: "/making-of",
    },
    {
      name: "Über uns",
      link: "/ueber-uns",
    },
    {
      name: "Kontakt",
      link: "/kontakt",
    },
    {
      name: "Jobs",
      link: "/jobs",
    },
  ];

  const [navActive, setNavActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <nav className="fixed top-0 right-0 z-50 flex h-screen w-4/5 items-center justify-between bg-wf-black bg-opacity-70 px-4 font-serif text-wf-white backdrop-blur-sm sm:left-0 sm:h-auto sm:w-full sm:flex-row">
      <div className="hidden sm:inline">
        <Link href={"/"}>
          <a onClick={() => setActiveIndex(0)}>
            <Image src={logo} width={222} height={40} alt="" />
          </a>
        </Link>
      </div>

      <button
        onClick={() => setNavActive(!navActive)}
        className="absolute top-2 right-2 z-50 block aspect-square w-8  sm:hidden"
        aria-conrols="primary-navigation"
        aria-expanded="false"
      >
        <CgMenuRight />
        <span className="sr-only">Menu</span>
      </button>
      <ul
        data-visible="false"
        id="primary-navigation"
        className={`${navActive ? "activeNav " : ""}flex-col flex sm:flex-row`}
      >
        {navItems.map((item, index) => {
          return (
            <>
              {" "}
              <li
                key={item.name}
                onClick={() => {
                  setActiveIndex(index);
                  setNavActive(false);
                }}
              >
                <NavItem active={activeIndex === index} {...item} />
              </li>
            </>
          );
        })}
      </ul>

      <NavUser />
    </nav>
  );
}

export default Navbar;
