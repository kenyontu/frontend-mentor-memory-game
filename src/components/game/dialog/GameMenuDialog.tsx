import { AppDialog } from '~/components/AppDialog'
import { Button } from '~/components/Button'

type Props = {
  open: boolean
  onClose: () => void
  onRestart: () => void
  onNewGame: () => void
}

export function GameMenuDialog({ open, onClose, onRestart, onNewGame }: Props) {
  return (
    <AppDialog open={open} onClose={onClose}>
      <Button onClick={onRestart}>Restart</Button>
      <Button appearance="secondary" onClick={onNewGame} className="mt-3">
        New Game
      </Button>
      <Button appearance="secondary" onClick={onClose} className="mt-3">
        Resume Game
      </Button>
    </AppDialog>
  )
}
