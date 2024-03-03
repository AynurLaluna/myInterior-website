"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { IRoomNav } from "@/Interface";
import { useDispatch, useSelector } from "react-redux";
import { getAboutData } from "../../../redux/aboutSlice";
import { DispatchProperties, StateProperties } from "@/redux/store";

const ProjectNav = ({ setIndex }: { setIndex: (id: number) => void }) => {
  const dispatch = useDispatch<DispatchProperties>();

  const data = useSelector((state: StateProperties) => state.about.data);

  useEffect(() => {
    dispatch(getAboutData());
  }, [dispatch]);
  console.log(data);
  return (
    <div className="w-[650px] mx-auto my-20">
      <nav className=" flex justify-center items-center border-main-1 border-[1px] rounded-2xl gap-none">
        {!!data &&
          !!data.length &&
          data.map(({ id, link, to }: IRoomNav) => (
            <div
              onClick={() => setIndex(id)}
              className=" flex justify-center items-center h-12 px-10 bg-[#fff] hover:bg-main-1 text-main-2 text-center rounded-[10px] font-[other] text-md font-semibold tracking-wide "
              key={id}>
              <Link href={to}>{link}</Link>
            </div>
          ))}
      </nav>
    </div>
  );
};

export default ProjectNav;
