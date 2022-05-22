import { MouseEvent } from 'react'
import cx from 'classnames'

import { useAppDispatch } from 'hooks'
import { setInputValue } from 'states/search'
import { setDropdownOpen } from 'states/dropdown'

import { SearchIcon } from 'assets/svgs'
import styles from './Dropdown.module.scss'

interface Props {
  value: string
  highlighted: number[]
  focused: boolean
  id: number
}

const DropdownItem = ({ value, highlighted, focused, id }: Props) => {
  const dispatch = useAppDispatch()
  let highlightedIdx = 0

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    dispatch(setInputValue(e.currentTarget.value))
    dispatch(setDropdownOpen(false))
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
