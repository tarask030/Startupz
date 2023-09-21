import { Button, H1, H5 } from 'components'
import Image from 'next/image'
import MainImage from 'assets/images/main.png'
import clsx from 'clsx'

export const Header = () => {
  return (
    <div className='flex justify-center items-end pt-[118px]'>
      <div
        className={clsx(
          'w-[1568px] px-16 pt-[140px] pb-[165px] flex justify-start',
          '2xl:pl-1 2xl:-translate-x-6 2xl:justify-center'
        )}
      >
        <div>
          <H1 className='leading-[85px]'>
            We Create <br /> Startups.
          </H1>
          <H5 className='text-orange-500 max-w-[900px] mt-[32px]'>
            We are startup studio that develops and launches new companies.
          </H5>
          <Button
            className='mt-6'
            text='See our works'
            action={() => console.log('')}
            backgroundColor='blue'
          />
        </div>
      </div>
      <div className='w-full max-w-[650px]'>
        <Image priority src={MainImage} alt='Man' />
      </div>
    </div>
  )
}
