interface IInput {
  placeholder: string
}

export const Input = ({ placeholder }: IInput) => {
  return (
    <input
      className='w-full h-[54px] bg-white rounded-[10px] px-4 focus:outline-none placeholder:text-gray-600'
      placeholder={placeholder}
    />
  )
}
