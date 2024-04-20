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
      bgColor='bg-heading border-t-2 border-white flex justify-center items-center'
      gridProps={gridProps}
    >
      <div className='flex items-center flex-col lg:flex-row gap-x-10'>
        <div>
          <h2 className='font-bold text-white text-center lg:text-start'>
            Отстъпки и специални предложения налични само на имейл
          </h2>
        </div>
        <div>
          <div className=' my-16 flex flex-nowrap justify-center items-center lg:text-start'>
            <div>
              <div className='flex items-center justify-center'>
                <div className='flex items-center justify-center bg-white pl-3 xl:pl-5'>
                  <FiMail color='grey' size={20} />
                  <input
                    className='p-3 w-[10rem] lg:w-[30vw] xl:p-3 xl:text-xl outline-none border-none bg bg-transparent'
                    type='text'
                    placeholder='Имейл адрес'
                  />
                </div>
                <button
                  onClick={notify}
                  className='p-3 xl:p-3 text-white xl:px-10 bg-primary-100 hover:bg-primary-200 xl:text-xl border-0 font-bold max-w text-nowrap'
                >
                  Абонирай се
                </button>
              </div>

              <h6 className='text-white pt-4 text-center xl:text-start'>
                Всеки месец ще получаваш първи най-добрите ни оферти
              </h6>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
