' use client'
import Container from '@/app/ui/Container'
import React from 'react'
import toast from 'react-hot-toast'
import { FiMail } from 'react-icons/fi'

export default function Newsletter({ gridProps }: any) {
  const notify = () =>
    toast.success('Получихме Вашия имейл!', {
      duration: 2000,
    })

  return (
    <Container
      as='footer'
      bgColor='bg-heading border-t-2 border-white'
      gridProps={gridProps}
    >
      <div className='grid grid-cols-1 lg:grid-cols-10'>
        <div className=' lg:col-start-1 lg:col-end-6 xl:col-start-2 xl:col-end-6 flex items-center justify-center lg:justify-start'>
          <h2 className='font-bold text-white text-center lg:text-start'>
            Отстъпки и специални предложения налични само на имейл
          </h2>
        </div>
        <div className=' lg:col-star-5  lg:col-end-8  xl:col-star-6  xl:col-end-8 '>
          <div className='my-16 flex flex-nowrap justify-center lg:justify-normal  items-center lg:text-start '>
            <div>
              <div className='flex items-center justify-center'>
                <div className='flex items-center justify-center bg-white pl-3 xl:pl-5'>
                  <FiMail color='grey' size={20} />
                  <input
                    className='p-3 max-w-[7rem] md:max-w-full xl:p-3 xl:text-xl outline-none border-none bg bg-transparent'
                    type='text'
                    placeholder='Имейл'
                  />
                </div>
                <button onClick={notify} className='sharp-button'>
                  Абонирай се
                </button>
              </div>

              <h6 className='text-white pt-4 text-center lg:text-start'>
                Всеки месец ще получаваш първи най-добрите ни оферти
              </h6>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
