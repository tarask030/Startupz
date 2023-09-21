import clsx from 'clsx'
import React from 'react'

import { ReactNode } from 'react'

export type TextProps = {
  className?: string
  color?: string
  children?: ReactNode
}

const styles = {
  h1: 'text-[85px] font-bold', //85px
  h2: 'text-6xl font-bold', //48px
  h3: 'text-[50px] font-bold', //50px
  h4: 'text-[32px] font-bold', //32px
  h5: 'text-2xl font-normal', //24px
  h6: 'text-2xl font-normal', //20px
  p: 'text-base font-normal', //16px
  label: 'text-xs font-semibold', //12px
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
