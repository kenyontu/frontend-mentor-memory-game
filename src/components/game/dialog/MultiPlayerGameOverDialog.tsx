import { Player } from '~/utils/memoryGame'
import { GameOverDialog } from './GameOverDialog'
import { InfoListItem } from './InfoListItem'

type Props = {
  open: boolean
  onRestart: () => void
  onSetupNewGame: () => void
  players: Player[]
}

export function MultiPlayerGameOverDialog({ players, ...rest }: Props) {
  const sortedPlayers = players.slice().sort((a, b) => b.points - a.points)
  const winnerPoints = sortedPlayers[0].points
  const isDraw = sortedPlayers[0].points === sortedPlayers[1].points

  return (
    <GameOverDialog
      title={isDraw ? "It's a tie!" : `Player ${sortedPlayers[0].name} Wins!`}
      subtitle="Game over! Here are the results..."
      {...rest}
    >
      <div className="mt-[1.375rem] md:mt-[2.5rem] md:mb-4">
        {sortedPlayers.map((player) => {
          const isWinner = player.points === winnerPoints

          const pairs =
            player.points === 1
              ? '1 Pair'
              : player.points > 1
              ? `${player.points} Pairs`
              : 'No Pair'

          return (
            <InfoListItem
              appearance={isWinner ? 'primary' : 'secondary'}
              key={player.name}
              label={`Player ${player.name}${isWinner ? ' (Winner!)' : ''}`}
              value={pairs}
            ></InfoListItem>
          )
        })}
      </div>
    </GameOverDialog>
  )
}
