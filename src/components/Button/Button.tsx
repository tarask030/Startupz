import clsx from 'clsx'

interface IButton {
  text: string
  action?: () => void
  backgroundColor?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  className?: string
}

export const Button = ({
  text,
  action,
  backgroundColor,
  type = 'button',
  disabled,
  className,
}: IButton) => (
  <button
    className={clsx(
      className,
      'border h-11 rounded-full px-5 flex items-center justify-center',
      'font-bold transition-all font-Gothic+A1 cursor-pointer',
      backgroundColor === 'blue' &&
        ' bg-blue-500 text-white hover:bg-white hover:text-blue-500',
      backgroundColor === 'white' &&
        'bg-white text-blue-500 hover:bg-blue-500 hover:text-white',
      backgroundColor === 'darkBlue' && 'bg-blue-900 text-white'
    )}
    onClick={action}
    type={type}
    disabled={disabled}
  >
    {text}
  </button>
)
