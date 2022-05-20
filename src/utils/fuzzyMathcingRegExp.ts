import { koreanCharAt } from './koreanCharAt'

export const fuzzyMatchingRegExp = (value: string) => {
  const fuzzyString = value
    .split('')
    .map((char) => `(${koreanCharAt(char)})`)
    .join('.*?')
  return fuzzyString
}
