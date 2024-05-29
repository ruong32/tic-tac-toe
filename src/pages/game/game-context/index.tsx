import React from 'react'
import {
  PlayerMoveContextValue,
  ScoreContextValue,
  SetterContextValue
} from './type'
import { PlayerMoveContext, ScoreContext, SetterContext } from './context'
import { Point } from '@/types/point'
import { Player } from '@/types/player'

export const GAME_WIDTH = 3
export const CELL_WIDTH = 120

const GameProvider = ({ children }: { children?: React.ReactNode }) => {
  const [scoreX, setScoreX] = React.useState(0)
  const [scoreO, setScoreO] = React.useState(0)
  const [xMoves, setXMoves] = React.useState<Point[]>([])
  const [oMoves, setOMoves] = React.useState<Point[]>([])

  const setterValue: SetterContextValue = React.useMemo(
    () => ({ setScoreX, setScoreO, setXMoves, setOMoves }),
    []
  )

  const scoreValue: ScoreContextValue = React.useMemo(
    () => ({
      scoreX,
      scoreO
    }),
    [scoreX, scoreO]
  )

  const playerMoveValue: PlayerMoveContextValue = React.useMemo(() => {
    let currentTurn = Player.o
    if (oMoves.length > xMoves.length) {
      currentTurn = Player.x
    }
    return { turn: currentTurn, xMoves, oMoves }
  }, [xMoves, oMoves])

  return (
    <SetterContext.Provider value={setterValue}>
      <ScoreContext.Provider value={scoreValue}>
        <PlayerMoveContext.Provider value={playerMoveValue}>
          {children}
        </PlayerMoveContext.Provider>
      </ScoreContext.Provider>
    </SetterContext.Provider>
  )
}

export function withGameContext(Component: React.ComponentType) {
  return (props: React.ComponentProps<typeof Component>) => (
    <GameProvider>
      <Component {...props} />
    </GameProvider>
  )
}

export * from './context'
