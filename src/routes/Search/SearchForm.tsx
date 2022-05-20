import { ChangeEvent, FormEvent, KeyboardEvent, useMemo } from 'react'

import { useAppDispatch, useAppSelector } from 'hooks'
import { getData, getFocusedIndex, setData, setDropdownOpen, setFocusedIndex } from 'states/dropdown'
import { getInputValue, setInputValue, setSearchValue } from 'states/search'

import diseaseList from 'data/getDissNameCodeList.json'
import { SearchIcon } from 'assets/svgs'
import styles from './Search.module.scss'

const SearchBar = () => {
  const dispatch = useAppDispatch()
  const data = useAppSelector(getData)
  const focusedIndex = useAppSelector(getFocusedIndex)
  const inputValue = useAppSelector(getInputValue)
  const result = useMemo(() => diseaseList.response.body.items.item, [])

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Tab') return

    if (e.key === 'ArrowUp') {
      dispatch(setFocusedIndex(focusedIndex > 0 ? focusedIndex - 1 : focusedIndex))
    } else if (e.key === 'ArrowDown') {
      dispatch(setFocusedIndex(focusedIndex < data.length - 1 ? focusedIndex + 1 : focusedIndex))
    } else {
      dispatch(setData(result.filter((item) => item.sickNm.includes(inputValue)).slice(0, 10)))
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    dispatch(setInputValue(value))

    if (value.trim()) {
      dispatch(setDropdownOpen(true))
    } else {
      dispatch(setDropdownOpen(false))
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!inputValue.trim()) return
    dispatch(setSearchValue(inputValue))
  }

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
