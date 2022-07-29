import { fireEvent, render, screen } from '@testing-library/react'

import { GameOverDialog } from '../GameOverDialog'
import { mockIntersectionObserver } from '~/test/utils'

describe('GameOverDialog', () => {
  beforeAll(() => mockIntersectionObserver())

  it('Should not be visible when closed', () => {
    render(
      <GameOverDialog
        open={false}
        title="Dialog title"
        subtitle="Dialog subtitle"
        onRestart={vi.fn()}
        onSetupNewGame={vi.fn()}
      >
        <span>Dialog content</span>
      </GameOverDialog>
    )

    expect(screen.queryByText(/Dialog title/)).not.toBeInTheDocument()
  })

  it('Should render the dialog values correctly', () => {
    render(
      <GameOverDialog
        open
        title="Dialog title"
        subtitle="Dialog subtitle"
        onRestart={vi.fn()}
        onSetupNewGame={vi.fn()}
      >
        <span>Dialog content</span>
      </GameOverDialog>
    )

    screen.getByText(/Dialog title/)
    screen.getByText(/Dialog subtitle/)
    screen.getByText(/Dialog content/)
  })

  it('Should handle the event listeners', () => {
    const onRestart = vi.fn()
    const onSetupNewGame = vi.fn()

    render(
      <GameOverDialog
        open
        title="Dialog title"
        subtitle="Dialog subtitle"
        onRestart={onRestart}
        onSetupNewGame={onSetupNewGame}
      >
        <span>Dialog content</span>
      </GameOverDialog>
    )

    screen
      .getAllByText(/Restart/)
      .forEach((restartBtn) => fireEvent.click(restartBtn))
    expect(onRestart).toHaveBeenCalledTimes(2)

    screen
      .getAllByText(/Setup New Game/)
      .forEach((setupNewGameBtn) => fireEvent.click(setupNewGameBtn))
    expect(onSetupNewGame).toHaveBeenCalledTimes(2)
  })
})
