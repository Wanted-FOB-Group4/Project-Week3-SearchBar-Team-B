import { useEffect, useRef } from 'react'
import { useClickAway, useKey } from 'react-use'

import { useAppDispatch, useAppSelector } from 'hooks'
import { sortFuzzyData } from 'utils'
import { IDiseaseDataItem } from 'types/types'
import {
  getCategory,
  getFocusedIndex,
  setDropdownOpen,
  setFocusedIndex,
  setIsApiBlocked,
  getDropdownState,
} from 'states/dropdown'
import { getInputValue, getSearchValue, setInputValue, setSearchValue } from 'states/search'
import ConditionalDropdown from './ConditionalDropdown'

import styles from './Dropdown.module.scss'

interface IProps {
  diseaseData: IDiseaseDataItem[]
  fuzzyRegExpString: string
}

const Dropdown = ({ diseaseData, fuzzyRegExpString }: IProps) => {
  const dispatch = useAppDispatch()

  const dropdownOpen = useAppSelector(getDropdownState)
  const searchValue = useAppSelector(getSearchValue)
  const focusedIndex = useAppSelector(getFocusedIndex)
  const inputValue = useAppSelector(getInputValue)
  const category = useAppSelector(getCategory)

  const dropdownRef = useRef<HTMLDivElement>(null)

  const sortedData = sortFuzzyData({ data: diseaseData, fuzzyRegExpString, searchValue }).slice(0, 6)

  const closeDropdown = () => {
    dispatch(setDropdownOpen(false))
    dispatch(setFocusedIndex(-1))
  }

  const handleEnterPress = () => {
    dispatch(setSearchValue(inputValue))
    closeDropdown()
  }

  useKey('Enter', handleEnterPress)
  useClickAway(dropdownRef, closeDropdown)

  useEffect(() => {
    if (!sortedData[focusedIndex] || !diseaseData[focusedIndex]) return
    dispatch(setIsApiBlocked(true))
    dispatch(
      setInputValue(category === 'recommend' ? sortedData[focusedIndex].sickNm : diseaseData[focusedIndex].sickNm)
    )
  }, [diseaseData, dispatch, focusedIndex, category, sortedData])

  const dropdownTitle = category !== 'searchLog' ? '추천검색어' : '검색기록'

  return (
    <div ref={dropdownRef} className={styles.contentWrapper}>
      <div className={styles.title}>{dropdownTitle}</div>
      <ConditionalDropdown
        sortedData={sortedData}
        diseaseData={diseaseData}
        closeDropdown={closeDropdown}
        focusedIndex={focusedIndex}
      />
    </div>
  )
}

export default Dropdown
