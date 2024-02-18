import React from "react";
import axios from "axios";
import { IBrands } from "@/Interface";

const url = "http://localhost:3001/brands";
const BrandLogo = async () => {
  const { data } = await axios.get(url);
  return (
    <div className="container mx-auto">
      {data.map(({ id, iconUrl }: IBrands) => {
        <div>
          <div>
            <img
              className="w-8 h-8 border-2 "
              key={id}
              src={iconUrl}
              alt="brand logo"
            />
          </div>
        </div>;
      })}
    </div>
  );
};
export default BrandLogo;
