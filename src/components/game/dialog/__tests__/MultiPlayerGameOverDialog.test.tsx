import { render, screen, within } from '@testing-library/react'

import * as dialog from '../GameOverDialog'
import { MultiPlayerGameOverDialog } from '../MultiPlayerGameOverDialog'
import { mockIntersectionObserver } from '~/test/utils'

const gameOverDialogSpy = vi.spyOn(dialog, 'GameOverDialog')

describe('MultiPlayerGameOverDialog', () => {
  beforeAll(() => mockIntersectionObserver())

  it('Should not show the dialog when closed', () => {
    render(
      <MultiPlayerGameOverDialog
        open={false}
        onRestart={vi.fn()}
        onSetupNewGame={vi.fn()}
        players={[
          { name: '1', points: 1 },
          { name: '2', points: 2 },
        ]}
      />
    )

    expect(screen.queryByText(/Player 2/)).not.toBeInTheDocument()
  })

  it('Should show a single winner', () => {
    render(
      <MultiPlayerGameOverDialog
        open
        onRestart={vi.fn()}
        onSetupNewGame={vi.fn()}
        players={[
          { name: '1', points: 1 },
          { name: '2', points: 2 },
        ]}
      />
    )

    expect(screen.queryByText(/Player 2 Wins!/)).toBeInTheDocument()

    const playerResults = screen.getAllByRole('listitem')
    expect(playerResults.length).toBe(2)

    within(playerResults[0]).getByText(/Player 2 \(Winner!\)/)
    within(playerResults[0]).getByText(/2 Pairs/)

    within(playerResults[1]).getByText(/Player 1/)
    within(playerResults[1]).getByText(/1 Pair/)
  })

  it('Should show multiple winners', () => {
    render(
      <MultiPlayerGameOverDialog
        open
        onRestart={vi.fn()}
        onSetupNewGame={vi.fn()}
        players={[
          { name: '1', points: 4 },
          { name: '2', points: 0 },
          { name: '3', points: 1 },
          { name: '4', points: 4 },
        ]}
      />
    )

    expect(screen.queryByText(/It's a tie!/)).toBeInTheDocument()

    const playerResults = screen.getAllByRole('listitem')
    expect(playerResults.length).toBe(4)

    within(playerResults[0]).getByText(/Player 1 \(Winner!\)/)
    within(playerResults[0]).getByText(/4 Pairs/)

    within(playerResults[1]).getByText(/Player 4 \(Winner!\)/)
    within(playerResults[1]).getByText(/4 Pairs/)

    within(playerResults[2]).getByText(/Player 3/)
    within(playerResults[2]).getByText(/1 Pair/)

    within(playerResults[3]).getByText(/Player 2/)
    within(playerResults[3]).getByText(/No Pair/)
  })

  it('Should repass the event handlers to the GameOverDialog component', () => {
    gameOverDialogSpy.mockClear()

    const onRestart = vi.fn()
    const onSetupNewGame = vi.fn()

    render(
      <MultiPlayerGameOverDialog
        open
        onRestart={onRestart}
        onSetupNewGame={onSetupNewGame}
        players={[
          { name: '1', points: 4 },
          { name: '2', points: 0 },
          { name: '3', points: 1 },
          { name: '4', points: 4 },
        ]}
      />
    )

    expect(gameOverDialogSpy).toHaveBeenCalled()
    const gameOverDialogProps = gameOverDialogSpy.mock.lastCall?.[0]
    expect(gameOverDialogProps?.onRestart).toEqual(onRestart)
    expect(gameOverDialogProps?.onSetupNewGame).toEqual(onSetupNewGame)
  })
})
