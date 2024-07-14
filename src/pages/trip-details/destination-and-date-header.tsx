import { Plus } from "lucide-react";

interface DestinationAnDateHeaderProps {
    openCreateActivityModal: () => void
}

export function DestinationAnDateHeader(props: DestinationAnDateHeaderProps){
    return(
        <div className="flex justify-between">
            <h1 className="text-3xl font-semibold">Atividades</h1>
            <button onClick={props.openCreateActivityModal} className="flex items-center font-medium bg-lime-300 text-lime-950 gap-2 px-5 py-2 rounded-lg hover:bg-lime-400">
                <Plus className="size-5" />
                Cadastrar atividade
            </button>
        </div>
    )
}