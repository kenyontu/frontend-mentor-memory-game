import { Navigate, useLocation, useNavigate } from 'react-router-dom'

import { Settings } from '~/config'
import { MultiPlayerGame } from './MultiPlayerGame'
import { SinglePlayerGame } from './SinglePlayerGame'

export function Game() {
  const location = useLocation()
  const settings = location.state as Settings
  const navigate = useNavigate()

  if (!settings) {
    return <Navigate to="/" replace />
  }

  const goToSettings = () => navigate('/', { replace: true })

  return (
    <div className="2xl:w-content-2xl xs:w-content-xs lg:w-content-lg sm:w-content-sm md:w-content-md w-content relative mx-auto flex min-h-screen flex-col py-6 sm:pt-9 sm:pb-[2.35rem] 2xl:pt-[4.2rem] 2xl:pb-[2.05rem]">
      {settings.players === '1' ? (
        <SinglePlayerGame settings={settings} goToSettings={goToSettings} />
      ) : (
        <MultiPlayerGame settings={settings} goToSettings={goToSettings} />
      )}
    </div>
  )
}
