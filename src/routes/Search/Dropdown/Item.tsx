import { MouseEvent } from 'react'
import cx from 'classnames'

import { useRecoil } from 'hooks/state'
import { inputValueState, searchKeywordState } from 'states/dropdown'

import { SearchIcon } from 'assets/svgs'
import styles from './Dropdown.module.scss'

interface Props {
  value: string
  focused: boolean
  closeDropdown: () => void
}

const DropdownItem = ({ value, focused, closeDropdown }: Props) => {
  const [, setInputValue] = useRecoil(inputValueState)
  const [, setSearchKeyword] = useRecoil(searchKeywordState)

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setInputValue(e.currentTarget.value)
    setSearchKeyword(e.currentTarget.value)
    closeDropdown()
  }

  return (
    <li>
      <button
        type='button'
        value={value}
        onClick={handleClick}
        className={cx(styles.item, { [styles.active]: focused })}
      >
        <SearchIcon />
        <span>{value}</span>
      </button>
    </li>
  )
}

export default DropdownItem
