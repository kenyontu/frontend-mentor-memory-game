import { useEffect, useState } from 'react'

import { Settings } from '~/config'
import { useTimer } from '~/hooks/useTimer'
import { useGame } from '~/hooks/useGame'
import { SinglePlayerGameOverDialog } from '~/components/game/dialog'
import { GameInfo } from '~/components/game/gameInfo'
import { GameGrid } from '~/components/game/gameGrid'
import { GameHeader } from './GameHeader'

type DialogState = {
  seconds: number
  moves: number
}

type Props = {
  settings: Settings
  goToSettings: () => void
}

export function SinglePlayerGame({ settings, goToSettings }: Props) {
  const [isGameOverDialogOpen, setIsGameOverDialogOpen] = useState(false)
  const [dialogState, setDialogState] = useState<DialogState>({
    seconds: 0,
    moves: 0,
  })
  const { timerSeconds, setIsTimerRunning, resetTimer } = useTimer()

  const { state, isLocked, startNewGame, revealCard } = useGame(settings)

  useEffect(() => {
    if (state.pairsLeft === 0) {
      setIsTimerRunning(false)
      setDialogState({ seconds: timerSeconds, moves: state.moves })
      setIsGameOverDialogOpen(true)
    }
  }, [state.pairsLeft, state.moves, timerSeconds, setIsTimerRunning])

  const onRestart = () => {
    resetTimer()
    startNewGame()
    setIsGameOverDialogOpen(false)
  }

  return (
    <>
      <SinglePlayerGameOverDialog
        open={isGameOverDialogOpen}
        seconds={dialogState.seconds}
        moves={dialogState.moves}
        onRestart={onRestart}
        onSetupNewGame={goToSettings}
      />

      <GameHeader onRestart={onRestart} goToSettings={goToSettings} />

      <div className="w-grid sm:w-grid-sm md:w-grid-md mx-auto flex flex-1 flex-col sm:px-[2rem] sm:pb-[0.7rem] md:px-[4.6rem]">
        <main className="flex flex-1 flex-col justify-center">
          <GameGrid
            cards={state.cards}
            gridSize={settings.grid}
            onCardClick={(index) => !isLocked && revealCard(index)}
            theme={settings.theme}
          />
        </main>

        <footer>
          <GameInfo seconds={timerSeconds} moves={state.moves} />
        </footer>
      </div>
    </>
  )
}
