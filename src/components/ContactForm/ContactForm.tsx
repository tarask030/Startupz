import { Button, H2, H6, Input, P, TextArea } from 'components'
import Image from 'next/image'
import Rocket from 'assets/rocket.svg'
import clsx from 'clsx'

export const ContactForm = () => {
  return (
    <div className='bg-yellow-500 flex justify-center'>
      <div className='w-[1568px] p-16'>
        <H2 className='text-white'>
          Are you ready <br /> to board this rocket ship?
        </H2>
        <H6 className='text-white my-[34px]'>Share your excitement with us.</H6>
        <div className='flex items-end gap-x-5'>
          <form
            className={clsx(
              'flex flex-col items-center justify-center',
              'bg-gray-500 px-11 pt-[72px] pb-[40px] w-[512px]',
              'rounded-[10px]'
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
          <div className='translate-y-[64px]'>
            <Image priority src={Rocket} alt='Contact us' />
          </div>
        </div>
      </div>
    </div>
  )
}
