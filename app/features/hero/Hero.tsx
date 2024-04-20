'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Banner from '../../../public/hero.png'

import { formatCurrency, formatDateRange } from '../../utils/helpers'

import Timer from '../hero/Timer'
import Tab from './Tab'

const price = 1149
const { dateRange, nights } = formatDateRange(
  new Date('2024-05-11'),
  new Date('2024-05-15')
)
const targetDate = new Date('2024-05-01T00:00:00')
const calculateTimeLeft = () => {
  const now = new Date()
  const difference = targetDate.getTime() - now.getTime()
  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))

    // Add leading zero if single digit
    const formattedHours = hours < 10 ? '0' + hours : hours
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes

    return { days, hours: formattedHours, minutes: formattedMinutes }
  } else {
    return { days: 0, hours: '00', minutes: '00' }
  }
}


const tabs = [
  {
    icon: '',
    text: `${nights} нощувки`,
  },
  {
    icon: '',
    text: 'самолет',
  },
  {
    icon: '',
    text: 'австрия',
  },
  {
    icon: '',
    text: dateRange,
  },
]

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  return (
    <header
      className={`relative bg-[url('/hero.png')] bg-center bg-cover text-center `}
    >
      <div className='w-full h-full flex  justify-center items-center backdrop-blur-md'>
        <div className='translate-y-16 '>
          {/* Title */}
          <div
            className=' top-8 left-0 right-0  w-full flex flex-col  items-center justify-center text-white
      gap-5 md:gap-7 lg:gap-10'
          >
            <div className='flex flex-col justify-center items-center lg:mt-10 gap-2 sm:gap-4 md:gap-6'>
              <h1 className=' font-bold '>Арабска приказка в Йордания</h1>
              <h5 className=' border-white border-2 px-6 py-2 text-nowrap w-max'>
                {dateRange}
              </h5>
            </div>

            {/* Timer */}
            <Timer timeLeft={timeLeft} />

            {/* Button */}

            <div className='flex flex-col justify-center items-center gap-2'>
              <a
                href='#'
                className='bg-primary-100 hover:bg-primary-200 hover:cursor-pointer  rounded-full font-bold
            text-xl transition-all duration-300 ease-linear
            px-5 py-2  sm:py-3 sm:px-7 md:text-2xl lg:text-3xl xl:text-xl'
              >
                <h5>Резервирайте сега</h5>
              </a>
              <h6 className='max-w text-nowrap'>{`от ${formatCurrency(price)}`}</h6>
              {/* Tabs */}
              <div className='grid grid-cols-2 md:grid-cols-4  gap-2 mt-6'>
                {tabs.map((tab, i) => (
                  <Tab key={i} tab={tab} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
