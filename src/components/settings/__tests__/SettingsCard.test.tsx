import { fireEvent, render, screen, within } from '@testing-library/react'

import { SettingsCard } from '../SettingsCard'

describe('SettingsCard', () => {
  it('Should call onDone with the selected settings', async () => {
    const onDone = vi.fn()

    render(<SettingsCard onDone={onDone} />)

    const themeGroup = await screen.findByLabelText(/theme/)
    fireEvent.click(within(themeGroup).getByLabelText(/icon/i))

    const playersGroup = await screen.findByLabelText(/players/i)
    fireEvent.click(within(playersGroup).getByLabelText(/4/))

    const gridGroup = await screen.findByLabelText(/grid/)
    fireEvent.click(within(gridGroup).getByLabelText(/6x6/))

    fireEvent.click(screen.getByText(/start game/i))

    expect(onDone).toHaveBeenCalledOnce()
    expect(onDone).toHaveBeenCalledWith({
      theme: 'Icons',
      players: '4',
      grid: '6x6',
    })
  })
})
