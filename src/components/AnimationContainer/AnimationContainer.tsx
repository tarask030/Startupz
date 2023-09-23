import clsx from 'clsx'
import { useOnScreen } from 'hooks'
import { useEffect, useRef, ReactNode, useState, MutableRefObject } from 'react'

interface SectionProps {
  children: ReactNode
  classNames: string
}

export const AnimationContainer: React.FC<SectionProps> = ({
  children,
  classNames,
}) => {
  const ref = useRef<HTMLDivElement>(null)

  const onScreen: boolean = useOnScreen<HTMLDivElement>(
    ref as MutableRefObject<HTMLDivElement>,
    '0px'
  )
  const [isHidden, setIsHidden] = useState(true)

  useEffect(() => {
    onScreen && setIsHidden(false)
  }, [onScreen])

  return (
    <div
      ref={ref}
      className={clsx(
        classNames,
        isHidden
          ? 'opacity-0'
          : 'opacity-100 delay-300 duration-500 transition-all'
      )}
    >
      {children}
    </div>
  )
}
