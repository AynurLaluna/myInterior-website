import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <div className="w-40 h-fit flex items-center">
          <img className="w-7" src="./icons/Logo.svg" alt="logo" />
          <span className="ms-2 font-[display] text-4xl text-primary2 font-semibold">
            Interno
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
