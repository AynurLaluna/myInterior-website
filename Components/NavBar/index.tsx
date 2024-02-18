"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoSearchOutline } from "react-icons/io5";
import Logo from "../Logo";

const links = [
  { id: 1, to: "/", title: "Home" },
  { id: 2, to: "/pages", title: "Pages" },
  { id: 3, to: "/services", title: "Services" },
  { id: 4, to: "/project", title: "Project" },
  { id: 5, to: "/blog", title: "Blog" },
  { id: 6, to: "/contact", title: "Contact" },
];

function NavBar() {
  return (
    <div className="container m-auto ">
      <div className=" h-[150px] flex items-center justify-between">
        <Logo />

        <nav className="cursor-pointer ">
          <div>
            {links.map(({ id, to, title }) => {
              return (
                <Link
                  className=" ms-14 inline-block text-lg leading-5 text-primary2"
                  href={to}
                  key={id}>
                  {title}
                </Link>
              );
            })}
            <IoSearchOutline className="inline-block ms-14 w-5 h-5 text-[#141414]" />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
