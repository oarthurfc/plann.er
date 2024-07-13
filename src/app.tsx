import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2, X, AtSign, Plus } from 'lucide-react'
import { FormEvent, useState } from 'react'

export function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)

  const [emailsToInvite, setEmailsToEnvite] = useState([
    'oarthurfc@gmail.com',
    'arthuryouface@gmail.com'
  ])

  function openGuestsInput() {
    setIsGuestsInputOpen(true)
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false)
  }

  function openGuestsModal() {
    setIsGuestsModalOpen(true)
  }

  function closeGuestsModal() {
    setIsGuestsModalOpen(false)
  }

  function addNewEmailToEnvite(event: FormEvent<HTMLFormElement>){
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString();

    if(!email) {
      return
    }

    if(emailsToInvite.includes(email)) {
      return
    }

    setEmailsToEnvite([
      ...emailsToInvite,
      email
    ])

    event.currentTarget.reset()
  }

  function removeEmailFromInvites(emailToRemove: string) {
    const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)

    setEmailsToEnvite(newEmailList)
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">

        <div className="flex flex-col items-center gap-2">
          <img src="/logo.svg" alt="Logo plann.er" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeja sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">

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

          {isGuestsInputOpen && (
            <div className="flex items-center bg-zinc-900 px-4 h-16 gap-3 rounded-xl shadow-shape space-x-5">
              <div className="flex items-center gap-2 flex-1">
                <button onClick={openGuestsModal} className='text-lg text-zinc-400 outline-none placeholder-zinc-400 bg-transparent flex items-center gap-2 flex-1'>
                  <UserRoundPlus className="size-5" />
                  Quem estará na viagem?
                </button>
              </div>

              <button className="flex items-center font-medium bg-lime-300 text-lime-950 gap-2 px-5 py-2 rounded-lg hover:bg-lime-400">
                Confirmar viagem
                <ArrowRight className="size-5" />
              </button>
            </div>
          )}

        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente <br />
          concorda com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">políticas de privacidade</a>.
        </p>

      </div>

      {isGuestsModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center  z-1">
          <div className="bg-zinc-900 w-[640px] px-6 py-5 gap-5 rounded-xl shadow-shape space-y-5">
           
            <div className='space-y-2'>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecionar convidados</h2>
                <button onClick={closeGuestsModal}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
              <p className="text-sm text-zinc-400">Os convidados irão receber e-mails para confirmar a participação na viagem.</p>
            </div>

            {/* E-mails */}
            <div className="flex flex-wrap gap-2">

              {emailsToInvite.map(email => {
                return (
                  <div key={email} className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2">
                    <span className="text-zinc-300">
                      {email}
                    </span>
                    <button>
                      <X onClick={() => removeEmailFromInvites(email)} className="size-4 text-zinc-400" />
                    </button>
                  </div>
                )
              })}

            </div>

            <div className="w-full h-px bg-zinc-800"/>

            <form onSubmit={addNewEmailToEnvite} className="px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2.5">
              <AtSign className="text-zinc-400 size-5" />
              <input
                type="email" 
                name="email"
                placeholder="Digite o e-mail do convidado"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
              
              <button type="submit" className="flex items-center font-medium bg-lime-300 text-lime-950 gap-2 px-5 py-2 rounded-lg hover:bg-lime-400">
                Convidar
                <Plus className="size-5" />
              </button>
            </form>

          </div>
        </div>
      )}

    </div>
  )
}

