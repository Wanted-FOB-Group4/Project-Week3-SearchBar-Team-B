import { MouseEvent } from 'react'
import cx from 'classnames'

import { useAppDispatch } from 'hooks'
import { setInputValue, setSearchValue } from 'states/search'

import { SearchIcon } from 'assets/svgs'
import styles from './Dropdown.module.scss'

interface Props {
  value: string
  highlighted: number[]
  focused: boolean
  id: number
  closeDropdown: () => void
}

const DropdownItem = ({ value, highlighted, focused, id, closeDropdown }: Props) => {
  const dispatch = useAppDispatch()
  let highlightedIdx = 0

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    dispatch(setInputValue(e.currentTarget.value))
    dispatch(setSearchValue(e.currentTarget.value))
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
        <div className={styles.lineWrapper}>
          <SearchIcon />
          <span>
            {value.split('').map((element, idx) => {
              if (highlighted[highlightedIdx] === idx) {
                highlightedIdx += 1
                const key = `${element}-${id}- ${idx}`
                return <mark key={key}>{element}</mark>
              }
              return element
            })}
          </span>
        </div>
      </button>
    </li>
  )
}

export default DropdownItem
