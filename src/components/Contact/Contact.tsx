import { AnimationContainer, Form, H2, H6 } from 'components'
import Image from 'next/image'
import Rocket from 'assets/rocket.svg'
import clsx from 'clsx'

export const Contact = () => (
  <div className='bg-yellow-500 flex justify-center w-full '>
    <div id='contact' className='-translate-y-24' />
    <AnimationContainer classNames={clsx('w-[1568px] p-8', 'md:p-16')}>
      <H2
        className={clsx('text-white text-left', 'smm:text-center md:text-left')}
      >
        Are you ready <br /> to board this rocket ship?
      </H2>
      <H6
        className={clsx(
          'text-white my-[34px] text-left',
          'smm:text-center md:text-left'
        )}
      >
        Share your excitement with us.
      </H6>
      <div className='flex items-end justify-center md:justify-between gap-x-5 w-full'>
        <Form />
        <div className='hidden translate-y-[64px] md:flex'>
          <Image priority src={Rocket} alt='Contact us' />
        </div>
      </div>
    </AnimationContainer>
  </div>
)
