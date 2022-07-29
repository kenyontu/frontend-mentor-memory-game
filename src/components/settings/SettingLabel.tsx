import { ComponentProps } from 'react'
import clsx from 'clsx'

type SettingLabelProps = ComponentProps<'p'>

export function SettingLabel({
  children,
  className,
  ...rest
}: SettingLabelProps) {
  return (
    <p
      className={clsx(
        'text-[0.9375] mt-[1.25rem] mb-[0.6rem] font-bold text-neutral-400 first:mt-0 sm:mb-[1rem] sm:mt-[2.1rem] sm:text-[1.25rem]',
        className
      )}
      {...rest}
    >
      {children}
    </p>
  )
}
