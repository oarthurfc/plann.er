import { MapPin, Calendar, ArrowRight } from 'lucide-react'

export function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="Logo plann.er"/>
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeja sua próxima viagem!
          </p>
        </div>

        <div className="flex items-center bg-zinc-900 px-4 h-16 gap-3 rounded-xl shadow-shape space-x-5">
          <div className="flex items-center gap-2 flex-1">
            <MapPin className="size-5 text-zinc-400"/>
            <input type="text" name="" id="" placeholder="Para onde você vai?" className="text-lg outline-none placeholder-zinc-400 bg-transparent flex-1"/>
          </div>
          
          
          <div className="flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400"/>
            <input type="text" name="" id="" placeholder="Quando?" className="text-lg outline-none placeholder-zinc-400 bg-transparent w-40"/>
          </div>

          <div className='w-px h-6 bg-zinc-800'></div>

          <button className="flex items-center font-medium bg-lime-300 text-lime-950 gap-2 px-5 py-2 rounded-lg hover:bg-lime-400">
            Continuar
            <ArrowRight className="size-5"/>  
          </button>
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente <br/>
          concorda com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">políticas de privacidade</a>.
        </p>

      </div>

    </div>
  )
}

