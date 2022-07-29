import clsx from 'clsx'
import { Player } from '~/utils/memoryGame'
import { PlayerListItem } from './PlayerListItem'

type Props = { players: Player[]; currentPlayer: number }

export function PlayerList({ players, currentPlayer }: Props) {
  return (
    <div
      className={clsx('grid gap-[1.4rem] sm:gap-3 2xl:gap-7', {
        'grid-cols-2 xl:px-40': players.length === 2,
        'grid-cols-3': players.length === 3,
        'grid-cols-4': players.length === 4,
      })}
    >
      {players.map((player, index) => (
        <PlayerListItem
          key={player.name}
          player={player.name}
          points={player.points}
          isCurrent={currentPlayer === index}
        />
      ))}
    </div>
  )
}
