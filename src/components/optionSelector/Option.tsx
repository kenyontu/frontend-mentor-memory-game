import clsx from 'clsx'
import { useId } from 'react'

type Props = {
  name: string
  value: string
  selected: boolean
  onChange: () => void
}

export function Option({ name, value, selected, onChange }: Props) {
  const inputId = 'option-' + useId()

  return (
    <div className="relative">
      <input
        id={inputId}
        name={name}
        type="radio"
        checked={selected}
        onChange={onChange}
        className="peer absolute opacity-0"
      />
      <label
        htmlFor={inputId}
        className={clsx(
          'block cursor-pointer rounded-full py-[0.5rem] text-center text-base font-bold text-white transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 sm:py-[0.85rem] sm:text-[1.625rem]',
          {
            'bg-neutral-300 hover:bg-neutral-400 peer-focus-visible:ring-neutral-400':
              !selected,
            'bg-neutral-700 peer-focus-visible:ring-neutral-700': selected,
          }
        )}
      >
        {value}
      </label>
    </div>
  )
}
