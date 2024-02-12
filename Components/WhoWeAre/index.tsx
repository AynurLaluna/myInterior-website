import React from 'react';
import Button from '../Button';
import Link from 'next/link';

function WhoWeAre() {
  return (
    <div className='container m-auto px-10'>
        <div className='my-10 flex justify-between items-center'>
        <div className='w-[500px] px-10' >
            <h2 className='text-5xl leading-[62.5px] font-bold text-primary2'>We Create The Art Of Stylish Living Stylishly</h2>
            <p className='text-md font-light text-primary4'>It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layouts the points of using that it has a more-or-less normal.</p>
            <div className='flex justify-center items-start '>
                <Link href="/">
                
                <img src="./icons/Call.png" alt="phone icon" />
                </Link>
                <div className='flex flex-col'>
                    <Link href="/">012345678</Link>
                    <span>Call Us Anytime</span>
                </div>
            
            </div>
            <div>
                <Button title="Get Free Estimate" to="/"/>
                <img src="./icons/Vector.png" alt="vector icon" />
            </div>

        </div>
        <div>
            <img className='rounded-tr-[326px] rounded-bl-[120px]' src="./images/Kitchen.png" alt="kitchen image" />

        </div>
        </div>

    </div>
  )
}

export default WhoWeAre;