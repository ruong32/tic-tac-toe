import { Point, checkLinearContinousPoints } from '@/types/point'
import { INLINE_CELLS_TO_WIN } from '.'

export const checkWinning = (points: Point[]) => {
  const check = (pos: number, currentpoints: Point[]) => {
    if (currentpoints.length === INLINE_CELLS_TO_WIN) {
      if (checkLinearContinousPoints(currentpoints, INLINE_CELLS_TO_WIN)) {
        return true
      }
      return false
    }
    if (pos >= points.length - 1) {
      return false
    }
    for (
      let i = pos + 1;
      i < points.length - INLINE_CELLS_TO_WIN + currentpoints.length + 1;
      i++
    ) {
      if (check(i, [...currentpoints, points[i]])) {
        return true
      }
    }
    return false
  }
  return check(-1, [])
}
