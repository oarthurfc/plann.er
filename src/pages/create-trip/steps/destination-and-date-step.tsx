import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";

interface DestinationAndDateStepProps {
    closeGuestsInput: () => void
    isGuestsInputOpen: boolean
    openGuestsInput: () => void
}

export function DestinationAndDateStep({
    closeGuestsInput,
    isGuestsInputOpen,
    openGuestsInput
}: DestinationAndDateStepProps) {
    return (
        <div className="flex items-center bg-zinc-900 px-4 h-16 gap-3 rounded-xl shadow-shape space-x-5">
        <div className="flex items-center gap-2 flex-1">
          <MapPin className="size-5 text-zinc-400" />
          <input disabled={isGuestsInputOpen} type="text" name="" id="" placeholder="Para onde você vai?" className="text-lg outline-none placeholder-zinc-400 bg-transparent flex-1" />
        </div>


        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <input disabled={isGuestsInputOpen} type="text" name="" id="" placeholder="Quando?" className="text-lg outline-none placeholder-zinc-400 bg-transparent w-40" />
        </div>

        <div className='w-px h-6 bg-zinc-800'></div>

        {isGuestsInputOpen ? (
          <button onClick={closeGuestsInput} className="flex items-center bg-zinc-800 text-zinc-200 font-medium gap-2 px-5 py-2 rounded-lg hover:bg-zinc-700">
            Alterar local/data
            <Settings2 className="size-5 text-zinc-200 " />
          </button>
        ) : (
          <button onClick={openGuestsInput} className="flex items-center font-medium bg-lime-300 text-lime-950 gap-2 px-5 py-2 rounded-lg hover:bg-lime-400">
            Continuar
            <ArrowRight className="size-5" />
          </button>
        )}

      </div>
    )
}