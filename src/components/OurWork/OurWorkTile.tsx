import Image, { StaticImageData } from 'next/image'
import { Button, H4, P } from 'components'
import clsx from 'clsx'

interface IOurWorkTile {
  title: string
  titleColor: string
  subtitle: string
  image: StaticImageData
  action: () => void
}

export const OurWorkTile = ({
  title,
  titleColor,
  subtitle,
  image,
  action,
}: IOurWorkTile) => (
  <div
    className={clsx(
      'rounded-3xl bg-white shadow-lg p-[45px] flex justify-between pb-[50px]',
      'text-center justify-center flex flex-col rounded-[30px]'
    )}
  >
    <H4 className={titleColor}>{title}</H4>
    <div className='justify-center flex mt-5'>
      <P className='max-w-[380px] text-blue-900'>{subtitle}</P>
    </div>
    <div className='justify-center flex mt-3'>
      <Image priority src={image} alt='Our work' className='w-2/3' />
    </div>
    <div className='justify-center flex mt-4'>
      <Button text='More' action={action} backgroundColor='white' />
    </div>
  </div>
)
