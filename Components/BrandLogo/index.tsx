import React from "react";
import axios from "axios";
import { IBrands } from "@/Interface";
import Image from "next/image";

const url = "https://interno-db.vercel.app/brands";
const BrandLogo = async () => {
  const { data } = await axios.get(url);
  return (
    <div className="container mx-auto w-[88vw] ">
      {data.map(({ id, iconUrl }: IBrands) => {
        <div>
          <div className="" key={id}>
            <Image
              className="size-fit"
              src={iconUrl}
              alt="brand logo"
              width={100}
              height={100}
            />
          </div>
        </div>;
      })}
    </div>
  );
};
export default BrandLogo;
