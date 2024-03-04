"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "../Logo";
import classNames from "classnames";

const links = [
  { id: 1, to: "/", title: "Home" },
  { id: 2, to: "/about", title: "About" },
  { id: 3, to: "/services", title: "Services" },
  { id: 4, to: "/projects", title: "Project" },
  { id: 5, to: "/blog", title: "Blog" },
  { id: 6, to: "/contact", title: "Contact" },
];

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="container mx-auto w-[88vw]">
      <div className="max-w-7xl px-2 md:px-4 lg:px-6 md:h-[140px] flex md:items-center md:justify-between">
        <div className="hidden md:block">
          <Logo />
        </div>
        <nav
          className={`w-full md:w-fit  h-full md:h-fit md:block pt-20 md:pt-0 absolute md:static left-0 bg-main-3 md:bg-white flex flex-col items-center gap-10 duration-300 ${showMenu ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
          {links.map(({ id, to, title }) => {
            return (
              <Link
              onClick={() => setShowMenu(false)}
                className=" md:ms-5 lg:ms-12 inline-block font-[other] text-xl md:text-lg text-main-1 hover:text-main-2 md:text-main-2 md:hover:text-main-1 ease-in-out duration-300 cursor-pointer "
                href={to}
                key={id}>
                {title}
              </Link>
            );
          })}
        </nav>
        <div className="block  md:hidden lg:hidden">
          <div
            className={classNames({
              "hamburger-lines": true,
              "active-hamburger": showMenu,
            })}
            onClick={() => setShowMenu((prevState) => !prevState)}>
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
