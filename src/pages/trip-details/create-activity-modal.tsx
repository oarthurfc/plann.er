import { Calendar, Tag, X } from "lucide-react";
import { Button } from "../../components/button";

interface CreateActivityProps {
    closeCreateActivityModal: () => void
}

export function CreateActivity(props: CreateActivityProps) {
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center  z-1">
            <div className="bg-zinc-900 w-[640px] px-6 py-5 gap-5 rounded-xl shadow-shape space-y-5">

                <div className='space-y-2'>
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Confirmar criação da viagem</h2>
                        <button onClick={props.closeCreateActivityModal}>
                            <X className="size-5 text-zinc-400" />
                        </button>
                    </div>
                    <p className="text-sm text-zinc-400">
                        Todos convidados podem visualizar as atividades.
                    </p>
                </div>

                <form className="space-y-3">
                    <div className="space-y-2">
                        <div className="px-4 h-14 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2.5">
                            <Tag className="text-zinc-400 size-5" />
                            <input
                                name="title"
                                placeholder="Qual a atividade?"
                                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                            />
                        </div>


                        <div className="flex-1 px-4 h-14 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                            <Calendar className="text-zinc-400 size-5" />
                            <input
                                type="datetime-local"
                                name="occurs_at"
                                placeholder="Data e horário da atividade"
                                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                            />
                        </div>

                    </div>

                    <Button type="submit" size="full">
                        Salvar atividade
                    </Button>

                </form>

            </div>
        </div>
    )
}