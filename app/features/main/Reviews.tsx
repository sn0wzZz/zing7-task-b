import SubHeading from '@/app/ui/SubHeading'
import { reviewsData } from '@/public/data'
import Image from 'next/image'
import React from 'react'
import DefaultAvatar from '../../../public/default-avatar.jpg'

export default function Reviews() {
  return (
    <div>
      <h2 className='font-bold mb-10'>Отзиви от клиенти</h2>

      <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-x-5 gap-y-10'>
        {reviewsData.map(({ name, message, avatar, position }, i) => (
          <div className='flex flex-col gap-1' key={i}>
            <div className='flex flex-col flex-grow '>
              <p className='bg-tableHead rounded-2xl p-5 flex-grow'>{message}</p>
              <div className='w-0 h-0 mx-6 border-tableHead -z-10 -translate-y-4 border-b-[30px] border-r-[30px] rotate-45'></div>
            </div>
            <div className='flex items-center gap-3 '>
              <Image
                className='w-30 h-30 rounded-full'
                src={avatar ? avatar : DefaultAvatar}
                alt={name}
                width={60}
              />
              <div>
                <h5>{name}</h5>
                <h6 className='text-textSecondary'>{position}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
