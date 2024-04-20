'use client'
import Image from 'next/image'
import Navbar from './features/navigation/Navbar'
import Hero from './features/hero/Hero'
import Schedule from './features/schedule/Schedule'
import Main from './features/main/Main'
import Container from './ui/Container'
import Sub from './features/sub/Sub'
import Footer from './features/footer/Footer'
import Newsletter from './features/newsletter/Newsletter'
import { Toaster } from 'react-hot-toast'


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className='grid grid-cols-1 grid-rows-auto md:grid-cols-12'>
        <Main gridProps='col-start-1 row-start-1 md:row-start-1 xl:col-start-1 2xl:col-start-2 col-end-8 md:row-span-auto' />
        <div className='md:col-start-8 md:row-start-1 col-start-1 row-start-3 row-end-2 col-span-12 md:col-span-5'>
          <div className='md:flex-1'>
            <Schedule />
          </div>
        </div>
        <Sub gridProps='col-start-1 col-end-13 row-start-3 row-end-4 ' />
        <Newsletter gridProps='row-start-4 col-start-1 col-end-13' />
        <Footer gridProps='row-start-5 col-start-1 col-end-13' />
        <Toaster />
      </div>
    </>
  )
}
