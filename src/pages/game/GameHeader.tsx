import { useEffect, useState } from 'react'
import { Button } from '~/components/Button'
import { GameMenuDialog } from '~/components/game/dialog'

type Props = {
  onRestart: () => void
  goToSettings: () => void
}

export function GameHeader({ onRestart, goToSettings }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const onResize = () => isMenuOpen && setIsMenuOpen(false)

    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [isMenuOpen])

  return (
    <header className="flex items-center justify-between">
      <h1 className="text-2xl font-bold text-neutral-800 sm:text-[2.5rem]">
        memory
      </h1>

      <div className="hidden sm:block">
        <Button
          className="mr-4"
          size="small"
          onClick={() => {
            setIsMenuOpen(false)
            onRestart()
          }}
        >
          Restart
        </Button>
        <Button size="small" appearance="secondary" onClick={goToSettings}>
          New Game
        </Button>
      </div>

      <div className="sm:hidden">
        <Button size="small" onClick={() => setIsMenuOpen(true)}>
          Menu
        </Button>

        <GameMenuDialog
          open={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          onRestart={onRestart}
          onNewGame={goToSettings}
        />
      </div>
    </header>
  )
}
