import { useEffect, useRef, useState } from 'react'

export function useTimer(autoStart = true) {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(autoStart)
  const interval = useRef<ReturnType<typeof setInterval>>()

  useEffect(() => {
    if (!isRunning && interval.current) {
      clearInterval(interval.current)
      return
    }

    if (isRunning) {
      interval.current = setInterval(
        () => setSeconds((seconds) => seconds + 1),
        1000
      )

      return () => clearInterval(interval.current)
    }
  }, [isRunning])

  const reset = () => {
    setSeconds(0)
    setIsRunning(true)
  }

  return {
    timerSeconds: seconds,
    isTimerRunning: isRunning,
    setIsTimerRunning: setIsRunning,
    resetTimer: reset,
  }
}
