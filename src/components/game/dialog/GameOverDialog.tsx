import { ReactNode } from 'react'
import { Dialog } from '@headlessui/react'
import { Button } from '~/components/Button'
import { AppDialog } from '~/components/AppDialog'

type Props = {
  open: boolean
  title: string
  subtitle: string
  onRestart: () => void
  onSetupNewGame: () => void
  children: ReactNode
}

export function GameOverDialog({
  open,
  title,
  subtitle,
  onRestart,
  onSetupNewGame,
  children,
}: Props) {
  return (
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    <AppDialog open={open} onClose={() => {}}>
      <Dialog.Title className="mt-[0.45rem] text-center text-2xl font-bold text-neutral-800 sm:text-[3rem]">
        {title}
      </Dialog.Title>
      <p className="mt-[0.45rem] text-center text-sm font-bold text-neutral-500 sm:mt-[2rem] sm:text-[1.125rem]">
        {subtitle}
      </p>
      {children}

      <div className="flex flex-col sm:hidden">
        <Button onClick={onRestart} className="mt-6">
          Restart
        </Button>
        <Button
          onClick={onSetupNewGame}
          className="mt-4"
          appearance="secondary"
        >
          Setup New Game
        </Button>
      </div>

      <div className="mt-10 hidden gap-[0.85rem] sm:grid md:grid-cols-2">
        <Button size="small" onClick={onRestart}>
          Restart
        </Button>
        <Button size="small" onClick={onSetupNewGame} appearance="secondary">
          Setup New Game
        </Button>
      </div>
    </AppDialog>
  )
}
