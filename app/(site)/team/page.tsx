import Banner2 from '@/Components/Banner2'
import Team from '@/Components/Team'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className='teamBanner'>
        <Banner2 header="Our Professional" title="Home / Team" />
      </div>
      <Team />
    </div>
  );
}

export default page