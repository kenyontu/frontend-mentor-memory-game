export const revealWaitTime = 1000

export const themeSettings = ['Numbers', 'Icons'] as const

export const playersSettings = ['1', '2', '3', '4'] as const

export const gridSettings = ['4x4', '6x6'] as const

export type ThemeSetting = typeof themeSettings[number]

export type PlayersSetting = typeof playersSettings[number]

export type GridSetting = typeof gridSettings[number]

export type Settings = {
  theme: ThemeSetting
  players: PlayersSetting
  grid: GridSetting
}
