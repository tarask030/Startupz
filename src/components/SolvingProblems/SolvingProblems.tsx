import { TextWithLikes, AnimationContainer } from 'components'
import Idea from 'assets/images/idea.png'
import Image from 'next/image'
import clsx from 'clsx'

export const SolvingProblems = () => (
  <div className='flex justify-center'>
    <AnimationContainer
      classNames={clsx(
        'w-[1568px] px-8 pt-[90px] pb-[140px]',
        'md:px-16 md:pt-[156px]'
      )}
    >
      <div className='relative'>
        <TextWithLikes text='We love solving problems!' />
        <div
          className={clsx(
            'absolute flex scale-50 left-auto -bottom-[170px] right-0',
            'md:-bottom-[160px]',
            'xl:scale-100 xl:right-[50px] xl:-top-[100px] xl:left-auto'
          )}
        >
          <div
            className={clsx(
              'bg-blue-600 w-[260px] text-white px-[18px] py-[14px] h-[70px] text-[14px]',
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
    </AnimationContainer>
  </div>
)
