import { Player } from '@/types/player'
import { Point } from '@/types/point'

export type SetterContextValue = {
  setScoreX: React.Dispatch<React.SetStateAction<number>>
  setScoreO: React.Dispatch<React.SetStateAction<number>>
  setXMoves: React.Dispatch<React.SetStateAction<Point[]>>
  setOMoves: React.Dispatch<React.SetStateAction<Point[]>>
}

export type ScoreContextValue = {
  scoreX: number
  scoreO: number
}

export type PlayerMoveContextValue = {
  turn: Player.o | Player.x
  xMoves: Point[]
  oMoves: Point[]
}

export const initialSetterValue: SetterContextValue = {
  setScoreX: () => undefined,
  setScoreO: () => undefined,
  setXMoves: () => undefined,
  setOMoves: () => undefined
}

export const initialScoreValue: ScoreContextValue = {
  scoreX: 0,
  scoreO: 0
}

export const initialPlayerMoveValue: PlayerMoveContextValue = {
  turn: Player.o,
  xMoves: [],
  oMoves: []
}
