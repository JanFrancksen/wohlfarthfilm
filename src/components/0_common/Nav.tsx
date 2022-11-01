import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "../../images/logo.png";
import NavItem from "./NavItem";
import { CgMenuRight } from "react-icons/cg";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  const [navActive, setNavActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  /*if (router.asPath === "/") {
    useEffect(() => {
      setActiveIndex(0);
    }, []);
  }

  if (router.asPath === "/referenzen") {
    useEffect(() => {
      setActiveIndex(1);
    }, []);
  }

  if (router.asPath === "/leistungen") {
    useEffect(() => {
      setActiveIndex(2);
    }, []);
  }

  if (router.asPath === "/leistungen") {
    useEffect(() => {
      setActiveIndex(3);
    }, []);
  }

  if (router.asPath === "/unternehmen") {
    useEffect(() => {
      setActiveIndex(4);
    }, []);
  }*/

  return (
    <>
      <button
        onClick={() => setNavActive(!navActive)}
        className="fixed top-4 right-4 z-50 inline-block h-8 w-8 md:hidden"
      >
        <CgMenuRight className="h-8 w-8" />
      </button>
      <nav
        id="primary-navigation"
        className={`${
          navActive ? "activeNav" : ""
        } fixed top-0 right-0 z-40 h-screen w-screen items-center justify-between bg-black bg-opacity-70 px-4 backdrop-blur-sm md:left-0 md:h-auto `}
      >
        <div className="hidden md:inline">
          <Link href={"/"}>
            <a onClick={() => setActiveIndex(0)}>
              <Image src={logo} width={222} height={40} alt="" />
            </a>
          </Link>
        </div>

        <ul
          className="flex w-full flex-col items-center justify-center md:w-auto md:flex-row"
          data-visible="false"
        >
          <li
            onClick={() => {
              setActiveIndex(0);
              setNavActive(false);
            }}
          >
            <NavItem active={activeIndex === 0} name="Start" link="/" />
          </li>
          <li className="expandMenu relative">
            <NavItem
              active={activeIndex === 1}
              name="Referenzen"
              link="/referenzen"
            />
            <ul className="sm:absolute sm:bottom-0 sm:left-1/2 sm:-translate-x-1/2 sm:translate-y-full sm:bg-black sm:bg-opacity-70 sm:px-8">
              <li>
                <NavItem
                  active={activeIndex === 1}
                  name="Filme"
                  link="/referenzen/filme"
                />
              </li>
              <li>
                <NavItem
                  active={activeIndex === 1}
                  name="Fotos"
                  link="/referenzen/fotos"
                />
              </li>
            </ul>
          </li>
          <li className="expandMenu relative">
            <NavItem active={activeIndex === 2} name="Leistungen" link="/" />
            <ul className="sm:absolute sm:bottom-0 sm:left-1/2 sm:-translate-x-1/2 sm:translate-y-full sm:bg-black sm:bg-opacity-70 sm:px-8">
              <li>
                <NavItem
                  active={activeIndex === 2}
                  name="Filme"
                  link="/leistungen/filme"
                />
              </li>
              <li>
                <NavItem
                  active={activeIndex === 2}
                  name="Fotos"
                  link="/leistungen/fotos"
                />
              </li>
            </ul>
          </li>
          <li className="expandMenu relative">
            <NavItem active={activeIndex === 3} name="Unternehmen" link="/" />
            <ul className="sm:absolute sm:bottom-0 sm:left-1/2 sm:-translate-x-1/2 sm:translate-y-full sm:bg-black sm:bg-opacity-70 sm:px-8">
              <li className="group-hover:bg-red-400">
                <NavItem active={activeIndex === 3} name="Über uns" link="/" />
              </li>
              <li>
                <NavItem active={activeIndex === 3} name="Kontakt" link="/" />
              </li>
              <li>
                <NavItem active={activeIndex === 3} name="Jobs" link="/" />
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
