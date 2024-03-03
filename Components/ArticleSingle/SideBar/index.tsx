import React from "react";
import TagButton from "../TagButton";

const tags = [
  { id: 1, title: "Kitchen" },
  { id: 2, title: "Bedroom" },
  { id: 3, title: "Building" },
  { id: 4, title: "Architecture" },
  { id: 5, title: "Kitchen Planning" },
  { id: 6, title: "Bathroom" },
];

const categories = [
  { id: 1, li: "Decoration" },
  { id: 2, li: "Door Windows" },
  { id: 3, li: "Home Land" },
  { id: 1, li: "Roof Installation" },
];

const latestNews = [
  { id: 1, title: "We Focus On Comfort And Gorgeous", date: "06/02/2022" },
  { id: 2, title: "We Focus On Comfort And Gorgeous", date: "06/02/2022" },
  { id: 3, title: "We Focus On Comfort And Gorgeous", date: "06/02/2022" },
];

const SideBar = () => {
  return (
    <div className="space-y-5 w-[22vw] h-full ">
      <div>
        <input
          type="search"
          placeholder="Search"
          className="lg:w-full md:w-full sm:w-full w-full  lg:p-5 md:p-4 sm:p-3 p-2 bg-main-3 placeholder-main-1 lg:text-base md:text-base sm:text-sm text-sm rounded-xl"
        />
      </div>
      <div>
        <h4 className="font-main-2 font-semibold ">Latest News</h4>
        <div className="divide-y divide-main-1">
          {latestNews.map(({ id, title, date }) => {
            return (
              <div>
                <p
                  key={id}
                  className="py-1 md:py-2 text-sm lg:text-base font-semibold ">
                  {title}
                </p>
                <span className="block text-xs text-main-4 text-end font-[other]">
                  {date}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lg:my-5 md:my-4 my-3 bg-main-3 rounded-xl p-5 lg:space-y-4 md:space-y-4 sm:space-y-3 max-sm:space-y-2  ">
        <h4>Categories</h4>
        <div className=" lg:space-y-4 md:space-y-3 sm:space-y-2 max-sm:space-y-2 divide-y divide-main-1 ">
          {categories.map(({ id, li }) => {
            return (
              <p
                key={id}
                className="lg:pt-4 md:pt-4 sm-pt-3 max-sm:pt-2 font-[other] lg:text-lg md:text-lg sm:text-base max-sm:text-sm text-main-4">
                {li}
              </p>
            );
          })}
        </div>
      </div>
      <div>
        <p className="lg:text-lg md:text-base sm:text-base text-base font-semibold">
          Tags
        </p>
        {tags.map(({ id, title }) => {
          return <TagButton title={title} key={id} />;
        })}
      </div>
    </div>
  );
};

export default SideBar;
