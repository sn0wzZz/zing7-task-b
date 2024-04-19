import React, { useState } from 'react'
import { HiOutlineBuildingOffice } from 'react-icons/hi2'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import useWindowDimensions from '@/app/utils/useWindowDimensions'

export default function HotelCarousel({ hotel }: any) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const { width } = useWindowDimensions()

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView:
        (width < 400 && 2.2) ||
        (width > 400 && width < 1460 && 3.2) ||
        (width > 1460 && width < 2050 && 4.2) ||
        (width > 2050 && 5.2),
      spacing: 5,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  console.log(currentSlide)

  return (
    <div className='py-5 border-b-2 flex flex-col gap-5'>
      <div className='flex items-center mb-6 gap-3'>
        <HiOutlineBuildingOffice className='text-primary-100' size={50} />
        <h3 className='m-0'>{hotel.name}</h3>
      </div>
      <p>{hotel.description}</p>

      <div className='relative'>
        <div ref={sliderRef} className='keen-slider'>
          {hotel.images.map((image: any, i: any) => (
            <div className={`keen-slider__slide number-slide${i + 1}`} key={i}>
              <Image src={image} alt='image' />
            </div>
          ))}
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={
                  currentSlide === 0 || currentSlide === hotel.images.length
                }
              />

              <Arrow
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                    instanceRef.current.track.details.slides.length - 1 ||
                  currentSlide === 2
                }
              />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

function Arrow(props: any) {
  const disabled = props.disabled ? ' arrow--disabled' : ''
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? 'arrow--left' : 'arrow--right'
      } ${disabled}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
    >
      {props.left && (
        <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
      )}
      {!props.left && (
        <path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
      )}
    </svg>
  )
}
