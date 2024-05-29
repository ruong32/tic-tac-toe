import React from 'react'
import { twMerge } from 'tailwind-merge'

type ContainerProps = React.HTMLProps<HTMLDivElement>

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={twMerge(
        'px-6 transition-[padding] duration-300 desktop:mx-auto desktop:w-4/5 desktop:max-w-[64rem]',
        className
      )}
      {...props}
    />
  )
)
