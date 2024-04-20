export default function Timer({ timeLeft }: any) {
  return (
    <div className='text-center flex justify-center'>
      <div className='flex gap-5 sm:gap-8 md:text-gap-10 lg:gap-16 xl:gap-20  justify-between'>
        <div className='flex flex-col justify-center  items-center text-center'>
          <h4>{timeLeft.days}</h4>
          <h6>дни</h6>
        </div>
        <h1>|</h1>
        <div className='flex flex-col justify-center items-center text-center'>
          <h4>{timeLeft.hours}</h4>
          <h6>часа</h6>
        </div>
        <h1>|</h1>
        <div className='flex flex-col justify-center items-center text-center'>
          <h4>{timeLeft.minutes}</h4>
          <h6>минути</h6>
        </div>
      </div>
    </div>
  )
}
