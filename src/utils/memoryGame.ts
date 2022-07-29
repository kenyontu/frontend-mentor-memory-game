import { Settings } from '~/config'

export type Card = {
  id: string
  value: string
  state: 'hidden' | 'revealed' | 'visible'
}

export type Player = {
  name: string
  points: number
}

export type GameState = {
  players: Player[]
  currentPlayer: number
  cards: Card[]
  pairsLeft: number
  revealed: number[]
  moves: number
}

export function createGame(settings: Settings): GameState {
  const pairCount = getPairCount(settings)

  return {
    players: getPlayers(settings),
    currentPlayer: 0,
    cards: randomizeCards(getCards(pairCount)),
    pairsLeft: pairCount,
    revealed: [],
    moves: 0,
  }
}

export function getPairCount(settings: Settings) {
  switch (settings.grid) {
    case '4x4':
      return (4 * 4) / 2
    case '6x6':
      return (6 * 6) / 2
  }
}

export function getPlayers(settings: Settings) {
  const players: Player[] = []
  const playerCount = parseInt(settings.players)

  for (let i = 1; i <= playerCount; i++) {
    players.push({ name: '' + i, points: 0 })
  }

  return players
}

export function getCards(pairs: number): Card[] {
  const cards: Card[] = []
  for (let i = 0; i < pairs; i++) {
    const value = i.toString()
    cards.push({
      id: value + '-1',
      value,
      state: 'hidden',
    })
    cards.push({
      id: value + '-2',
      value,
      state: 'hidden',
    })
  }

  return cards
}

export function randomizeCards(cards: Card[]) {
  const copy = [...cards]

  const randomized: Card[] = []

  let i = copy.length
  while (i > 0) {
    const rIndex = Math.floor(Math.random() * i)
    randomized.push(copy[rIndex])
    copy.splice(rIndex, 1)
    i--
  }

  return randomized
}
