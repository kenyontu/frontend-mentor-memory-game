import { SettingsCard } from '~/components/settings/SettingsCard'
import { useNavigate } from 'react-router-dom'

export function Home() {
  const navigate = useNavigate()
  return (
    <div className="flex min-h-screen w-full items-center bg-neutral-800 px-6 sm:px-0">
      <div className="sm:max-h-unset w-content sm:w-content-sm md:w-content-md mx-auto flex flex-col justify-center pt-[0.875] pb-[2.625rem] sm:pt-[1.5rem] sm:pb-[0.75rem]">
        <header>
          <h1 className="text-center text-[2rem] font-bold text-white sm:text-[2.5rem]">
            memory
          </h1>
        </header>
        <main className="mt-[3.25rem] sm:px-[1rem] md:mt-[5.7rem]">
          <SettingsCard
            onDone={(settings) => {
              navigate('/game', { state: settings })
            }}
          />
        </main>
      </div>
    </div>
  )
}
