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

  const { width } = useWindowDimensions()
  console.log(width)

  const isScreenBig = width && width > 768

  const handleMenu = () => {
    setMenuIsOpen((cur) => !cur)
  }

  const handleHoverLinks = () => {
    setIsHoverinLinks((cur) => !cur)
  }

  return (
    <nav className={`w-full flex items-center justify-between sticky top-0 lg:justify-around pr-10 md:pr-0 z-50 bg-white ${!menuIsOpen ? 'overflow-hidden' : ''}`}>
  <div className='flex items-baseline px-2 pb-3'>
    {/* Logo */}
    <Image src={Logo} alt='logo' />
  </div>

  {/* Navigation */}
  <button className='md:hidden z-40' onClick={handleMenu}>
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
  <ul
  className={`absolute top-0 ${
    menuIsOpen ? 'right-0' : '-right-full'
  } h-[100vh] w-[60vw] transition-all duration-200 ease-linear shadow-2xl bg-red-50 pt-16 rounded-l-2xl
    md:flex md:top-none md:right-none md:h-auto md:w-auto md:right-0 md:shadow-none md:bg-white md:relative md:pt-0`}
>

    {navLinks.map((link, i) => (
      <li
        key={i}
        className='font-bold m-2 hover:bg-red-100 hover:cursor-pointer p-2 rounded-lg transition-all duration-300 ease-linear'
      >
        {link}
      </li>
    ))}
  </ul>
</nav>

  )
}
