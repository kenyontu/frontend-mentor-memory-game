import clsx from 'clsx'

type Props = {
  player: string
  points: number
  isCurrent: boolean
}

export function PlayerListItem({ player, points, isCurrent }: Props) {
  return (
    <div>
      <div
        className={clsx(
          'relative flex flex-col items-center rounded pt-[0.4rem] pb-[0.75rem] transition-colors sm:items-start sm:rounded-xl sm:pt-[0.65rem] sm:pb-[0.9rem] sm:pl-[1rem] sm:pr-[1.3rem] xl:flex-row xl:items-center xl:justify-between xl:pl-[1.35rem] xl:pt-[1.5rem] xl:pb-[1.5rem]',
          isCurrent
            ? 'bg-primary-400 text-white'
            : 'bg-neutral-200 text-neutral-500'
        )}
      >
        <svg
          viewBox="0 0 10 5"
          className={clsx(
            'transition-triangle absolute top-0 left-1/2 w-4 -translate-x-1/2 -translate-y-full sm:w-6 2xl:w-10',
            isCurrent
              ? 'fill-primary-400 h-2 sm:h-3 2xl:h-5'
              : 'h-0 fill-neutral-200'
          )}
        >
          <polygon points="0 5, 5 0, 10 5" />
        </svg>
        <span className="font-bold sm:text-[0.9375rem] xl:text-[1.125rem]">
          <span className="sm:hidden">P</span>
          <span className="hidden sm:inline">Player </span>
          {player}
        </span>

        <span
          className={clsx(
            'mt-[0.25rem] text-[1.5rem] font-bold transition-colors duration-[25ms] ease-linear sm:mt-[0.5rem] sm:text-[1.5rem] xl:mt-0 xl:text-[2rem]',
            {
              'text-neutral-800': !isCurrent,
            }
          )}
        >
          {points}
        </span>
      </div>
      <p
        className={clsx(
          'mt-5 hidden text-center text-[0.8125rem] text-sm font-bold uppercase tracking-[0.375em] text-neutral-800 transition-opacity 2xl:block',
          { 'opacity-0': !isCurrent, 'opacity-100': isCurrent }
        )}
      >
        Current turn
      </p>
    </div>
  )
}
