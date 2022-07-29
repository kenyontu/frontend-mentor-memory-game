import { formatTime, padZeroes } from '../time'

test('padZeroes', () => {
  expect(padZeroes(0)).toBe('00')
  expect(padZeroes(1)).toBe('01')
  expect(padZeroes(10)).toBe('10')
})

test('formatTime', () => {
  expect(formatTime(0)).toBe('0:00')
  expect(formatTime(1)).toBe('0:01')
  expect(formatTime(60)).toBe('1:00')
  expect(formatTime(70)).toBe('1:10')
  expect(formatTime(135)).toBe('2:15')
  expect(formatTime(6000)).toBe('100:00')
})
