import SubHeading from '@/app/ui/SubHeading'
import Image from 'next/image'
import React from 'react'
import Poster from '../../../public/poster.png'
import View from '../../../public/view.png'

export default function Gallery() {
  const mutualStyle='hover:scale-105 hover:shadow-2xl hover:cursor-pointer transition-all duration-200 ease-linear '
  return (
    <div className='py-11'>
      <SubHeading>Галерия</SubHeading>

      <div className={`grid grid-cols-2 sm:grid-cols-9 sm:grid-rows-2 gap-2`}>
        <div
          className={`col-start-1 col-end-3 sm:row-start-1 sm:col-start-1 sm:col-end-6 image-container ${mutualStyle}`}
        >
          <Image className='w-full h-full' src={View} alt='image' />
        </div>
        <div
          className={`col-start-1 col-end-2 sm:row-start-1 sm:col-start-6 sm:col-end-8 image-container ${mutualStyle}`}
        >
          <Image className='w-full h-full' src={Poster} alt='image' />
        </div>
        <div
          className={`col-start-2 col-end-3 sm:row-start-1 sm:col-start-8 sm:col-end-10 image-container ${mutualStyle}`}
        >
          <Image className='w-full h-full' src={Poster} alt='image' />
        </div>
        <div
          className={`col-start-1 col-end-2 sm:row-start-2 sm:col-start-1 sm:col-end-3 image-container ${mutualStyle}`}
        >
          <Image className='w-full h-full' src={Poster} alt='image' />
        </div>
        <div
          className={`col-start-2 col-end-3 sm:row-start-2 sm:col-start-3 sm:col-end-5 image-container ${mutualStyle}`}
        >
          <Image className='w-full h-full' src={Poster} alt='image' />
        </div>
        <div
          className={`col-start-1 col-end-3 sm:row-start-2 sm:col-start-5 sm:col-end-10 image-container ${mutualStyle}`}
        >
          <Image className='w-full h-full' src={View} alt='image' />
        </div>
      </div>
    </div>
  )
}
