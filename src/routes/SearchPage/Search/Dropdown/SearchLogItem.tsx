import { MouseEvent } from 'react'
import cx from 'classnames'

import { useAppDispatch } from 'hooks'
import { setInputValue, setSearchValue } from 'states/search'

import { ClockIcon } from 'assets/svgs'
import styles from './Dropdown.module.scss'

interface Props {
  value: string
  focused: boolean
  closeDropdown: () => void
}

const DropdownItem = ({ value, focused, closeDropdown }: Props) => {
  const dispatch = useAppDispatch()

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
          <ClockIcon className={styles.clockIcon} />
          <span>{value}</span>
        </div>
      </button>
    </li>
  )
}

export default DropdownItem
