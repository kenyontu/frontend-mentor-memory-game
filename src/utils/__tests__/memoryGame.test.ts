import { Settings } from '~/config'
import {
  getPairCount,
  getCards,
  randomizeCards,
  createGame,
  getPlayers,
} from '../memoryGame'

describe('createGame', () => {
  it('Should create a single player 4x4 game', () => {
    const settings: Settings = {
      theme: 'Numbers',
      players: '1',
      grid: '4x4',
    }

    const result = createGame(settings)

    expect(result.players).toHaveLength(1)
    expect(result.currentPlayer).toBe(0)
    expect(result.cards).toHaveLength(4 * 4)
    expect(result.pairsLeft).toBe((4 * 4) / 2)
    expect(result.revealed).toHaveLength(0)
    expect(result.moves).toBe(0)
  })

  it('Should create a multi playere 6x6 game', () => {
    const settings: Settings = {
      theme: 'Icons',
      players: '4',
      grid: '6x6',
    }

    const result = createGame(settings)

    expect(result.players).toHaveLength(4)
    expect(result.currentPlayer).toBe(0)
    expect(result.cards).toHaveLength(6 * 6)
    expect(result.pairsLeft).toBe((6 * 6) / 2)
    expect(result.revealed).toHaveLength(0)
    expect(result.moves).toBe(0)
  })
})

describe('getPairCount', () => {
  it('Should return the correct pair count for a 4x4 grid', () => {
    const settings: Settings = {
      theme: 'Numbers',
      players: '1',
      grid: '4x4',
    }

    const result = getPairCount(settings)

    expect(result).toBe((4 * 4) / 2)
  })

  it('Should return the correct pair count for a 6x6 grid', () => {
    const settings: Settings = {
      theme: 'Numbers',
      players: '1',
      grid: '6x6',
    }

    const result = getPairCount(settings)

    expect(result).toBe((6 * 6) / 2)
  })
})

describe('getPlayers', () => {
  it('Should return a single player for a single player game', () => {
    const settings: Settings = {
      theme: 'Numbers',
      players: '1',
      grid: '4x4',
    }

    const result = getPlayers(settings)
    expect(result).toHaveLength(1)

    expect(result[0].name).toBe('1')
    expect(result[0].points).toBe(0)
  })

  it('Should return multiple players for a multi player game', () => {
    const settings: Settings = {
      theme: 'Numbers',
      players: '4',
      grid: '4x4',
    }

    const result = getPlayers(settings)
    expect(result).toHaveLength(4)

    const playerNames = ['1', '2', '3', '4']
    playerNames.forEach((name, index) => {
      expect(result[index].name).toBe(name)
      expect(result[index].points).toBe(0)
    })
  })
})

test('getCards', () => {
  expect(getCards((4 * 4) / 2)).toHaveLength(4 * 4)
  expect(getCards((6 * 6) / 2)).toHaveLength(6 * 6)
})

test('randomizeCards', () => {
  const cards = getCards(8)
  const randomized = randomizeCards(cards)

  let hasDifference = false

  for (let i = 0; i < cards.length; i++) {
    if (cards[i].id !== randomized[i].id) hasDifference = true
  }

  expect(hasDifference).toBeTruthy()
})
