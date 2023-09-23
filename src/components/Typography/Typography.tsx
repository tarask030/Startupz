import clsx from 'clsx'
import React from 'react'

import { ReactNode } from 'react'

export type TextProps = {
  className?: string
  color?: string
  children?: ReactNode
}

const styles = {
  h1: 'text-[56px] font-bold font-circular_700 md:text-[85px]',
  h2: 'text-[32px] font-bold font-circular_700 md:text-6xl',
  h3: 'text-[25px] font-bold font-circular_700 md:text-[50px]',
  h4: 'text-[22px] font-bold font-circular_700 md:text-[25px] lg:text-[32px]',
  h5: 'text-[22px] font-normal font-circular_400 md:text-2xl',
  h6: 'text-[14px] font-normal font-circular_400 md:text-2xl',
  p: 'text-base font-normal font-circular_400',
  label: 'text-[25px] font-semibold md:text-[40px]',
}

const TypographyComponent = ({
  tag: Tag,
  children,
  color,
  className,
  ...props
}: TextProps & { tag: keyof typeof styles }) => {
  return (
    <Tag className={clsx(styles[Tag], className)} {...props} style={{ color }}>
      {children}
    </Tag>
  )
}

TypographyComponent.displayName = 'TypographyComponent'

export const H1 = (props: TextProps) => (
  <TypographyComponent {...props} tag='h1' />
)
export const H2 = (props: TextProps) => (
  <TypographyComponent {...props} tag='h2' />
)
export const H3 = (props: TextProps) => (
  <TypographyComponent {...props} tag='h3' />
)
export const H4 = (props: TextProps) => (
  <TypographyComponent {...props} tag='h4' />
)
export const H5 = (props: TextProps) => (
  <TypographyComponent {...props} tag='h5' />
)
export const H6 = (props: TextProps) => (
  <TypographyComponent {...props} tag='h6' />
)
export const P = (props: TextProps) => (
  <TypographyComponent {...props} tag='p' />
)
export const Label = (props: TextProps) => (
  <TypographyComponent {...props} tag='label' />
)
