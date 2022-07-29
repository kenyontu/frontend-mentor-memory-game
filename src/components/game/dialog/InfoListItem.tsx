import clsx from 'clsx'

type Props = {
  appearance: 'primary' | 'secondary'
  label: string
  value: string
  labelClassName?: string
  valueClassName?: string
}

export function InfoListItem({
  appearance,
  label,
  value,
  labelClassName,
  valueClassName,
}: Props) {
  const isPrimary = appearance === 'primary'

  return (
    <div
      role="listitem"
      className={clsx(
        'mt-2 flex items-center justify-between rounded-[0.3125rem] py-3 px-4 first:mt-0 sm:mt-4 sm:py-6 sm:px-8 xl:rounded-[0.5rem]',
        isPrimary
          ? 'bg-neutral-800 text-white'
          : 'bg-neutral-200 text-neutral-500'
      )}
    >
      <span
        className={clsx(
          'text-[0.8125rem] font-bold sm:text-[1.125rem]',
          labelClassName
        )}
      >
        {label}
      </span>

      <span
        className={clsx(
          'text-[1.25rem] font-bold sm:text-[2rem]',
          {
            'text-neutral-700': !isPrimary,
          },
          valueClassName
        )}
      >
        {value}
      </span>
    </div>
  )
}
