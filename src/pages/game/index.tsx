import { Container } from '@/components'
import { withGameContext } from './game-context'
import { GameBoard } from './game-board'
import { ScoreBoard } from './score-board'

export const Game = withGameContext(() => (
  <Container className="py-16 h-full flex flex-col items-center gap-10 text-white overflow-auto">
    <ScoreBoard />
    <GameBoard />
  </Container>
))
