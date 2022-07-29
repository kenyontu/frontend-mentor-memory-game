import { fireEvent, render, screen } from '@testing-library/react'

import { GameGrid } from '../index'
import { getCards } from '~/utils/memoryGame'

describe('GameGrid', () => {
  it('Should render a Number 4x4 grid', () => {
    const cards = getCards((4 * 4) / 2)

    render(
      <GameGrid
        cards={cards}
        onCardClick={vi.fn()}
        gridSize="4x4"
        theme="Numbers"
      />
    )

    expect(screen.getAllByTestId('grid-card')).toHaveLength(cards.length)
  })

  it('Should render a Number 6x6 grid', () => {
    const cards = getCards((6 * 6) / 2)

    render(
      <GameGrid
        cards={cards}
        onCardClick={vi.fn()}
        gridSize="6x6"
        theme="Numbers"
      />
    )

    expect(screen.getAllByTestId('grid-card')).toHaveLength(cards.length)
  })

  it('Should render an Icon 4x4 grid', () => {
    const cards = getCards((4 * 4) / 2)

    render(
      <GameGrid
        cards={cards}
        onCardClick={vi.fn()}
        gridSize="4x4"
        theme="Icons"
      />
    )

    expect(screen.getAllByTestId('grid-card')).toHaveLength(cards.length)
  })

  it('Should render an Icons 6x6 grid', () => {
    const cards = getCards((6 * 6) / 2)

    render(
      <GameGrid
        cards={cards}
        onCardClick={vi.fn()}
        gridSize="6x6"
        theme="Icons"
      />
    )

    expect(screen.getAllByTestId('grid-card')).toHaveLength(cards.length)
  })

  it('Should handle card click events', () => {
    const cards = getCards((6 * 6) / 2)
    const onCardClick = vi.fn()

    render(
      <GameGrid
        cards={cards}
        onCardClick={onCardClick}
        gridSize="6x6"
        theme="Icons"
      />
    )

    const cardElements = screen.getAllByTestId('grid-card')

    const indexesToTest = [0, 5, 10, 15, 20, 25, 30, 35]
    indexesToTest.forEach((index) => {
      fireEvent.click(cardElements[index])
      expect(onCardClick).toHaveBeenLastCalledWith(index)
    })
  })
})
