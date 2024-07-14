import { Calendar, MapPin, Settings2 } from "lucide-react";
import { useState } from "react";
import { CreateActivity } from "./create-activity-modal";
import { ImportantLinks } from "./important-links";
import { Guests } from "./guests";
import { Activies } from "./activities";
import { DestinationAnDateHeader } from "./destination-and-date-header";

export function TripDetailsPage() {
    const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false)

    function openCreateActivityModal() {
        setIsCreateActivityModalOpen(true)
    }

    function closeCreateActivityModal() {
        setIsCreateActivityModalOpen(false)
    }

    return (
        <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
            <div className=" bg-zinc-900 px-6 h-16 rounded-xl shadow-shape flex items-center justify-between">

                <div className="flex items-center gap-2">
                    <MapPin className="size-5 text-zinc-400" />
                    <span className="text-zinc-100">Belo Horizonte, Brasil</span>
                </div>

                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2">
                        <Calendar className="size-5 text-zinc-400" />
                        <span className="outline-none text-zinc-100 bg-transparent">17 a 23 de Agosto</span>
                    </div>

                    <div className="w-px h-6 bg-zinc-800" />

                    <button className="flex items-center bg-zinc-800 text-zinc-200 font-medium gap-2 px-5 py-2 rounded-lg hover:bg-zinc-700">
                        Alterar local/data
                        <Settings2 className="size-5 text-zinc-200 " />
                    </button>
                </div>

            </div>

            <main className="flex gap-16 px-6">
                <div className="flex-1 space-y-8">
                    <DestinationAnDateHeader
                        openCreateActivityModal={openCreateActivityModal}
                    />

                    <Activies/>
                </div>

                <div className="w-80 space-y-6">
                    <ImportantLinks/>
                    <div className="w-full h-px bg-zinc-800"></div>
                    <Guests/>
                </div>
            </main>

            {isCreateActivityModalOpen && (
                <CreateActivity
                    closeCreateActivityModal={closeCreateActivityModal}
                />
            )}

        </div>

    )
}