import { useEffect, useState } from 'react'

import { Settings } from '~/config'
import {
  MultiPlayerGameOverDialog,
  GameMenuDialog,
} from '~/components/game/dialog'
import { PlayerList } from '~/components/game/playerList'
import { useGame } from '~/hooks/useGame'
import { GameHeader } from './GameHeader'
import { GameGrid } from '~/components/game/gameGrid'
import { Player } from '~/utils/memoryGame'

type DialogState = {
  players: Player[]
}

type Props = {
  settings: Settings
  goToSettings: () => void
}

export function MultiPlayerGame({ settings, goToSettings }: Props) {
  const [isGameOverDialogOpen, setIsGameOverDialogOpen] = useState(false)
  const [isMenuDialogOpen, setIsMenuDialogOpen] = useState(false)
  const { state, isLocked, startNewGame, revealCard } = useGame(settings)
  const [dialogState, setDialogState] = useState<DialogState>({
    players: state.players,
  })

  useEffect(() => {
    if (state.pairsLeft === 0) {
      setDialogState({ players: state.players })
      setIsGameOverDialogOpen(true)
    }
  }, [state.pairsLeft, state.players])

  const onRestart = () => {
    setIsGameOverDialogOpen(false)
    setIsMenuDialogOpen(false)
    startNewGame()
  }

  return (
    <>
      <GameMenuDialog
        open={isMenuDialogOpen}
        onClose={() => setIsMenuDialogOpen(false)}
        onRestart={onRestart}
        onNewGame={goToSettings}
      />

      <MultiPlayerGameOverDialog
        open={isGameOverDialogOpen}
        onRestart={onRestart}
        onSetupNewGame={goToSettings}
        players={dialogState.players}
      />

      <GameHeader onRestart={onRestart} goToSettings={goToSettings} />

      <main className="w-grid sm:w-grid-sm md:w-grid-md mx-auto flex flex-1 flex-col justify-center sm:px-[4.6rem]">
        <GameGrid
          cards={state.cards}
          gridSize={settings.grid}
          onCardClick={(index) => !isLocked && revealCard(index)}
          theme={settings.theme}
        />
      </main>

      <footer>
        <PlayerList
          players={state.players}
          currentPlayer={state.currentPlayer}
        />
      </footer>
    </>
  )
}
