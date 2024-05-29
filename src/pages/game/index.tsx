import { Container } from '@/components'
import { withGameContext } from './game-context'

export const Game = withGameContext(() => (
  <Container className="py-6 h-full flex flex-col">game</Container>
))
