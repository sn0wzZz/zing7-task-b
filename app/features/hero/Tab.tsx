import React from 'react'
import { capitalizeFirstLetter } from '../../utils/helpers'
import { BsAirplaneEnginesFill } from 'react-icons/bs'
import { BsFillBusFrontFill } from 'react-icons/bs'
import { IoBoat } from 'react-icons/io5'
import { TbBedFilled } from 'react-icons/tb'
import { MdLocationOn } from 'react-icons/md'
import { FaCalendar } from 'react-icons/fa'

export default function Tab({ tab }: any) {
  return (
    <div
      className='bg-primary-100 py-3 px-8 flex flex-col gap-2 justify-center items-center 
    hover:bg-primary-200 hover:cursor-pointer
    transition-all duration-300 ease-linear '
    >
      {tab.text === 'самолет' && (
        <BsAirplaneEnginesFill className='rotate-90' size={30} />
      )}
      {tab.text === 'автобус' && <BsFillBusFrontFill size={30} />}
      {tab.text === 'круиз' && <IoBoat />}
      {tab.text.includes('нощувки') && <TbBedFilled size={30} />}
      {tab.text.includes('-') && <FaCalendar size={30} />}
      {tab.text !== 'круиз' &&
        tab.text !== 'автобус' &&
        tab.text !== 'самолет' &&
        !tab.text.includes('нощувки') &&
        !tab.text.includes('-') && <MdLocationOn size={30} />}
      <h6>{capitalizeFirstLetter(tab.text)}</h6>
    </div>
  )
}
