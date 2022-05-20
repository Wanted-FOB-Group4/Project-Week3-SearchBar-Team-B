import { ChangeEvent, FormEvent, KeyboardEvent, useMemo, useRef } from 'react'

import { useRecoil } from 'hooks/state'
import {
  dropdownOpenState,
  focusedIndexState,
  inputValueState,
  searchKeywordState,
  searchResultState,
} from 'states/dropdown'

import diseaseList from 'data/getDissNameCodeList.json'
import { SearchIcon } from 'assets/svgs'
import styles from './Search.module.scss'

const SearchBar = () => {
  const [inputValue, setInputValue] = useRecoil(inputValueState)
  const [, setSearchKeyword] = useRecoil(searchKeywordState)
  const [, setFocusedIndex] = useRecoil(focusedIndexState)
  const [, setIsDropdownOpen] = useRecoil(dropdownOpenState)
  const [data, setData] = useRecoil(searchResultState)
  const inputRef = useRef<HTMLInputElement>(null)
  const result = useMemo(() => diseaseList.response.body.items.item, [])

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Tab') return

    if (e.key === 'ArrowUp') {
      setFocusedIndex((prev) => (prev > 0 ? prev - 1 : prev))
    } else if (e.key === 'ArrowDown') {
      setFocusedIndex((prev) => (prev < data.length - 1 ? prev + 1 : prev))
    } else {
      setData(result.filter((item) => item.sickNm.includes(inputValue)).slice(0, 10))
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget as HTMLInputElement
    setInputValue(value)

    if (value.trim()) {
      setIsDropdownOpen(true)
    } else {
      setIsDropdownOpen(false)
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!inputValue.trim()) return
    setSearchKeyword(inputValue)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.inputWrapper}>
        <SearchIcon />
        <input
          type='text'
          placeholder='질환명을 입력해 주세요.'
          autoComplete='off'
          ref={inputRef}
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
