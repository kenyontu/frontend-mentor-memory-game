import clsx from 'clsx'
import { ComponentProps } from 'react'
import { ThemeSetting } from '~/config'
import { Card } from '~/utils/memoryGame'
import { Icon } from './Icon'

type Props = {
  card: Card
  size?: 'normal' | 'large'
  theme?: ThemeSetting
} & ComponentProps<'button'>

export function GridCard({
  card,
  size = 'normal',
  theme = 'Numbers',
  onClick,
  ...rest
}: Props) {
  return (
    <button
      tabIndex={card.state === 'hidden' ? 0 : -1}
      disabled={card.state !== 'hidden'}
      value={card.value}
      onClick={onClick}
      className={clsx(
        'flex aspect-square items-center justify-center rounded-[50%] font-bold transition-colors focus:outline-none',
        {
          'bg-neutral-700 hover:bg-neutral-400 focus-visible:ring-2 focus-visible:ring-neutral-700 focus-visible:ring-offset-2':
            card.state === 'hidden',
          'bg-primary-400': card.state === 'revealed',
          'bg-neutral-300': card.state === 'visible',
          'text-2xl sm:text-[2.75rem]': size === 'normal',
          'text-[2.5rem] sm:text-[3.5rem]': size === 'large',
        }
      )}
      data-testid="grid-card"
      {...rest}
    >
      {theme === 'Numbers' ? (
        <span
          className={clsx('text-white transition-opacity', {
            'opacity-0': card.state === 'hidden',
            'opacity-100': card.state !== 'hidden',
          })}
        >
          {card.value}
        </span>
      ) : (
        <Icon
          iconId={card.value}
          className={clsx('transition-opacity', {
            'opacity-0': card.state === 'hidden',
            'opacity-100': card.state !== 'hidden',
            'max-w-5 sm:max-w-7 md:max-w-9 max-h-5 transition-opacity sm:max-h-7 md:max-h-9':
              size === 'normal',
            'max-w-9 md:max-w-12 max-h-9 md:max-h-12': size === 'large',
          })}
        />
      )}
    </button>
  )
}
