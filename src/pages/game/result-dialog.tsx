import { CircleIcon, CrossIcon } from '@/components/icons'
import { Player } from '@/types/player'
import * as Dialog from '@radix-ui/react-dialog'
import { twMerge } from 'tailwind-merge'

type ResultDialogProps = {
  winner?: Player
  onOpenChange?: (open: boolean) => void
}

export const ResultDialog = (props: ResultDialogProps) => {
  return (
    <Dialog.Root open={!!props.winner} onOpenChange={props.onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-x-0 inset-y-0 bg-black/30" />
        <Dialog.Content
          className={twMerge(
            'fixed bg-gray-700 text-white flex z-10 flex-col justify-center items-center',
            'w-[20rem] max-w-[80%] h-[fit-content] m-auto inset-x-0 inset-y-0 px-3 py-10',
            'rounded-xl'
          )}
        >
          <div className="flex items-center gap-2 text-4xl">
            {props.winner === Player.o && <CircleIcon className="h-10 w-10" />}
            {props.winner === Player.x && <CrossIcon className="h-10 w-10" />}
            <span>WINS 🥳</span>
          </div>
          <Dialog.Close asChild>
            <div className="mt-6 uppercase border border-white text-2xl rounded-lg py-1 px-4 cursor-pointer">
              Play again
            </div>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
