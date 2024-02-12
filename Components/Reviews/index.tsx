import React from 'react'
import { IReview } from '@/Interface';
import Button from '../Button';
function Reviews() {
    const review: IReview[] = [
        {id: 0, header: "Project Plan", text: "There are many variations of the passages of lorem Ipsum from available, majority." },
        {id: 1, header: "Interior Work", text: "There are many variations of the passages of lorem Ipsum from available, majority."},
        {id: 2, header: "Realization", text: "There are many variations of the passages of lorem Ipsum from available, majority." }
    ]

  return (
    <div className='container m-auto' >
        <div className='py-20 flex flex-column justify-center '>
            {review.map(({id,header, text}) => {
                return (
                    <div className='w-3/12 px-12 items-center text-center text-primary2 ' key={id}>
                        <h4 className='py-4 font-semibold text-[1.5rem] text-center'>{header}</h4>
                        <p className='text-center font-normal text-base text-primary'>{text}</p>
                        <div className='mt-8 flex flex-column justify-center items-center text-sm text-primary4 font-semibold leading-5 cursor-pointer '>
                          <Button title="Read More" to="/"/>
                          <img className='w-4 h-3 ms-2' src="./icons/Vector.png" alt="vector icon" />
                        </div>
                    </div>
                );
                })}
        </div>

    </div>
  )
}

export default Reviews;