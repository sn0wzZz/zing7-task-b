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
      <div className='grid grid-cols-1 grid-rows-2 lg:grid-cols-12 '>
        <Main gridProps='col-start-1 row-start-1 md:row-start-1 xl:col-start-2 col-end-8' />
        <Schedule gridProps='col-start-1 md:col-start-8 row-start-2 md:row-start-1 col-end-13 col-span-4' />
      </div>
    </>
  )
}
