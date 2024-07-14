import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "../../../components/button";


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

        <Button onClick={openConfirmTripModal} >
          Confirmar viagem
           <ArrowRight className="size-5" />
        </Button>
      </div>
    )
}