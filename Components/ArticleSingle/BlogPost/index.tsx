import React from "react";
import SideBar from "../SideBar";
import Image from "next/image";
import MediaIcons from "@/Components/MediaIcons";
import TagButton from "@/Components/ArticleSingle/TagButton";

const BlogPost = () => {
  return (
    <>
      <div className="postBanner w-full h-64"></div>
      <div className="container flex  mx-auto w-[88vw] lg:mt-20 md:mt-16 sm:mt-12 mt-10 lg:space-x-12 md:space-x-10 space-x-5">
        <section className="w-[64vw]">
          <div className="lg:space-y-7 md:space-y-7 space-y-5">
            <h3 className="lg:w-96 font-[display] font-bold lg:text-4xl md:text-2xl text-xl text-left lg:leading-10 md:leading-8 md:tracking-wider tracking-wide">
              Let’s Get Solution for Building Construction Work
            </h3>
            <div className="">
              <Image
                className="w-full"
                src="./images/articleSingle1.svg"
                alt="kitchen interior"
                width={100}
                height={100}
              />
              <div className="flex lg:pt-7 md:pt-5 pt-4 justify-between items-center font-[other] lg:text-lg md:text-base text-xs text-main-4">
                <p>26 December, 2022</p>
                <p>Interior / Design / Home / Decor</p>
              </div>
            </div>

            <p className="lg:text-lg sm:text-base md:text-base max-sm:text-base text-main-2 font-[other]">
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
              turpmaximus posuere in. Contrary to popular belief.There are many
              variations of passages of Lorem Ipsum available, but the majority
              have suffered alteration in some form, by inject humour, or
              randomised words which don't look even slightly believable.
            </p>
            <p className="lg:text-lg sm:text-base md:text-base max-sm:text-base text-main-2 font-[other]">
              Embarrassing hidden in the middle of text. All the Lorem Ipsum
              generators on the Internet tend to repeat predefined chunks as
              necessary.
            </p>
            <div>
              <Image
                className="w-full"
                src="./images/Quotes.svg"
                alt="quote"
                width={100}
                height={100}
              />
            </div>
            <h3 className="font-bold lg:text-3xl md:text-2xl sm:text-xl max-sm:text-xl text-left leading-10 tracking-wider">
              Design sprints are great
            </h3>
            <p className="lg:text-lg sm:text-base md:text-base max-sm:text-base text-main-2 font-[other]">
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
              turpmaximus.posuere in.Contrary to popular belief.There are many
              variations of passages of Lorem Ipsum available, but the majority
              have suffered.
            </p>
            <ol className="list-decimal space-y-4 md:space-y-5 lg:space-y-6">
              <li className="lg:text-lg sm:text-base md:text-base max-sm:text-base text-main-2 font-[other]">
                Contrary to popular belief.There are many variations of passages
                of Lorem Ipsum available, but the majority have suffered.
              </li>
              <li className="lg:text-lg sm:text-base md:text-base max-sm:text-base text-main-2 font-[other]">
                Contrary to popular belief.There are many variations of passages
                of Lorem Ipsum available, but the majority have suffered.
              </li>
              <li className="lg:text-lg sm:text-base md:text-base max-sm:text-base text-main-2 font-[other]">
                Contrary to popular belief.There are many variations of passages
                of Lorem Ipsum available, but the majority have suffered.
              </li>
            </ol>
            <div>
              <Image
                className="w-full"
                src="./images/articleSingle2.svg"
                alt="kitchen interior"
                width={100}
                height={100}
              />
            </div>
            <p className="lg:text-lg sm:text-base md:text-base max-sm:text-base text-main-2 font-[other]">
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
              turpmaximus.posuere in.Contrary to popular belief.There are many
              variations of passages of Lorem Ipsum available, but the majority
              have suffered.
            </p>
            <div className="flex md:flex-row md:justify-between md:items-center sm:flex-col  max-sm:flex-col">
              <div className="flex items-center lg:gap-x-5 md:gap-x-4 sm:gap-x-3 max-sm:gap-x-2">
                <span className="lg:text-lg md:text-base sm:text-base max-sm:text-sm font-semibold">
                  Tags
                </span>
                <TagButton title="Kitchen" />
                <TagButton title="Bedroom" />
              </div>
              <div className="mt-5 md:mt-0">
                <MediaIcons />
              </div>
            </div>
          </div>

          <div></div>
        </section>
        <SideBar />
      </div>
    </>
  );
};

export default BlogPost;
