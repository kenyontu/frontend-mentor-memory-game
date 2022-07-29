import clsx from 'clsx'

type Props = {
  name: string
  value: string
  selected: boolean
  onChange: () => void
}

export function Option({ name, value, selected, onChange }: Props) {
  return (
    <label
      className={clsx(
        'relative cursor-pointer rounded-full py-[0.5rem] text-center text-base font-bold text-white transition-colors sm:py-[0.85rem] sm:text-[1.625rem]',
        {
          'bg-neutral-300 hover:bg-neutral-400': !selected,
          'bg-neutral-700': selected,
        }
      )}
    >
      <input
        name={name}
        type="radio"
        checked={selected}
        onChange={onChange}
        className="invisible absolute"
      />
      {value}
    </label>
  )
}
