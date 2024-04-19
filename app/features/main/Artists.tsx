import { artistsData } from '../../../public/data'
import { imageHover } from '../../utils/commonStyles'

import SubHeading from '@/app/ui/SubHeading'
import Image from 'next/image'
import React from 'react'

export default function Artists() {
  return (
    <div>
      <SubHeading>Изпълнители</SubHeading>
      <div className='grid gap-4 grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-3  lg:grid-cols-4'>
        {artistsData.map((artist, i) => (
          <div className={`flex flex-col justify-center items-center ${imageHover}`} key={i}>
            <Image
              className='w-full h-full'
              src={artist.image}
              alt={artist.name}
            />
            <h6>{artist.name}</h6>
          </div>
        ))}
      </div>
    </div>
  )
}
