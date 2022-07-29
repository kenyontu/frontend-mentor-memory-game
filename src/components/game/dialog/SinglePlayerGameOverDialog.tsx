import { formatTime } from '~/utils/time'
import { GameOverDialog } from './GameOverDialog'
import { InfoListItem } from './InfoListItem'

type Props = {
  open: boolean
  seconds: number
  moves: number
  onRestart: () => void
  onSetupNewGame: () => void
}

export function SinglePlayerGameOverDialog({ seconds, moves, ...rest }: Props) {
  return (
    <GameOverDialog
      title="You did it!"
      subtitle="Game over! Here's how you got on..."
      {...rest}
    >
      <div className="mt-6 sm:mt-10">
        <InfoListItem
          appearance="secondary"
          label="Time Elapsed"
          value={formatTime(seconds)}
          valueClassName="timer"
        />

        <InfoListItem
          appearance="secondary"
          label="Moves Taken"
          value={`${moves} Moves`}
        />
      </div>
    </GameOverDialog>
  )
}
