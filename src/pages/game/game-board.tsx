import { Cell } from '@/components'
import React from 'react'
import {
  GAME_WIDTH,
  usePlayerMoveContext,
  useSetterContext
} from './game-context'
import { Player } from '@/types/player'
import { CircleIcon, CrossIcon } from '@/components/icons'
import { useCallBackRef } from '@/hooks/use-callback-ref'

const CellMemo = React.memo(Cell)

export const GameBoard = () => {
  const { oMoves, xMoves, turn } = usePlayerMoveContext()
  const { setOMoves, setXMoves } = useSetterContext()

  const selectCell = useCallBackRef((x: number, y: number) => {
    if (turn === Player.o) {
      setOMoves((moves) => [...moves, { x, y }])
    } else if (turn === Player.x) {
      setXMoves((moves) => [...moves, { x, y }])
    }
  })

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
          <CellMemo
            key={`${x}-${y}`}
            x={x}
            y={y}
            onClick={selectCell}
            playerSeleclted={playerSelected}
          />
        )
      })
    })
    return cells
  }
  return (
    <>
      <div className="flex items-center gap-2 text-2xl">
        <span>Current turn:</span>
        {turn === Player.o && <CircleIcon className="h-10 w-10" />}
        {turn === Player.x && <CrossIcon className="h-10 w-10" />}
      </div>
      <div
        className="grid place-self-center w-full justify-center no-scrollbar overflow-auto"
        style={{
          gridTemplateColumns: `repeat(${GAME_WIDTH}, minmax(auto, 120px))`
        }}
      >
        {generateCells()}
      </div>
    </>
  )
}
