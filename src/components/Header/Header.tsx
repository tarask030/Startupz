import { Button, H1, H5 } from 'components'
import Image from 'next/image'
import MainImage from 'assets/images/main.png'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'

export const Header = () => {
  const { push } = useRouter()

  const handleTurnToOurWork = () => {
    push('#our-work')
  }

  return (
    <div
      className={clsx(
        'flex justify-center pt-[70px] items-end',
        'md:pt-[118px]'
      )}
    >
      <div
        className={clsx(
          'w-[1568px] px-8 pt-[140px] pb-[196px] flex justify-start h-[calc(100vh-90px)] items-center',
          'md:px-16 md:h-[calc(100vh-118px)]'
        )}
      >
        <div>
          <H1
            className={clsx(
              'leading-[55px] font-circular',
              'md:leading-[85px]'
            )}
          >
            We Create <br /> Startups.
          </H1>
          <H5
            className={clsx(
              'text-orange-500 max-w-[400px] mt-[32px] font-circular',
              'md:max-w-[500px]',
              'lg:max-w-[700px]',
              'xl:max-w-full'
            )}
          >
            We are startup studio that develops and launches new companies.
          </H5>
          <Button
            className='mt-6'
            text='See our works'
            action={handleTurnToOurWork}
            backgroundColor='blue'
          />
        </div>
      </div>
      <div className={clsx('absolute right-0 w-[50%]', 'md:max-w-[900px]')}>
        <Image priority src={MainImage} alt='Man' />
      </div>
    </div>
  )
}
