import React from 'react';
import Button from '../Button';

function BannerLg() {
  return (
    <div className='banner'>
        <div className=''>
        <h1 className='text-[85px] font-bold w-[11ch] leading-[106px] text-primary2 '>Let Your Home Be Unique</h1>
        <p className='my-4 text-[1.2rem] font-normal text-left leading-[33px] tracking-wide text-primary4 '>There are many variations of the passages of lorem Ipsum from available,variations of the passages.</p>
        <div className='my-4 p-2 flex item-center justify-center  w-[209px] h-10 text-[#fff] bg-primary2 hover:bg-primary1 ease-in-out duration-300 rounded-[10px] text-center text-[17px] font-semibold  '>
        <Button title="Get Started" to="/"/>
        <img className='w-[15px] h-[13px] my-2 ms-2' src="./icons/Vector.png" alt="vector icon" />
        </div>
        </div>
        
    
    </div>
  )
}

export default BannerLg;