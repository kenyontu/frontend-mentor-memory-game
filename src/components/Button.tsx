import { ComponentProps } from 'react'
import clsx from 'clsx'

type ButtonAppearance = 'primary' | 'secondary'

type ButtonSize = 'large' | 'medium' | 'small'

type ButtonProps = {
  appearance?: ButtonAppearance
  size?: ButtonSize
} & ComponentProps<'button'>

export function Button({
  appearance = 'primary',
  size = 'medium',
  children,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'rounded-full font-bold transition-colors',
        {
          'bg-primary-400 hover:bg-primary-300 text-white':
            appearance === 'primary',
          'bg-neutral-200 text-neutral-700 hover:bg-neutral-400 hover:text-white':
            appearance === 'secondary',
        },
        {
          'py-4 px-8 text-lg xl:text-[2rem]': size === 'large',
          'py-3 px-6 text-[1.125rem] sm:py-6 sm:text-[2rem]': size === 'medium',
          'py-2 px-[1.15rem] text-base sm:py-[0.9rem] sm:px-[1.5rem] sm:text-[1.25rem]':
            size === 'small',
        },
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
