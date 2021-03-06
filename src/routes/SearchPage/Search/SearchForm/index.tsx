import { ChangeEvent, FormEvent, KeyboardEvent, useRef } from 'react'
import store from 'store'

import { useAppDispatch, useAppSelector, useDebounce } from 'hooks'
import {
  getFocusedIndex,
  getIsApiBlocked,
  setCategory,
  setDropdownOpen,
  setFocusedIndex,
  setIsApiBlocked,
} from 'states/dropdown'
import { getInputValue, setInputValue, setSearchValue } from 'states/search'
import { setModalState } from 'states/modal'
import { IDiseaseDataItem } from 'types/types'

import { SearchIcon } from 'assets/svgs'
import styles from './SearchForm.module.scss'

interface IProps {
  dataLength: number
}

const SearchForm = ({ dataLength }: IProps) => {
  const dispatch = useAppDispatch()
  const inputRef = useRef<HTMLInputElement>(null)
  const focusedIndex = useAppSelector(getFocusedIndex)
  const inputValue = useAppSelector(getInputValue)
  const isApiBlocked = useAppSelector(getIsApiBlocked)

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Tab') return
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      dispatch(setFocusedIndex(focusedIndex > 0 ? focusedIndex - 1 : focusedIndex))
    } else if (e.key === 'ArrowDown') {
      dispatch(setFocusedIndex(focusedIndex < dataLength - 1 ? focusedIndex + 1 : focusedIndex))
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    if (value.length === 0) {
      dispatch(setCategory('searchLog'))
    }
    dispatch(setIsApiBlocked(false))
    dispatch(setInputValue(value))
    dispatch(setFocusedIndex(-1))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inputRef.current) {
      inputRef.current.blur()
    }
    const searchedLog = store.get('searchedLog') || []

    const openState = { modalOpen: true, title: inputValue }
    dispatch(setModalState(openState))

    if (searchedLog.findIndex((item: string) => item === inputValue) === -1) {
      if (searchedLog.findIndex((item: IDiseaseDataItem) => item.sickNm === inputValue) === -1) {
        if (!inputValue.trim()) return
        store.set('searchedLog', [{ sickNm: inputValue }, ...searchedLog].slice(0, 6))
      }

      if (!inputValue.trim()) return
      dispatch(setSearchValue(inputValue.replace(/\s+/g, '')))
    }
  }

  useDebounce(
    () => {
      !isApiBlocked && dispatch(setSearchValue(inputValue.replace(/\s+/g, '')))
      !isApiBlocked && inputValue.length !== 0 && dispatch(setCategory('recommend'))
    },
    200,
    [inputValue]
  )

  const handleClick = () => {
    dispatch(setDropdownOpen(true))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.inputWrapper}>
        <SearchIcon />
        <input
          ref={inputRef}
          type='text'
          placeholder='???????????? ????????? ?????????.'
          autoComplete='off'
          value={inputValue}
          onClick={handleClick}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <button type='submit' className={styles.searchButton}>
        ??????
      </button>
    </form>
  )
}

export default SearchForm
