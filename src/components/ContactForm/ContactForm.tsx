import { AnimationContainer, Button, H2, H6, Input, TextArea } from 'components'
import Image from 'next/image'
import Rocket from 'assets/rocket.svg'
import clsx from 'clsx'
import { useOnScreen } from 'hooks'
import { MutableRefObject, useEffect, useRef, useState } from 'react'

export const ContactForm = () => {
  const ref = useRef<HTMLDivElement>(null)

  const onScreen: boolean = useOnScreen<HTMLDivElement>(
    ref as MutableRefObject<HTMLDivElement>,
    '0px'
  )
  const [isHidden, setIsHidden] = useState(true)

  useEffect(() => {
    onScreen && setIsHidden(false)
  }, [onScreen])

  return (
    <div className='bg-yellow-500 flex justify-center w-full '>
      <div id='contact' className='-translate-y-24' />
      <AnimationContainer classNames={clsx('w-[1568px] p-8', 'md:p-16')}>
        <H2
          className={clsx(
            'text-white text-left',
            'smm:text-center md:text-left'
          )}
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
        <div className='flex items-end justify-center md:justify-between gap-x-5'>
          <form
            className={clsx(
              'flex flex-col items-center justify-center w-full',
              'bg-gray-500 px-6 pt-[72px] pb-[40px] rounded-[10px]',
              'sm:min-w-[512px] sm:w-[512px]',
              'md:px-11'
            )}
          >
            <div className='flex flex-col gap-y-4 w-full'>
              <Input placeholder='Name*' />
              <Input placeholder='Email*' />
              <TextArea placeholder='Message*' />
            </div>
            <Button
              text='Shoot us a message'
              className={'mt-[34px]'}
              action={() => console.log('')}
              backgroundColor='darkBlue'
            />
          </form>
          <div className='hidden translate-y-[64px] md:flex'>
            <Image priority src={Rocket} alt='Contact us' />
          </div>
        </div>
      </AnimationContainer>
    </div>
  )
}
