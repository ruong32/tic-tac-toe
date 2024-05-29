import { Cell } from '@/components'
import React from 'react'
import {
  CELL_WIDTH,
  GAME_WIDTH,
  usePlayerMoveContext,
  useSetterContext
} from './game-context'
import { Player } from '@/types/player'

export const GameBoard = () => {
  const { oMoves, xMoves, turn } = usePlayerMoveContext()
  const { setOMoves, setXMoves } = useSetterContext()
  const generateCells = () => {
    const cells: React.ReactNode[] = []
    Array.from(Array(GAME_WIDTH).keys()).forEach((y) => {
      Array.from(Array(GAME_WIDTH).keys()).forEach((x) => {
        const playerSelected = (() => {
          if (oMoves.some((move) => move.x === x && move.y === y)) {
            return Player.o
          }
          if (xMoves.some((move) => move.x === x && move.y === y)) {
            return Player.x
          }
        })()
        cells.push(
          <Cell
            key={`${x}-${y}`}
            onClick={() => {
              if (turn === Player.o) {
                setOMoves((moves) => [...moves, { x, y }])
              } else if (turn === Player.x) {
                setXMoves((moves) => [...moves, { x, y }])
              }
            }}
            playerSeleclted={playerSelected}
          />
        )
      })
    })
    return cells
  }
  return (
    <div
      className="grid place-self-center rounded-2xl shadow-[inset_0_0_0_1px_white] overflow-hidden"
      style={{
        gridTemplateColumns: `repeat(${GAME_WIDTH}, ${CELL_WIDTH}px)`,
        gridAutoRows: `${CELL_WIDTH}px`
      }}
    >
      {generateCells()}
    </div>
  )
}
