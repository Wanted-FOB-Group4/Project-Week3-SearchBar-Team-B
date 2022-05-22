import { useEffect } from 'react'

export const useDebounce = (func: () => void, delay: number, dependency: any[]) => {
  useEffect(() => {
    const timeoutValue = setTimeout(() => {
      func()
    }, delay)

    return () => {
      clearTimeout(timeoutValue)
    }
  }, [func, dependency, delay])
}
