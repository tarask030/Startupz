import { H2, NumberList, AnimationContainer } from 'components'
import Image from 'next/image'
import LightBulb from 'assets/images/light-bulb.png'
import clsx from 'clsx'

export const OurCoreValues = () => (
  <div className='bg-gray-300 flex justify-center'>
    <AnimationContainer
      classNames={clsx(
        'w-[1568px] px-8 pt-[90px] pb-[100px]',
        'md:px-16 md:pt-[172px] md:pb-[196px]'
      )}
    >
      <div className='flex w-full justify-between'>
        <H2>Our core values</H2>
        <div className='w-28 '>
          <Image priority src={LightBulb} alt='Light' />
        </div>
      </div>
      <div className='flex flex-col gap-y-[74px] mt-[42px] md:flex-row md:gap-x-[74px] md:mt-[117px]'>
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
    </AnimationContainer>
  </div>
)
