export type Point = {
  x: number
  y: number
}

export type Direction = '-' | '|' | '/' | '\\' | undefined

export const parsePoints = (
  p1: Point,
  p2: Point
): [Direction, number, number] => {
  let dir: Direction
  const d_x1x2 = p1.x - p2.x
  const d_y1y2 = p1.y - p2.y
  if (Math.abs(d_x1x2) === Math.abs(d_y1y2)) {
    if (d_x1x2 * d_y1y2 > 0) {
      dir = '\\'
    } else if (d_x1x2 * d_y1y2 < 0) {
      dir = '/'
    }
  } else if (p1.x === p2.x) {
    dir = '|'
  } else if (p1.y === p2.y) {
    dir = '-'
  }
  return [dir, d_x1x2, d_y1y2]
}

export const checkLinearContinousPoints = (
  points: Point[],
  pointQuantity: number
) => {
  if (points.length < 2) {
    return false
  }
  const [dir, d_x1x2, d_y1y2] = parsePoints(points[1], points[0])
  if (
    !dir ||
    Math.abs(d_x1x2) > pointQuantity - 1 ||
    Math.abs(d_y1y2) > pointQuantity - 1
  ) {
    return false
  }
  let maxX = d_x1x2
  let maxY = d_y1y2
  let minX = d_x1x2
  let minY = d_y1y2

  for (let i = 2; i < points.length; i++) {
    const [_dir, _d_x1x2, _d_y1y2] = parsePoints(points[i], points[0])
    if (!_dir || _dir !== dir) {
      return false
    }
    if (_d_x1x2 > maxX) {
      maxX = _d_x1x2
    }
    if (_d_y1y2 > maxY) {
      maxY = _d_y1y2
    }
    if (_d_x1x2 < minX) {
      minX = _d_x1x2
    }
    if (_d_y1y2 < minY) {
      minY = _d_y1y2
    }
    if (maxX - minX > pointQuantity - 1 || maxY - minY > pointQuantity - 1) {
      return false
    }
  }
  return true
}
