import Banner2 from '@/Components/Banner2';
import PricingCards from '@/Components/PricingCards';
import React from 'react'

const page = () => {
  return (
    <div>
      <div className='pricingBanner'>
        <Banner2 header="Pricing & Plan" title="Home / Pricing" />
      </div>
        <PricingCards />
    </div>
  )
}

export default page;