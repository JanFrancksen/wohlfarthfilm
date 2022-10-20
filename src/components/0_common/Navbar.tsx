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
      name: "Start",
      link: "/",
    },
    {
      name: "Referenzen",
      link: "/referenzen",
    },
    {
      name: "Leistungen",
      link: "/leistungen",
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
    <>
      <button
        onClick={() => setNavActive(!navActive)}
        className="absolute top-4 right-4 z-50 block aspect-square w-8 sm:hidden"
        aria-conrols="primary-navigation"
        aria-expanded="false"
      >
        <CgMenuRight className="h-8 w-8" />
        <span className="sr-only">Menu</span>
      </button>
      <nav
        className={`${
          navActive ? "activeNav" : ""
        }fixed top-0 right-0 z-40 h-screen w-4/5 items-center justify-between bg-wf-black bg-opacity-70 px-4 font-serif text-wf-white backdrop-blur-sm sm:left-0 sm:h-auto sm:w-full sm:flex-row`}
      >
        <div className="hidden sm:inline">
          <Link href={"/"}>
            <a onClick={() => setActiveIndex(0)}>
              <Image src={logo} width={222} height={40} alt="" />
            </a>
          </Link>
        </div>

        <ul
          data-visible="false"
          id="primary-navigation"
          className={`${
            navActive ? "activeNav " : ""
          }flex-col flex sm:flex-row`}
        >
          {navItems.map((item, index) => {
            return (
              <>
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
      </nav>
    </>
  );
}

export default Navbar;
