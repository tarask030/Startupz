import { H2, NumberList } from 'components'
import Image from 'next/image'
import LightBulb from 'assets/images/light-bulb.png'

export const OurCoreValues = () => {
  return (
    <div className='bg-gray-300 flex justify-center'>
      <div className='w-[1568px] px-16 pt-[172px] pb-[196px]'>
        <div className='flex w-full justify-between'>
          <H2>Our core values</H2>
          <div className='w-28 '>
            <Image priority src={LightBulb} alt='Light' />
          </div>
        </div>
        <div className='flex gap-x-[74px] mt-[117px]'>
          <NumberList
            title='01. Innovation'
            subtitle='Startupz operates where entrepreneurship and technology intersect.
              We design solutions and turn them into businesses models.'
          />
          <NumberList
            title='02. People'
            subtitle='Talent is what enable us to create great companies.'
          />
        </div>
      </div>
    </div>
  )
}
