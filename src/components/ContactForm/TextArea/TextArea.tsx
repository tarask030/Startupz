interface ITextArea {
  placeholder: string
}

export const TextArea = ({ placeholder }: ITextArea) => {
  return (
    <textarea
      className='w-full bg-white rounded-[10px] p-4 h-[270px] focus:outline-none resize-none placeholder:text-gray-600'
      placeholder={placeholder}
    />
  )
}
