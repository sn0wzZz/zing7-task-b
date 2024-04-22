'use client'
import React from 'react'
import Image from 'next/image'
import Container from '@/app/ui/Container'
import Logo from '../../../public/brand.png'
import License from '../../../public/license.png'
import Insurance from '../../../public/insurance.png'
import FooterContainer from './FooterContainer'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

export default function Footer({ gridProps }: any) {
  return (
    <Container
      as='footer'
      bgColor='bg-heading border-t-2 border-white'
      gridProps={gridProps}
    >
      <div className='text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-10 gap-3'>
        {/* Column 1 */}
        <FooterContainer gridProps='md:col-start-1 md:col-span-1 lg:col-span-1 2xl:col-start-2 2xl:col-end-4'>
          <div className='flex flex-col sm:items-center'>
            <div className='flex flex-col gap-6 justify-center'>
              <Image src={Logo} alt='logo' width={120} />
              <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-4'>
                  <Image
                    src={License}
                    alt='logo'
                    width={100}
                    className='sm:w-[30%]'
                  />
                  <h5>
                    Лиценз, удостоверение за <br />
                    регистрация № 05236
                  </h5>
                </div>
                <div className='flex items-center gap-4'>
                  <Image
                    src={Insurance}
                    alt='logo'
                    width={100}
                    className='sm:w-[30%]'
                  />
                  <h5>
                    <h5>
                      Застраховка <br /> &quot;Отговорност на туроператора&quot;
                    </h5>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </FooterContainer>

        {/* Column 2 */}
        <FooterContainer gridProps='md:col-start-2 md:col-span-1 lg:col-span-1 2xl:col-start-4 2xl:col-end-6'>
          <div className='flex flex-col sm:items-center '>
            <div className='flex flex-col gap-10'>
              <h5 className='font-bold'>Контакти</h5>
              <p>
                1111 София, България,
                <br />
                ул. Христо Белчев 34
                <br />
                <br />
                +359 884 47 30 34 // мобилен
                <br />
                +359 2 980 44 59 // офис
                <br />
                +359 2 980 41 05 // факс
                <br />
                mistral@mistralbg.com
                <br />
                Понеделник - Петък
                <br />
                10.00ч. - 18.00ч.
              </p>
            </div>
          </div>
        </FooterContainer>

        {/* Column 3 */}
        <FooterContainer gridProps='md:col-start-1 md:col-span-1 lg:col-span-1 2xl:col-start-6 2xl:col-end-8'>
          <div className='flex flex-col gap-6 sm:items-center'>
            <div className='flex flex-col gap-10'>
              <h5 className='font-bold text-start'>Бързи връзки</h5>
              <div className='flex flex-row gap-5'>
                <div className='flex flex-col gap-2'>
                  <a>За нас</a>
                  <a>Документи</a>
                  <a>
                    Начин на
                    <br /> плащане
                  </a>
                </div>
                <div className='flex flex-col gap-2'>
                  <a>Общи условия</a>
                  <a>Лични данни</a>
                  <a>Контакти</a>
                </div>
              </div>
            </div>
          </div>
        </FooterContainer>

        {/* Column 4 */}
        <FooterContainer gridProps='md:col-start-2 md:col-span-1 lg:col-span-1 2xl:col-start-8 2xl:col-end-10'>
          <div className='flex flex-col gap-6 sm:items-center'>
            <div className='flex flex-col gap-10'>
              <div className='flex flex-col gap-2'>
                <p>120k ни харесват във</p>
                <FaFacebook size={40} className='mx-16 md:mx-20' />
              </div>
              <div className='flex flex-col gap-2'>
                <p>60k ни харесват във</p>
                <FaInstagram size={40} className='mx-16 md:mx-20' />
              </div>
            </div>
          </div>
        </FooterContainer>

        <FooterContainer gridProps='col-start-1 col-end-1 2xl:col-start-2 2xl:col-end-4 flex items-center 2xl:items-start '>
          <div>

          <h6 className='text-textSecondary'>
            All rights reserved.br <br />© 2020 Mistral
          </h6>
          </div>
        </FooterContainer>
      </div>
    </Container>
  )
}
