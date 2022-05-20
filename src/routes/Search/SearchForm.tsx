import { ChangeEvent, FormEvent, KeyboardEvent, useEffect } from 'react'

import { useAppDispatch, useAppSelector, useDebounce } from 'hooks'
import { getFocusedIndex, getIsApiBlocked, setDropdownOpen, setFocusedIndex, setIsApiBlocked } from 'states/dropdown'
import { getInputValue, setInputValue, setSearchValue } from 'states/search'

import { SearchIcon } from 'assets/svgs'
import styles from './Search.module.scss'

interface IProps {
  dataLength: number
}

const SearchBar = ({ dataLength }: IProps) => {
  const dispatch = useAppDispatch()

  const focusedIndex = useAppSelector(getFocusedIndex)
  const inputValue = useAppSelector(getInputValue)
  const isApiBlocked = useAppSelector(getIsApiBlocked)

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      dispatch(setIsApiBlocked(true))
    }
    if (e.key === 'ArrowUp') {
      dispatch(setIsApiBlocked(true))
      dispatch(setFocusedIndex(focusedIndex > 0 ? focusedIndex - 1 : focusedIndex))
    } else if (e.key === 'ArrowDown') {
      dispatch(setIsApiBlocked(true))
      dispatch(setFocusedIndex(focusedIndex < dataLength - 1 ? focusedIndex + 1 : focusedIndex))
    } else {
      dispatch(setIsApiBlocked(false))
      setSearchValue(inputValue)
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    dispatch(setInputValue(value))
    dispatch(setFocusedIndex(-1))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!inputValue.trim()) return
    dispatch(setSearchValue(inputValue))
  }

  useDebounce(
    () => {
      !isApiBlocked && dispatch(setSearchValue(inputValue))
    },
    200,
    [inputValue]
  )

  useEffect(() => {
    if (dataLength > 0) {
      dispatch(setDropdownOpen(true))
    } else {
      dispatch(setDropdownOpen(false))
    }
  }, [dataLength, dispatch])

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.inputWrapper}>
        <SearchIcon />
        <input
          type='text'
          placeholder='질환명을 입력해 주세요.'
          autoComplete='off'
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <button type='submit' className={styles.searchButton}>
        검색
      </button>
    </form>
  )
}

export default SearchBar
