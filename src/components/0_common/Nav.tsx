import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../images/logo.png";
import NavItem from "./NavItem";
import { signIn, signOut, useSession } from "next-auth/react";

import { CgMenuRight } from "react-icons/cg";

function Navbar() {
  const { data: session } = useSession();

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
        className="fixed top-4 right-4 z-50 inline-block h-8 w-8 sm:hidden"
      >
        <CgMenuRight className="h-8 w-8" />
      </button>
      <nav
        id="primary-navigation"
        className={`${
          navActive ? "activeNav" : ""
        } fixed top-0 right-0 z-40 h-screen w-screen items-center justify-between bg-black bg-opacity-70 px-4 backdrop-blur-sm sm:left-0 sm:h-auto `}
      >
        <div className="hidden sm:inline">
          <Link href={"/"}>
            <a onClick={() => setActiveIndex(0)}>
              <Image src={logo} width={222} height={40} alt="" />
            </a>
          </Link>
        </div>

        <ul
          className="flex w-full flex-col items-center justify-center sm:w-auto sm:flex-row"
          data-visible="false"
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

          {session ? (
            <div>
              <Link href="/profile">
                <a className="navItem">Downloads</a>
              </Link>
              <button onClick={() => signOut()} className="navItem">
                logout
              </button>
            </div>
          ) : (
            <div>
              <button className="navItem" onClick={() => signIn()}>
                Login
              </button>
            </div>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
