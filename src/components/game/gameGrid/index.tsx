import clsx from 'clsx'
import { GridSetting, ThemeSetting } from '~/config'
import { Card } from '~/utils/memoryGame'
import { GridCard } from './GridCard'

type Props = {
  cards: Card[]
  onCardClick: (index: number) => void
  gridSize: GridSetting
  theme: ThemeSetting
}

export function GameGrid({ cards, onCardClick, gridSize, theme }: Props) {
  return (
    <div
      className={clsx('my-6 grid gap-2 md:my-9', {
        'grid-cols-4 sm:gap-5': gridSize === '4x4',
        'grid-cols-6 sm:gap-3': gridSize === '6x6',
      })}
    >
      {cards.map((card, index) => (
        <GridCard
          key={card.id}
          card={card}
          size={gridSize === '4x4' ? 'large' : 'normal'}
          onClick={() => onCardClick(index)}
          theme={theme}
        />
      ))}
    </div>
  )
}
