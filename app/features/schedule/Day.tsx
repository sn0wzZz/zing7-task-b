import React from 'react'
import { IoTodayOutline } from 'react-icons/io5'

export default function Day({ day: { date, title, description } }: any) {
  return (
    <div className='max-w-[500px]'>
      <div className='flex gap-2 '>
        <IoTodayOutline size={50} className='text-primary-100' />
        <div className='flex flex-col gap-1'>
          <h6 className='text-textSecondary font-bold'>{date}</h6>
          <h3>{title}</h3>
        </div>
      </div>
      <p className='text-text border-l-2 pl-8 ml-6 py-7 mt-3'>{description}</p>
    </div>
  )
}
