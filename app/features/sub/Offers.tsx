import { capitalizeFirstLetter, formatCurrency } from '@/app/utils/helpers'
import { offersData } from '@/public/data'
import Image from 'next/image'
import { BsAirplaneEngines } from 'react-icons/bs'
import { BsBusFront } from 'react-icons/bs'
import { IoBoatOutline } from 'react-icons/io5'
import { TbBed } from 'react-icons/tb'
import { MdOutlineLocationOn } from 'react-icons/md'
import Heading from '@/app/ui/Heading'
import { imageHover } from '@/app/utils/commonStyles'

export default function Offers() {
  return (
    <div className='col-start-1 col-end-11 xs:col-end-13 lg:col-start-2 lg:col-end-12 '>
      <Heading quickFix='mb-10'>Още предложения</Heading>
      <div className='grid grid-cols-1 xs:grid-cols-2 tablet:grid-cols-3 2xl:grid-cols-4 gap-5'>
        {offersData.map(
          (
            {
              poster,
              name,
              price,
              previousPrice,
              tags: { transport, location, nights },
            },
            i
          ) => (
            <div
              className={`flex flex-col items-center shadow-lg ${imageHover}`}
              key={i}
            >
              <Image className='w-full' src={poster} alt={name} />
              <div className=' bg-white p-5 '>
                <h5>{name}</h5>
                <div className='py-5 flex justify-start'>
                  <div className='flex flex-col justify-end'>
                    <h5 className='text-primary-100'>{formatCurrency(price)}</h5>
                    <h6 className='line-through font-normal'>
                      {formatCurrency(previousPrice)}
                    </h6>
                  </div>
                  <div className='ml-auto text-textSecondary'>
                    <div className='flex gap-2 items-center'>
                      <TbBed size={22} />
                      <h6>{nights} нощувки</h6>
                    </div>
                    <div className='flex gap-2 items-center'>
                      {transport === 'самолет' && (
                        <BsAirplaneEngines className='rotate-90' size={22} />
                      )}
                      {transport === 'круиз' && <IoBoatOutline size={22} />}
                      {transport === 'автобус' && <BsBusFront size={22} />}
                      <h6>{capitalizeFirstLetter(transport)}</h6>
                    </div>
                    <div className='flex gap-2 items-center'>
                      <MdOutlineLocationOn size={22} />
                      <h6>{capitalizeFirstLetter(location)} </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}
