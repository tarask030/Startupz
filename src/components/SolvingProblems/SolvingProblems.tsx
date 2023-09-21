import { TextWithLikes } from 'components'
import Idea from 'assets/images/idea.png'
import Image from 'next/image'
import clsx from 'clsx'

export const SolvingProblems = () => (
  <div className='flex justify-center'>
    <div className='w-[1568px] px-16 pt-[156px] pb-[140px]'>
      <div className='relative'>
        <TextWithLikes text='We love solving problems!' />
        <div className='absolute right-0 -top-[100px] flex'>
          <div
            className={clsx(
              'bg-green-500 max-w-[260px] text-white px-[18px] py-[14px] h-[70px] text-[14px]',
              'rounded-bl-full rounded-tl-full rounded-tr-full shadow-lg select-none'
            )}
          >
            Hi! I am Ben, your virtual assistant. How can I make your day
            better?
          </div>
          <div className='flex flex-col'>
            <span className='text-gray-600 font-bold select-none text-end'>
              X
            </span>
            <div className='w-[144px] rounded-full shadow-lg mt-[37px] '>
              <Image src={Idea} alt='Solving problems' />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)