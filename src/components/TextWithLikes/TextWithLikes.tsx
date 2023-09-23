import Image from 'next/image'
import Like from 'assets/images/like.png'
import { Label } from 'components'

export const TextWithLikes = ({ text }: { text: string }) => (
  <div className='flex flex-col justify-center items-center gap-x-8 md:flex-row'>
    <div className='w-16 flex justify-center mb-5'>
      <Image src={Like} alt='Like' />
    </div>
    <Label className='text-orange-500 max-w-[882px] text-center'>{text}</Label>
    <div className='w-16 transform -scale-x-100 mb-5 hidden md:flex'>
      <Image src={Like} alt='Like' />
    </div>
  </div>
)
