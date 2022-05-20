import { useAppSelector } from 'hooks'
import { getDropdownState } from 'states/dropdown'

import SearchBar from './SearchForm'
import Dropdown from './Dropdown'
import styles from './Search.module.scss'

const Search = () => {
  const dropdownOpen = useAppSelector(getDropdownState)

  return (
    <main className={styles.container}>
      <div className={styles.searchFormWrapper}>
        <SearchBar />
        {dropdownOpen && <Dropdown />}
      </div>
    </main>
  )
}

export default Search
