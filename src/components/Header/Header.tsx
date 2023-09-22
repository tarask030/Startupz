import { Button, H1, H5 } from 'components'
import Image from 'next/image'
import MainImage from 'assets/images/main.png'
import clsx from 'clsx'

export const Header = () => {
  return (
    <div className='flex justify-center pt-[70px] items-end md:pt-[118px]'>
      <div
        className={clsx(
          'w-[1568px] px-8 pt-[140px] pb-[165px] flex justify-start md:px-16'
        )}
      >
        <div>
          <H1 className='leading-[55px] font-circular md:leading-[85px]'>
            We Create <br /> Startups.
          </H1>
          <H5 className='text-orange-500 max-w-[900px] mt-[32px] font-circular'>
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
      <div className={clsx('md:max-w-[650px] absolute right-0 w-[50%]')}>
        <Image priority src={MainImage} alt='Man' />
      </div>
    </div>
  )
}
