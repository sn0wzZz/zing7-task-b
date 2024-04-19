import Heading from '@/app/ui/Heading'
import { scheduleData } from '@/public/data'
import React from 'react'
import Day from './Day'
import Container from '@/app/ui/Container'

export default function Schedule({ gridProps }: any) {
  return (
    <Container bgColor='bg-bgSecondary' gridProps={gridProps}>
      <Heading quickFix='mb-10'>Програма</Heading>

      <div className='flex flex-col  gap-8'>
        {scheduleData.map((day, i) => (
          <Day key={i} day={day} />
        ))}
      </div>
    </Container>
  )
}
