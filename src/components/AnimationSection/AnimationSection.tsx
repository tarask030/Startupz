import clsx from 'clsx'
import { useOnScreen } from 'hooks'
import { useEffect, useRef, ReactNode, useState, MutableRefObject } from 'react'

interface SectionProps {
  children: ReactNode
}

export const AnimationSection: React.FC<SectionProps> = ({ children }) => {
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
        isHidden
          ? 'opacity-0'
          : 'opacity-100 delay-300 duration-500 transition-all'
      )}
    >
      {children}
    </div>
  )
}
