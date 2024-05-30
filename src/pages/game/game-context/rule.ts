import { Point } from '@/types/point'

export const checkWinning = (points: Point[]) => {
  if (points.length === 3) return true
  return false
}
