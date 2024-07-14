import { CircleCheck, CircleDashed, Link2, Plus, UserCog } from "lucide-react";


export function ImportantLinks() {
    return (
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">Links importantes</h2>

            <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <h3 className="text-zinc-100 font-semibold">Reserva do AirBnB</h3>
                        <a href="#" className="block text-xs text-zinc-400 underline truncate hover:text-zinc-200">https://www.airbnb.com.br/rooms/104700011</a>
                    </div>
                    <Link2 className="size-5 text-zinc-400 " />
                </div>
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <h3 className="text-zinc-100 font-semibold">Regras da casa</h3>
                        <a href="#" className="block text-xs text-zinc-400 underline truncate hover:text-zinc-200">https://www.notion.com/pages/1047000112354648336?adults=13&children=0&infants=0&pets=0&wishlist_item_id=11003621872995&check_in=2024-08-17&check_out=2024-08-26&source_impression_id=p3_1717600906_P3DL0E-bJZzguEci&previous_page_section_name=1000</a>
                    </div>
                    <Link2 className="size-5 text-zinc-400 shrink-0" />
                </div>
            </div>

            <button className="flex items-center justify-center w-full bg-zinc-800 text-zinc-200 font-medium h-11 gap-2 px-5 rounded-lg hover:bg-zinc-700">
                <Plus className="size-5 text-zinc-200 " />
                Cadastrar novo link
            </button>
        </div>
    )
}