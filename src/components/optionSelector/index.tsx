import clsx from 'clsx'
import { Option } from './Option'

type Props<T extends string> = {
  name: string
  options: readonly T[]
  value: T
  onChange: (option: T) => void
  groupAriaLabel?: string
}

export function OptionSelector<T extends string>({
  name,
  options,
  value,
  onChange,
  groupAriaLabel,
}: Props<T>) {
  return (
    <div
      role="radiogroup"
      aria-label={groupAriaLabel}
      className={clsx('grid gap-[0.65rem] md:gap-8', {
        'grid-cols-2': options.length === 2,
        'grid-cols-3': options.length === 3,
        'grid-cols-4': options.length === 4,
      })}
    >
      {options.map((option) => (
        <Option
          key={option}
          name={name}
          value={option}
          selected={value === option}
          onChange={() => onChange(option)}
        />
      ))}
    </div>
  )
}
