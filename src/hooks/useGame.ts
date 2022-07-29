import { Reducer, useEffect, useReducer, useState } from 'react'
import produce from 'immer'
import { revealWaitTime, Settings } from '~/config'
import { createGame, GameState } from '~/utils/memoryGame'

type State = GameState

type Action =
  | {
      type: 'revealCard'
      index: number
    }
  | { type: 'finishTurn' }
  | {
      type: 'newGame'
      settings: Settings
    }
  | { type: 'hideCards' }

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'revealCard':
      return produce(state, (draft) => {
        draft.cards[action.index].state = 'revealed'
        draft.revealed.push(action.index)
        draft.moves++
      })

    case 'hideCards':
      return produce(state, (draft) => {
        for (let i = 0; i < draft.cards.length; i++) {
          draft.cards[i].state = 'hidden'
        }
      })

    case 'finishTurn':
      return produce(state, (draft) => {
        const revealedCard1 = draft.cards[state.revealed[0]]
        const revealedCard2 = draft.cards[state.revealed[1]]

        if (revealedCard1.value === revealedCard2.value) {
          revealedCard1.state = 'visible'
          revealedCard2.state = 'visible'
          draft.players[draft.currentPlayer].points++
          draft.pairsLeft--
        } else {
          revealedCard1.state = 'hidden'
          revealedCard2.state = 'hidden'
          draft.currentPlayer =
            draft.currentPlayer === draft.players.length - 1
              ? 0
              : draft.currentPlayer + 1
        }

        draft.revealed = []
      })

    case 'newGame': {
      return createGame(action.settings)
    }

    default:
      return state
  }
}

export function useGame(settings: Settings) {
  const [state, dispatch] = useReducer(reducer, createGame(settings))
  const [isLocked, setIsLocked] = useState(false)

  useEffect(() => {
    if (state.revealed.length === 2) {
      setIsLocked(true)

      const timeout = setTimeout(() => {
        dispatch({ type: 'finishTurn' })
        setIsLocked(false)
      }, revealWaitTime)

      return () => {
        clearTimeout(timeout)
        setIsLocked(false)
      }
    }
  }, [state.revealed.length])

  const startNewGame = () => dispatch({ type: 'newGame', settings })
  const revealCard = (index: number) => dispatch({ type: 'revealCard', index })

  return { state, isLocked, startNewGame, revealCard }
}
