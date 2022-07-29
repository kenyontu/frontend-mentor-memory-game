import { ComponentProps, useState } from 'react'
import clsx from 'clsx'

import {
  Settings,
  themeSettings,
  playersSettings,
  gridSettings,
} from '~/config'
import { Button } from '~/components/Button'
import { OptionSelector } from '~/components/optionSelector'
import { SettingLabel } from './SettingLabel'

type Props = { onDone: (settings: Settings) => void } & Omit<
  ComponentProps<'div'>,
  'children'
>

export function SettingsCard({ onDone, className, ...rest }: Props) {
  const [theme, setTheme] = useState<Settings['theme']>(themeSettings[1])
  const [players, setPlayers] = useState<Settings['players']>(
    playersSettings[0]
  )
  const [grid, setGrid] = useState<Settings['grid']>(gridSettings[0])

  const onStartClick = () => {
    onDone({ theme, players, grid })
  }

  return (
    <div
      className={clsx(
        'flex flex-col rounded-xl bg-white px-6 pt-[1.3rem] pb-[1.5rem] tracking-tight sm:rounded-[1.25rem] sm:px-14 sm:pt-[3.6rem] sm:pb-[3.5rem]',
        className
      )}
      {...rest}
    >
      <SettingLabel>Select Theme</SettingLabel>
      <OptionSelector
        name="theme"
        options={themeSettings}
        value={theme}
        onChange={setTheme}
        groupAriaLabel="Select theme"
      />

      <SettingLabel>Number of Players</SettingLabel>
      <OptionSelector
        name="players"
        options={playersSettings}
        value={players}
        onChange={setPlayers}
        groupAriaLabel="Select number of players"
      />

      <SettingLabel>Grid Size</SettingLabel>
      <OptionSelector
        name="grid-size"
        options={gridSettings}
        value={grid}
        onChange={setGrid}
        groupAriaLabel="Select grid size"
      />

      <Button onClick={onStartClick} className="mt-[2rem]">
        Start Game
      </Button>
    </div>
  )
}
