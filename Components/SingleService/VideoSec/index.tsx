import React from "react";
import { CgPlayButton } from "react-icons/cg";
import Link from "next/link";

const VideoSec = () => {
  return (
    <div className="container mx-auto">
      <div className="">
        <img src="./images/single1.svg" alt="home interior" />
        <div>
          <Link href="/">
            <CgPlayButton />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoSec;
