import Image from 'next/image'
import Like from 'assets/images/like.png'

export const TextWithLikes = ({ text }: { text: string }) => (
  <div className='flex justify-center items-center gap-x-8'>
    <div className='w-16 flex justify-center mb-5'>
      <Image src={Like} alt='Like' />
    </div>
    <span className='text-orange-500 text-[40px] font-bold max-w-[882px] text-center'>
      {text}
    </span>
    <div className='w-16 transform -scale-x-100 mb-5'>
      <Image src={Like} alt='Like' />
    </div>
  </div>
)
