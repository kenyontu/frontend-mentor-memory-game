import { render, screen, fireEvent } from '@testing-library/react'

import { mockIntersectionObserver } from '~/test/utils'
import { AppDialog } from '../AppDialog'

describe('AppDialog', () => {
  beforeAll(() => mockIntersectionObserver())

  it('Should be visible when open', () => {
    render(
      <AppDialog open={true} onClose={vi.fn()}>
        <span>dialog text</span>
      </AppDialog>
    )

    expect(screen.queryByText(/dialog text/)).toBeInTheDocument()
  })

  it('Should not be visible when closed', () => {
    render(
      <AppDialog open={false} onClose={vi.fn()}>
        <span>dialog text</span>
      </AppDialog>
    )

    expect(screen.queryByText(/dialog text/)).not.toBeInTheDocument()
  })

  it('Should fire onClose when the dialog is closed', async () => {
    const onClose = vi.fn()

    const { container } = render(
      <AppDialog open={true} onClose={onClose}>
        <span>dialog text</span>
      </AppDialog>
    )

    fireEvent.keyDown(container, {
      key: 'Escape',
      code: 'Escape',
      charCode: 27,
    })

    expect(onClose).toHaveBeenCalledOnce()
  })
})
