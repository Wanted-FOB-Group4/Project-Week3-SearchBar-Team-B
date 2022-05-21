import { useEffect, useRef } from 'react'
import { useClickAway, useKey } from 'react-use'

import { useAppDispatch, useAppSelector } from 'hooks'
import { sortFuzzyData } from 'utils'
import { IDiseaseDataItem } from 'types/types'
import { getFocusedIndex, setDropdownOpen, setFocusedIndex, setIsApiBlocked } from 'states/dropdown'
import { getInputValue, getSearchValue, setInputValue, setSearchValue } from 'states/search'
import DropdownItem from './Item'

import styles from './Dropdown.module.scss'

interface IProps {
  diseaseData: IDiseaseDataItem[]
  fuzzyRegExpString: string
}

const Dropdown = ({ diseaseData, fuzzyRegExpString }: IProps) => {
  const dispatch = useAppDispatch()

  const searchValue = useAppSelector(getSearchValue)
  const focusedIndex = useAppSelector(getFocusedIndex)
  const inputValue = useAppSelector(getInputValue)

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
    if (!sortedData[focusedIndex]) return
    dispatch(setIsApiBlocked(true))
    dispatch(setInputValue(sortedData[focusedIndex].sickNm))
  }, [sortedData, dispatch, focusedIndex])

  return (
    <div ref={dropdownRef} className={styles.contentWrapper}>
      <div className={styles.title}>추천 검색어</div>
      <ul>
        {sortedData.map((item, index) => (
          <DropdownItem
            key={item.sickCd}
            value={item.sickNm}
            highlighted={item.highlighted}
            id={index}
            focused={index === focusedIndex}
            closeDropdown={closeDropdown}
          />
        ))}
      </ul>
    </div>
  )
}

export default Dropdown
