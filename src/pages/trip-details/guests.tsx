import { CircleCheck, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";

export function Guests() {
    return (
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">Convidados</h2>

            <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <h3 className="text-zinc-100 font-semibold">Jessica White</h3>
                        <span className="block text-sm text-zinc-400 truncate">jessica.white44@yahoo.com</span>
                    </div>
                    <CircleDashed className="size-5 text-zinc-400 " />
                </div>

                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <h3 className="text-zinc-100 font-semibold">Dra. Rita Pacocha</h3>
                        <span className="block text-sm text-zinc-400 truncate">lacy.stiedemann@gmail.com</span>
                    </div>
                    <CircleCheck className="size-5 text-lime-300 " />
                </div>

            </div>

            <Button variant="secondary" size="full">
                <UserCog className="size-5 text-zinc-200 " />
                Gerenciar convidados
            </Button>
        </div>
    )
}