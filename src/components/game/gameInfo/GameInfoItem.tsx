import clsx from 'clsx'

type Props = {
  label: string
  value: string
  valueClassName?: string
}

export function GameInfoItem({ label, value, valueClassName }: Props) {
  return (
    <div className="flex flex-col items-center rounded bg-neutral-200 pt-[0.4rem] pb-[0.75rem] sm:rounded-xl md:flex-row md:justify-between md:pt-[1.55rem] md:pb-[1.4rem] md:pl-[1.3rem] md:pr-[1.5rem]">
      <span className="font-bold text-neutral-500 sm:text-[1.125rem]">
        {label}
      </span>

      <span
        className={clsx(
          'mt-1 text-[1.5rem] font-bold text-neutral-800 sm:mt-3 sm:text-[2rem] md:mt-0',
          valueClassName
        )}
      >
        {value}
      </span>
    </div>
  )
}
