import { Player } from '@/types/player'
import { twMerge } from 'tailwind-merge'
import { CircleIcon, CrossIcon } from './icons'

type CellProps = {
  playerSeleclted?: Player
  onClick?: () => void
}

export const Cell = (props: CellProps) => {
  return (
    <div
      className={twMerge(
        'border border-white transition-shadow cursor-pointer text-white grid place-items-center',
        props.playerSeleclted
          ? 'pointer-events-none'
          : 'hover:shadow-[0_0_6px_2px_white]'
      )}
      onClick={props.onClick}
    >
      <div
        className={twMerge(
          'h-4/6 w-4/6 scale-0 transition-transform',
          props.playerSeleclted && 'scale-100'
        )}
      >
        {props.playerSeleclted === Player.o && (
          <CircleIcon className="h-full w-full" />
        )}
        {props.playerSeleclted === Player.x && (
          <CrossIcon className="h-full w-full" />
        )}
      </div>
    </div>
  )
}
