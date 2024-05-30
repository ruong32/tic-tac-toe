import React from 'react'
import {
  PlayerMoveContextValue,
  ScoreContextValue,
  SetterContextValue
} from './type'
import { PlayerMoveContext, ScoreContext, SetterContext } from './context'
import { Point } from '@/types/point'
import { Player } from '@/types/player'
import { checkWinning } from './rule'
import { ResultDialog } from '../result-dialog'

export const GAME_WIDTH = 3
export const CELL_WIDTH = 120
export const INLINE_CELLS_TO_WIN = 3

const GameProvider = ({ children }: { children?: React.ReactNode }) => {
  const [scoreX, setScoreX] = React.useState(0)
  const [scoreO, setScoreO] = React.useState(0)
  const [xMoves, setXMoves] = React.useState<Point[]>([])
  const [oMoves, setOMoves] = React.useState<Point[]>([])
  const [winner, setWinner] = React.useState<Player>()
  const turn = React.useRef<Player>(Player.o)

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
    if (turn.current === Player.o) {
      turn.current = Player.x
    } else {
      turn.current = Player.o
    }
    return { turn: turn.current, xMoves, oMoves }
  }, [xMoves, oMoves])

  React.useEffect(() => {
    if (checkWinning(xMoves)) {
      setWinner(Player.x)
      setScoreX((score) => score + 1)
      turn.current = Player.x
    } else if (checkWinning(oMoves)) {
      setWinner(Player.o)
      setScoreO((score) => score + 1)
      turn.current = Player.o
    } else if (oMoves.length + xMoves.length >= GAME_WIDTH * GAME_WIDTH) {
      setXMoves([])
      setOMoves([])
      if (turn.current === Player.o) {
        turn.current = Player.x
      } else {
        turn.current = Player.o
      }
    }
  }, [xMoves, oMoves])

  return (
    <SetterContext.Provider value={setterValue}>
      <ScoreContext.Provider value={scoreValue}>
        <PlayerMoveContext.Provider value={playerMoveValue}>
          {children}
          <ResultDialog
            winner={winner}
            onOpenChange={(open) => {
              if (!open) {
                setWinner(undefined)
                setOMoves([])
                setXMoves([])
              }
            }}
          />
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
export * from './rule'
