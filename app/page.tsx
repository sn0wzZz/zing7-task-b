import Image from 'next/image'
import Navbar from './features/navigation/Navbar'
import Hero from './features/hero/Hero'
import Schedule from './features/schedule/Schedule'
import Main from './features/main/Main'


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className='grid grid-cols-1 grid-rows-2 md:grid-cols-12'>
        <Main gridProps='col-start-1 row-start-1 md:row-start-1 xl:col-start-2 col-end-8 md:row-span-auto' />
        <div className='md:col-start-8 md:row-start-1 col-start-1 row-start-2 col-span-12 md:col-span-5 flex'>
          <div className='flex-1 h-full'>
            <Schedule />
          </div>
        </div>
      </div>
    </>
  )
}
