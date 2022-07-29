import { render, screen, fireEvent } from '@testing-library/react'

import { Button } from '../Button'

describe('Button', () => {
  it('Should handle clicks correctly', async () => {
    const text = 'Button'
    const onClick = vi.fn()

    render(<Button onClick={onClick}>{text}</Button>)

    const button = await screen.findByText(text)
    fireEvent.click(button)

    expect(onClick).toHaveBeenCalledOnce()
  })

  it('Should render the small variant', () => {
    render(<Button size="small">Click me!</Button>)
    screen.getByText(/Click me!/)
  })

  it('Should render the medium variant', () => {
    render(<Button size="medium">Click me!</Button>)
    screen.getByText(/Click me!/)
  })

  it('Should render the large variant', () => {
    render(<Button size="large">Click me!</Button>)
    screen.getByText(/Click me!/)
  })
})
