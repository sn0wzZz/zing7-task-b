// Hotels.tsx
'use client'
import Heading from '@/app/ui/Heading'
import SubHeading from '@/app/ui/SubHeading'
import React from 'react'
import { hotelsData } from '@/public/data'
import HotelCarousel from './HotelCarousel'

export default function Hotels() {
  return (
    <div>
      <SubHeading>Хотели</SubHeading>
      <div className='flex flex-col'>
        {hotelsData.map((hotel, i) => (
          <HotelCarousel key={i} hotel={hotel} />
        ))}
      </div>
    </div>
  )
}
