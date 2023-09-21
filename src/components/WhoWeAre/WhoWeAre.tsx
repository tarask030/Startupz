import { H2, H5, NumberList } from 'components'
import Image from 'next/image'
import QuestionMark from 'assets/images/question-mark.png'

export const WhoWeAre = () => {
  return (
    <div className='bg-gray-300 flex justify-center'>
      <div className='w-[1568px] px-16 pt-[172px] pb-[196px]'>
        <div>
          <div className='flex justify-between'>
            <div>
              <H2>Who we are</H2>
              <H5 className='text-orange-500 max-w-[900px] mt-[32px]'>
                We create products that have innovation and technology at their
                core. <br />
                We value working with talented people that understand the
                possibilities of today.
              </H5>
            </div>
            <div className='w-[124px]'>
              <Image src={QuestionMark} alt='Question mark' />
            </div>
          </div>
          <div className='flex gap-x-20 mt-20'>
            <NumberList
              title='01'
              subtitle='We develop innovative products, systems and services'
            />
            <NumberList
              title='02'
              subtitle='Next we build teams to scale them into companies'
            />
            <NumberList
              title='03'
              subtitle='Each startup solving one problem at a time'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
