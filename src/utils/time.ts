export function formatTime(timeInSeconds: number) {
  const minutes = Math.floor(timeInSeconds / 60)
  const seconds = timeInSeconds - minutes * 60

  return `${minutes}:${padZeroes(seconds)}`
}

export function padZeroes(value: number) {
  return '00'.substring(value < 10 ? 1 : 2) + value
}
