import React from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const media = [
  {
    id: 1,
    icon: <FaFacebookF />,
    to: "https://www.facebook.com/",
  },
  {
    id: 2,
    icon: <FaXTwitter />,
    to: "https://twitter.com/",
  },
  {
    id: 3,
    icon: <FaLinkedinIn />,
    to: "https://www.linkedin.com/",
  },
  {
    id: 4,
    icon: <FaInstagram />,
    to: "https://www.instagram.com/",
  },
];

const MediaIcons = () => {
  return (
    <div className="flex gap-5 ">
      {media.map(({ id, icon, to }) => {
        return (
          <Link
            className="md:size-4 size-3 hover:text-main-1 ease-in-out duration-300  "
            key={id}
            href={to}>
            {icon}
          </Link>
        );
      })}
    </div>
  );
};

export default MediaIcons;
