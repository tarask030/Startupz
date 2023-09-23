import { MutableRefObject, useEffect, useState } from 'react'

export function useOnScreen<T extends Element | null>(
  ref: MutableRefObject<T>,
  rootMargin: string = '0px',
  threshold: number = 0.0
): boolean {
  const [isIntersecting, setIntersecting] = useState<boolean>(false)
  useEffect(() => {
    const currentRef = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting)
      },
      {
        rootMargin,
        threshold,
      }
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      currentRef && observer.unobserve(currentRef)
    }
  }, [rootMargin, threshold, ref])
  return isIntersecting
}
