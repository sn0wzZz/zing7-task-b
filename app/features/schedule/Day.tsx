import React from 'react'
import { IoTodayOutline } from 'react-icons/io5'

export default function Day({ day: { date, title, description } }: any) {
  return (
    <div className='max-w-[500px]'>
      <div className='flex gap-2 '>
        <IoTodayOutline size={60} className='text-primary-100' />
        <div>
          <h6 className='text-textSecondary font-bold'>{date}</h6>
          <h3 className='text-heading'>{title}</h3>
        </div>
      </div>
      <p className='text-text border-l-2 pl-10 ml-7 py-8'>{description}</p>
    </div>
  )
}
