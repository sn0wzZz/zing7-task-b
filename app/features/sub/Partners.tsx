import Heading from '@/app/ui/Heading'
import { logosData } from '@/public/data'
import Image from 'next/image'
import React from 'react'

export default function Partners() {
  return (
    <div className='col-start-1 col-end-13  xs:col-end-13 lg:col-start-3 lg:col-end-11  flex flex-col gap-4 '>
      <Heading quickFix=''>Партньори</Heading>
      <p>
        Our customers accomplish amazing things every day. They work to find
        <br />
        cures to cancer, travel to space.
      </p>
      <div className='grid grid-cols-2  xs:grid-cols-3 sm:grid-cols-4 tablet:grid-cols-5 gap-10 mt-10 justify-center'>
        {logosData.map((logo, i) => (
          <div key={i} className=' flex justify-center items-center'>
            <Image src={logo} alt='logo' />
          </div>
        ))}
      </div>
    </div>
  )
}
