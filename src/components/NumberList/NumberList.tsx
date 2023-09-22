import { H4 } from 'components'

interface INumberList {
  title: string
  subtitle: string
}

export const NumberList = ({ title, subtitle }: INumberList) => (
  <div className='flex flex-col'>
    <H4 className='text-orange-500'>{title}</H4>
    <div className='border-b w-[50px] mt-[30px] mb-[25px]' />
    <H4>{subtitle}</H4>
  </div>
)
