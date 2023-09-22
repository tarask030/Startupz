import { Button, H3, H5 } from 'components'
import Image from 'next/image'
import Girl from 'assets/images/we-are-hiring/girl.png'
import Man from 'assets/images/we-are-hiring/man.png'

export const WeAreHiring = () => {
  return (
    <div className='bg-gray-300 flex justify-center items-center'>
      <div className='w-full max-w-[400px]'>
        <Image priority src={Girl} alt='Girl' />
      </div>
      <div className='w-[1568px] px-8 pt-[140px] pb-[165px] flex justify-center md:px-16'>
        <div className='text-center'>
          <H3>We are hiring!</H3>
          <H5 className='text-orange-500 max-w-[440px]'>
            We&apos;re always looking for talented people <br />
            to join and help build our startups. <br /> Check out our current
            openings
          </H5>
          <div className='flex justify-center'>
            <Button
              text='See current openings'
              backgroundColor='blue'
              className='mt-[30px]'
              action={() => console.log('See current openings')}
            />
          </div>
        </div>
      </div>
      <div className='w-full max-w-[400px]'>
        <Image priority src={Man} alt='Man' />
      </div>
    </div>
  )
}
