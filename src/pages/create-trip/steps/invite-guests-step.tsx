import { ArrowRight, UserRoundPlus } from "lucide-react";


interface InviteGuestsStepProps {
    openGuestsModal: () => void
    emailsToInvite: string[]
    openConfirmTripModal: () => void
}

export function InviteGuestsStep({
    openGuestsModal,
    emailsToInvite,
    openConfirmTripModal
}: InviteGuestsStepProps) {
    return (
        <div className="flex items-center bg-zinc-900 px-4 h-16 gap-3 rounded-xl shadow-shape space-x-5">

        <button onClick={openGuestsModal} className='text-lg text-zinc-400 outline-none placeholder-zinc-400 bg-transparent flex items-center gap-2 flex-1'>
          {emailsToInvite.length > 0 ? (
            <span className="text-lg text-zinc-100 outline-none placeholder-zinc-400 bg-transparent flex items-center gap-2 flex-1">
              <UserRoundPlus className="size-5 text-zinc-400" />
              {emailsToInvite.length} pessoa(s) convidada(s)
            </span>
          ) : (
            <span className="text-lg text-zinc-400 outline-none placeholder-zinc-400 bg-transparent flex items-center gap-2 flex-1">
              <UserRoundPlus className="size-5" />
              Quem estará na viagem?
            </span>
          )}
        </button>

        <button onClick={openConfirmTripModal} className="flex items-center font-medium bg-lime-300 text-lime-950 gap-2 px-5 py-2 rounded-lg hover:bg-lime-400">
          Confirmar viagem
          <ArrowRight className="size-5" />
        </button>
      </div>
    )
}