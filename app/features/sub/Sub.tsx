import Container from '@/app/ui/Container'
import Heading from '@/app/ui/Heading'
import Offers from './Offers'
import Partners from './Partners'

export default function Sub({ gridProps }: any) {
  return (
    <Container bgColor='bg-bgSecondary' gridProps={gridProps}>
      <div className='grid grid-cols-12 gap-10 md:gap-y-20  lg:gap-y-36 '>
        <Offers />
        <Partners />
      </div>
    </Container>
  )
}
