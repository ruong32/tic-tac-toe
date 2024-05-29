import { CircleIcon, CrossIcon } from '@/components/icons'
import { useScoreContext } from './game-context'

export const ScoreBoard = () => {
  const { scoreO, scoreX } = useScoreContext()
  return (
    <div className="flex p-4 border border-white rounded-lg items-center text-5xl gap-4">
      <div className="flex items-center flex-col px-4 gap-4">
        <CircleIcon className="h-20 w-20" />
        <span>{scoreO}</span>
      </div>
      <div className="h-full w-[1px] bg-white" />
      <div className="flex items-center flex-col px-4 gap-4">
        <CrossIcon className="h-20 w-20" />
        <span>{scoreX}</span>
      </div>
    </div>
  )
}
