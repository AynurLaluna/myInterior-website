import React from "react";
import axios from "axios";
import { IList } from "@/Interface";

const url = "http://localhost:3001/bedrooms_info_card";
const InfoSec = async () => {
  const { data } = await axios.get(url);
  return (
    <>
      <div className="bedroomBanner w-full h-64"></div>
      <section className="container mx-auto w-[88vw] my-20 md:my-32 space-x-20 ">
        <div className="grid md:items-center md:grid-cols-2 gap-y-7 ">
          <div className="w-80 md:w-10/12 bg-main-3 rounded-3xl p-5 md:p-10 h-fit ">
            {data.map(({ id, title, listItem }: IList) => {
              return (
                <div className=" py-1 space-x-20 flex items-center ">
                  <div className="w-16 md:space-x-10 text-base md:text-lg font-[display] text-main-2 font-semibold">
                    {title}
                  </div>
                  <div className=" text-sm md:text-base lg:text-lg font-[other] text-main-4">
                    {listItem}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-10 md:pt-0">
            <h3 className="text-3xl md:text-4xl text-main-2 font-[display] font-bold md:leading-10">
              Minimal Look Bedrooms
            </h3>
            <p className="py-5 text-base md:text-lg font-[other] text-main-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin
              tellumassa, vbel maximus purus posuere in. Dojrices gravida
              dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut
              dolor odio. Aenean in the ipsum vel lectus bibendum commodo.
            </p>
            <p className="text-base md:text-lg font-[other] text-main-2">
              In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet
              tellus lectus. Vivamus ipsum nunc, mattis quis nibh id,
              pellentesque arcu. Donec a pellentesque Cras erat enim, gravida
              non ante vitae,elequis convallis elit, in viverra felis. Donec
              ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id
              purus porttitor.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoSec;
