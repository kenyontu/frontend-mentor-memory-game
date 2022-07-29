import { render, screen, fireEvent } from '@testing-library/react'

import { GameMenuDialog } from '../GameMenuDialog'
import { mockIntersectionObserver } from '~/test/utils'

describe('GameMenuDialog', () => {
  beforeAll(() => mockIntersectionObserver())

  it('Should not show the dialog when closed', () => {
    render(
      <GameMenuDialog
        open={false}
        onClose={vi.fn()}
        onRestart={vi.fn()}
        onNewGame={vi.fn()}
      />
    )

    expect(screen.queryByText(/Restart/)).not.toBeInTheDocument()
  })

  it('Should show the dialog when open', () => {
    render(
      <GameMenuDialog
        open
        onClose={vi.fn()}
        onRestart={vi.fn()}
        onNewGame={vi.fn()}
      />
    )

    expect(screen.queryByText(/Restart/)).toBeInTheDocument()
  })

  it('Should handle the close dialog event', () => {
    const onClose = vi.fn()

    const { container } = render(
      <GameMenuDialog
        open
        onClose={onClose}
        onRestart={vi.fn()}
        onNewGame={vi.fn()}
      />
    )

    fireEvent.keyDown(container, {
      key: 'Escape',
      code: 'Escape',
      charCode: 27,
    })

    expect(onClose).toHaveBeenCalledOnce()
  })

  it('Should handle button clicks correctly', () => {
    const onRestart = vi.fn()
    const onNewGame = vi.fn()
    const onClose = vi.fn()

    render(
      <GameMenuDialog
        open
        onClose={onClose}
        onRestart={onRestart}
        onNewGame={onNewGame}
      />
    )

    fireEvent.click(screen.getByText(/Restart/))
    expect(onRestart).toHaveBeenCalledOnce()

    fireEvent.click(screen.getByText(/New Game/))
    expect(onNewGame).toHaveBeenCalledOnce()

    fireEvent.click(screen.getByText(/Resume Game/))
    expect(onClose).toHaveBeenCalledOnce()
  })
})
