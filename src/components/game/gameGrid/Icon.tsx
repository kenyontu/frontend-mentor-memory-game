import { ComponentProps } from 'react'

const iconsById: { [key: string]: string } = {
  '0': 'anchor-solid.svg',
  '1': 'atom-solid.svg',
  '2': 'bolt-lightning-solid.svg',
  '3': 'bomb-solid.svg',
  '4': 'book-solid.svg',
  '5': 'carrot-solid.svg',
  '6': 'cat-solid.svg',
  '7': 'crow-solid.svg',
  '8': 'fish-solid.svg',
  '9': 'flask-solid.svg',
  '10': 'hat-wizard-solid.svg',
  '11': 'jet-fighter-up-solid.svg',
  '12': 'lightbulb-solid.svg',
  '13': 'meteor-solid.svg',
  '14': 'moon-solid.svg',
  '15': 'star-solid.svg',
  '16': 'terminal-solid.svg',
  '17': 'tree-solid.svg',
}

function getIconUrl(iconId: string) {
  const icon = iconsById[iconId]
  if (!icon) {
    throw new Error(`There is no icon for the id ${iconId}`)
  }

  // Needed to obtain the resolved url of a file in the public folder.
  // Source: https://vitejs.dev/guide/assets.html#importing-asset-as-url
  return new URL(`/icons/${icon}`, import.meta.url).href
}

type Props = {
  iconId: string
} & ComponentProps<'img'>

function Icon({ iconId, ...rest }: Props) {
  const iconUrl = getIconUrl(iconId)
  return <img src={iconUrl} alt={iconId} {...rest} />
}

export { Icon }
