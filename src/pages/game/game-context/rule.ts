import { Point } from '@/types/point'
import { INLINE_CELLS_TO_WIN } from '.'

const magicSquare3x3: number[][] = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8]
]
const magicSum = 15

export const checkWinning = (points: Point[]) => {
  if (points.length < INLINE_CELLS_TO_WIN) {
    return false
  }
  for (let i = 0; i < points.length - 2; i++) {
    for (let j = i + 1; j < points.length - 1; j++) {
      for (let k = j + 1; k < points.length; k++) {
        if (
          magicSquare3x3[points[i].x][points[i].y] +
            magicSquare3x3[points[j].x][points[j].y] +
            magicSquare3x3[points[k].x][points[k].y] ===
          magicSum
        ) {
          return true
        }
      }
    }
  }
  return false
}
