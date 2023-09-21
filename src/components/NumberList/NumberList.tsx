interface INumberList {
  title: string
  subtitle: string
}

export const NumberList = ({ title, subtitle }: INumberList) => (
  <div className='flex flex-col'>
    <span className='text-[30px] text-orange-500'>{title}</span>
    <div className='border-b w-[50px] mt-[30px] mb-[25px]' />
    <span className='text-[30px]'>{subtitle}</span>
  </div>
)
