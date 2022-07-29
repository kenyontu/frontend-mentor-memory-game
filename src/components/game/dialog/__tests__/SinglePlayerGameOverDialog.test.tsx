import { render, screen, within } from '@testing-library/react'

import * as dialog from '../GameOverDialog'
import { mockIntersectionObserver } from '~/test/utils'
import { SinglePlayerGameOverDialog } from '../SinglePlayerGameOverDialog'

const gameOverDialogSpy = vi.spyOn(dialog, 'GameOverDialog')

describe('SinglePlayerGameOverDialog', () => {
  beforeAll(() => mockIntersectionObserver())

  it('Should not be visible when closed', () => {
    render(
      <SinglePlayerGameOverDialog
        open={false}
        seconds={201}
        moves={26}
        onRestart={vi.fn()}
        onSetupNewGame={vi.fn()}
      />
    )

    expect(screen.queryByText(/You did it!/)).not.toBeInTheDocument()
  })

  it('Should display the dialog values correctly', () => {
    render(
      <SinglePlayerGameOverDialog
        open
        seconds={201}
        moves={26}
        onRestart={vi.fn()}
        onSetupNewGame={vi.fn()}
      />
    )

    const infoList = screen.getAllByRole('listitem')
    within(infoList[0]).getByText(/3:21/)
    within(infoList[1]).getByText(/26/)
  })

  it('Should repass the event handlers to the GameOverDialog component', () => {
    gameOverDialogSpy.mockClear()

    const onRestart = vi.fn()
    const onSetupNewGame = vi.fn()

    render(
      <SinglePlayerGameOverDialog
        open
        seconds={201}
        moves={26}
        onRestart={onRestart}
        onSetupNewGame={onSetupNewGame}
      />
    )

    expect(gameOverDialogSpy).toHaveBeenCalled()
    const gameOverDialogProps = gameOverDialogSpy.mock.lastCall?.[0]
    expect(gameOverDialogProps?.onRestart).toEqual(onRestart)
    expect(gameOverDialogProps?.onSetupNewGame).toEqual(onSetupNewGame)
  })
})
