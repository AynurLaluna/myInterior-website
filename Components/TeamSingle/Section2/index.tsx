import React from 'react';
import TeamOf4s from '@/Components/TeamOf4s';

const Section2 = () => {
  return (
    <div>
      <div className=" m-auto bg-main-3 my-20 md:my-32 py-20">
        <div className="flex flex-col items-center">
          <h2 className="pb-2 md:pb-4 text-3xl md:text-4xl lg:text-4xl font-bold font-[display] text-main-2 leading-10 tracking-wide">
            Our Team Members
          </h2>
          <TeamOf4s />
        </div>
      </div>
    </div>
  );
}

export default Section2;