import clsx from 'clsx'

interface IButton {
  className?: string
  text: string
  action: () => void
  backgroundColor?: string
}

export const Button = ({
  className,
  text,
  action,
  backgroundColor,
}: IButton) => {
  return (
    <button
      className={clsx(
        className,
        'border h-11 rounded-full px-5 flex items-center justify-center',
        'font-bold transition-all font-Gothic+A1 cursor-pointer',
        backgroundColor === 'blue' &&
          ' bg-blue-500 text-white hover:bg-white hover:text-blue-500',
        backgroundColor === 'white' &&
          'bg-white text-blue-500 hover:bg-blue-500 hover:text-white',
        backgroundColor === 'darkBlue' &&
          'bg-blue-900 text-white hover:bg-white hover:text-blue-900'
      )}
      onClick={action}
    >
      {text}
    </button>
  )
}
