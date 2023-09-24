import clsx from 'clsx'
import { ChangeEvent } from 'react'

interface ITextArea {
  value: string
  placeholder: string
  errorMessage?: string
  disabled?: boolean
  onChange: (value: ChangeEvent<HTMLTextAreaElement>) => void
}

export const TextArea = ({
  value,
  errorMessage,
  placeholder,
  disabled,
  onChange,
}: ITextArea) => (
  <>
    <textarea
      className={clsx(
        'w-full bg-white rounded-[10px] p-4 h-[270px]',
        'focus:outline-none resize-none placeholder:text-gray-600',
        errorMessage && 'border border-red-500'
      )}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
    />
    <span className='absolute bottom-0 text-red-500 text-sm'>
      {errorMessage}
    </span>
  </>
)
