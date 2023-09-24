import clsx from 'clsx'
import { ChangeEvent } from 'react'

interface IInput {
  value: string
  placeholder: string
  errorMessage?: string
  type: 'text' | 'email'
  disabled?: boolean
  onChange: (value: ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({
  value,
  placeholder,
  errorMessage,
  type,
  disabled,
  onChange,
}: IInput) => (
  <>
    <input
      className={clsx(
        'w-full h-[54px] bg-white rounded-[10px] px-4',
        'focus:outline-none placeholder:text-gray-600',
        errorMessage && 'border border-red-500'
      )}
      value={value}
      placeholder={placeholder}
      type={type}
      disabled={disabled}
      onChange={onChange}
    />
    <span className='text-red-500 text-sm'>{errorMessage}</span>
  </>
)
