import { useEffect, useRef } from 'react'
import { useClickAway, useKey } from 'react-use'

import { useAppDispatch, useAppSelector } from 'hooks'
import { getFocusedIndex, setDropdownOpen, setFocusedIndex } from 'states/dropdown'

import DropdownItem from './Item'
import styles from './Dropdown.module.scss'
import { getInputValue, setInputValue, setSearchValue } from 'states/search'
import { IDiseaseDataItem } from 'types/types'

interface IProps {
  diseaseData: IDiseaseDataItem[]
}

const Dropdown = ({ diseaseData }: IProps) => {
  const dispatch = useAppDispatch()

  const focusedIndex = useAppSelector(getFocusedIndex)
  const inputValue = useAppSelector(getInputValue)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const closeDropdown = () => {
    dispatch(setDropdownOpen(false))
    dispatch(setFocusedIndex(-1))
  }

  const handleEnterPress = () => {
    dispatch(setSearchValue(inputValue))
    closeDropdown()
  }

  useClickAway(dropdownRef, closeDropdown)
  useKey('Enter', handleEnterPress)

  useEffect(() => {
    if (!diseaseData[focusedIndex]) return
    dispatch(setInputValue(diseaseData[focusedIndex].sickNm))
  }, [diseaseData, dispatch, focusedIndex])

  return (
    <div ref={dropdownRef} className={styles.contentWrapper}>
      <div className={styles.title}>추천 검색어</div>
      <ul>
        {diseaseData.map((item, index) => (
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
