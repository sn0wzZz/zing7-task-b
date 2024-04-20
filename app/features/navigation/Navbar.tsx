'use client'
import React, { useState } from 'react'
import Logo from '../../../public/brand.png'
import Image from 'next/image'
import useWindowDimensions from '../../utils/useWindowDimensions'

const navLinks = ['Почивки и екскурзии', 'Хотели', 'Блог', 'За нас', 'Контакти']

export default function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [isHoverinLinks, setIsHoverinLinks] = useState(false)
  const [isLinksOpen, setIsLinksOpen] = useState(false)

  const {width} = useWindowDimensions()
  console.log(width,)

  
  const isScreenBig = width && width > 768


  const handleMenu = () => {
    setMenuIsOpen((cur) => !cur)
  }

  const handleHoverLinks = ()=>{
    setIsHoverinLinks((cur) => !cur)
  }


  return (
    <nav className='w-full flex items-center justify-between sticky top-0 lg:justify-around pr-10 md:pr-0 z-50 bg-white '>
      <div className='flex  items-baseline'>
        <button onClick={handleMenu} className='block p-3 focus:outline-none'>
          {/* Menu Icon */}
          {menuIsOpen ? (
            <svg
              className='w-12 h-12 text-paragraph'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              className='w-12 h-12 text-paragraph'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          )}
        </button>
        {/* Logo */}

        <Image src={Logo} alt='logo' />
      </div>

      {/* Navigation */}

      <button className='md:hidden z-40' onMouseEnter={handleHoverLinks}>
        <svg
          className='w-12 h-12 text-paragraph'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </button>
      {isHoverinLinks || isScreenBig ? (
        <ul
          onMouseLeave={handleHoverLinks}
          className={`
      absolute right-0 top-0 bg-red-50 pt-16 rounded-bl-lg 
      md:flex md:top-none md:right-none md:bg-white md:relative md:pt-0
    `}
        >
          {navLinks.map((link, i) => (
            <li
              key={i}
              className='font-bold m-2 hover:bg-red-100 hover:cursor-pointer p-2 rounded-lg 
              transition-all duration-300 ease-linear'
            >
              {link}
            </li>
          ))}
        </ul>
      ) : null}
    </nav>
  )
}
