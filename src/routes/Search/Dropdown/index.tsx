import { useEffect, useRef } from 'react'
import { useClickAway, useKey } from 'react-use'

import { useRecoil } from 'hooks/state'
import {
  dropdownOpenState,
  focusedIndexState,
  inputValueState,
  searchKeywordState,
  searchResultState,
} from 'states/dropdown'

import DropdownItem from './Item'
import styles from './Dropdown.module.scss'

const Dropdown = () => {
  const [focusedIndex, , resetFocusedIndex] = useRecoil(focusedIndexState)
  const [inputValue, setInputValue] = useRecoil(inputValueState)
  const [, setSearchKeyword] = useRecoil(searchKeywordState)
  const [, setIsDropdownOpen] = useRecoil(dropdownOpenState)
  const [data] = useRecoil(searchResultState)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const closeDropdown = () => {
    setIsDropdownOpen(false)
    resetFocusedIndex()
  }

  const handleEnterPress = () => {
    setSearchKeyword(inputValue)
    closeDropdown()
  }

  useClickAway(dropdownRef, closeDropdown)
  useKey('Enter', handleEnterPress)

  useEffect(() => {
    if (!data[focusedIndex]) return
    setInputValue(data[focusedIndex].sickNm)
  }, [data, focusedIndex, setInputValue])

  return (
    <div ref={dropdownRef} className={styles.contentWrapper}>
      <div className={styles.title}>추천 검색어</div>
      <ul>
        {data.map((item, index) => (
          <DropdownItem
            key={item.sickCd}
            value={item.sickNm}
            focused={index === focusedIndex}
            closeDropdown={closeDropdown}
          />
        ))}
      </ul>
    </div>
  )
}

export default Dropdown
