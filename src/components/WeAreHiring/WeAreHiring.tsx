import { AnimationContainer, Button, H2, H5 } from 'components'
import Image from 'next/image'
import Girl from 'assets/images/we-are-hiring/girl.png'
import Man from 'assets/images/we-are-hiring/man.png'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'

export const WeAreHiring = () => {
  const { push } = useRouter()

  const handleTurnToContact = () => {
    push('#contact')
  }

  return (
    <div className='bg-gray-300 flex justify-center items-center'>
      <div className='w-full max-w-[400px]'>
        <Image priority src={Girl} alt='Girl' />
      </div>
      <AnimationContainer
        classNames={clsx(
          'w-[1568px] px-8 pt-[90px] pb-[100px] flex justify-center',
          'md:px-16 md:pt-[140px] md:pb-[165px]'
        )}
      >
        <div className='text-center'>
          <H2>We are hiring!</H2>
          <H5 className='text-orange-500 max-w-[440px] mt-[30px]'>
            We&apos;re always looking for talented people <br />
            to join and help build our startups. <br /> Check out our current
            openings
          </H5>
          <div className='flex justify-center mt-[30px]'>
            <Button
              text='See current openings'
              backgroundColor='blue'
              action={handleTurnToContact}
            />
          </div>
        </div>
      </AnimationContainer>
      <div className='w-full max-w-[400px]'>
        <Image priority src={Man} alt='Man' />
      </div>
    </div>
  )
}
