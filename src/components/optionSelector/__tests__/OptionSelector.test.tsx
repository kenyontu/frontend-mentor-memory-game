import { fireEvent, render, screen } from '@testing-library/react'

import { OptionSelector } from '../'

describe('OptionSelector', () => {
  it('Should handle changes correctly', async () => {
    const onChange = vi.fn()
    const options = ['1', '2', '3', '4']

    render(
      <OptionSelector
        name="number-of-players"
        options={options}
        value={options[0]}
        onChange={onChange}
        groupAriaLabel="Select number of players"
      />
    )

    const option2Btn = await screen.findByText(options[1])
    fireEvent.click(option2Btn)

    expect(onChange).toHaveBeenCalledWith(options[1])
  })
})
